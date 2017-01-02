var bucketId = process.env.BUCKET_ID;
var accessToken = process.env.ACCESS_TOKEN;

var twixly = require('../node_modules/sdk/index.js');
var client = new twixly.Client({
  bucket: bucketId,
  accessToken: accessToken
});

module.exports = client;