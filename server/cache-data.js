var cache = require('../data-store/get-data');
var setCache = require('../data-store/set-data');
var AsyncLock = require('node-async-locks').AsyncLock;
var lock = new AsyncLock();

module.exports = function(app) {    
  app.use(function(req, res, next) {
    lock.enter(function(token) {
      if (!cache.get('items')) {
        setCache.setCache(function(err, data) {
          if (err) {
            console.log('Failed connection to the API');
            res.send('Failed connection to the API');
            lock.leave(token);
            return false;
          } else {
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
};