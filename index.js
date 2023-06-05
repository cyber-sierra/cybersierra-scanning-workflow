const core = require('@actions/core');
const http = require('@actions/http-client');
const Table = require('cli-table');

const PROCESSING_STATUS = 'Scanning';
const SCAN_INTERVAL_CHECK = 5000;
const CI_SCAN_TIMEOUT = 1000 * 60 * 15; // 15 minutes timeout
const STATUS_TIME_OUT = 'Time out';
const STATUS_PASS = 'Pass';
const STATUS_FAIL = 'Fail';
const BASE_URL_DASHBOARD = 'https://beta.cybersierra.ai';

async function triggerScan(scanTarget) {
  core.info('Scan target: ' + scanTarget);
  const scanUrl = `${process.env.CS_SCAN_URL}/ci/scan`;
  core.debug('Scan URL: ' + scanUrl);
  const client = new http.HttpClient();
  const jsonObj = await client.postJson(
    scanUrl,
    [
      {
        scan: 'repo',
        targets: [
          {
            url: scanTarget,
            provider: 'github',
            branch: process.env.GITHUB_REF_NAME,
          },
        ],
      },
    ],
    {
      'Content-Type': 'application/json',
      'x-api-key': process.env.CS_API_TOKEN,
    },
  );
  if (jsonObj.statusCode !== 200)
    return core.setFailed('Failed to trigger scan');
  if (
    jsonObj.result &&
    jsonObj.result.meta &&
    jsonObj.result.meta.statusCode === 200
  ) {
    core.info(JSON.stringify(jsonObj.result.response));
    core.info('Scan triggered successfully');

    return getScanResult(jsonObj.result.response.scanId);
  }
  return core.setFailed(jsonObj.result.meta.message);
}

async function getScanResult(scanId) {
  const scanUrl = `${process.env.CS_SCAN_URL}/ci/scan/${scanId}/overview`;
  const client = new http.HttpClient();
  // set interval to check scan status every 5 seconds
  // timeout in 15 minutes
  const intervalId = setInterval(async () => {
    const jsonObj = await client.getJson(scanUrl, {
      'Content-Type': 'application/json',
      'x-api-key': process.env.CS_API_TOKEN,
    });
    if (jsonObj.statusCode !== 200)
      return core.setFailed('Failed to get scan result');
    if (
      jsonObj.result &&
      jsonObj.result.meta &&
      jsonObj.result.meta.statusCode === 200
    ) {
      core.info(JSON.stringify(jsonObj.result.response));
      if (jsonObj.result.response.status !== PROCESSING_STATUS) {
        clearInterval(intervalId);
        core.info('Scan completed');
        return summaryResult(jsonObj.result.response, scanId);
      }
      return core.info('Checking scan status...');
    }
    return core.setFailed(jsonObj.result.meta);
  }, SCAN_INTERVAL_CHECK);
  setTimeout(() => {
    clearInterval(intervalId);
    core.setFailed('Scan timeout');
    printSummary(scanId);
  }, CI_SCAN_TIMEOUT);
}

function printSummary(scanId, result = null) {
  const table = new Table({
    head: ['Scan Id', 'Critical', 'High', 'Medium', 'Low', 'Status'],
    title: 'Vulnerability Summary',
  });
  core.info(
    `Scan dashboard: ${BASE_URL_DASHBOARD}/security/${scanId}/dashboard`,
  );

  let critical = 'N/A';
  let high = 'N/A';
  let medium = 'N/A';
  let low = 'N/A';

  let status = STATUS_PASS;
  if (result === null) {
    status = STATUS_TIME_OUT;
  } else {
    if (
      result.critical === null &&
      result.high === null &&
      result.medium === null &&
      result.low === null
    ) {
      status = STATUS_FAIL;
    } else {
      critical = result.critical;
      high = result.high;
      medium = result.medium;
      low = result.low;
      if (critical > 0 && high > 0) {
        status = STATUS_FAIL;
      }
    }
  }

  table.push([scanId, critical, high, medium, low, status]);
  core.info(table);
}

function summaryResult(result, scanId) {
  if (result.status === 'Successful') {
    if (result.critical > 0) {
      core.setFailed('Scan completed with critical issues');
    }
    core.info('Scan completed successfully');
  } else {
    core.setFailed('Scan completed with issues');
  }
  printSummary(scanId, result);
  process.exit(0);
}

async function run() {
  try {
    if (!process.env.CS_SCAN_URL)
      core.setFailed('Please specify CS_SCAN_URL env');
    if (!process.env.CS_API_TOKEN)
      core.setFailed('Please specify CS_API_TOKEN env');
    const scanTarget = `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}`;
    return triggerScan(scanTarget);
  } catch (error) {
    core.setFailed(error);
  }
}

run();
