import React, { Component } from "react";
import "../styles/education2.css";
import TemplateIssue from "./TemplateIssue";
const data = [
  {
    id: "1",
    issue: "education",
    title: "Education For Girls/Madrasas",
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
  }
];

const mainImg = require("../images/Education.jpg");
const mainSummary = (
  <div>
    Education is one of the world's greatest equalizers. Unfortunately,
    Bangladesh suffers a lack of education and innaccessibility. Help the youth
    become educated so they can be the bright futures that will change
    Bangladesh for the better{" "}
  </div>
);
const actionline = (
  <p style={{ color: "black" }}>
    Interested in learning more about BDP’s 5 core areas of focus? Read our
    research articles below and get inspired to change Bangladesh for the better
    too!
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
