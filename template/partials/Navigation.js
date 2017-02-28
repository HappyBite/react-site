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
      <li role="presentation" className={activeCssClass} key={index}>
        <Link to={key.toString()}>{page.attributes.display_name}</Link>
      </li>
    );
  });
  
  return (
    <ul className="nav navbar-nav navbar-right">
      {navItems}
      <li className="hidden-xs" id="navbar-search">
        <a href="#" class="show" id="open-search">
          <i className="fa fa-search"></i>
        </a>
        <a href="#" className="hidden" id="close-search">
          <i className="fa fa-times"></i>
        </a>
        <div className="hidden" id="navbar-search-box">
          <form className="form" role="form">
            <input type="text" className="form-control" placeholder="Search" />
            <button className="btn btn-red btn-sm" type="button"><i className="fa fa-search"></i></button>
          </form>
        </div>
      </li>
    </ul>
  );
};

export default Navigation;