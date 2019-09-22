import React, { Component } from "react";
import "../styles/education2.css";
import "../styles/card.css";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class TemplateIssue extends Component {
  state = {};

  render() {
    const { mainImg, mainSummary, mainTitle, actionline, data } = this.props;
    const cards = data.map(article => {
      return (
        <div style={{ padding: "20px" }}>
          <Card
            color="green"
            as={Link}
            to={`articles/${article.issue}/${article.id}`}
          >
            <Image
              src={require("../images/" + article.img)}
              wrapped
              ui={false}
            />

            <Card.Content>
              <Card.Header style={{ color: "rgb(165, 18, 18)" }}>
                {article.title}
              </Card.Header>
              <Card.Meta>
                <span className="date">{article.author}</span>
              </Card.Meta>
              <Link
                to={`articles/${article.issue}/${article.id}`}
                style={{ color: "rgb(47, 137, 60)" }}
              >
                <Card.Description>Read More -></Card.Description>
              </Link>
            </Card.Content>
          </Card>
        </div>
      );
    });
    return (
      <div style={{ padding: "50px" }}>
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
              <h1
                class="font-weight-light"
                style={{ color: "rgb(165, 18, 18)" }}
              >
                {mainTitle}
              </h1>
              <p style={{ color: "black" }}>{mainSummary}</p>
              <Link to={`/Donate`}>
                <a
                  class="btn btn-primary"
                  href="#"
                  style={{ background: "rgb(47, 137, 60)", color: "white" }}
                >
                  Help This Cause >
                </a>
              </Link>
            </div>
          </div>

          <div
            // class="card text-white bg-secondary my-5 py-4 text-center"
            style={{ background: "rgb(187,236,184)", color: "black" }}
          >
            <div class="card-body">
              <p
                style={{ color: "black" }}
                // class="text-white m-0"
              >
                {actionline}
              </p>
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
