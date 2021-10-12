import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import portrait from '../../../assets/IMG_1095.jpg';

function Main() {
  return (
    <Container>
      <Row>
        <Col>
          <Card bg='secondary' text='light' className='mb-2'>
            <Card.Title className='text-center'><h3>A Little About Me</h3></Card.Title>
          </Card>

          <Card bg='dark' className='mb-2'>
              <Image rounded width='425px' height='525px' className='mx-auto' src={portrait}/>
          </Card>

          <Card bg='secondary' text='light'>
            
            <Card.Body>
              <p>Hello World</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Main;