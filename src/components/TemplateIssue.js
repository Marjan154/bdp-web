import React, { Component } from "react";
import "../styles/education2.css";
import ACard from "./Card.js";
import "../styles/card.css";
import { Card, Icon, Image } from "semantic-ui-react";

class TemplateIssue extends Component {
  state = {};

  render() {
    const { mainImg, mainSummary, actionline, data } = this.props;
    const cards = data.map(member => {
      return (
        <div style={{ padding: "20px" }}>
          <Card>
            <Image
              src={require("../images/team/" + member.img)}
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>{member.name}</Card.Header>
              <Card.Meta>
                <span className="date">{member.title}</span>
              </Card.Meta>
              <Card.Description>{member.description}</Card.Description>
            </Card.Content>
          </Card>
        </div>
      );
    });
    return (
      <div>
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={mainImg}
                alt=""
              />
            </div>

            <div class="col-lg-5">
              <h1 class="font-weight-light">Business Name or Tagline</h1>
              <p>{mainSummary}</p>
              <a class="btn btn-primary" href="#">
                Call to Action!
              </a>
            </div>
          </div>

          <div class="card text-white bg-secondary my-5 py-4 text-center">
            <div class="card-body">
              <p class="text-white m-0">{actionline}</p>
            </div>
          </div>

          <div className="card-container-outer">
            <div className="card-container">{cards}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateIssue;
