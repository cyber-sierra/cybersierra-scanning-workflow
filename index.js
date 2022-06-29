const core = require('@actions/core');
const http = require('@actions/http-client');

async function triggerScan() {
  const scanTarget = `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}`;
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
  core.debug(jsonObj.result);
  if (jsonObj.result.meta.statusCode !== 200) return core.setFailed(jsonObj.result.meta.message);
  return core.info('Scan triggered successfully');
}

async function run() {
  try {
    if (!process.env.CS_SCAN_URL)
      core.setFailed('Please specify CS_SCAN_URL env');
    if (!process.env.CS_API_TOKEN)
      core.setFailed('Please specify CS_API_TOKEN env');
    return triggerScan();
  } catch (error) {
    core.setFailed(error);
  }
}
run();
