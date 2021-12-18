import React from "react";
import Drone1 from "../../../images/Drone1.png";
import Drone2 from "../../../images/Drone2.png";
import Home1 from "../../../images/Home1.jpg";
import "./Info.css";
const Info = () => {
  return (
    <div className="container mb-3 mt-5">
      <div className="row g-2">
        <div className="col-md-6 col-sm-12">
          <div className="p-3">
            <h4 className="h4-text text-start h4-txt">FLIGHT SYSTEM</h4>

            <h3 className="text-start fs-1 h2-text fw-bolder h3-txt">
              Hovering and Automatic Flight Positioning
            </h3>
            <p className="text-start">
              Besides being able to fly without you worrying about it ramming
              into objects, this drone can hover. As it has done with its other
              products. DroCam has included its Vision Positioning System (VPS).
              VPS locks the drone in place when necessary, and it can stay put
              for hours.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="p-3">
            <img className="w-50 mb-3" src={Drone1} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="p-3">
            <img className="w-50 mb-3" src={Drone2} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="p-3">
            <h4 className="h4-text text-start h4-txt">CAMERA RESOLUTION</h4>

            <h3 className="text-start fs-1 h2-text fw-bolder h3-txt">
              We Use The Best Drones & HD Cameras
            </h3>
            <p className="text-start">
              It can be equipped with a variety of additional equipment,
              including cameras, GPS guided missiles, Global Positioning Systems
              (GPS), navigation systems, sensors, and so on. DroCam 3 4K is the
              updated version of very popular DroCam 3 drone. As you may
              believe, the most attention went to the camera.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-sm-12">
        <div className="p-3">
          <h1 className="h4-txt fw-bold">INTRODUCTION</h1>

          <img className="w-75 mb-3" src={Home1} alt="" />
         
        </div>
      </div>
    </div>
  );
};

export default Info;
