var client = require('./cms-client');
var async = require('async');
var cache = require('./get-data');

module.exports = function setData(cb) {
  if (typeof window === 'undefined') {
    console.log('This will only show once!');
    async.parallel({
      item_types: function(callback) {
        client.itemTypes({}, function(err, itemTypes) {
          if (err) { 
            callback(err);
          } else {
            callback(null, itemTypes); 
          }
        });
      },
      items: function(callback) {
        client.items({}, function(err, items) {
          if (err) { 
            callback(err);
          } else {
            callback(null, items);
          }
        }); 
      },
      meta: function(callback) {
        client.meta({}, function(err, items) {
          if (err) {
            callback(err);
          } else {
            callback(null, items);
          }
        });
      },
      media: function(callback) {
        client.media({}, function(err, items) {
          if (err) {
            callback(err);
          } else {
            callback(null, items);
          } 
        });
      }
    },
    function(err, results) { 
      var itemTypes = results.item_types; 
      var items = results.items;
      var meta = results.meta;
      var media = results.media;
      var item_dictionary = {};
      var media_dictionary = {};
      var bucket_meta_dictionary = {};
      var routes = {};
      var pageRoutes = {};
      var pages = {};
      var startPage;
      var startPageId;
      if(typeof items === 'undefined') {
        cb('no_items');
        return;
      }
      
      /**
       * Set item dictionary
       * Set startpage
       */
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        item_dictionary[item.id] = item;
        if(item.attributes && item.attributes.start_page) {
          startPageId = item.relationships.page.data.id;
        }
      } 
      if (startPageId) {
        startPage = item_dictionary[startPageId];
      }
      
      /**
       * Set media dictionary
       */
      for (var i = 0; i < media.length; i++) {
        var mediaItem = media[i];
        media_dictionary[mediaItem.id] = mediaItem;
      }
    
      /**
       * Set bucket meta dictionary
       */
      for (var i = 0; i < meta.length; i++) {
        var bucketMeta = meta[i];
        bucket_meta_dictionary[bucketMeta.id] = bucketMeta.attributes.value;
      }
       
      /**
       * Set routes
       */
      if (startPage) {
        routes['/'] = {type: 'page', item_type: startPage.meta.item_type.data.id, path: '/'};
        pageRoutes['/'] = startPage;
        pages['/'] = startPage;
      }
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if(item.meta.item_type.data.id === 'nav-menu-item') {
          var page = item_dictionary[item.relationships.page.data.id];
          page.attributes.slug = item.attributes.slug;
          page.attributes.path = item.attributes.path;
          page.attributes.display_name = item.attributes.display_name;
          page.attributes.start_page = item.attributes.start_page;
          page.meta.position = item.meta.position;
          routes['/' + page.attributes.slug] = {type: 'page', item_type: page.meta.item_type.data.id, path: page.attributes.path}; 
          pageRoutes['/' + page.attributes.slug] = {type: 'page', item_type: page.meta.item_type.data.id, path: page.attributes.path}; 
          if (page.id !== startPage.id) {
            pages['/' + page.attributes.slug] = page;
          }
        } 
      }
      
      var data = {
        itemTypes,
        items,
        meta,
        media,
        item_dictionary,
        media_dictionary,
        bucket_meta_dictionary,
        routes,
        pageRoutes,
        pages,
        version: Date.now()
      }
      setCache(data);
      cb(null, cache);
    });
  } else {
    cache.set('items', null);
    if (!cache.get('items')) {
      var request = require('superagent');
      // console.log('This will only show once!'); 
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
        
        setCache(data);
        cb(null, cache);
      });
    } else {
      cb(null, cache);
    }
  }
  
  /**
   * Set cache
   */ 
  function setCache(data) {
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
    cache.set('version', data.version);
  }
};