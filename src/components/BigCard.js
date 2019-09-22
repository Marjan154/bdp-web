import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";

class BigCard extends Component {
  state = {};
  render() {
    const { image, description, title, linkroute } = this.props;
    return (
      <div style={{ padding: "50px" }}>
        <div className="card mb-3" style={{ maxWidth: "70%" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={image}
                className="card-img"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{ color: "black" }}>
                  {title}
                </h5>
                <p className="card-text" style={{ color: "black" }}>
                  {description}
                </p>
                <Link to={`/issues${linkroute}`}>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BigCard;
