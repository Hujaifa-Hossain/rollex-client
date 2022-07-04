import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Product from "../Product/Product";

const Slide = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://rollex-watch.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 150,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 692,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <div className="mb-5 container">
      <Slider className="" {...settings}>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
