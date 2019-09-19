export default {
  url: 'https://{yourOktaDomain}',
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '{ClientID}'
}