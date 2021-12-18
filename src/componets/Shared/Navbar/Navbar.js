import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Navbar.css";
const Navbar = () => {
  const { user, handleLogOut } = useAuth();
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div class="container-fluid">
        
        <h4>BANGLADESH DRONES</h4>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/home"
                activeClassName="selected"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/aboutus"
                activeClassName="selected"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/contactus"
                activeClassName="selected"
              >
                CONTACT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/alldrones"
                activeClassName="selected"
              >
               EXPLORE
              </NavLink>
            </li>
           
            <br />
           
            <br />
            {
            user.email&&
            <Link to="/dashboard">
              <button className="btn btn btn-outline-danger me-3">DASHBOARD</button>
            </Link>
          }
            <li className="nav-item nav-text">Welcome :{user?.displayName}</li>
            {
             (user.photoURL && user.email) &&  <img
             src={user?.photoURL}
             height="40px"
             style={{ borderRadius: "50%" }}
             width="40px"
             alt=""
             className="pull-left img-circle login"
           />
           }
          </ul>
          
        
           {user.email ? (
             
              <div>
                <button
                onClick={handleLogOut}
                className="btn btn btn-outline-danger position-absolute top-50 end-0 translate-middle-y mx-5"
                type=""
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
              >
                Logout
              </button>
              </div>
            ) : (
              <NavLink to="/loginform">
                <button
                  className="btn btn btn-outline-dark position-absolute top-50 end-0 translate-middle-y mx-5"
                  type=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  Login
                </button>
              </NavLink>
            )}
            
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
