import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { _id } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch(`https://rollex-watch.herokuapp.com/products/${_id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [_id]);
  const detail = details[0];
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="p-3">
            <div className="card mb-3 bg-dark">
              <img src={detail?.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{detail?.product}</h5>
                <p className="card-text">{detail?.description}</p>
                <p className="card-text">
                  Price: ${detail?.price} {" "}
                  <span className="text-danger"> with 3% discount</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
