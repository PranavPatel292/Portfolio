import React from 'react'
import Pranav_Resume from './Pranav_Resume.pdf'
import copy from "copy-to-clipboard";  
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactTypingEffect from 'react-typing-effect';
import linkedin from './linkdin.png'
import git from './git.jpg'


const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

class ContactMe extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			email_id : "pranavpatel292@gmail.com"
		}
	}

	

	render(){
		return(
			<div className='image_modify1'>
				<div>
					<Container fluid className="myContainer conatcMe">
						<Row className="myContainerRow">
							<Col className="linkdinCol imageHover">
								<h3>Find me on <a href="https://www.linkedin.com/in/pranavpatel292/" target="new" data-toggle="tooltip" title="Linkedin"><img src={linkedin} style={{height: '40px', width: '40px'}} alt="linkdin_logo"/></a></h3>
							</Col>
							<Col>
								<h3>Message or Email me on Gmail at:</h3><h5><b><i id="email_address"><ReactTypingEffect text="pranav.patel292@gmail.com" speed={120} typingDelay={1000} /></i></b></h5>
							</Col>
						</Row>
						<ColoredLine color="white" />
						<Row className="myContainerRow">
						<Col className="imageHover">
							<h3 >Find me on <a href="https://github.com/PranavPatel292" target="new" data-toggle="tooltip" title="GitHub"><img src={git} alt="githib logo" style={{height: '40px', width: '40px'}}/></a></h3>
						</Col>
						</Row>
						<ColoredLine color="white" />
						<Row className="myContainerRow">
							<Col>
								<h3 style={{color: "white"}}>For my resume click <a href={Pranav_Resume} download> here </a></h3>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		)
	}
}

export default ContactMe