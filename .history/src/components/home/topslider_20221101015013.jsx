import React, { Component } from 'react'
import Slider from "react-slick";

import slider1 from '../../assets/imgs/slide1.png'
import slider2 from '../../assets/imgs/slide2.png'
import slider3 from '../../assets/imgs/slide3.png'
import slider4 from '../../assets/imgs/slide4.png'


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
