import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SingleReview from "../SingleReview/SingleReview";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://rollex-watch.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container text-center my-5">
      <Slider {...settings}>
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review} />
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
