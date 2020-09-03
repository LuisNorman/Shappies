import React, { Component } from "react";
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'


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
        return (
            <Navbar className="navmenu" bg="dark" variant="dark">
                <Navbar.Brand href="">Shappies</Navbar.Brand>
                <Nav className="mr-auto ml-auto navlinks">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Explore</Nav.Link>
                    <Nav.Link href="#pricing">Locker</Nav.Link>
                    <Nav.Link href="logout" >Logout</Nav.Link>
                </Nav>
                <input className="text-line search" id="search" type="text" placeholder="Search" onKeyDown={this.handleKeyDown}/>
                {/* <Form inline >
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 searchBox" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar> 
        );
    }
}

export default NavbarPage;