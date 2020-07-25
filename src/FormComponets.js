import React from 'react'

class FormComponets extends React.Component{
	render(){
		console.log(this.props)
		return(
				<div>
				<form>
	    			<label>First Name</label><input type="text" name="firstName" value={this.props.data.firstName} onChange={this.props.changeHandle}/><br/>
	    			<label>Last Name</label><input type="text" name="lastName"  value={this.props.data.lastName} onChange={this.props.changeHandle}/><br/><br/>
		    		<label>Gender</label><input type="radio" name="gender" value="male" onChange={this.props.changeHandle}/>Male<input type="radio" name="gender" value="female" onChange={this.props.changeHandle}/>Female<br/><br/>
		    		<label>Course</label><input type="checkbox" name="S1" onChange={this.props.changeHandle} checked={this.props.data.S1}/>S1<input type="checkbox" name="S2" checked={this.props.data.S2} onChange={this.props.changeHandle}/>S2
	    		</form>
	    		<h1>{this.props.data.firstName} {this.props.data.lastName} {this.props.data.gender} S1: - {this.props.data.S1 ? "Yes" : "No"} S2: - {this.props.data.S2 ? "Yes" : "No"}</h1>
	   			</div>
			)
	}
}


export default FormComponets
