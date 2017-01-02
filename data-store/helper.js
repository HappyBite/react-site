import cache from './cache';

module.exports = {
  /**
   * getPathData
   * Description: Yields data from current path to use in react components
   * Todo: This should make a request to the API and cache it
   * @param {string} url
   * @return {object} Relevant bucket data
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























