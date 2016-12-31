var cache = require('../data-store/get-data');
var setData = require('./set-data');

var getData = function(cb) {
  cache.set('items', null);
  if (!cache.get('items')) {
    setData(function(err, data) {
      if (err) {
        console.log('Failed connection to the API');
        cb(err);
      } else {
        cb(null, data);
      }
    });
  } else {
    cb(null, cache);
  }
};

module.exports = getData;