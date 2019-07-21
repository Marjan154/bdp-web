import React, { Component } from "react";
import data from "./team.json";
import Card from "./Card.js";
import "../styles/card.css";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: []
    };
  }
  componentDidMount() {
    this.setState({ team: data });
  }

  render() {
    const { team } = this.state;

    let cards = team.map(member => {
      return (
        <Card
          id={member.id}
          title={member.title}
          description={member.description}
          img={member.img}
        />
      );
    });

    return (
      <div className="card-container-outer">
        <div className="card-container">{cards}</div>
      </div>
    );
  }
}

export default Team;
