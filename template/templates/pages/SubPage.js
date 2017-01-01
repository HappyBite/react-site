import React from 'react';

const SubPage = ({ data, props }) => {
  return (
    <div>
      <h1>{data.current_page.attributes.display_name}</h1>
    </div>
  );
};

export default SubPage;
