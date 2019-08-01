import React, { Component } from "react";
import "../styles/education2.css";
import TemplateIssue from "./TemplateIssue";
const data = [
  {
    id: "1",
    issue: "education",
    title: "Education",
    author: "Marjan",
    articleFile: "education1",
    img: "healthcard1.jpg"
  },
  {
    id: "2",
    issue: "education",
    title: "Education",
    author: "Marjan",
    articleFile: "education1",
    img: "healthcard1.jpg"
  },
  {
    id: "3",
    issue: "education",
    title: "Education",
    author: "Marjan",
    articleFile: "education1",
    img: "healthcard1.jpg"
  },
];

const mainImg = require("../images/Education.jpg");
const mainSummary = (
  <div>
    The health care in Bengladesh is poor. We need your help.
  </div>
);
const actionline = (
  <p style={{ color: "black" }}>
    Donate Now
  </p>
);

class Education extends Component {
  state = {};
  render() {
    return (
      <TemplateIssue
        mainTitle={<div>Education</div>}
        mainImg={mainImg}
        mainSummary={mainSummary}
        actionline={actionline}
        data={data}
      />
    );
  }
}

export default Education;
