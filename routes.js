import React from 'react';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';

import LayoutDefault from './app/layouts/LayoutDefault';
import Home from './app/templates/pages/StartPage';
import SubPage from './app/templates/pages/SubPage';
import Blog from './app/templates/blog';
import NoMatch from './app/templates/pages/NoMatch';

const App = ({data}) => (
  <div>
    <LayoutDefault />
    <div className="container">
      <Match exactly pattern="/" render={(props) => <Home {...props} data={data} />} />
      <Match pattern="/sida-1" render={(props) => <SubPage {...props} data={data} />} />
      <Match pattern="/sida-1/undersida-1" render={(props) => <SubPage {...props} data={data} />} />
      <Match pattern="/blog" render={(props) => <Blog {...props} data={data} />} />
      <Match pattern="/contact" render={(props) => <SubPage {...props} data={data} />} />
      <Miss component={NoMatch} />
    </div>
  </div>
);

export default App;