import React, { Component } from 'react'

export class footerdesktop extends Component {
  render() {
    return (
        <Container fluid='true' className='hometop'>
        <Row>
            <Col md={3} sm={12}>
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