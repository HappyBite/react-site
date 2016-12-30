import React from 'react';
import Router from 'react-router/BrowserRouter';
import { render } from 'react-dom';

import Routes from '../routes';

// preserve newlines, etc - use valid JSON
var fixedData = window.data;
fixedData = fixedData.replace(/\\n/g, "\\n")  
.replace(/\\'/g, "\\'")
.replace(/\\"/g, '\\"')
.replace(/\\&/g, "\\&")
.replace(/\\r/g, "\\r")
.replace(/\\t/g, "\\t")
.replace(/\\b/g, "\\b")
.replace(/\\f/g, "\\f");
// remove non-printable and other non-valid JSON chars
fixedData = fixedData.replace(/[\u0000-\u0019]+/g, ''); 
// console.log('data: ', JSON.parse(fixedData));
// var data = fixedData;

render(
  <Router>
    <Routes data={fixedData} />
  </Router>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
