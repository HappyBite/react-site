import React from 'react';
import Match from 'react-router/Match';

import Category from './Category';

const Blog = ({data, pathname}) => (
  <div>
    <h1>{data.current_page.attributes.display_name}</h1>
    <Match pattern={`${pathname}/category/:slug`} component={Category} />
  </div>
);

export default Blog;