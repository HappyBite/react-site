import React from 'react';
import Link from 'react-router/Link';
import Navigation from './Navigation';

const Header = ({ data }) => (
  <div className="navbar navbar-default navbar-fixed-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <img src="/assets/img/logo.png" alt="..." />
        </Link>
      </div>
      <div className="collapse navbar-collapse">
        <Navigation data={data} />
        <form className="navbar-form navbar-right visible-xs" role="search">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" />
            <span className="input-group-btn">
              <button className="btn btn-red" type="button">Search!</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Header;