import { Container, Col, Row, Card } from 'react-bootstrap';

function Portfolio() {
  const portfolioList = [
    {
      name: 'Handlebars Burger',
      image: 'https://raw.githubusercontent.com/jceb30198/Handlebars_Burger/main/public/assets/images/landing00.png',
      description: 'Simple web-application that moves burger names from the "hungry?" column to the "devoured!" column.',
      repoLink: 'https://github.com/jceb30198/Handlebars_Burger',
      deployedLink: 'https://limitless-forest-28943.herokuapp.com/'
    },
    {
      name: 'Note Taker',
      image: 'https://raw.githubusercontent.com/jceb30198/Note_Taker/main/public/assets/images/landing.png',
      description: 'A web application that saves notes written by the user.',
      repoLink: 'https://github.com/jceb30198/Note_Taker',
      deployedLink: 'https://ancient-island-96365.herokuapp.com/'
    },
    {
      name: 'Employee Management System',
      image: 'https://raw.githubusercontent.com/jceb30198/Management_System/main/Assets/management.png',
      description: 'A command line application that can be used to manage the employee database.',
      repoLink: 'https://github.com/jceb30198/Management_System'
    },
    {
      name: 'Mood Queue',
      image: 'https://raw.githubusercontent.com/jceb30198/Mood_Queue/main/Assets/base.png',
      description: 'A web application that gives the user a selection of music depending on their mood.',
      repoLink: 'https://github.com/jceb30198/Mood_Queue',
      deployedLink: 'https://jceb30198.github.io/Mood_Queue/'
    },
    {
      name: 'Weather Dashboard',
      image: 'https://raw.githubusercontent.com/jceb30198/Weather_Dashboard/main/assets/miami.png',
      description: 'A web application to check the weather of any city in the United States.',
      repoLink: 'https://github.com/jceb30198/Weather_Dashboard',
      deployedLink: 'https://jceb30198.github.io/Weather_Dashboard/'
    },
    {
      name: 'Work Day Scheduler',
      image: 'https://raw.githubusercontent.com/jceb30198/Work_Scheduler/main/Assets/schedule.png',
      description: 'A website that allows a user to create a scheduler for the work day.',
      repoLink: 'https://github.com/jceb30198/Work_Scheduler',
      deployedLink: 'https://jceb30198.github.io/Work_Scheduler/'
    },
    {
      name: 'Password Generator',
      image: 'https://raw.githubusercontent.com/jceb30198/Password_Generator/main/assets/first_prompt.png',
      description: 'A web application that allows the user to create a randomly generated password.',
      repoLink: 'https://github.com/jceb30198/Password_Generator',
      deployedLink: 'https://jceb30198.github.io/Password_Generator/'
    },
    {
      name: 'Code Quiz',
      image: 'https://raw.githubusercontent.com/jceb30198/Code_Quiz/main/assets/Beginning.png',
      description: 'A small quiz on web-development to test your knowledge.',
      repoLink: 'https://github.com/jceb30198/Code_Quiz',
      deployedLink: 'https://jceb30198.github.io/Code_Quiz/'
    }
  ]

  return (
    <Container>
      <Row>
      {portfolioList.map((project) => {
        return(
        <Col xs={4}>
          <Card bg='secondary' text='light' className='text-center mb-2'>
            <Card.Title>{project.name}</Card.Title>
            <Card.Img src={project.image}></Card.Img>
            <Card.Body>
              <Card.Text>{project.description}</Card.Text>
              <Card.Link className='text-light' href={project.repoLink}>Repository</Card.Link>
              {project.deployedLink ? <Card.Link className='text-light' href={project.deployedLink}>Deployed App</Card.Link> : ''}
            </Card.Body>
          </Card>
        </Col>
        )
      })}
      </Row>
    </Container>
  )
}

export default Portfolio;