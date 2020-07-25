import React from 'react'

class Product extends React.Component{

	render(){
		return(
		<div>
			{this.props.product.name === "Pencil" && this.props.product.price > 0 ? <div><h2>Name: - {this.props.product.name}</h2><img src={this.props.product.url} alt={this.props.product.name + " image"}/></div> : null}
			
		</div>
		)
	}
	
}

export default Product