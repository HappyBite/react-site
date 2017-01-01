import React from 'react';
import Router from 'react-router/BrowserRouter';
import { render } from 'react-dom';

import Routes from '../template/app';
import setData from '../data-store/set-data';

setData(function(err, data) {
  startApp(location.pathname);
});

function startApp(url) {
  render(
    <Router>
      <Routes url={url} />
    </Router>,
    document.getElementById('root')
  );
}

if (module.hot) {
  module.hot.accept();
}

// preserve newlines, etc - use valid JSON
// var fixedData = window.data;
// fixedData = fixedData.replace(/\\n/g, "\\n")  
// .replace(/\\'/g, "\\'")
// .replace(/\\"/g, '\\"')
// .replace(/\\&/g, "\\&")
// .replace(/\\r/g, "\\r")
// .replace(/\\t/g, "\\t")
// .replace(/\\b/g, "\\b")
// .replace(/\\f/g, "\\f");
// remove non-printable and other non-valid JSON chars
// fixedData = fixedData.replace(/[\u0000-\u0019]+/g, '');
// fixedData = JSON.parse(fixedData);
// console.log('data: ', JSON.parse(fixedData));
// var data = fixedData;
// var data = helper.getData(req.url);