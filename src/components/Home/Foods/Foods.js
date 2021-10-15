import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Food from "../Food/Food";

import "./Foods.css";

const Foods = () => {
 return (
  <div className="container foods-section my-5">
   <div className="foods-section-title">
    <Food></Food>
   </div>
   <Link to="/order" className="text-decoration-none">
    <button className="btn-regular mx-auto d-block my-5 fs-5 ">
     Checkout your food
    </button>
   </Link>
  </div>
 );
};

export default Foods;
