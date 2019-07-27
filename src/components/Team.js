import React, { Component } from "react";
import data from "./team.json";
import ACard from "./Card.js";
import "../styles/card.css";
import j from "../images/team/Jaheen.JPG";

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
        <ACard
          id={member.id}
          name={member.name}
          title={member.title}
          description={member.description}
          img={require("../images/team/" + member.img)}
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
