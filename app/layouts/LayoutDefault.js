import React from 'react';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation';

const LayoutDefault = () => (
  <div>
    <Helmet
      meta={[
        {charSet: "utf-8"},
        {name: "viewport", content: "width=device-width, initial-scale=1"}
      ]}
      title="Dynamic title here"
      link={[
        {rel: "shortcut icon", href: "/assets/favicon.svg"},
        {rel: "stylesheet", href: "/assets/css/bootstrap.min.css"}
      ]}
      script={[
        {src: "//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"},
        {src: "/assets/js/bootstrap.min.js"}
      ]}
    />
    <Navigation />
  </div>
);

export default LayoutDefault;


