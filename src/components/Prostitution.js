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
  <div>The health care in Bengladesh is poor. We need your help.</div>
);
const actionline = <p style={{ color: "black" }}>Donate Now</p>;

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
