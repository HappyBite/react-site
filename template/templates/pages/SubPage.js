import React from 'react';

const SubPage = ({ data, props }) => {
  return (
    <h1 className="title-lg"><span>{ data.current_page.attributes.title }</span></h1>
  );
};

export default SubPage;
