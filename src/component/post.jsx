import React, { Component } from "react";
class Post extends Component {
  render() {
    return (
      <div className="card mb-5 box-shadow">
        <div className="card-body">
          <h2 className="card-title mb-4">Top Posts</h2>
          <div className="container">
            <div className="card-text d-flex mb-3">
              <strong className="me-2">1 </strong>
              <div>
                <h5> How Regenerative Agriculture is Changing the Game</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Sustainable farming - March, 2022
                </h6>
              </div>
            </div>

            <div className="card-text d-flex mb-3">
              <strong className="me-2">2 </strong>
              <div>
                <h5>
                  {" "}
                  Precision Agriculture 2.0: Using Artificial Intelligence to
                  Optimize Crop Yields
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Precision Agriculture - September 2021
                </h6>
              </div>
            </div>

            <div className="card-text d-flex mb-3">
              <strong className="me-2">3 </strong>
              <div>
                <h5>
                  Breaking Ground: How Automation is Revolutionizing the
                  Agriculture Industry
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Industry News - May 2022
                </h6>
              </div>
            </div>

            <div className="card-text d-flex mb-3">
              <strong className="me-2">4</strong>
              <div>
                <h5>
                  How Ouranos Robotics' Smart Sensors are Transforming Crop
                  Management
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  IoT - July 2021
                </h6>
              </div>
            </div>

            <div className="card-text d-flex mb-3">
              <strong className="me-2">5</strong>
              <div>
                <h6>The Impact of Technology on the Agriculture Industry</h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Expert Insights - November 2021
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Post;
