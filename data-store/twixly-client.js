var config = require('../config');
var twixly = require('twixly');

var client = new twixly.createClient({
  bucket: config.BUCKET_ID,
  accessToken: config.ACCESS_TOKEN
});

module.exports = client;