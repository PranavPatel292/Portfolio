import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './main.css';

class Experience extends React.Component{
	render(){
		return(
			<div>
				<h5>{this.props.exp.organization}, {this.props.exp.city}, {this.props.exp.state}, {this.props.exp.country}</h5>
				<p>{this.props.exp.title}</p> 
			</div>
		)
	}
}

export default Experience