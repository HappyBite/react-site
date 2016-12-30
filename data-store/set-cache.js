var client = require('../cms-client');
var async = require('async');
var cache = require('./data');

module.exports = {
  setCache: function(cb) {
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
        } 
      }
      
      /**
       * Set cache
       */ 
      cache.set('item_types', itemTypes);
      cache.set('items', items);
      cache.set('meta', meta);
      cache.set('media', media);
      cache.set('item_dictionary', item_dictionary);
      cache.set('media_dictionary', media_dictionary);
      cache.set('bucket_meta_dictionary', bucket_meta_dictionary);
      cache.set('routes', routes);
      cache.set('page_routes', pageRoutes);
      cache.set('version', Date.now());
      cb(null, cache);
    });
  }
};