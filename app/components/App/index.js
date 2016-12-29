import React from 'react';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';

import Home from '../../pages/Home';
import SubPage from '../../pages/SubPage';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import NoMatch from '../../pages/NoMatch';
import Navigation from '../Navigation';

import './global-styles';

const App = () => (
  <div>
    <Navigation />
    <Match exactly pattern="/" component={Home} />
    <Match pattern="/sida-1" component={SubPage} />
    <Match pattern="/about" component={About} />
    <Match pattern="/contact" component={Contact} />
    <Miss component={NoMatch} />
  </div>
);

export default App;
