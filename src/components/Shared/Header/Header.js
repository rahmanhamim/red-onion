import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
 const { user, logOut } = useAuth();

 return (
  <Navbar bg="light" expand="lg">
   <Container className="py-2">
    <Link to="/">
     <img style={{ width: "100px" }} src={logo} alt="" />
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="ms-auto d-flex justify-content-center align-items-center">
      <i className="fas fa-sign-in-alt mx-2"></i>
      {user.email && (
       <div className="d-flex justify-content-center align-items-center">
        {" "}
        <img
         style={{ width: "40px", borderRadius: "50%" }}
         src={user.photoURL}
         alt=""
        />
        <p className="m-2 fw-bold">{user.displayName}</p>
       </div>
      )}

      {!user.email ? (
       <>
        <Link className="text-decoration-none m-2 text-dark" to="/login">
         Login
        </Link>
        <Link to="/login">
         <button className="btn-regular">Sign Up</button>
        </Link>
       </>
      ) : (
       <button onClick={logOut} className="btn-regular ">
        Logout
       </button>
      )}
     </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
};

export default Header;
