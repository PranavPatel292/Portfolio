import React from 'react'

class Skills extends React.Component{
	render(){
		console.log(this.props)
		return(
			<div>
				<h6>{this.props.mySkills.type}: - <p class='delevloperName'>{this.props.mySkills.language}</p></h6>
			</div>
		)
	}
}

export default Skills