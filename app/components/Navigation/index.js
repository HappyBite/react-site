import React from 'react';
import Link from 'react-router/Link';

const Navigation = ({data}) => {
  const navItems = Object.keys(data.pages).map(function(key, index) {
    var page = data.pages[key];
    var activeCssClass = page.attributes.path === data.url ||
                         data.url === '/' && page.id === data.start_page.id ?
                         'active' :
                         null;
    return (
      <li className={activeCssClass} key={index}>
        <Link to={key.toString()}>{page.attributes.display_name}</Link>
      </li>
    );
  });
  
  return (
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
            {navItems}
            {
            // <li className="active"><Link to="/">Home</Link></li>
            // <li><Link to="/sida-1">Sida 1</Link></li>
            // <li><Link to="/sida-1/undersida-1">Sida 2</Link></li>
            // <li><Link to="/blog">Blogg</Link></li>
            // <li><Link to="/blog/category/html">Blogg Category</Link></li>
            // <li><Link to="/contact">Contact</Link></li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
