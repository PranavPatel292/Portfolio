import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './main.css';

class Education extends React.Component{
	render(){
		return(
			<div>
				<h5>{this.props.edu.institution} ({this.props.edu.acronym}), {this.props.edu.city}, {this.props.edu.state}, {this.props.edu.country}</h5>
				<p>{this.props.edu.award}</p> 
			</div>
		)
	}
}

export default Education