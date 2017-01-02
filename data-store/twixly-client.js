var config = require('../config');
var twixly = require('../node_modules/sdk/index.js');

var client = new twixly.Client({
  bucket: config.BUCKET_ID,
  accessToken: config.ACCESS_TOKEN
});

module.exports = client;