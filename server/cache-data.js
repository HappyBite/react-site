var cache = require('../data-store/cache');
var getData = require('../data-store/get-data');
var AsyncLock = require('node-async-locks').AsyncLock;
var lock = new AsyncLock();

module.exports = function(req, res, next) {
  lock.enter(function(token) {
    if (!cache.get('data')) {
      getData(function(err, data) {
        if (err) {
          res.send('Failed connection to the API');
          lock.leave(token);
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