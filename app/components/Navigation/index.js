import React from 'react';
import Link from 'react-router/Link';

const Navigation = () => (
  <nav>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/sida-1">Sida 1</Link></li>
      <li><Link to="/sida-1/undersida-1">Sida 2</Link></li>
      <li><Link to="/blog">Blogg</Link></li>
      <li><Link to="/blog/category/html">Blogg Category</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navigation;
