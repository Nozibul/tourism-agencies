import React from 'react';
import './header.css'
import logo from './../../assets/image/logo.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <Navbar className="header-bg" collapseOnSelect expand="lg" sticky-top variant="dark">
            ` <Container fluid>
                <Navbar.Brand to="/home"><img className="logo" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto bg">
                        <Nav.Link as={NavLink} className="text-dark  fw-bolder"  to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} className="text-dark  fw-bolder" to="/services">Service </Nav.Link>
                        <Nav.Link as={NavLink} className="text-dark  fw-bolder" to="/myOrder">My Order </Nav.Link>
                        <Nav.Link as={NavLink} className="text-dark  fw-bolder" to="/allOrder">Manage All Order </Nav.Link>
                        {/* <Nav.Link as={NavLink} className="text-dark  fw-bolder" to="/about">About</Nav.Link> */}
                        <Nav.Link as={NavLink} className="text-dark fw-bolder" to="/contact"> Contact </Nav.Link>
                        {/*<NavDropdown title="Dropdown">
                             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <button className="login-btn"><Nav.Link as={NavLink} className="text-dark  fw-bolder" to="/login">Login</Nav.Link></button>
                        
                    </Nav>
                </Navbar.Collapse>
             </Container >
            </Navbar>`
        </div>
    );
};

export default Header;