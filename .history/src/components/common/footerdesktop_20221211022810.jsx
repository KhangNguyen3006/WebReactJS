import React, { Component } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';


class FooterDesktop extends Component {
    render() {
        return (
            <Container className="footer">
                <div className='footer-menu'>

                    <Row>
                        <Col lg={4} md={4} sm={2} xs={1} className='footer-text'>
                            <h5>OFFICE ADDRESS</h5>
                            <p>1140 Nguyễn Duy Trinh Q9 TP.HCM</p>
                            <p>Email:Support@it.com</p>
                            <h5>SOCIAL LINK</h5>
                            <div className='footer-btn'><i className="fab fa-facebook"></i></div>
                            <div className='footer-btn'><i className="fab fa-instagram"></i></div>
                            <div className='footer-btn'><i className="fab fa-twitter"></i></div>
                        </Col>

                        <Col lg={4} md={4} sm={2} xs={1}>

                        </Col>

                        <Col lg={4} md={4} sm={2} xs={1}>

                        </Col>

                        <Col lg={4} md={4} sm={2} xs={1}>

                        </Col>
                    </Row>
                </div>

                <div fluid='true' className='footer-copyright'>
                    <p className='copyright-text'> © 2022 Copyright: Nguyen Thanh Khang</p>
                </div>

            </Container>
        )
    }
}

export default FooterDesktop