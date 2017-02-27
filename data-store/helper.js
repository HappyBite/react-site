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
  },
  
  /**
   * getMediaRelationship
   * Description: Yields media object from relationship object
   * @param {object} Relationship
   * @return {object} Media object
   */
  getMediaRelationship: function(relationship) {
    var data;
    var mediaDictionary = cache.get('data').media_dictionary;
    if (relationship && relationship.data && relationship.data.id) {
      data = mediaDictionary[relationship.data.id];
    }
    return data;
  },
  
  /**
   * getItemRelationship
   * Description: Yields item object from relationship object
   * @param {object} relationship
   * @return {object} Relationship object
   */
  getItemRelationship: function(relationship) {
    var data;
    var itemDictionary = cache.get('data').item_dictionary;
    console.log(itemDictionary);
    if (relationship && relationship.data && relationship.data.id) {
      data = itemDictionary[relationship.data.id];
    }
    return data;
  }
};