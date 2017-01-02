import cache from './cache';
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
    data.pages = cache.get('data').pages;
    data.start_page = data.pages['/'];
    data.current_page = data.pages[url];
    data.url = url;
    return data;
  }
};























