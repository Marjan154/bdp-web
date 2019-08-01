import React, { Component } from "react";
import "../styles/education2.css";
import TemplateIssue from "./TemplateIssue";
const data = [
  {
    id: "1",
    issue: "earlymarriage",
    title: "Tanjeela newaz",
    author: "author",
    articleFile: "EarlyMarriage1",
    img: "healthcard1.jpg"
  },
  {
    id: "1",
    issue: "earlymarriage",
    title: "Tanjeela newaz",
    author: "author",
    articleFile: "EarlyMarriage1",
    img: "healthcard1.jpg"
  },
  {
    id: "1",
    issue: "earlymarriage",
    title: "Tanjeela newaz",
    author: "author",
    articleFile: "EarlyMarriage1",
    img: "healthcard1.jpg"
  }
];

const mainImg = require("../images/Education.jpg");
const mainSummary = (
  <div>
    This is a template that is great for small businesses. It doesn't have too
    much fancy flare to it, but it makes a great use of the standard Bootstrap
    core components. Feel free to use this template for any project you want!
  </div>
);
const actionline = (
  <p style={{ color: "black" }}>
    This call to action card is a great place to showcase some important
    information or display a clever tagline!
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
