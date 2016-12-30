var cache;
if (typeof window !== 'undefined') {
  cache = {
    get: function(key) {
      // console.log('key: ', key);
      // console.log('value: ', localStorage.getItem(key));
      return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
    },
    set: function(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
} else {
  cache = require('nconf');
  // Init cache
  cache.argv().env();
  cache.add('system', {type: 'file', file: 'dummy: has to be here to get set to work'});
}

module.exports = cache;