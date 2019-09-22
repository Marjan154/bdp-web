import React, { Component } from "react";
import "../styles/education.css";
import TemplateIssue from "./TemplateIssue";
const data = [
  {
    id: "1",
    issue: "education",
    title: "Education For Girls/Madrasas",
    author: "Mohuya Khan",
    articleFile: "education1",
    img: "educationArticle1.jpg"
  },
  {
    id: "2",
    issue: "education",
    title: "Access to public education in Bangladesh",
    author: "Oasima Mahi",
    articleFile: "education2",
    img: "educationArticle2.jpg"
  },
  {
    id: "3",
    issue: "education",
    title: "Religious Schools",
    author: "Sila Pollen",
    articleFile: "education1",
    img: "educationArticle3.jpg"
  }
];

const mainImg = require("../images/educationmain.jpg");
const mainSummary = (
  <div>
    Education is one of the world's greatest equalizers. Unfortunately,
    Bangladesh suffers from innaccessibility and a lack of education. Help the
    youth become educated so they can be the bright futures that will change
    Bangladesh for the better.{" "}
  </div>
);
const actionline = (
  <p>
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
