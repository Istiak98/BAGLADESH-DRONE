import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-2 item">
              <h3>Our Drones </h3>
              <ul>
                <li>
                  <a href="/">Standard Edition</a>
                </li>
                <li>
                  <a href="/">Premium Edition</a>
                </li>
                <li>
                  <a href="/">Limited Edition</a>
                </li>
                <li>
                  <a href="/">More....</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3>GO TO</h3>
              <ul>
                <li>
                  <NavLink to="/home">Home</NavLink>
                  {/* <a href="/">Home</a> */}
                </li>
                <li>
                  <NavLink to="/aboutus">About</NavLink>
                  {/* <a href="/">Home</a> */}
                </li>
                <li>
                  <NavLink to="/contactus">CONTACT</NavLink>
                  {/* <a href="/">Home</a> */}
                </li>
              </ul>
            </div>
            <div className="col-md-4 item text">
              <h3>BANGLADESH DRONES</h3>
              <p>
                At BANGLADESH DRONES Let’s start your DRONE'S expirence with us, your
                dream will come true..
              </p>
            </div>
            <div className="col-md-2 item text">
              <h3>CONTACT US</h3>
              <div class="row g-3">
                <div className="col-md-12">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="First name"
                  />
                </div>
                <div className="col-md-12">
                  {/* <input type="text" className="form-control" placeholder="Message" aria-label="Message"/> */}
                  <textarea
                    class="form-control"
                    rows="5"
                    id="comment"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button className="btn btn-outline-danger">SEND</button>
              </div>
            </div>
          </div>
          <p className="copyright">AHMED DRONES © 2021</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
