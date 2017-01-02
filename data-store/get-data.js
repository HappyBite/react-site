var twixly = require('./twixly-client');
var async = require('async');
var cache = require('./cache');

module.exports = function setData(cb) {
  console.log('This will only show once!');
  async.parallel({
    items: function(callback) {
      twixly.items({}, function(err, items) {
        if (err) {
          callback(err);
        } else {
          callback(null, items);
        }
      }); 
    },
    media: function(callback) {
      twixly.media({}, function(err, items) {
        if (err) {
          callback(err);
        } else {
          callback(null, items);
        } 
      });
    }
  },
  function(err, results) { 
    if(err) return cb(err);
    
    var items = results.items;
    var media = results.media;
    var item_dictionary = {};
    var media_dictionary = {};
    var routes = {};
    var pages = {};
    var startPage;
    var startPageId;
    
    // Set item dictionary
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      item_dictionary[item.id] = item;
      if(item.attributes && item.attributes.start_page) {
        startPageId = item.relationships.page.data.id;
      }
    } 
    
    // Set startpage
    if (startPageId) {
      startPage = item_dictionary[startPageId];
    }
    
    // Set media dictionary
    for (var i = 0; i < media.length; i++) {
      var mediaItem = media[i];
      media_dictionary[mediaItem.id] = mediaItem;
    }
  
    // Set routes
    if (startPage) {
      routes['/'] = {type: 'page', item_type: startPage.meta.item_type.data.id, path: '/'};
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
        if (page.id !== startPage.id) {
          pages['/' + page.attributes.slug] = page;
        }
      } 
    }
    
    var data = {
      items,
      media,
      item_dictionary,
      media_dictionary,
      routes,
      pages,
      version: Date.now()
    };
    
    cache.set('data', data);
    
    cb(null, data);
  });
};