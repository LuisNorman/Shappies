import React, { Component } from "react";
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import { Link, Router } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavbarPage extends Component {
    state = {
    isOpen: false
    };

    toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
    }

    handleKeyDown(event) {
        if (event.key === 'Enter') {
            alert("searching")
        }
    } 

    

    render() {
        
        let homeActive = window.location.pathname == "/home"
        let exploreActive = window.location.pathname == "/explore"
        let lockerActive = window.location.pathname == "/locker"
        let logoutActive = window.location.pathname == "/logout"

        if (homeActive) homeActive = "active"
        else if (exploreActive) exploreActive = "active"
        else if (lockerActive) lockerActive = "active"
        else if (logoutActive) logoutActive = "active"


        return (
            <Navbar className="navmenu" bg="dark" variant="dark">
                <Navbar.Brand href="">Shappies</Navbar.Brand>
                <Nav className="mr-auto ml-auto navlinks">
                    <Nav.Link href="home" className={homeActive}>Home</Nav.Link>
                    <Nav.Link href="explore" className={exploreActive}>Explore</Nav.Link>
                    <Nav.Link href="locker" className={lockerActive}>Locker</Nav.Link>
                    <Nav.Link href="logout" className={logoutActive}>Logout</Nav.Link>
                </Nav>
                <span class="fa fa-search form-control-feedback"></span>
                <input className="text-line search " id="search" type="text" placeholder="Search" onKeyDown={this.handleKeyDown}/>
                {/* <Form inline >
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 searchBox" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar> 
        );
    }
}

export default NavbarPage;