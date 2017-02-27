import React from 'react';
import helper from '../../data-store/helper.js';

const Slider = ({ slider }) => (
  <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      {slider.map((item, index) => (
        <li data-target="#carousel-example-generic" data-slide-to={index} className={ index === 0 && 'active' } key={index}></li>
      ))}
    </ol>
    <div className="carousel-inner" role="listbox">
      {slider.map((item, index) => (
        <div className={ index === 0 ? 'item active' : 'item' } key={index}>
          <img src={helper.getMediaRelationship(item.image).attributes.file.url} alt="image" />
          <div className="carousel-caption">
            <h3>{item.heading}</h3>
            <p className="lead" dangerouslySetInnerHTML={{ __html: item.text }} />
          </div>
        </div>
      ))}
    </div>
    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Slider;