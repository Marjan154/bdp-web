import React, { Component } from "react";
import "../styles/issues.css";
import styles2 from "../styles/card.css";
import styles from "../styles/projects.css";
import { Card, Image, Header } from "semantic-ui-react";
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
    Poverty in Bangaldesh is widespread, it is no surprise that education is
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

const projects = [
  {
    image: "/educationProject/EducationProject1.jpg",
    description: "Education Project",
    title: "Prostitution",
    linkroute: "/projects/education2019"
  },
  {
    image: "/ramadan2019/Ramadan1.jpeg",
    description: "Ramdan 2019 Project",
    title: "Healthcare",
    linkroute: "/projects/ramadan2019"
  }
];

class Projects extends Component {
  state = {};
  render() {
    let circles = projects.map(project => {
      const { title, description, image, linkroute } = project;
      return (
        <Link
          to={linkroute}
          className="project"
          style={{ textDecoration: "none" }}
        >
          {" "}
          <div style={{ padding: "20px" }}>
            <img
              className="circular-img"
              src={require("../images" + image)}
              style={{
                borderRadius: "50%",
                height: "300px",
                width: "300px",
                maxWidth: "100%"
              }}
            ></img>
            <h1
              class="font-weight-light project-title"
              style={{
                color: "rgb(47, 137, 60)",
                paddingTop: "15px"
              }}
            >
              {description}
            </h1>
          </div>
        </Link>
      );
    });

    return (
      <div style={{ paddingTop: "70px" }}>
        <Header as="h3" style={{ fontSize: "3em", color: "rgb(47, 137, 60)" }}>
          Our Projects
        </Header>
        <div className="card-container-outer">
          <div className="card-container">{circles}</div>{" "}
        </div>
      </div>
    );
  }
}

export default Projects;
