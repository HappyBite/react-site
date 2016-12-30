import React from 'react';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';

import LayoutDefault from './app/layouts/LayoutDefault';
import Home from './app/templates/pages/StartPage';
import SubPage from './app/templates/pages/SubPage';
import Blog from './app/templates/blog';
import NoMatch from './app/templates/pages/NoMatch';

// console.log(typeof window !== 'undefined');
// import cachi from './data-store/data';
// const data = {
//   gaga: 'hehe'
// };

const App = ({data}) => (
  <div>
    <LayoutDefault />
    <div className="container">
      <Match exactly pattern="/" render={(props) => <Home data={data} props={props} />} />
      <Match pattern="/sida-1" render={(props) => <SubPage data={data} props={props} />} />
      <Match pattern="/sida-1/undersida-1" render={(props) => <SubPage data={data} props={props} />} />
      <Match pattern="/blog" render={(props) => <Blog data={data} props={props} />} />
      <Match pattern="/contact" render={(props) => <SubPage data={data} props={props} />} />
      <Miss component={NoMatch} />
    </div>
  </div>
);

export default App;