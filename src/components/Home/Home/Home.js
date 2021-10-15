import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import Foods from "../Foods/Foods";

const Home = () => {
 return (
  <div>
   <Header></Header>
   <Banner></Banner>
   <Foods></Foods>
   <Feature></Feature>
   <Footer></Footer>
  </div>
 );
};

export default Home;
