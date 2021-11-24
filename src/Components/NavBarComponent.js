import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useAuth} from '../Context/AuthContext';
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Button, Form , FormControl, Alert  } from "react-bootstrap";
import '../styles/NavbarStyle.css';
import imgLogo from '../Images/Showcase.png';



const NavBarComponent = () => {

    const [error, setError] = useState("");
    const {currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout () {
        setError('')

        try{
            await logout()
            history.push('/login');
        }
        catch{
            setError('Faild to logout')
        }

    }

    return (
        <Navbar style ={{backgroundColor:"#fff"}} expand="lg" >
            <Navbar.Brand href="#">
                <img className = "app_headerImage"
                    src = {imgLogo}
                    alt ="Showcae_logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            
            <Navbar.Collapse id="navbarScroll" style = {{display:"flex", justifyContent:"space-between"}} >
                <Form className="d-flex" >
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
                    <Nav.Link href="#action2">{currentUser.displayName}</Nav.Link>
                    <NavDropdown id="navbarScrollingDropdown">
                        
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>

            </Navbar.Collapse>
            
            {error && <Alert variant="danger">{error}</Alert>}
        </Navbar> 
    );
}

export default NavBarComponent;