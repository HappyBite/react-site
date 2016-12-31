import React from 'react';
import Match from 'react-router/Match';

import Category from './Category';

const Blog = ({pathname}) => (
  <div>
    <h1>Blog</h1>
    <Match pattern={`${pathname}/category/:slug`} component={Category} />
  </div>
);

export default Blog;