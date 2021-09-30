import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Button, Form , FormControl  } from "react-bootstrap";
import '../styles/NavbarStyle.css';
import imgLogo from '../Images/Showcase.png';

const NavBarComponent = () => {
    return (
        <Navbar style ={{backgroundColor:"#fff"}} expand="lg">
            <Navbar.Brand href="#">
                <img className = "app_headerImage"
                    src = {imgLogo}
                    alt ="Showcae_logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                </Form>
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBarComponent;