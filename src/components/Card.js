import React, { Component } from "react";
import "../styles/card.css";
import { Card, Image } from "semantic-ui-react";

class ACard extends Component {
  render() {
    const { title, name, description, img } = this.props;
    return (
      <div style={{ padding: "20px" }}>
        <Card style={{ width: "400px" }}>
          <Image src={img} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <span className="date">{title}</span>
            </Card.Meta>
            <Card.Description>{description}</Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default ACard;
