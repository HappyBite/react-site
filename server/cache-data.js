var cache = require('../data-store/cache');
var setData = require('../data-store/set-data');
var AsyncLock = require('node-async-locks').AsyncLock;
var lock = new AsyncLock();

module.exports = function(req, res, next) {
  lock.enter(function(token) {
    if (!cache.get('data')) {
      setData(function(err, data) {
        if (err) {
          res.send('Failed connection to the API');
          lock.leave(token);
          return;
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
};