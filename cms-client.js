var dotenv = require('dotenv').load();
var bucketId = process.env.BUCKET_ID;
var accessToken = process.env.ACCESS_TOKEN;

// console.log('BUCKET_ID: ', bucketId);
// console.log('ACCESS_TOKEN: ', accessToken);
var cms = require('./node_modules/sdk/index.js');
var client = new cms.Client({
  bucket: bucketId,
  accessToken: accessToken
});

module.exports = client;