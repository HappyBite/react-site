import React from 'react';
import Helmet from 'react-helmet';

import Header from '../partials/Header';
import Body from '../partials/Body';

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
      <Header data={data} />
      <Body data={data} />
    </div>
  );
}

export default LayoutDefault;


