const core = require('@actions/core');
const http = require('@actions/http-client');

const PROCESSING_STATUS = 'Scanning';
const SCAN_INTERVAL_CHECK = 5000;
const CI_SCAN_TIMEOUT = 1000 * 60 * 15; // 15 minutes timeout

async function triggerScan(scanTarget) {
  core.info('Scan target: ' + scanTarget);
  const scanUrl = `${process.env.CS_SCAN_URL}/ci/scan`;
  core.debug('Scan URL: ' + scanUrl);
  const client = new http.HttpClient();
  const jsonObj = await client.postJson(
    scanUrl,
    [
      {
        type: 'repo',
        targets: [scanTarget],
        keys: [],
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
        return summaryResult(jsonObj.result.response);
      }
      return core.info('Checking scan status...');
    }
    return core.setFailed(jsonObj.result.meta);
  }, SCAN_INTERVAL_CHECK);
  setTimeout(() => {
    clearInterval(intervalId);
    core.setFailed('Scan timeout');
  }, CI_SCAN_TIMEOUT);
}

function summaryResult(result) {
  if (result.status === 'successful') {
    if (result.critical > 0) {
      core.setFailed('Scan completed with critical issues');
    }
    core.info('Scan completed successfully');
    process.exit(0);
  }
  core.setFailed('Scan completed with issues');
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
