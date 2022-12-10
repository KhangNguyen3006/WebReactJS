import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import hinh from '../../assets/imgs/galaxyfold2.jpg';

class FeaturedProducts extends Component {
  render() {
    return (
      <Container className='text-center fluid'>
        <Row>
          <Col>
            <div className='section-title text-center'>
              <h2>SẢN PHẨM NỔI BẬT </h2>
              <p className='section-sub-title'>Các sản phẩm nổi bật</p>
            </div>

            <Row>

              <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                <div>
                  <Card className='card image-box'>
                    <img className='center' src={hinh} alt="Khong hien hinh" />
                    <Card.Body>
                      <p className='product-name-on-card'>Ten SP</p>
                      <p className='product-price-on-card'>10.00$</p>
                    </Card.Body>
                  </Card>

                </div>
              </Col>






            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default FeaturedProducts
