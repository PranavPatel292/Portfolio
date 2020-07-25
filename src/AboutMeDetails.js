import React from 'react'
import ReactTypingEffect from 'react-typing-effect';

class AboutMeDetails extends React.Component{
	render(){
		return(
			<div>
				<div className='description'>
					<h1>About Me</h1>
					<p id='demo'> <ReactTypingEffect text="a highly self-motivated tech enthusiast student ready to make an impact by strong problem-solving skills. 
						A capable individual seeking for an opportunity to solve the complex business problems in a logical and innovative way." speed={50} typingDelay={1500} staticText="Hi, I am Pranav Patel,"/>
					</p>
				</div>
			</div>
		)
	}
}

export default AboutMeDetails