import React, { Component } from "react";
import { Link } from "react-router-dom";

class BigCard extends Component {
  render() {
    const { image, description, title, linkroute } = this.props;
    return (
      <div
        className="card mb-3 row no-gutters"
        style={{ maxWidth: "70%", padding: "50px" }}
      >
        <img src={image} className="col-md-4 card-img img-fluid" alt="..." />
        <div className="card-body col-md-8">
          <h5 className="card-title"> {title} </h5>
          <p className="card-text"> {description} </p>
          <small className="card-text text-muted">
            Last updated 3 mins ago
          </small>
          <Link to={`/issues${linkroute}`}>Read More</Link>
        </div>
      </div>
    );
  }
}

export default BigCard;
