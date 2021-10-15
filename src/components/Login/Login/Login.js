import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import logo from "../../../images/logo2.png";
import googleLogo from "../../../images/ICON/google.svg";
import facebookLogo from "../../../images/ICON/facebook.svg";
import useFirebase from "../../Hooks/useFirebase";
import Header from "../../Shared/Header/Header";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
 const { googleSignIn } = useAuth();

 return (
  <>
   <Header></Header>
   <div className="login-page d-flex align-items-center">
    <div className="container d-flex justify-content-center ">
     <div className="login-section-container">
      <img src={logo} className="mb-5" style={{ maxWidth: "20rem" }} alt="" />
      <Form>
       <Form.Group className="mb-3">
        <Form.Control className="login-input" type="text" placeholder="Name" />
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
         className="login-input"
         type="email"
         placeholder="Enter email"
        />
        <Form.Text className="text-muted">
         We'll never share your email with anyone else.
        </Form.Text>
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
         className="login-input"
         type="password"
         placeholder="Password"
        />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
         className="login-input"
         type="password"
         placeholder="Confirm Password"
        />
       </Form.Group>

       <Button className="btn-regular ms-0" type="submit">
        Login
       </Button>

       <hr />
      </Form>
      <button onClick={googleSignIn} className="login-provider-btn m-1">
       <img
        src={googleLogo}
        style={{ maxWidth: "25px", display: "inline" }}
        alt=""
        className="me-2"
       />
       Sign in With Google
      </button>
      <button className="login-provider-btn m-1">
       <img
        src={facebookLogo}
        style={{ maxWidth: "25px", display: "inline" }}
        alt=""
        className="me-2"
       />
       Facebook Sign in
      </button>
     </div>
    </div>
   </div>
  </>
 );
};

export default Login;
