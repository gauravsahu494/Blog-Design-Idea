import React from "react";
import Next from "./next";
import { Link } from "react-router-dom";
import "../App.css";

const Card = (props) => {
  return (
    <div className="card mb-5 col-md-5 me-auto ms-auto box-shadow">
      <img src={props.img} className="card-img-top" alt="Not Found" />

      <div className="card-body">
        <p>{props.micro_title}</p>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.title_body}</p>
        <button
          onClick={Next}
          style={{ border: "none", backgroundColor: "white" }}
        >
          <Link to="/expand">Read Full Artical</Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
