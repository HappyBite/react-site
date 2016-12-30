var cache = require('./data-store/data');
var setCache = require('./data-store/set-cache');
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
            // if (cache.get('items')) {
            //   console.log('DATAAAAA: ', cache.get('items')[0].id);
            // }
            next();
          }
        });
      } else {
        lock.leave(token);
        // if (cache.get('items')) {
        //   console.log('DATAAAAA: ', cache.get('items')[0].id);
        // }
        next();
      }
    });
  }); 
};