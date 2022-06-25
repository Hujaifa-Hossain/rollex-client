import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const { _id, product, img, description } = props.product;
  return (
    <div className="card bg-dark border-light m-2">
        <img src={img} className="card-img-top" height={250} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product}</h5>
          <p className="card-text">{description.slice(0, 119)}</p>
          <p className="card-text text-end">
            <Link to={`/products/${_id}`}>
            <FontAwesomeIcon className="btn btn-danger" icon={faCartArrowDown} />
            </Link>
          </p>
        </div>
      </div>
  );
};

export default Product;
