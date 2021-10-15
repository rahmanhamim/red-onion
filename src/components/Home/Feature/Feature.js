import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Feature.css";
import featureImg1 from "../../../images/Image/feature-1.png";
import featureImg2 from "../../../images/Image/feature-2.png";
import featureImg3 from "../../../images/Image/feature-3.png";

const Feature = () => {
 return (
  <div className="container">
   <div className="feature-title">
    <div className="col col-md-6">
     <h1>Why you choose us?</h1>
     <p>
      Delicious feast of exquisite dishes in Artichaut. With a wide range of
      world cuisines to choose from, we guarantee you a sumptuous feast
      experience in our restaurant! Here you will dive into a friendly and
      romantic atmosphere and enjoy our haute cuisine. With our great selection
      of dishes from all over the world you can feel yourself as a traveler and
      true gourmet!
     </p>
    </div>
   </div>
   <Row xs={1} md={3} className="g-4">
    <Col>
     <Card className="feature-card">
      <Card.Img variant="top" src={featureImg1} />
      <Card.Body>
       <Card.Title>
        <i className="fas fa-bus icon-style"></i> Fast Delivery
       </Card.Title>
       <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
       </Card.Text>
      </Card.Body>
     </Card>
    </Col>
    <Col>
     <Card className="feature-card">
      <Card.Img variant="top" src={featureImg2} />
      <Card.Body>
       <Card.Title>
        <i className="fas fa-bell icon-style"> </i> A Good Auto Responder
       </Card.Title>
       <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
       </Card.Text>
      </Card.Body>
     </Card>
    </Col>
    <Col>
     <Card className="feature-card">
      <Card.Img variant="top" src={featureImg3} />
      <Card.Body>
       <Card.Title>
        <i className="fas fa-truck icon-style"></i> Home Delivery
       </Card.Title>
       <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
       </Card.Text>
      </Card.Body>
     </Card>
    </Col>
   </Row>
  </div>
 );
};

export default Feature;
