import React from 'react';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';

import StartPage from './templates/pages/StartPage';
import SubPage from './templates/pages/SubPage';
import Blog from './templates/blog/Index';
import Portfolio from './templates/portfolio/Index';
import NoMatch from './templates/pages/NoMatch';

const Routes = ({data}) => (
  <div>
    {
      Object.keys(data.pages).map(function(key, index) {
        var page = data.pages[key];
        if (page.attributes.start_page) {
          return <Match key={index} exactly pattern={key} render={(props) => <StartPage {...props} data={data} />} />;
        } else if (page.meta.item_type.data.id === 'sub-page') {
          return <Match key={index} exactly pattern={key} render={(props) => <SubPage {...props} data={data} />} />;
        } else if (page.meta.item_type.data.id === 'blog') {
          return <Match key={index} exactly pattern={key} render={(props) => <Blog {...props} data={data} />} />;
        } else if (page.meta.item_type.data.id === 'portfolio') {
          return <Match key={index} exactly pattern={key} render={(props) => <Portfolio {...props} data={data} />} />;
        }
      })
    }
    <Miss render={(props) => <NoMatch {...props} data={data} />} />
  </div>
);

export default Routes;