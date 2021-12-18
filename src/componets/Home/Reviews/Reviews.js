import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Reviews.css";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://tranquil-plains-35844.herokuapp.com/review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div id="drones">
      <h4 className=" text-center ">Our Customers Reviews</h4>
      <div className="review-details mt-3">
        {reviews.map((review) => (
          
          <ReviewCard review={review} key={review._id}>
            {" "}
          </ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
