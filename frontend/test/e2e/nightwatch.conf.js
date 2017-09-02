require('babel-register')
var config = require('../../config')

var selenium = {}
if (process.env.REMOTE_E2E) {
  console.log('Browerstack selenium')
  selenium = {
    start_process: false,
    host: 'hub-cloud.browserstack.com',
    'port': 80
  }
} else {
  console.log('Regular selenium')
  selenium = {
    start_process: true,
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  }
}

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['test/e2e/specs'],
  output_folder: 'test/e2e/reports',
  custom_assertions_path: ['test/e2e/custom-assertions'],

  selenium: selenium,

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        devServerURL: 'http://localhost:' + (process.env.PORT || config.dev.port)
      }
    },

    chromeRemote: {
      desiredCapabilities: {
        'browserstack.user': process.env.BROWSERSTACK_USER,
        'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
        'browser': 'chrome'
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
}
