import React, { Component } from "react";
import "../styles/issues.css";
import "../styles/card.css";
import { Card, Icon, Image, Header, Grid, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const des = (
  <div>
    BDP took on a special initiative to sponsor Iftaar dinner for a large cohort
    of poor and helpless people. BDP was able to fundraise enough to feed 1000
    people over a span of FIVE days!
  </div>
);
const healthDes = (
  <div>
    Access to healthcare is a greater issue in third world countries.
    Bangladesh, a developing nation, suffers from a large socioeconomic gap in
    access to care. This gap creates an inefficient delivery of proper
    healthcare which leads to major health concerns.
  </div>
);

const laborDes = (
  <div>
    Child labor is really common in Bangladesh with about 4.5 million of the
    children are in the workforce. Poverty is the main cause of child labor in
    Bangladesh. Education can be expensive in Bangladesh and not everyone can
    afford it. Most of these children are from very poor families and their
    parents can’t afford to provide an education. Therefore, the young kids are
    forced to work to support the family.
  </div>
);

const prostitutionDes = (
  <div>
    Prositution is legalized in Bangladesh,even though their state religion,
    Islam forbids it. Women are abused and treated cruelly while recieving
    little to no compensation in return.
  </div>
);

const educationDes = (
  <div>
    Pooverty in Bangaldesh is widespread, it is no surprise that education is
    limited. Children cannot offord to have education, becuase they cannot pay
    the fees or are to busy paying to survive
  </div>
);

const marriageDes = (
  <div>
    Young girls are forced or sold into marriage with men, which leds them into
    a lifetime of abuse and mistreatment
  </div>
);

const issues = [
  {
    image: "Russell-Watkins.jpg",
    description: healthDes,
    title: "Healthcare",
    linkroute: "/healthcare"
  },
  {
    image: "mainProstitution.jpg",
    description: prostitutionDes,
    title: "Prostitution",
    linkroute: "/prostitution"
  },

  {
    image: "educationmain.jpg",
    description: educationDes,
    title: "Education",
    linkroute: "/education"
  },

  {
    image: "pinkMarriage.jpg",
    description: marriageDes,
    title: "Child Marriage",
    linkroute: "/earlymarriage"
  },

  {
    image: "MainLabor.jpg",
    description: laborDes,
    title: "Child Labor",
    linkroute: "/childlabor"
  }
];

class Issues extends Component {
  state = {};
  render() {
    let cards = issues.map(issue => {
      const { title, description, image, linkroute } = issue;
      return (
        <div style={{ padding: "20px" }}>
          <Card
            color="green"
            style={{ width: "400px", height: "520px" }}
            as={Link}
            to={`/issues${linkroute}`}
          >
            <Image src={require("../images/" + image)} wrapped ui={false} />
            <Card.Content>
              <Card.Header style={{ color: "rgb(16, 114, 9)" }}>
                {title}
              </Card.Header>
              <Card.Description>{description}</Card.Description>
              <Card.Meta style={{ marginTop: "10px" }}>
                <p>
                  <Link
                    to={`/issues${linkroute}`}
                    style={{ color: "green", fontWeight: "bold" }}
                  >
                    Read More
                  </Link>
                </p>
              </Card.Meta>
            </Card.Content>
          </Card>
        </div>
      );
    });

    return (
      <div style={{ paddingTop: "50px" }}>
        <Header as="h3" style={{ fontSize: "3em", color: "rgb(47, 137, 60)" }}>
          The Big 5 Issues
        </Header>
        <div className="card-container-outer">
          <div className="card-container">{cards}</div>{" "}
        </div>
      </div>
    );
  }
}

export default Issues;
