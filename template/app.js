import React from 'react';
import LayoutDefault from './layouts/Default';

var helper = require('../data-store/helper.js');

const App = ({location}) => {
  const url = location.getUrl();
  
  let data = helper.getPathData(url);
  
  if (!data.current_page) {
    console.log(url);
    console.log('NO DATA');
    return false;
  }
  
  return (
    <LayoutDefault data={data} />
  );
};

export default App;