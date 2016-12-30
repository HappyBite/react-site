import cache from './get-data';
import querystring from 'querystring';

module.exports = {
  /**
   * Get data
   * Description: Yields a predefined bucket to use in react components
   * Todo: This should make a request to the API and cache it
   * @param {string} url
   * @return {object} Sorted bucket data
   */
  getData: function(url) {
    var data = {};
    data.pages = cache.get('pages');
    data.start_page = data.pages['/'];
    data.current_page = data.pages[url];
    data.url = url;
    return data;
  }
};























