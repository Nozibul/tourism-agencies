import React from "react";
import "./header.css";
import logo from "./../../assets/image/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        className="header-bg"
        collapseOnSelect
        expand="lg"
        sticky-top
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand to="/home">
            <img className="logo " src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto bg ">
              <Nav.Link
                as={NavLink}
                className="text-dark  fw-bolder"
                to="/home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="text-dark  fw-bolder"
                to="/about"
              >
                About
              </Nav.Link>

              {user?.email && (
                <Nav.Link
                  as={NavLink}
                  className="text-dark  fw-bolder"
                  to="/myOrder"
                >
                  My Order{" "}
                </Nav.Link>
              )}
              {user?.email && (
                <Nav.Link
                  as={NavLink}
                  className="text-dark  fw-bolder"
                  to="/allOrder"
                >
                  Manage All Order{" "}
                </Nav.Link>
              )}
              {user?.email && (
                <Nav.Link
                  as={NavLink}
                  className="text-dark  fw-bolder"
                  to="/addProduct"
                >
                  Add Product
                </Nav.Link>
              )}

              <Nav.Link
                as={NavLink}
                className="text-dark fw-bolder"
                to="/contact"
              >
                {" "}
                Contact{" "}
              </Nav.Link>
            </Nav>
            <Nav >
              <p>{user?.displayName}</p>
              {user?.email ? (
                <button className="login-btn" onClick={logOut}>
                  <Nav.Link
                    as={NavLink}
                    className="text-dark  fw-bolder"
                    to="/login"
                  >
                    Sign Out
                  </Nav.Link>
                </button>
              ) : (
                <button className="login-btn">
                  <Nav.Link
                    as={NavLink}
                    className="text-dark  fw-bolder"
                    to="/login"
                  >
                    Login
                  </Nav.Link>
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
