const router = require('express').Router()
module.exports = router
var Vimeo = require('vimeo').Vimeo

const {CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN} = process.env

var client = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN)

// `scope` is an array of permissions your token needs to access. You
// can read more at https://developer.vimeo.com/api/authentication#supported-scopes
client.generateClientCredentials(['public, upload, edit'], function(
  err,
  response
) {
  if (err) {
    throw err
  }

  const token = response.access_token

  // Other useful information is included alongside the access token,
  // which you can dump out to see, or visit our API documentation.
  //
  // We include the final scopes granted to the token. This is
  // important because the user, or API, might revoke scopes during
  // the authentication process.
  var scopes = response.scope
  console.log('scopes', scopes)
})

router.get('/', async (req, res) => {
  const tag = 'rain'
  client.request(
    {
      method: 'GET',
      path: `/tags/${tag}/videos`
    },
    function(error, body, status_code, headers) {
      if (error) {
        console.log(error)
      }
      console.log(body.data.length)
      res.send(body.data)
    }
  )
})
