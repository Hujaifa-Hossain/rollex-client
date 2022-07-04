import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import useFirebase from "../../Hooks/useFirebase";

const Header = () => {
  const { user, googleSignOut } = useFirebase();
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Rollex
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* social icon */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="watches">
                  Watches
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="review">
                  Review
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="postproduct">
                  Post product
                </Link>
              </li>

              {user?.email ? (
                <li
                  className="nav-item"
                  title="Sign Out!"
                  onClick={googleSignOut}
                >
                  <FontAwesomeIcon
                    className="nav-link active m-1 px-2 btn btn-dark"
                    icon={faSignOut}
                  />
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link active" to="login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
