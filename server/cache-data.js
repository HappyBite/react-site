var cache = require('../data-store/get-data');
var setCache = require('../data-store/set-data');
var AsyncLock = require('node-async-locks').AsyncLock;
var helper = require('../data-store/helper.js');
var etag = require('etag');

var lock = new AsyncLock();

module.exports = function(app) {
  app.use(function(req, res, next) {
    lock.enter(function(token) {
      if (!cache.get('items')) {
        setCache.setCache(function(err, data) {
          if (err) {
            res.send('Failed connection to the API');
            lock.leave(token);
            return;
          } else {
            console.log('v1:', data.get('version'));
            console.log('v1e:', etag(data.get('version').toString()));
            res.setHeader('ETag', etag(data.get('version').toString()));
            lock.leave(token);
            next();
          }
        });
      } else {
        lock.leave(token);
        next();
      }
    });
  });
  
  app.get('/_data', function (req, res) {
    if (req.headers['if-none-match']) {
      console.log(req.headers['if-none-match'].toString());
      console.log('v2:', cache.get('version'));
      console.log(etag(cache.get('version').toString()));
    }
    if (req.headers['if-none-match'] && req.headers['if-none-match'].toString() === etag(cache.get('version').toString())) {
       console.log('Cached items:' + req.headers['if-none-match']);
       res.status(304).json();
       return;
    }
    res.json(helper.getPayload(req.url));
  });
  
  app.get('/_clear-cache', function (req, res) {
    cache.set('items', null);
    res.send('Cache cleared successfully!');
  });
  
};