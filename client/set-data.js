var request = require('superagent');
var async = require('async');
var cache = require('../data-store/get-data');

var setData = function(cb) {
  console.log('This will only show once!'); 
  async.parallel({
    data: function(callback) {
      request
        .get('/_data')
        .set('Accept', 'application/json')
        .end(function(err, res){
          if (err) {
            callback(null, res); 
          } else {
            callback(null, res);   
          }
        });
    }
  }, 
  function(err, results) { 
    if (err) {
      cb('no_data');
      return;
    }
    var data = results.data.body;
    
    /**
     * Set cache
     */ 
    cache.set('item_types', data.itemTypes);
    cache.set('items', data.items);
    cache.set('meta', data.meta);
    cache.set('media', data.media);
    cache.set('item_dictionary', data.item_dictionary);
    cache.set('media_dictionary', data.media_dictionary);
    cache.set('bucket_meta_dictionary', data.bucket_meta_dictionary);
    cache.set('routes', data.routes);
    cache.set('page_routes', data.pageRoutes);
    cache.set('pages', data.pages);
    cache.set('version', Date.now());
    cb(null, cache);
  });
};

module.exports = setData;