import React, { Component } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';


class FooterDesktop extends Component {
    render() {
        return (
            <Container className="footer">
                <div className='footer-menu'>

                    <Row>
                        <Col lg={3} md={4} sm={2} xs={1}  className='footer-text'>
                            <h5>OFFICE ADDRESS</h5>
                            <p>1140 Nguyễn Duy Trinh Q9 TP.HCM</p>
                            <p>Email:Support@it.com</p>
                            <h5 className='footer-text'>SOCIAL LINK</h5>
                            <a className='footer-icon'><i className="fab fa-facebook"></i></a>
                            <a className='footer-icon'><i className="fab fa-instagram"></i></a>
                            <a className='footer-icon'><i className="fab fa-twitter"></i></a>
                        </Col>

                        <Col lg={3} md={4} sm={2} xs={1} className='footer-text'>
                            <h5>THE COMPANY</h5>
                            <Link to="/" className="footer-link"> About Us</Link><br />
                            <p>Company Profile</p>
                            <p>Contact Us</p>

                        </Col>

                        <Col lg={3} md={4} sm={2} xs={1} className='footer-text'>
                            <h5>MORE INFO</h5>
                            <p>How To Purchase</p>
                            <p>Privacy Policy</p>
                            <p>Refund Policy</p>
                        </Col>

                        <Col lg={3} md={4} sm={2} xs={1}  className='footer-text'>
                            <h5>DOWNLOAD APPS</h5>
                            <a className='footer-icon'><i class="fab fa-google"></i></a>
                            <a className='footer-icon'><i class="fab fa-apple"></i></a>
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