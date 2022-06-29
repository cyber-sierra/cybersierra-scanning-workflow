# Morpheus GITHUB Action Template
This template can be used as a step in Github Workflow step to trigger scanning current repo with Cyber Sierra scanning engine

## How to setup
- [act](https://github.com/nektos/act) to run Github Workflow locally
- node16
- npm

## Run Github Workflow locally with act
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
## References
- [Github workflow template](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepswithentrypoint)
- [Event trigger](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
- [Event types](https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types)
- [Javscript action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)
- [Metadata Syntax](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs)
- [Action toolkit](https://github.com/actions/toolkit)
- [Check run](https://docs.github.com/en/rest/checks/runs)
