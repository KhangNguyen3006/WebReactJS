import React, { Component } from 'react'
import Slider from "react-slick";

class TopSlider extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
      return (
        <div>
          <h2>Auto Play</h2>
          <Slider {...settings}>
            <div>
              <img src="" alt="" srcset="" />
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Slider>
        </div>
      );
  }
}

export default TopSlider
