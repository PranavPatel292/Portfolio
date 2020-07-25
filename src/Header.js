import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Route, BrowserRouter as Routes  } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './AboutMe'
import Project from './Project'
import ContactMe from './ContactMe'

function Header(){
	return(
    <div>
    <div class="image">
      <h1 style={{color:"white"}}>Hii</h1>
    </div>
    </div>
	)
}

export default Header