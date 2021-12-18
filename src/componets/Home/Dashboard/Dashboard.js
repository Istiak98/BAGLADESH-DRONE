import { Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Payment from "../Payment/Payment";
import "./Dashboard.css";
import Review from "../Review/Review";
import MyOrders from "../MyOrders/MyOrders";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddDrone from "../AddDrone/AddDrone";
import ManageOrders from "../ManageOrders/ManageOrders";
import useFirebase from "../../../Hooks/useFirebase";
import ManageProducts from "../ManageProducts/ManageProducts";
import Navbar from "../../Shared/Navbar/Navbar";
const Dashboard = () => {
  const { user } = useFirebase();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch(`https://tranquil-plains-35844.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmin);

  return (
    <div>
      <Navbar />
      <div class="container-fluid text-center">
        <div class="row content">
          <div class="col-sm-2 sidenav">
            <h2>DASHBOARD</h2>
            {isAdmin ? (
              <div>
                <Link to="/dashboard/addDrone">
                  <button className="btn btn-outline-dark mb-2">
                    Add New Drone
                  </button>
                </Link>
                <br /> <br />
                <Link to="/dashboard/makeAdmin">
                  <button className="btn btn-outline-dark mb-2">
                    Make Admin
                  </button>
                </Link>
                <br /> <br />
                <Link to="/dashboard/manageOrders">
                  <button className="btn btn-outline-dark mb-2">
                    Manage Orders
                  </button>
                </Link>
                <br /> <br />
                <Link to="/dashboard/manageProducts">
                  <button className="btn btn-outline-dark mb-2">
                    Manage Products
                  </button>
                </Link>
                <br /> <br />
              </div>
            ) : (
              <div>
                <Link to="/dashboard/payment">
                  <button className="btn btn-outline-light">Pay</button>
                </Link>
                <br /> <br />
                <Link to="/dashboard/review">
                  <button className="btn btn-outline-light mb-2">Review</button>
                </Link>
                <br /> <br />
                <Link to="/dashboard/myOrders">
                  <button className="btn btn-outline-light mb-2">
                    My Orders
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div class="col-sm-10 text-left">
            <Switch>
              <Route path="/dashboard/payment">
                <Payment></Payment>
              </Route>
              <Route path="/dashboard/review">
                <Review></Review>
              </Route>
              <Route path="/dashboard/myorders">
                <MyOrders></MyOrders>
              </Route>
              <Route path="/dashboard/makeAdmin">
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route path="/dashboard/addDrone">
                <AddDrone></AddDrone>
              </Route>
              <Route path="/dashboard/manageOrders">
                <ManageOrders></ManageOrders>
              </Route>
              <Route path="/dashboard/manageProducts">
                <ManageProducts></ManageProducts>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
