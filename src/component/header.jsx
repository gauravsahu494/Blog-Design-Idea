import React from "react";
import Navbar from "./navbar";
import "../App.css";

const Header = () => {
  return (
    <div className="col-md-12">
      <img
        className="bg-img img-fluid"
        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=100"
        alt="Bg img"
      />
      <Navbar />

      <div className="center">
        <h1>Transforming Agriculture with Technology</h1>
        <h2>
          Revolutionizing Agriculture through Innovation: Explore the Latest
          Trends and Technology in Agri-Tech with Ouranos Robotics' Leading Blog
        </h2>
      </div>
    </div>
  );
};

export default Header;
