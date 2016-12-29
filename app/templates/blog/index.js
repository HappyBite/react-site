import React from 'react';
import Match from 'react-router/Match';

import H1 from '../../components/H1';
import Category from './Category';

const Blog = ({pathname}) => (
  <div>
    <H1>Blog</H1>
    <Match pattern={`${pathname}/category/:slug`} component={Category} />
  </div>
);

export default Blog;