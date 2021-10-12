import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import portrait from '../../../assets/IMG_1095.jpg';
import resume from '../../../assets/JackRCeballosResume.pdf';

function Main() {
  return (
    <Container>
      <Row>
        <Card bg='secondary' text='light' className='mb-1 text-center'>
          <h2>Hey there, I'm Jack Ceballos!</h2>
        </Card>
      </Row>
      <Row>
        <Card bg='dark' className='mb-2'>
          <Image roundedCircle width='425px' height='525px' className='mx-auto' src={portrait} />
        </Card>
      </Row>
      <Row>
        <Col xs={9}>
          <Card bg='secondary' text='light' className='mb-2'>
            <Card.Body>
              <p>I graduated from Florida International University with a bachelor's degree in International Business Administration. Growing up two things that would fascinate me were food and computers. When it was time to get a job while going through college I would work full-time in different positions throughout the restaurant and beer production industry. Once I entered the brewing industry I became infatuated and spent almost every waking moment learning the different processes that go in beer making. Not too long after my start in the brewing industry the world was sent into a pandemic due to COVID-19 and that was when I decided to make a pivot.</p>

              <p>My job at the time had to let me go and I ended up spending a lot of time on my computer during the quarantine. I began learning to code on W3schools.com and then got eager to learn more. After looking on the internet for a while I found that the University of Miami has a Full-Stack Development Bootcamp, so I immediately applied. I finished the six-month course and have learned many new skills along with a greater understand of how the web works.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={3}>
          <Card bg='secondary' text='light'>
            <Card.Title>Useful Links:</Card.Title>
            <ul>
              <li>
                <a href='https://www.linkedin.com/in/jackceballosmia/' className='text-light' target='_blank' rel='noreferrer'>LinkedIn</a>
              </li>
              <li>
                <a href='https://github.com/jceb30198' className='text-light' target='_blank' rel='noreferrer'>GitHub</a>
              </li>
              <li>
                <a href={resume} className='text-light' target='_blank' rel='noreferrer'>Resume</a>
              </li>
            </ul>

          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Main;