import React from 'react';

const StartPage = ({data}) => {
  let slider = data.current_page.attributes.slider;
  let slide = data.current_page.attributes.slider[0];
  let heading = data.current_page.attributes.slider[0].heading;
  let text = data.current_page.attributes.slider[0].text;
  return (
    <div className="starter-template">
      <h1>{heading}</h1>
      <p className="lead" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default StartPage;