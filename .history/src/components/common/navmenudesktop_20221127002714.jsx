import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/imgs/logo.png'

export class NavMenuDesktop extends Component {
  render() {
    return (
        <Navbar bg="light" className='navbar' fluid='true'>
        <Container fluid='true' className='bg-primary w-100'>
          <Row>
            <Col lg={4} md={4} xs={12}><img src={logo} alt="" className='nav-logo'/></Col>
            <Col lg={4} md={4} xs={12}>Cot 2</Col>
            <Col lg={4} md={4} xs={12}>Cot 3</Col>
          </Row>
        </Container>
      </Navbar>
    )
  }
}

export default NavMenuDesktop