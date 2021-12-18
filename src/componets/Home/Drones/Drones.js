import React, { useEffect, useState } from "react";
import DroneCard from "../DroneCard/DroneCard";
import "./Drone.css";
const Drones = () => {
  const [drones, setDrones] = useState([]);
  useEffect(() => {
    fetch(`https://tranquil-plains-35844.herokuapp.com/drones`)
      .then((res) => res.json())
      .then((data) => setDrones(data));
  }, []);
  return (
    <div id="drones">
      <h1 className=" mt-2 text-center title">BANGLADESH Drones</h1>
      <h4 className=" text-center ">Get Your Drone</h4>
      <div className="drone-details mt-3">
        {drones.slice(0, 6).map((drone) => (
          // <TourCard drone={drone} key={drone._id}></TourCard>
          <DroneCard drone={drone} key={drone._id}></DroneCard>
        ))}
      </div>
    </div>
  );
};

export default Drones;
