#!/bin/bash
set -ev

if [ "${SERVICE}" == "api" ]; then
  cp ci/testAuth.json api/config/auth.json
fi

if [ "${SERVICE}" != "integration" ]; then
  (cd $SERVICE && yarn)
else
  (cd api && yarn)
  (cd frontend && yarn)
fi
