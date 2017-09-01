#!/bin/bash
set -ev

if [ "${SERVICE}" == "api" ]; then
  cp ci/testAuth.json api/config/auth.json
fi

cd $SERVICE && yarn
