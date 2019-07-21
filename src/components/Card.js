import React, { Component } from "react";
import "../styles/card.css-";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, img, description, id } = this.props;
    return (
      <div className="cardbox">
        <img src={img} />
        <div className="card-text">
          <h3>{title}</h3>
          <ul>
            <li>{description}</li>
          </ul>
          <div className="button-list-container">
            <ul>
              <li>
                <button className="green">View</button>{" "}
              </li>
              <li>
                <button className="blue">Edit</button>
              </li>
              <li>
                <button className="red">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
