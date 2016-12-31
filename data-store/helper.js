import cache from './get-data';
import querystring from 'querystring';

module.exports = {
  /**
   * getPathData
   * Description: Yields data form current path to use in react components
   * Todo: This should make a request to the API and cache it
   * @param {string} url
   * @return {object} Sorted bucket data
   */
  getPathData: function(url) {
    var data = {};
    data.pages = cache.get('pages');
    data.start_page = data.pages['/'];
    data.current_page = data.pages[url];
    data.url = url;
    return data;
  },
  /**
   * getPayload
   * Description: Yields a predefined bucket to use on client side
   * Todo: This should make a request to the API and cache it
   * @param {string} url
   * @return {object} Sorted bucket data
   */
  getPayload: function(url) {
    var data = {};
    data.item_types = cache.get('item_types');
    data.items = cache.get('items');
    data.meta = cache.get('meta');
    data.item_dictionary = cache.get('item_dictionary');
    data.media_dictionary = cache.get('media_dictionary');
    data.bucket_meta_dictionary = cache.get('bucket_meta_dictionary');
    data.routes = cache.get('routes');
    data.page_routes = cache.get('page_routes');
    data.pages = cache.get('pages');
    data.version = cache.get('version');
    return data;
  }
};























