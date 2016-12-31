import React from 'react';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation';

const LayoutDefault = ({data}) => {
  return (
    <div>
      <Helmet
        meta={[
          {charSet: "utf-8"},
          {name: "viewport", content: "width=device-width, initial-scale=1"}
        ]}
        title={data.current_page.attributes.display_name}
        link={[
          {rel: "shortcut icon", href: "/assets/favicon.svg"},
          {rel: "stylesheet", href: "/assets/css/bootstrap.min.css"},
          {rel: "stylesheet", href: "/assets/css/style.css"}
        ]}
        script={[
          {src: "//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"},
          {src: "/assets/js/bootstrap.min.js"}
        ]}
      />
      <Navigation data={data} />
    </div>
  );
}

export default LayoutDefault;


