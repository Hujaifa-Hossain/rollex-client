import React from "react";
import Rating from "react-rating";

const SingleReview = (props) => {
  const { user, email, review, stars } = props.review;
  return (
    <div>
      <div className="card bg-dark m-2">
        <div className="card-body">
          <p className="card-text m-0">{user}</p>
          <p className="card-text">
            <small>{email}</small>
          </p>
          <p className="card-text">{review}</p>
          <p className="card-text">
            {stars} Star by <small>{user}</small>
          </p>
          <Rating
            readonly
            initialRating={stars}
            fullSymbol="fas fa-star text-danger"
            emptySymbol="far fa-star"
          ></Rating>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
