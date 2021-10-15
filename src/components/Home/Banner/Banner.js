import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-section d-flex justify-content-center align-items-center">
      <div className="banner-content">
        <h1>Best food waiting for your belly</h1>
        <InputGroup className="my-3 ">
          <FormControl
            className="input-banner"
            placeholder="Search food items"
          />
          <button className="btn-regular">Search</button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Banner;
