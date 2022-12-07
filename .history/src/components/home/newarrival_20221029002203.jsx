import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hinh from '../../assets/imgs/galaxyfold2.jpg';


class NewArrival extends Component {
    render() {

        var settings = {
            dots: false,
            infinite: false,
            focusOnSelect: true ,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Container className='text-center fluid'>
                <Row>
                    <Col>
                        <div className='section-title text-center'>
                            <h2>SẢN PHẨM MỚI</h2>
                            <p className='section-sub-title'>Các sản phẩm mới</p>
                        </div>

                        <Row>
                            <Col>
                                <Slider ref={slider => (this.slider = slider)} {...settings}>
                                    <div>
                                        <Card className='card image-box'>
                                            <img className='center' src={hinh} alt="Khong hien hinh" />
                                            <Card.Body>
                                                <p className='product-name-on-card'>Ten SP</p>
                                                <p className='product-price-on-card'>10.00$</p>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card className='card image-box'>
                                            <img className='center' src={hinh} alt="Khong hien hinh" />
                                            <Card.Body>
                                                <p className='product-name-on-card'>Ten SP</p>
                                                <p className='product-price-on-card'>10.00$</p>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card className='card image-box'>
                                            <img className='center' src={hinh} alt="Khong hien hinh" />
                                            <Card.Body>
                                                <p className='product-name-on-card'>Ten SP</p>
                                                <p className='product-price-on-card'>10.00$</p>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card className='card image-box'>
                                            <img className='center' src={hinh} alt="Khong hien hinh" />
                                            <Card.Body>
                                                <p className='product-name-on-card'>Ten SP</p>
                                                <p className='product-price-on-card'>10.00$</p>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card className='card image-box'>
                                            <img className='center' src={hinh} alt="Khong hien hinh" />
                                            <Card.Body>
                                                <p className='product-name-on-card'>Ten SP</p>
                                                <p className='product-price-on-card'>10.00$</p>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card className='card image-box'>
                                            <img className='center' src={hinh} alt="Khong hien hinh" />
                                            <Card.Body>
                                                <p className='product-name-on-card'>Ten SP</p>
                                                <p className='product-price-on-card'>10.00$</p>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card className='card image-box'>
                                            <img className='center' src={hinh} alt="Khong hien hinh" />
                                            <Card.Body>
                                                <p className='product-name-on-card'>Ten SP</p>
                                                <p className='product-price-on-card'>10.00$</p>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card className='card image-box'>
                                            <img className='center' src={hinh} alt="Khong hien hinh" />
                                            <Card.Body>
                                                <p className='product-name-on-card'>Ten SP</p>
                                                <p className='product-price-on-card'>10.00$</p>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Slider>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NewArrival
