import React, { Component } from "react";
import "../styles/healthcare.css";
import TemplateIssue from "./TemplateIssue";

import ArticlesTemplate from "./ArticlesTemplate.js";

const data = [
  {
    id: "1",
    issue: "healthcare",
    title: "Bangladesh’s Ongoing Struggle: Arsenic in Water",
    author: " Priya Saha",
    articleFile: "healthcare1",
    img: "healthcard1.jpg"
  },
  {
    id: "2",
    issue: "healthcare",
    title: "Heavy Metals and Bangladesh Waters",
    author: "Mohammed Tousif Nur",
    articleFile: "healthcare1",
    img: "healthcard1.jpg"
  },
  {
    id: "3",
    issue: "healthcare",
    title: "Bangladesh’s Ongoing Struggle: Arsenic in Water",
    author: " Priya Saha",
    articleFile: "healthcare1",
    img: "healthcard1.jpg"
  }
];
const mainImg = require("../images/Russell-Watkins.jpg");
const mainSummary = (
  <div>The health care in Bengladesh is poor. We need your help.</div>
);
const actionline = <p style={{ color: "black" }}>Donate Now</p>;

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
