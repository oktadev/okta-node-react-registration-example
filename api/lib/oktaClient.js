const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-846291.oktapreview.com',
  token: '009w8chhKHawNgrOae2SKq8naL8wPK5BMtc_EnwLNX'
});

module.exports = client;