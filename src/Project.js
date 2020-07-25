import React from 'react'
import ProjectDetails from './ProjectDetails'
import ProjectCard from './ProjectCard'
import CardColumns from 'react-bootstrap/CardColumns'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'



class Project extends React.Component{

	render(){
    const myProject = ProjectDetails.map(item => { return <Col sm="4"> <ProjectCard key={item.key} proj={item} /> </Col>})

		return(
        <Container fluid>
          <Row>
                {myProject}
          </Row>
        </Container>
			)
	}
}

export default Project