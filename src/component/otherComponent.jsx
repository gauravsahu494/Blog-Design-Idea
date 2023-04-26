import React, { Component } from "react";
import Categories from "./categories";
import Next from "./next";
import Post from "./post";
import Comment from "./comment";
import "../App.css";

class OtherComponent extends Component {
  render() {
    return (
      <div className="container col-md-12 d-flex flex-wrap p-0 mt-5">
        <div className="col-sm-12 col-md-8 ps-0 pe-3">
          <Next />
        </div>
        <div className="col-md-4 pe-0">
          <Categories />
          <Post />
          <Comment />
        </div>
      </div>
    );
  }
}
export default OtherComponent;
