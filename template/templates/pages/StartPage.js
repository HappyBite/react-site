import React from 'react';
import Slider from '../../partials/Slider.js';

const StartPage = ({ data }) => {
  let slider = data.current_page.attributes.slider;
  
  return (
    <Slider slider={ slider } />
  );
};

export default StartPage;