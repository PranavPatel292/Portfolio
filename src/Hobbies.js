import React from 'react'

class Hobbies extends React.Component{
	render(){
		return(
			<div>
				<img src={this.props.myHobbies.image_src} style={{height:'50px', width : '50px'}} alt={this.props.myHobbies.alt_name} />
				<h6 className='delevloperName1'>{this.props.myHobbies.name}</h6>
			</div>
		)
	}
}

export default Hobbies