import React from 'react';

const Portfolio = ({data}) => (
  <div>
    <h1>{data.current_page.attributes.display_name}</h1>
  </div>
);

export default Portfolio;