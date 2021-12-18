import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import "./Contactus.css";
const ContactUs = () => {
  return (
    <div>
      <Navbar/>
      <div className="image-contactus-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="lg-text">Contact US</h1>
              <p className="image-aboutus-para">BANGLADESH DRONES</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container overflow-hidden mb-3 mt-3">
        <div className="row gx-2">
          <div className="col">
            <div className="p-3">
              <h1 className="h2-text">BANGLADESH DRONES</h1>
              <p>271,Agrabad,Chittagong,Bangladesh</p>
              <p>E-mail:ahmeddrones@gmail.com</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <h4>Call Us:</h4>
              <h2>+8801710909090</h2>
              <p>Work Hours:</p>
              <small>Monday To Friday: 08:00 AM - 6:00 PM</small> <br />
              <small>Saturday & Sunday : 10:00 AM - 4:00 PM</small>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
