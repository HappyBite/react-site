var cache = require('./data-store/data');
var setCache = require('./data-store/set-cache');
var AsyncLock = require('node-async-locks').AsyncLock;
var lock = new AsyncLock();

module.exports = function(app) {    
  app.use(function(req, res, next) {
    lock.enter(function(token) {
      console.log('uuuuuuuu: ', cache.get('items'));
      if (!cache.get('items')) {
        setCache.setCache(function(err, data) {
          if (err) {
            console.log('Failed connection to the API');
            res.send('Failed connection to the API');
            lock.leave(token);
            return false;
          } else {
            console.log('SEEEEETTTING')
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