import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Lunch.css";

const Lunch = () => {
 const [lunch, setLunch] = useState([]);
 useEffect(() => {
  fetch("./foodsLunch.json")
   .then((res) => res.json())
   .then((data) => setLunch(data));
 }, []);

 return (
  <div className="">
   <Row xs={1} md={3} className="g-4">
    {lunch.map((item) => (
     <Col key={item.id}>
      <Card className="h-100 food-card py-3 m-0">
       <Card.Img variant="top" className="card-img" src={item.img} />
       <Card.Body className="card-details">
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.des}</Card.Text>
        <Card.Text className="fs-3 fw-bold">{item.price}$</Card.Text>
       </Card.Body>
      </Card>
     </Col>
    ))}
   </Row>
  </div>
 );
};

export default Lunch;
