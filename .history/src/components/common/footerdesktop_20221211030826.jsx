import React, { Component } from 'react'
import { Row, Col, Container} from 'react-bootstrap';
import {Link } from "react-router-dom";


class FooterDesktop extends Component {
    render() {
        return (
            <Container fluid='true' className="footer-menu-title w-100">
                <div className='footer-menu'>

                    <Row>
                        <Col lg={3} md={4} sm={2} xs={1}  className='footer-text'>
                            <h5>OFFICE ADDRESS</h5>
                            <p>1140 Nguyễn Duy Trinh Q9 TP.HCM</p>
                            <p>Email: Support@it.com</p>
                            <h5 className='footer-text'>SOCIAL LINK</h5>
                            <a className='footer-icon'><i className="fab fa-facebook"></i></a>
                            <a className='footer-icon'><i className="fab fa-instagram"></i></a>
                            <a className='footer-icon'><i className="fab fa-twitter"></i></a>
                        </Col>

                        <Col lg={3} md={4} sm={2} xs={1} className='footer-text'>
                            <h5>THE COMPANY</h5>
                            <Link to="/" className="footer-link"> About Us</Link><br />
                            <Link to="/" className="footer-link"> Company Profile</Link><br />
                            <Link to="/" className="footer-link"> Contact Us</Link><br />

                        </Col>

                        <Col lg={3} md={4} sm={2} xs={1} className='footer-text'>
                            <h5>MORE INFO</h5>
                            <Link to="/" className="footer-link"> How To Purchase</Link><br />
                            <Link to="/" className="footer-link"> Privacy Policy</Link><br />
                            <Link to="/" className="footer-link"> Refund Policy</Link><br />
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