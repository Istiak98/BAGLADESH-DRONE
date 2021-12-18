import Rating from "react-rating";
import React from "react";
import "./ReviewCard.css";
const ReviewCard = ({ review }) => {
  const { title, comments, rating } = review;
  return (
    <div className="reviewCard pb-1 mb-5 text-center">
      <h5 className="text-center">Customer Name: {title}</h5>
      <Rating
        initialRating={rating}
        emptySymbol="far fa-star icon-color"
        fullSymbol="fas fa-star icon-color"
        readonly
      ></Rating>
      <p className="px-3 text-center ">
        Commetnts: <span className="title">{comments}</span>
      </p>
    </div>
  );
};

export default ReviewCard;
