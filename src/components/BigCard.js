import React, { Component } from "react";
import { Link } from "react-router-dom";

class BigCard extends Component {
  render() {
    const { image, description, title, linkroute } = this.props;
    return (
      <div style={{ padding: "50px" }}>
        <div className="card mb-3" style={{ maxWidth: "70%" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={image} className="card-img img-fluid" alt="..." />
            </div>
            <div className="card-body col-md-8">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <Link to={`/issues${linkroute}`}>Read More</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BigCard;
