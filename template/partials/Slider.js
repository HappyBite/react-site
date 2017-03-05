import React from 'react';
import helper from '../../data-store/helper.js';

const Slider = ({ data }) => {
  let slider = data.current_page.attributes.slider;
  
  return (
    <div className="home-slider">
      <div id="home-slider" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {slider.map((slide, index) => (
            <li data-target="#home-slider" data-slide-to={index} className={ index === 0 && 'active' } key={index} style={ { left: '1px', marginRight: '4px', position: 'relative' } }></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {slider.map((slide, index) => (
            <div className={ index === 0 ? 'item active' : 'item' } key={index} id={'item-' + index}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-6"> 
                    <div className="fully-responsive ext-center">
                      <h3 className="fully-responsive__title animated slideInDown g-delay_1">{slide.heading}</h3>
                      <div>
                        { 
                          slide.excerpt && (
                            <div className="fully-responsive__text animated slideInDown g-delay_2">
                              {slide.excerpt}
                            </div>
                          )
                        }
                        {
                          slide.text && (
                            <p className="animated fadeInUp g-delay_5">
                              {slide.text}
                            </p>
                          )
                        }
                      </div>
                      {
                        slide.link && (
                          <div className="fully-responsive__btns">
                            <a className="btn btn-lg btn-red fully-responsive-btns__btn animated fadeInUpBig g-delay_5">{slide.link_text}</a>
                          </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
              { 
                slide.image && (
                  <div className="bg-img hidden-xs">
                    <img src={helper.getMediaRelationship(slide.image).attributes.file.url} alt={slide.heading} />
                  </div>
                )
              }
            </div>
          ))}
        </div>
        <a className="carousel-arrow carousel-arrow-prev" href="#home-slider" data-slide="prev">
          <i className="fa fa-angle-left"></i>
        </a>
        <a className="carousel-arrow carousel-arrow-next" href="#home-slider" data-slide="next">
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Slider;