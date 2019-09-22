import React, { Component } from "react";
import "../styles/healthcare.css";
import TemplateIssue from "./TemplateIssue";

const data = [
  {
    id: "1",
    issue: "healthcare",
    title: "Bangladesh’s Ongoing Struggle: Arsenic in Water",
    author: "Priya Saha",
    articleFile: "healthcare1",
    img: "healthArticle1.jpg"
  },
  {
    id: "2",
    issue: "healthcare",
    title: "Heavy Metals and Bangladesh Waters",
    author: "Mohammed Tousif Nur",
    articleFile: "healthcare2",
    img: "healthArticle2.jpg"
  },
  {
    id: "3",
    issue: "healthcare",
    title: "Medical Falsification in Bangladesh",
    author: "Karima Khondakar",
    articleFile: "healthcare3",
    img: "healthcard1.jpg"
  }
];
const mainImg = require("../images/Russell-Watkins.jpg");
const mainSummary = (
  <div>
    We all know how important access to health care is yet, in third world
    countries, disease is rampant and the healthcare is poor. We need all the
    help we can get to protect the struggling.
  </div>
);
const actionline = (
  <p style={{ color: "black" }}>
    Interested in learning more about BDP’s 5 core areas of focus? Read our
    research articles below and get inspired to change Bangladesh for the better
    too!
  </p>
);

class Healthcare extends Component {
  state = {};
  render() {
    return (
      <TemplateIssue
        mainTitle={<div>Healthcare</div>}
        mainImg={mainImg}
        mainSummary={mainSummary}
        actionline={actionline}
        data={data}
      />
    );
  }
}

export default Healthcare;
