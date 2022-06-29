#!/usr/bin/env bash

set -euo pipefail

set -o allexport
source .env
set +o allexport

# get CS_API_TOKEN from parameters
npm run build
act --insecure-secrets -s CS_API_TOKEN=$CS_API_TOKEN
