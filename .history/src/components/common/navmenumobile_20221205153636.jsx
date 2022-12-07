import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import InputGroup from 'react-bootstrap/InputGroup';

import logo from '../../assets/imgs/logo.png'

export class NavMenuMobile extends Component {

    constructor() {
        super();
        this.state = {
            menupanel: "menupanelhide",
            cover: "coverhide"
        }

        this.onclickmenu = this.onclickmenu.bind(this);
        this.showmenu = this.showmenu.bind(this);
    }

    componentDidMount() {
        this.onclickmenu();
    }

    showmenu() {
        this.setState(
            {
                menupanel: "menupanelshow",
                cover: "covershow"
            }
        )
    }

    onclickmenu() {
        var buttonmenu = document.getElementById("menu");
        buttonmenu.addEventListener("click", this.showmenu);
    }



    render() {
        return (
            <Navbar bg="light" className='navbar' fluid='true' fixed='top'>
                <Container fluid='true' className='bg-primary w-100'>
                    <Row>
                        <Col lg={4} md={4} xs={12}>

                            <Button variant="primary">
                                <i className="fas fa-bars"></i> &nbsp;
                            </Button>

                            <img src={logo} alt="" className='nav-logo' />


                            <Button variant="primary">
                                <i className="fas fa-home"></i> &nbsp;
                            </Button>

                            <Button variant="primary">
                                <i className="fas fa-newspaper"></i> &nbsp;
                            </Button>


                            <Button variant="primary">
                                <i className="fas fa-map-marker-alt"></i> &nbsp;
                            </Button>


                            <Button variant="primary">
                                <i className="fas fa-phone-alt"></i> &nbsp;
                            </Button>


                            <Button variant="primary">
                                <i className="fas fa-bookmark"></i> &nbsp;
                            </Button>


                            <Button variant="primary">
                                <i className="fas fa-house-user"></i> &nbsp;
                            </Button>



                            <Button variant="primary">
                                <i className="fas fa-comment"></i><Badge bg="secondary">9</Badge><br />
                            </Button>

                            <Button variant="primary">
                                <i className="fas fa-shopping-cart"></i><br />
                            </Button>

                            <Button variant="primary">
                                <i className="fas fa-user"></i><br />
                            </Button>


                            <Button variant="primary">
                                <i className="fas fa-registered"></i><br />
                            </Button>

                            <Button variant="primary" id="button-addon4">
                                <i className="fas fa-search"></i>
                            </Button>


                            <Button variant="primary">
                                <i className="fas fa-sign-out-alt"></i><br />
                            </Button>


                        </Col>
                        <Col lg={4} md={4} xs={12}>
                            <InputGroup className="mt-3">
                                <Form.Control
                                    placeholder="Search"
                                    name='Search' />
                                <Button variant="primary" id="button-addon4">
                                    <i className="fas fa-search"></i>
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>

                </Container>

                <div id='menupanel' className={this.state.menupanel}> </div>
                <div id='cover' className={this.state.cover}> </div>

            </Navbar>
        )
    }
}

export default NavMenuMobile