require('babel-register')
var config = require('../../config')

var testSettings = {
  default: {
    silent: true,
    globals: {
      devServerURL: 'http://localhost:' + (process.env.PORT || config.dev.port)
    }
  },

  chrome: {
    desiredCapabilities: {
      browserName: 'chrome',
      javascriptEnabled: true,
      acceptSslCerts: true
    }
  },

  firefox: {
    desiredCapabilities: {
      browserName: 'firefox',
      javascriptEnabled: true,
      acceptSslCerts: true
    }
  }
}
var selenium = {}
if (process.env.REMOTE_E2E) {
  console.log('remote')
  selenium = {
    start_process: false,
    host: 'hub-cloud.browserstack.com',
    port: 80
  }

  Object.assign(testSettings.default, {
    desiredCapabilities: {
      'browserstack.user': process.env.BROWSERSTACK_USER,
      'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
      'browserstack.local': true,
      'browser': 'chrome'
    }
  })
  for (var key in testSettings) {
    var settings = testSettings[key]
    settings['selenium_host'] = selenium.host
    settings['selenium_port'] = selenium.port
  }
} else {
  console.log('REGULAR')
  selenium = {
    start_process: true,
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  }

  Object.assign(testSettings.default, {
    selenium_port: 4444,
    selenium_host: 'localhost'
  })
}
console.log(JSON.stringify(selenium, null, 2))
console.log(JSON.stringify(testSettings, null, 2))

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['test/e2e/specs'],
  output_folder: 'test/e2e/reports',
  custom_assertions_path: ['test/e2e/custom-assertions'],
  selenium,
  test_settings: testSettings
}
