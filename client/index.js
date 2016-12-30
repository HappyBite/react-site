import React from 'react';
import Router from 'react-router/BrowserRouter';
import { render } from 'react-dom';

import Routes from '../routes';

var data = JSON.parse(data);

render(
  <Router>
    <Routes data />
  </Router>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
