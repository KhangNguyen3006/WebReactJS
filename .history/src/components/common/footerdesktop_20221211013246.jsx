import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';


class FooterDesktop extends Component {
    render() {
        return (
            <Footer>
                <div>

                    <Row>
                        <Col lg={4} md={4} sm={2} xs={1}>
                            <h6>OFFICE ADDRESS</h6>
                            <p>1140 Nguyễn Duy Trinh Q9 TP.HCM</p>
                            <p>Email:Support@it.com</p>
                            <h6>SOCIAL LINK</h6>

                        </Col>

                        <Col lg={4} md={4} sm={2} xs={1}>

                        </Col>

                        <Col lg={4} md={4} sm={2} xs={1}>

                        </Col>

                        <Col lg={4} md={4} sm={2} xs={1}>

                        </Col>
                    </Row>
                </div>

                <div fluid='true'>

                </div>

            </Footer>
        )
    }
}

export default FooterDesktop