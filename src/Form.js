import React from 'react';
import FormComponets from './FormComponets'
class Form extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			firstName: "",
			lastName:  "",
			gender: "",
			S1 : false,
			S2 : true
		}

		this.changeHandle = this.changeHandle.bind(this)
	}

	changeHandle(event){
		const {name, value, type, checked} = event.target
		type === "checkbox" ? this.setState({[name] : checked}) : this.setState({
			[name]: value
		})
	}

	render(){
	  // const newData = productData.map(data => <Product key = {data.id} product={data} />)
	  return (
	   <FormComponets data={this.state} changeHandle={this.changeHandle} />
	  )   
	} 
}

export default Form