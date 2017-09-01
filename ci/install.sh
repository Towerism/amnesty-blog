#!/bin/bash
set -ev

cd $SERVICE && yarn

if [ "${SERVICE}" == "api" ]; then
  cp ci/testAuth.json api/config/auth.json
fi
