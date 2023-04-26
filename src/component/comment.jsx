import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Comments</h4>
          <input
            className="col-12 mb-2 search"
            placeholder="Write Comment"
            type="text"
          />

          <p className="card-text  mb-2 ">Hardh Gogri</p>
          <h6 className="card-subtitle text-muted mb-3">
            Great read, very informative!
          </h6>

          <p className="card-text  mb-2 ">Shalini B</p>
          <h6 className="card-subtitle text-muted mb-3">
            I've been trying to switch to organic produce but the cost is a
            barrier. Hopefully, as more people demand organic, the price will
            come down.
          </h6>

          <p className="card-text  mb-2 ">Deepak Sahu</p>
          <h6 className="card-subtitle text-muted mb-3">
            It's so important to support local farmers and food systems, and
            organic farming is a key part of that
          </h6>

          <p className="card-text  mb-2 ">Arjun Patwa</p>
          <h6 className="card-subtitle text-muted mb-3">
            As someone who grew up in a rural area and has seen the impact of
            conventional farming on environment and local communities, I
            appreciate the message of this article. We need to shift towards
            sustainable and equitable agriculture practices if we want to
            protect the planet and our health
          </h6>

          <p className="card-text  mb-2 ">Rajesh Pandey</p>
          <h6 className="card-subtitle text-muted mb-3">
            Important topic, thanks for raising awareness!
          </h6>

          <p className="card-text  mb-2 ">Niharika Pandey</p>
          <h6 className="card-subtitle text-muted mb-3">
            I love that organic farming promotes biodiversity and protects
            natural resources.We need more of this
          </h6>

          <p className="card-text  mb-2 ">Vikash Patil</p>
          <h6 className="card-subtitle text-muted mb-3">
            This article does a great job of highlighting the benefits of
            organic farming without demonizing conventional agriculture
          </h6>

          <p className="card-text  mb-2 ">Aryan Singh</p>
          <h6 className="card-subtitle text-muted mb-3">
            I'm impressed by the research cited in this article about the health
            benefits of organic produce. It's important to remember that food is
            not just about calories or taste, but also about the nutrients and
            chemicals we consume. Choosing organic is a way to promote both
            personal and planetary health.
          </h6>

          <p className="card-text  mb-2 ">Siddhi Pandey</p>
          <h6 className="card-subtitle text-muted mb-3">
            I appreciate the discussion on the challenges of organic farming.
            It's not a perfect solution, but it's a step in the right direction
          </h6>
        </div>
      </div>
    );
  }
}
export default Comment;
