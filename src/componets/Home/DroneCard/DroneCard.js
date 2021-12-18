import React from 'react';
import { Link } from 'react-router-dom';
import './DroneCard.css'
const DroneCard = ({drone}) => {
    const { title, image, description, price , _id} = drone;
    return (
        <div className="droneCard pb-1 mb-5 text-center">
        <img  src={image} alt="" />
        <h3 className="title">{title}</h3>
        <h5>Price: {price}$</h5>
        <p className="px-3 text-start ">{description}</p>
        <Link to={`/placeOrder/${_id}`}>
          <button className="btn btn-outline-danger">Buy Now</button>
        </Link>
         
      </div>
    );
};

export default DroneCard;