import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import DroneCard from "../DroneCard/DroneCard";
const AllDrones = () => {
  const [drones, setDrones] = useState([]);
  useEffect(() => {
    fetch(`https://tranquil-plains-35844.herokuapp.com/drones`)
      .then((res) => res.json())
      .then((data) => setDrones(data));
  }, []);
  return (
    <div>
      <Navbar />
      <div id="drones">
        <h1 className="text-danger mt-2 text-center">BANGLADESH Drones</h1>

        <div className="drone-details mt-3">
          {drones.map((drone) => (
            // <TourCard drone={drone} key={drone._id}></TourCard>
            <DroneCard drone={drone} key={drone._id}></DroneCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllDrones;
