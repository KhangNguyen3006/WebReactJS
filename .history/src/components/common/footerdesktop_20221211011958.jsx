import React, { Component } from 'react'

export class footerdesktop extends Component {
    render() {
        return (
            <Container fluid='true'>
                <Row>
                    <Col lg={4} md={4} sm={2} xs={1}>
                        <MegaMenu />
                    </Col>

                    <Col md={9} sm={12}>
                        <TopSlider />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default footerdesktop