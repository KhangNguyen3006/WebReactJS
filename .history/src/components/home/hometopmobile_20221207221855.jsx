import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MegaMenu from './megamenu.jsx'
import TopSlider from './topslider.jsx'

class HomeTop extends Component {
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

export default HomeTop
