import React, { Component } from "react";
import data from "./team.json";
import "../styles/card.css";
import { Header } from "semantic-ui-react";
import { Card, Image } from "semantic-ui-react";

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
      const { title, name, description, img, id } = member;
      return (
        <div style={{ padding: "20px" }}>
          <Card color="green" style={{ width: "300px" }}>
            <Image
              src={require("../images/team/" + member.img)}
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header style={{ color: "rgb(16, 114, 9)" }}>
                {name}
              </Card.Header>
              <Card.Meta>
                <span className="date">{title}</span>
              </Card.Meta>
              <Card.Description>{description}</Card.Description>
            </Card.Content>
          </Card>
        </div>
      );
    });

    return (
      <div style={{ padding: "50px" }}>
        <Header as="h3" style={{ fontSize: "3em", color: "rgb(47, 137, 60)" }}>
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
