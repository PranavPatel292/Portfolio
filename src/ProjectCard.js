import React from 'react'
import Card from 'react-bootstrap/Card'

class ProjectCard extends React.Component{
	render(){
		return(
						<Card style={{opacity: '0.9', 'text-align': 'justify', margin: '10px', overflow: 'hidden'}} bg='dark' text='white' className='p-3'>
							<Card.Img variant="bottom" src={this.props.proj.image} alt="no_img" className="imageDisplay" />
							<Card.Body>
								<Card.Title>{this.props.proj.name}</Card.Title>
								<Card.Text>
								<b>Description: -</b>{this.props.proj.desc}{this.props.proj.IEEE_link == "" ? null : <div><Card.Link href={this.props.proj.IEEE_link} target="new">Show me the paper</Card.Link></div>}
								</Card.Text>
								<Card.Text>
									<b>Used language(s): </b> - <i>{this.props.proj.language}</i>
								</Card.Text>
								{this.props.proj.code_demo == '' ? null : <Card.Link href={this.props.proj.code_demo} target="new">Clik here to see code work</Card.Link>}
								{this.props.proj.video_URL == '' ? null : <Card.Link href={this.props.proj.video_URL} target="new">Click to see video work</Card.Link>}
							</Card.Body>
						</Card>
					
		)
	}
}
export default ProjectCard