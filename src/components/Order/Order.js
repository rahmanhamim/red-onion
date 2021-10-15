import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Order.css";
import orderPhoto from "../../images/ICON/order-logo.svg";
import logo from "../../images/logo2.png";
import { Link } from "react-router-dom";

const Order = () => {
 return (
  <>
   <div className="order-page d-flex  align-items-center">
    <div className="container">
     <Link to="/" className="d-block mt-5 mb-4">
      <img style={{ width: "200px" }} className="mx-auto" src={logo} alt="" />
     </Link>
     <div className="row d-flex justify-content-around align-items-center">
      <div className="col-12 col-md-5">
       <h4>Delivery Details</h4>
       <hr />
       <Form>
        <Form.Group className="mb-3">
         <Form.Control
          className="login-input"
          type="text"
          placeholder="Delivery Address"
         />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control
          className="login-input"
          type="text"
          placeholder="Street Number"
         />
        </Form.Group>

        <Form.Group className="mb-3">
         <Form.Control
          className="login-input"
          type="text"
          placeholder="Business Name"
         />
        </Form.Group>
        <Form.Group className="mb-3">
         <Form.Control
          className="login-input"
          type="text"
          placeholder="Other instruction"
         />
        </Form.Group>

        <Button className="btn-regular ms-0" type="submit">
         Confirm
        </Button>

        <hr />
       </Form>
      </div>
      <div className="col-12 col-md-5">
       <img src={orderPhoto} alt="" />
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default Order;
