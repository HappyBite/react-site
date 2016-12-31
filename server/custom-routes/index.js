var router = require('express').Router();
var cache = require('../../data-store/get-data');
var helper = require('../../data-store/helper.js');
var etag = require('etag');

router.get('/_data', function (req, res) {
    // if (req.headers['if-none-match']) {
    //   console.log(req.headers['if-none-match'].toString());
    //   console.log('v2:', cache.get('version'));
    //   console.log(etag(cache.get('version').toString()));
    // }
    var bucketVersion = cache.get('version') ? 
                        cache.get('version').toString() :
                        null;
    if (!bucketVersion) {
        console.log('You have to handle this!');
        res.status(304).json();
        return;
    }
    if (req.headers['if-none-match'] && req.headers['if-none-match'].toString() === etag(bucketVersion)) {
       console.log('Cached items:' + req.headers['if-none-match']);
       res.status(304).json();
       return;
    }
    // console.log('v1:', cache.get('version'));
    // console.log('v1e:', etag(cache.get('version').toString()));
    res.setHeader('ETag', etag(bucketVersion));
    res.json(helper.getPayload(req.url));
});

router.get('/_clear-cache', function (req, res) {
    cache.set('items', null);
    res.send('Cache cleared successfully!');
});

module.exports = router;