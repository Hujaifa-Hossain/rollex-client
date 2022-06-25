import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="p-3 text-white container-fluid navigation">
        <div className="row">
          <div className="col-lg-4">
            <div className="text-white">
              <h4>
               <span className="text-danger">Rollex</span>
              </h4>
            </div>
            <div className="">
              <p>
                <small> Hossain villa, Kuril, Dhaka</small>
              </p>
              <p>
                <small> Official: 21hujaifa@gmail.com</small>
              </p>
              <p>
                <small> Helpline: 01791158039</small>
              </p>
            </div>
          </div>
          <div className="col-lg-2">
            <div>
              <p>Quick Links</p>
              <ul className="p-0 text-start">
                <li className="list-group-item bg-dark p-0">
                  <Link className="text-decoration-none text-white" to="/">
                    Home
                  </Link>
                </li>
                <li className="list-group-item p-0">
                  <Link
                    className="text-decoration-none text-white"
                    to="/explore"
                  >
                    Explore
                  </Link>
                </li>
                <li className="list-group-item bg-dark p-0">
                  <Link className="text-decoration-none text-white" to="/login">
                    Login
                  </Link>
                </li>
                <li className="list-group-item p-0">
                  <Link
                    className="text-decoration-none text-white"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div>
              <p className="bg-dark">Follow Us</p>
              <ul className="p-0 text-start">
                <li className="list-group-item p-0">
                  <a
                    className="text-decoration-none text-white"
                    href="https://web.facebook.com/hujaifa.hossain.77"
                  >
                    <i className="fab fa-facebook me-1"></i>
                    Facebook
                  </a>
                </li>
                <li className="list-group-item bg-dark p-0">
                  <a
                    className="text-decoration-none text-white"
                    href="https://github.com/Hujaifa21"
                  >
                    <i className="fab fa-github me-1"></i>
                    Github
                  </a>
                </li>
                <li className="list-group-item p-0">
                  <a
                    className="text-decoration-none text-white"
                    href="https://www.linkedin.com/in/hujaifa-hossain-9737731a9/"
                  >
                    <i className="fab fa-linkedin me-1"></i>
                    Linked In
                  </a>
                </li>
                <li className="list-group-item bg-dark p-0">
                  <a
                    className="text-decoration-none text-white"
                    href="https://www.youtube.com/channel/UCTUe_0sdkJtvYG84soIiX3g"
                  >
                    <i className="fab fa-youtube me-1"></i>
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center p-3">
              <img
                className="img-fluid h-100"
                src="https://www.sslwireless.com/wp-content/uploads/2020/05/Payment-gateway-service.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <p className="text-white text-center mt-3">
          Copyright © 2022 Rollex
        </p>
      </div>
    </div>
  );
};

export default Footer;
