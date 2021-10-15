import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Breakfast from "../Breakfast/Breakfast";
import Dinner from "../Dinner/Dinner";
import Lunch from "../Lunch/Lunch";
import "./Food.css";

const Food = () => {
 return (
  <div>
   <Tabs defaultActiveKey="profile" className="foods-nav-tab">
    <Tab eventKey="home" title="Breakfast">
     <Breakfast></Breakfast>
    </Tab>
    <Tab eventKey="profile" title="Lunch">
     <Lunch></Lunch>
    </Tab>
    <Tab eventKey="contact" title="Dinner">
     <Dinner></Dinner>
    </Tab>
   </Tabs>
  </div>
 );
};

export default Food;
