import React from 'react';
import { Nav, Navbar, Container, Col } from 'react-bootstrap';

function Navigation() {
  return (
    <Container>
      <Navbar bg="secondary">
        <Container>
          <Col />
          <Nav className="me-auto text-light">
            <Nav.Link href="/" className='text-light'>ABOUT</Nav.Link>
            <Nav.Link href="/portfolio" className='text-light'>PORTFOLIO</Nav.Link>
            <Nav.Link href="/contact" className='text-light'>CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  )
}


export default Navigation;