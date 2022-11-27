import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import logo from '../../assets/imgs/logo.png'

export class NavMenuDesktop extends Component {
  render() {
    return (
      <Navbar bg="light" className='navbar' fluid='true' fixed='top'>
        <Container fluid='true' className='bg-primary w-100'>
          <Row>
            <Col lg={4} md={4} xs={12}><img src={logo} alt="" className='nav-logo' /></Col>
            <Col lg={4} md={4} xs={12}>
              <InputGroup className="mt-3">
                <Form.Control
                  placeholder="Recipient's username"
                  name='Search'
                />
                <Button variant="outline-secondary" id="button-addon2">
                  
                </Button>
              </InputGroup>
            </Col>
            <Col lg={4} md={4} xs={12}>Cot 3</Col>
          </Row>
        </Container>
      </Navbar>
    )
  }
}

export default NavMenuDesktop