import React, { Component } from "react";
import "../App.css";

class Categories extends Component {
  render() {
    return (
      <div className="mb-5">
        <input
          className="col-12 mb-5 search box-shadow"
          placeholder="Search"
          type="text"
        />

        <div className="card mb-2 box-shadow">
          <div className="card-body">
            <h3 className="card-title">Categories</h3>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Automation</li>
            <li className="list-group-item">IoT</li>
            <li className="list-group-item">Precision Agriculture</li>
            <li className="list-group-item">Sustainable Farming</li>
            <li className="list-group-item">Industry News</li>
            <li className="list-group-item">case Studies</li>
            <li className="list-group-item">Tips & Tricks</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Categories;
