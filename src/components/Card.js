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
        <Card color="green" style={{ width: "300px" }}>
          <Image src={img} wrapped ui={false} />
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
  }
}

export default ACard;
