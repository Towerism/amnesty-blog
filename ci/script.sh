#!/bin/bash
set -ev

if [ "${SERVICE}" == "api" ]; then
  (cd $SERVICE && yarn test)
elif [ "${SERVICE}" == "frontend" ]; then
  (cd $SERVICE && yarn unit)
elif [ "${SERVICE}" == "integration" ]; then
  (
    cd api
    yarn initdb
    yarn start &
  )
  (
    cd frontend
    yarn e2e:remote
  )
else
  echo "${SERVICE} not recognized as a service type"
  exit 1
fi
