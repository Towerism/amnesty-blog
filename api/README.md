# Amnesty Api

> The api for the Amnesty International blog

## Build Setup

Create `auth.json` in `config` for use in jwt signing during development.
It will look something like this:
``` json
{
  "secretOrKey": "<Your Secret Key For Signing JWT Here>",
  "claims": {
    "issuer": "localhost",
    "audience": "localhost",
    "expiresIn": "365d"
  }
}
```

``` bash
# install dependencies
yarn install

# initialize database
yarn run initdb

# serve with auto reload at localhost:3000
yarn run dev

# start without auto reload
yarn run start

# run all tests
yarn test
```
