import React from "react";
import Drones from "../Drones/Drones";
import Header from "../Header/Header";
import Info from "../Info/Info";
import Reviews from "../Reviews/Reviews";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header></Header>
      <Drones></Drones>
      <Reviews />
      <Info></Info>
      <Footer></Footer>
    </div>
  );
};

export default Home;
