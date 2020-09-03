import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'


class NavbarPage extends Component {
    state = {
    isOpen: false
    };


    toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="">Shappies</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Explore</Nav.Link>
                <Nav.Link href="#pricing">Locker</Nav.Link>
                <Nav.Link href="logout" >Logout</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
            </Navbar> 
        );
    }
}

export default NavbarPage;