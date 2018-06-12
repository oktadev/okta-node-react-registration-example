const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: '{youtOktaDomain}',
  token: '{APIToken}'
});

module.exports = client;