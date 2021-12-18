import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./componets/Home/Home/Home";
import Navbar from "./componets/Shared/Navbar/Navbar";
import Footer from "./componets/Shared/Footer/Footer";
import Aboutus from "./componets/Home/Aboutus/Aboutus";
import ContactUs from "./componets/Home/Contactus/Contactus";
import NotFound from "./componets/Shared/NotFound/NotFound";
import AllDrones from "./componets/Home/AllDrones/AllDrones";
// import Login from "./componets/Shared/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PlaceOrder from "./componets/Home/PlaceOrder/PlaceOrder";
import PrivateRoute from "./componets/Shared/Login/PrivateRoute/PrivateRoute";
import Dashbaord from "./componets/Home/Dashboard/Dashboard";
import LoginForm from "./componets/Home/LoginFrom/LoginFrom";
import RegistrationForm from "./componets/Home/RegistrationFrom/RegistrationFrom";
import MyOrders from "./componets/Home/MyOrders/MyOrders";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/alldrones">
              <AllDrones></AllDrones>
            </Route>

            <Route path="/aboutus">
              <Aboutus></Aboutus>
            </Route>

            <Route path="/contactus">
              <ContactUs></ContactUs>
            </Route>
            {/* <Route path="/login">
              <Login></Login>
            </Route> */}
            <Route path="/loginform">
              <LoginForm></LoginForm>
            </Route>
            <Route path="/registrationform">
            <RegistrationForm></RegistrationForm>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashbaord></Dashbaord>
            </PrivateRoute>
            <PrivateRoute path="/placeOrder/:droneId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute  path="/dashboard/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* <Footer></Footer> */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
