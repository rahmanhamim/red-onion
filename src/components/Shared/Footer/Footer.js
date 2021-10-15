import React from "react";
import footerLogo from "../../../images/logo.png";

const Footer = () => {
 return (
  <div className="bg-dark text-light mt-5 py-5">
   <div className="container">
    <div className="row">
     <div className="col-12 col-md-3">
      <img style={{ width: "150px" }} src={footerLogo} alt="" />
      <hr />
     </div>
     <div className="col-12 col-md-3"></div>
     <div className="col-12 col-md-3">
      <p>About online food</p>
      <p>Read our blog</p>
      <p>Sign up to deliver</p>
      <p>Add your restaurant</p>
      <hr />
     </div>
     <div className="col-12 col-md-3">
      <p>Get help</p>
      <p>Read FAQs</p>
      <p>View all cities</p>
      <p>Restaurants near me</p>
      <hr />
     </div>
    </div>
    <p className="text-muted">All rights reserved &copy; 2022</p>
   </div>
  </div>
 );
};

export default Footer;
