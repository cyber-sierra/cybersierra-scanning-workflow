const core = require('@actions/core');
const http = require('@actions/http-client');

async function triggerScan(scanTarget) {
  core.info('Scan target: ' + scanTarget);
  const scanUrl = `${process.env.CS_SCAN_URL}/scan/ci`;
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
  const scanUrl = `${process.env.CS_SCAN_URL}/scan-ci/${scanId}/overview`;
  const client = new http.HttpClient();
  // set interval to check scan status every 5 seconds
  // timeout in 15 minutes
  const intervalId = setInterval(async () => {
    const jsonObj = await client.getJson(
      scanUrl,
      {},
      {
        'Content-Type': 'application/json',
        'x-api-key': process.env.CS_API_TOKEN,
      },
    );
    if (jsonObj.statusCode !== 200)
      return core.setFailed('Failed to get scan result');
    if (
      jsonObj.result &&
      jsonObj.result.meta &&
      jsonObj.result.meta.statusCode === 200
    ) {
      core.info(JSON.stringify(jsonObj.result.response));
      if (jsonObj.result.response.subTotal[0].count > 0) {
        clearInterval(intervalId);
        return core.info('Scan completed');
      }
      return core.info('Checking scan status...');
    }
    return core.setFailed(jsonObj.result.meta.message);
  }, 5000);
  setTimeout(() => {
    clearInterval(intervalId);
  }, 900000);
}
async function run() {
  try {
    if (!process.env.CS_SCAN_URL)
      core.setFailed('Please specify CS_SCAN_URL env');
    if (!process.env.CS_API_TOKEN)
      core.setFailed('Please specify CS_API_TOKEN env');
    const scanTarget = `${process.env.GITHUB_SERVER}/${process.env.GITHUB_REPOSITORY}`;
    return triggerScan(scanTarget);
  } catch (error) {
    core.setFailed(error);
  }
}

run();
