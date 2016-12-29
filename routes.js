import React from 'react';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';

import LayoutDefault from './client/layouts/LayoutDefault';
import Home from './client/templates/pages/StartPage';
import SubPage from './client/templates/pages/SubPage';
import Blog from './client/templates/Blog';
import NoMatch from './client/templates/pages/NoMatch';

const App = () => (
  <div>
    <LayoutDefault />
    <Match exactly pattern="/" component={Home} />
    <Match pattern="/sida-1" component={SubPage} />
    <Match pattern="/sida-1/undersida-1" component={SubPage} />
    <Match pattern="/blog" component={Blog} />
    <Match pattern="/contact" component={SubPage} />
    <Miss component={NoMatch} />
  </div>
);

export default App;