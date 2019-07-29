import React, { Component } from "react";
import data from "./team.json";
import ACard from "./Card.js";
import "../styles/card.css";
import { Header } from "semantic-ui-react";

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
      <div style={{ padding: "50px" }}>
        <Header as="h3" style={{ fontSize: "3em", color: "rgb(16, 114, 9)" }}>
          The Team
        </Header>

        <div className="card-container-outer">
          <div className="card-container">{cards}</div>
        </div>
      </div>
    );
  }
}

export default Team;
