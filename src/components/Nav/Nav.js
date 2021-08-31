import React from 'react';
import { Nav, Navbar, Container, Col } from 'react-bootstrap';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    }
  }
  
  
  render() {

    return (
      <Navbar bg="secondary">
        <Container>
          <Col xs={12}/>
          <Nav className="me-auto text-light">
            <Nav.Link href="#home" className='text-light'>ABOUT</Nav.Link>
            <Nav.Link href="#portfolio" className='text-light'>PORTFOLIO</Nav.Link>
            <Nav.Link href="#contact" className='text-light'>CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export default Navigation;