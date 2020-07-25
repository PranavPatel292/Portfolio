import React from 'react'
import Education from './Education'
import educationDetails from './educationDetails'
import Skills from './Skills'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AboutMeDetails from './AboutMeDetails'
import jobHistory from './jobHistory'
import Experience from './Experience'
import myHobbies from './myHobbies'
import Hobbies from './Hobbies'
import skillDetails from './skillDetails'
import './main.css'


const myEducation = educationDetails.map(item => <Education key={item.key} edu={item}/>)
const myExperience = jobHistory.map(item => <Experience key={item.key} exp={item}/>)
const myListHobbies = myHobbies.map(item => <Hobbies key={item.key} myHobbies={item} />)
const mySkils = skillDetails.map(item=><Skills key={item.key} mySkills={item} />)


class AboutMe extends React.Component{

	 constructor(props) {
    	super(props);
    	// Initial state
    	this.state = { open: false };
    	this.toggle = this.toggle.bind(this)
    }

    toggle(){
    	this.setState({open: !this.state.open})
    }

	render(){
		return(
			<div className="image_modify">
				<Container fluid>
					<Row>
						<Col>
							<AboutMeDetails />
						</Col>
						<Col>
							<Accordion>
								<Row>
									<Col>
									<div className='makeMargin'>
	  									<Card>
	    									<Card.Header>
	      										<Accordion.Toggle as={Button} variant="link" eventKey="1"><b>Click here to reveal my Education details!</b></Accordion.Toggle>
	    									</Card.Header>
	    									<Accordion.Collapse eventKey="1">
	      										<Card.Body>{myEducation}</Card.Body>
	    									</Accordion.Collapse>
	  									</Card>
	  								</div>
									</Col>
								</Row>
								<Row>
									<Col>
									<div className='makeMargin'>
										<Card>
											<Card.Header>
												<Accordion.Toggle as={Button} variant="link" eventKey="0"><b>Click here to reveal my previously tested history!</b></Accordion.Toggle>
											</Card.Header>
												<Accordion.Collapse eventKey="0">
												<Card.Body>{myExperience}</Card.Body>
												</Accordion.Collapse>
										</Card>
									</div>
									</Col>
								</Row>
								<Row>
									<Col>
									<div className='makeMargin'>
										<Card>
											<Card.Header>
												<Accordion.Toggle as={Button} variant="link" eventKey="2"><b>Click here to reveal my skill!</b></Accordion.Toggle>
											</Card.Header>
												<Accordion.Collapse eventKey="2">
												<Card.Body>{mySkils}</Card.Body>
												</Accordion.Collapse>
										</Card>
									</div>
									</Col>
								</Row>
								<Row>
									<Col>
									<div class='makeMargin'>
										<Card>
											<Card.Header>
												<Accordion.Toggle as={Button} variant="link" eventKey="3"><b>Click here to see what I like to do!</b></Accordion.Toggle>
											</Card.Header>
												<Accordion.Collapse eventKey="3">
												<Card.Body>{myListHobbies}</Card.Body>
												</Accordion.Collapse>
										</Card>
									</div>
									</Col>
								</Row>
							</Accordion>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default AboutMe