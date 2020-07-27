import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Route, Link, HashRouter as Routes  } from 'react-router-dom'
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
    {console.log("hii", process.env.PUBLIC_URL)}
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="mr-auto">
              <Nav.Link as={Link} to="/AboutMe" default>About Me</Nav.Link>
              <Nav.Link as={Link} to="/Project">Project</Nav.Link>
              <Nav.Link as={Link} to="/ContactMe">Contact Me</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            <Route path="/Project" component={Project}/>
            <Route path="/AboutMe" component={AboutMe} />
            <Route path="/ContactMe" component={ContactMe}/>
            <Route exact path="/" component={AboutMe}/>

      </div>
    </Routes> 
    </div>
    </div>
	)
}

export default Header