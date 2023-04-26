import React, { Component } from "react";

class Pagination extends Component {
  render() {
    return (
      <nav
        className="d-flex align-items-center justify-content-center "
        aria-label="..."
      >
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href={() => false} tabindex="-1">
              {" "}
              Previous{" "}
            </a>
          </li>
          <li className="page-item">
            <a href={() => false} className="page-link">
              1
            </a>
          </li>
          <li className="page-item ">
            <a href={() => false} className="page-link">
              2
            </a>
          </li>
          <li className="page-item">
            <a href={() => false} className="page-link">
              3
            </a>
          </li>

          <li className="page-item">
            <a href={() => false} className="page-link">
              4
            </a>
          </li>
          <li className="page-item">
            <a href={() => false} className="page-link">
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Pagination;
