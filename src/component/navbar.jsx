import React from "react";
import "../App.css";
import logo1 from "../../src/logo1.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg glassmorphism navbar-dark">
      <div className="container">
        <img src={logo1} className="img-fluid sizing_logo" alt="" />
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-5">
              <a className="nav-link " aria-current="page" href={() => false}>
                Home
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href={() => false}>
                Product
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href={() => false}>
                About Us
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href={() => false}>
                Support
              </a>
            </li>
            <li className="nav-item me-5">
              <a
                className="nav-link active"
                href={() => false}
                tabindex="-1"
                aria-disabled="true"
              >
                Blog
              </a>
            </li>
            <button className="btn  button">Buy Now</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
