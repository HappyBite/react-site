import React from 'react';
import Helmet from 'react-helmet';

import Navigation from '../partials/Navigation';
import Routes from '../routes';

const LayoutDefault = ({data}) => {
  return (
    <div>
      <Helmet
        meta={[
          {charSet: "utf-8"},
          {name: "viewport", content: "width=device-width, initial-scale=1"}
        ]}
        title={data.current_page.attributes.display_name}
      />
      <Navigation data={data} />
      <div className="container">
        <Routes data={data} />
      </div>
    </div>
  );
}

export default LayoutDefault;


