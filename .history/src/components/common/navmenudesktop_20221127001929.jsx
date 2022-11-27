import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export class NavMenuDesktop extends Component {
  render() {
    return (
        <Navbar bg="light" className='navbar'>
        <Container>
          <Row>
            <Col md={4} xs={1}>Cot 2</Col>
            <Col md={4} xs={1}></Col>
            <Col md={4} xs={1}></Col>
          </Row>
        </Container>
      </Navbar>
    )
  }
}

export default NavMenuDesktop