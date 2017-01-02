var cache;
if (typeof window !== 'undefined') {
  cache = {
    get: function(key) {
      return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
    },
    set: function(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
} else {
  cache = require('nconf');
  cache.argv().env();
}

module.exports = cache;