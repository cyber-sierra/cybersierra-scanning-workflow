# Morpheus GITHUB Action Template
This template can be used as a step in Github Workflow step to trigger scanning current repo with Cyber Sierra scanning engine

## Prerequisites

## Usage
### How to setup local
- [act](https://github.com/nektos/act) to run Github Workflow locally
- node16
- npm

### Run Github Workflow locally with act
```bash
# install packages
npm install

# build the binary
npm run build

# update env
cp env.example .env

# fill in missing env
# CS_API_TOKEN is required

# run act
./act.sh
```
### Apply workflow
Copy and paste the following snippet into your .yml file.
```yaml
- name: Cyber Sierra Github CI Scan
  uses: cyber-sierra/cybersierra-scanning-workflow@v0.0.1
```
[Learn more about this action in cyber-sierra/cybersierra-scanning-workflow](https://github.com/cyber-sierra/cybersierra-scanning-workflow)

## Inputs
| Variable | Description                                                  |Required|
|----------|--------------------------------------------------------------|--------|
| CS_API_TOKEN   | The API token which you can get from CS site |Yes|
| CS_SCAN_URL | The url of API scan          |Yes|
## Examples
Basic example:

```yaml
on: push

name: Scan repo workflow
on: [push, pull_request]
jobs:
  my-job:
    name: ci scan job
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@master
      - name: scan
        uses: ./
        env:
          CS_API_TOKEN: ${{ secrets.CS_API_TOKEN }}
          CS_SCAN_URL: "https://scanner-api.prod.eks.cybersierra.ai"
```

## References
- [Github workflow template](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepswithentrypoint)
- [Event trigger](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
- [Event types](https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types)
- [Javscript action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)
- [Metadata Syntax](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs)
- [Action toolkit](https://github.com/actions/toolkit)
- [Check run](https://docs.github.com/en/rest/checks/runs)
