import { Container, Row, Col, Card } from 'react-bootstrap';

function Main() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Image</h1>
        </Col>
        <Col>
          <Card bg='secondary'>
            <Card.Title className='text-light text-center'>About Me</Card.Title>
            <Card.Body>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Main;