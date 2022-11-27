import React, { Component } from 'react'
import Slider from "react-slick";

import slider1 from '../../assets/imgs/slide1.webp'
import slider2 from '../../assets/imgs/slide2.webp'
import slider3 from '../../assets/imgs/slide3.webp'
import slider4 from '../../assets/imgs/slide4.webp'


class TopSlider extends Component {
  render() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 800,
        cssEase: "linear"
      };
      return (
        <div>

          <Slider {...settings}>
            <div>
              <img src={slider1} alt="Khong hien thi" />
            </div>
            <div>
              <img src={slider2} alt="Khong hien thi" />
              
            </div>
            <div>
              <img src={slider3} alt="Khong hien thi" />
              
            </div>
            <div>
              <img src={slider4} alt="Khong hien thi" />
              
            </div>
          </Slider>
        </div>
      );
  }
}

export default TopSlider
