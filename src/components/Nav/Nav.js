import { Nav, Navbar, Container, Col } from 'react-bootstrap';

function Navigation() {
  return (
      <Navbar bg="secondary" className='mb-4'>
        <Container>
          <Col />
          <Nav className="me-auto text-light">
            <Nav.Link href="/" className='text-light'>HOME</Nav.Link>
            <Nav.Link href="#/portfolio" className='text-light'>PORTFOLIO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}


export default Navigation;