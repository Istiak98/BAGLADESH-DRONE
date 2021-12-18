import React from "react";
import Navbar  from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
// import { Link } from "react-router-dom";
import "./Aboutus.css";
const Aboutus = () => {
  return (
    <div>
     <Navbar/>
      <div className="image-aboutus-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="lg-text">About US</h1>
              <p className="image-aboutus-para">BANGLADESH DRONES</p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutus-secktion paddingTB60">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="strong">
                Who we are and <br /> what we do
              </h1>
              <p className="lead">
                This is the world's best DRONE collections SITES
                <br />
                easy and quick
              </p>
            </div>
            <div className="col-md-6">
              <h2 style={{ color: "#fb575a" }}>Mission</h2>
              <p className="text-start">
                Since 2015, ‘BANGLADESH DRONES’ has been focused on bringing our
                customers the best in esteem and quality drones plans. We are
                enthusiastic about movement and sharing the world’s marvels on
                the relaxation drone's side, and giving corporate explorers
                hello there contact administrations to encourage their business
                needs.
              </p>
              <h2 style={{ color: "#fb575a" }}>Vision</h2>
              <p className="text-start">
                We’re a worker-claimed organization secured by our qualities,
                trustworthiness, and commitment to client benefit. Our
                honor-winning organization reliably positions as a standout
                amongst other offices in the nation and is the best individual
                from the renowned.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Aboutus;
