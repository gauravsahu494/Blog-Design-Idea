import React, { Component } from "react";
import Header from "./component/header";
import Card from "./component/card";
import Categories from "./component/categories";
import Post from "./component/post";
import Pagination from "./component/pagination";
import { Data } from "./card_data/data.js";
import "./App.css";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row container mt-5 ms-auto me-auto">
          <div className="col-md-3">
            <Categories />
            <Post />
          </div>
          <div className="col-md-9 d-flex flex-wrap">
            {Data.map((t,i) => {
              return (
                <Card 
                  key={i}
                  img={t.img}
                  micro_title={t.micro_title}
                  title={t.title}
                  title_body={t.title_body}
                />
              );
            })}
          </div>
        </div>
        <Pagination />
      </div>
    );
  }
}
export default Main;
