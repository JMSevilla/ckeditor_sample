import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
export default class NavigationBar extends React.Component { 
    render(){
        return(
            <div>
               
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://react-bootstrap.github.io/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      React Bootstrap
      </Navbar.Brand>
    </Container>
  </Navbar>
            </div>
        )
    }
}