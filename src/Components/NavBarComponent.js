import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useAuth} from '../Context/AuthContext';
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Button, Form , FormControl, Alert  } from "react-bootstrap";
import '../styles/NavbarStyle.css';
import imgLogo from '../Images/Showcase.png';
import { FaCartPlus } from "react-icons/fa";
import { MdPlaylistAdd } from "react-icons/md";

const NavBarComponent = () => {

    const [error, setError] = useState("");
    const {currentUser, logout, updateprofile } = useAuth();
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

    async function handleUpdate () {
        setError('')

        try{
            await updateprofile()
            history.push('/');
        }
        catch{
            setError('Faild to update')
        }

    }    
    
    return (
       
        <Navbar style ={{backgroundColor:"#fff", paddingRight:'90px'}} expand="lg" >
            <Navbar.Brand href="#">
                <img className = "app_headerImage"
                    src = {imgLogo}
                    alt ="Showcae_logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            
            <Navbar.Collapse id="navbarScroll" style = {{display:"flex", justifyContent:'space-between'}} >
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
                    <Nav.Link href="#action1"><MdPlaylistAdd style={{fontSize : '30px'}} /> </Nav.Link>
                    <Nav.Link href="#action1"><FaCartPlus style={{fontSize : '25px'}}/> </Nav.Link>
                    <NavDropdown title = { <img className = "user_avtar" src ={currentUser && currentUser.photoURL} />} id="navbarScrollingDropdown">
                        
                        <NavDropdown.Item><Link to="/addproduct" style ={{textDecoration:'none', color:'black'}}>Add Product</Link></NavDropdown.Item>
                        <NavDropdown.Item onClick = {handleUpdate}>Update</NavDropdown.Item>
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