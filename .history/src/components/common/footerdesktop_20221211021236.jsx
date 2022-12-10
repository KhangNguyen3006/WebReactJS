import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap';


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
                    <p className='footer-text'> © 2022 Copyright: Nguyen Thanh Khang</p>
                </div>

            </Container>
        )
    }
}

export default FooterDesktop