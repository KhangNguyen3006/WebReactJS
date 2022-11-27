import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
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
                  placeholder="Search"
                  name='Search'
                />
                <Button variant="outline-secondary" id="button-addon2">
                  <i className="fas fa-search"></i>
                </Button>
              </InputGroup>
            </Col>
            <Col lg={4} md={4} xs={12}>
              <div className='mt-2'>

                <Button variant="primary">
                  <i className="fas fa-comment"></i><Badge bg="secondary">9</Badge><br />
                  Message
                  <span className="visually-hidden">unread messages</span>
                </Button>

                <Button variant="primary">
                  <i class="fas fa-shopping-cart"></i><br />
                  Cart
                </Button>

                <Button variant="primary">
                  <i class="fas fa-user"></i><br />
                  Login
                </Button>


                <Button variant="primary">
                  <i class="fas fa-registered"></i><br />
                  Register
                </Button>


                <Button variant="primary">
                  <i class="fas fa-sign-out-alt"></i><br />
                  Register
                </Button>

              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="primary">
                <i class="fas fa-home"></i><br />
                Register
              </Button>
            </Col>
          </Row>

        </Container>
      </Navbar>
    )
  }
}

export default NavMenuDesktop