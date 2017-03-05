import React from 'react';
import helper from '../../data-store/helper.js';

const KeyFeatures = ({ data }) => {
  let title = data.current_page.attributes.features_title;
  let features = data.current_page.attributes.features;
  return (
    <div className="clearfix">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="title-lg"><span>{ title }</span></h1>
        </div>
      </div>
      <div className="row features-block">
        {features.map((feature, index) => (
          <div className="col-md-4 col-sm-6" key={ index }>
            <div className="feature">
              <h3><i className={'fa fa-' + feature.icon }></i> { feature.heading }</h3>
              <p>
                { feature.text }
              </p>
            </div>
          </div>
        ))};
      </div>
    </div>
  );
};

export default KeyFeatures;