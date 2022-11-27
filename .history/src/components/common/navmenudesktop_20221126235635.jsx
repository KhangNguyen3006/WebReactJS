import React, { Component } from 'react'

export class NavMenuDesktop extends Component {
  render() {
    return (
        <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
    )
  }
}

export default NavMenuDesktop