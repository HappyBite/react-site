import React from 'react';
import Slider from '../../partials/Slider.js';
import KeyFeatures from '../../partials/KeyFeatures.js';

const StartPage = ({ data }) => (
  <div className="clearfix">
    <Slider data={ data } />
    <div className="container">
      <KeyFeatures data={ data } />
    </div>
  </div>
);

export default StartPage;