import React, { Component } from "react";
import "../styles/card.css";
import { Card, Icon, Image } from "semantic-ui-react";

class ACard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, name, description, img, id } = this.props;
    console.log(img);
    const url = "../images/team/" + img;
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
