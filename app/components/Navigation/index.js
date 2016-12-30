import React from 'react';
import Link from 'react-router/Link';

const Navigation = () => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand" to="/">Project name</Link>
      </div>
      <div id="navbar" className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li className="active"><Link to="/">Home</Link></li>
          <li><Link to="/sida-1">Sida 1</Link></li>
          <li><Link to="/sida-1/undersida-1">Sida 2</Link></li>
          <li><Link to="/blog">Blogg</Link></li>
          <li><Link to="/blog/category/html">Blogg Category</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
