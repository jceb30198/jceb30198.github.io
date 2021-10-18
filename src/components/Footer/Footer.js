import { Row, Col } from 'react-bootstrap';
import resume from '../../assets/JackRCeballosResume.pdf';

function Footer() {
  const styles = {
    root: {
      height: '175px'
    },
    list: {
      listStyleType: 'none'
    },
    link: {
      textDecoration: 'none'
    }
  }

  return (
    <div className='text-light bg-secondary p-3 fixed-bottom' style={styles.root}>
    <Row>
      <Col>
        <h6>Made with React-Boostrap and Boostrap</h6>
      </Col>
      <Col>
        <h6>Contact Information:</h6>
        <ul style={styles.list}>
          <li>jackrceballos@gmail.com</li>
        </ul>
      </Col>
      <Col>
        <h6>Links:</h6>
          <ul style={styles.list}>
            <li><a href='/' className='text-light' style={styles.link}>Home</a></li>
            <li><a href='/portfolio' className='text-light' style={styles.link}>Portfolio</a></li>
            <li>
            <a href='https://www.linkedin.com/in/jackceballosmia/' className='text-light' style={styles.link} target='_blank' rel='noreferrer'>LinkedIn</a>
            </li>
            <li>
            <a href='https://github.com/jceb30198' className='text-light' style={styles.link} target='_blank' rel='noreferrer'>GitHub</a>
            </li>
            <li>
              <a href={resume} className='text-light' style={styles.link} target='_blank' rel='noreferrer'>Resume</a>
              </li>
          </ul>
      </Col>
      </Row>
    </div>
  )
}

export default Footer;