var bucketId = process.env.BUCKET_ID;
var accessToken = process.env.ACCESS_TOKEN;

var cms = require('../node_modules/sdk/index.js');
var client = new cms.Client({
  bucket: bucketId,
  accessToken: accessToken
});

module.exports = client;