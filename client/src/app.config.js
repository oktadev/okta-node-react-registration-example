export default {
  url: '{youOktaDomain}',
  issuer: '{youOktaDomain}/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '{ClientID}'
}