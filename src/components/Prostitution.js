import React, { Component } from "react";
import "../styles/prostitution.css";
import TemplateIssue from "./TemplateIssue";

const data = [
  {
    id: "1",
    issue: "prostitution",
    title: "Prostitution Article",
    author: "Marjan",
    articleFile: "prostitution1",
    img: "healthcard1.jpg"
  },
  {
    id: "2",
    issue: "prostitution",
    title: "The Horrors of Child Prostitution",
    author: "Marjan",
    articleFile: "prostitution1",
    img: "healthcard1.jpg"
  },
  {
    id: "3",
    issue: "prostitution",
    title: "Prostitution Article",
    author: "Marjan",
    articleFile: "prostitution1",
    img: "healthcard1.jpg"
  }
];
const mainImg = require("../images/mainProstitution.jpg");
const mainSummary = (
  <div>
    Thousands of women have their lives stolen away from them, and trapped into
    a life of prostitution. Help these women take back their basic human rights!{" "}
  </div>
);
const actionline = (
  <p style={{ color: "black" }}>
    Interested in learning more about BDP’s 5 core areas of focus? Read our
    research articles below and get inspired to change Bangladesh for the better
    too!
  </p>
);

class Prostitution extends Component {
  state = {};
  render() {
    return (
      <TemplateIssue
        mainTitle={<div>Prostitution</div>}
        mainImg={mainImg}
        mainSummary={mainSummary}
        actionline={actionline}
        data={data}
      />
    );
  }
}

export default Prostitution;
