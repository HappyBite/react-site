import React from 'react';
import Router from 'react-router/BrowserRouter';
import { render } from 'react-dom';

import Routes from '../routes';

render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
