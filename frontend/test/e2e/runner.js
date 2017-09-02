// 1. start the dev server using production config
process.env.NODE_ENV = 'testing'
var server = require('../../build/dev-server.js')
var Nightwatch = require('nightwatch')
var browserstack = require('browserstack-local')
var bs_local

server.ready.then(() => {
  if (process.env.REMOTE_E2E) {
    try {
      process.mainModule.filename = './node_modules/.bin/nightwatch'

      // Code to start browserstack local before start of test
      console.log('Connecting local')
      Nightwatch.bs_local = bs_local = new browserstack.Local()
      bs_local.start({ 'key': process.env.BROWSERSTACK_ACCESS_KEY }, function (error) {
        if (error) throw error

        console.log('Connected. Now testing...')
        Nightwatch.cli(function (argv) {
          Nightwatch.CliRunner(argv)
            .setup(null, function () {
              // Code to stop browserstack local after end of parallel test
              bs_local.stop(function () { })
              server.close()
            })
            .runTests(function () {
              // Code to stop browserstack local after end of single test
              bs_local.stop(function () { })
              server.close()
            })
        })
      })
    } catch (ex) {
      console.log('There was an error while starting the test runner:\n\n')
      process.stderr.write(ex.stack + '\n')
      process.exit(2)
    }
  } else {
    // 2. run the nightwatch test suite against it
    // to run in additional browsers:
    //    1. add an entry in test/e2e/nightwatch.conf.json under 'test_settings'
    //    2. add it to the --env flag below
    // or override the environment flag, for example: `npm run e2e -- --env chrome,firefox`
    // For more information on Nightwatch's config file, see
    // http://nightwatchjs.org/guide#settings-file
    var opts = process.argv.slice(2)
    if (opts.indexOf('--config') === -1) {
      opts = opts.concat(['--config', 'test/e2e/nightwatch.conf.js'])
    }
    if (opts.indexOf('--env') === -1) {
      opts = opts.concat(['--env', 'chrome'])
    }

    var spawn = require('cross-spawn')
    var runner = spawn('./node_modules/.bin/nightwatch', opts, { stdio: 'inherit' })

    runner.on('exit', function (code) {
      server.close()
      process.exit(code)
    })

    runner.on('error', function (err) {
      server.close()
      throw err
    })
  }
})
