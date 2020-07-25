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
    <Routes>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="mr-auto">
              <Nav.Link href={process.env.PUBLIC_URL + "/AboutMe"} default>About Me</Nav.Link>
              <Nav.Link href={process.env.PUBLIC_URL + "/Project"}>Project</Nav.Link>
              <Nav.Link href={process.env.PUBLIC_URL + "/ContactMe"}>Contact Me</Nav.Link>
              <Nav.Link href={process.env.PUBLIC_URL + "#"}>Contact Me 1</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            <Route path={process.env.PUBLIC_URL + "/Project"} component={Project}/>
            <Route path={process.env.PUBLIC_URL + "/AboutMe"} component={AboutMe} />
            <Route path={process.env.PUBLIC_URL + "/ContactMe"} component={ContactMe}/>
            <Route exact path={"/"} component={AboutMe}/>

      </div>
    </Routes> 
    </div>
    </div>
	)
}

export default Header