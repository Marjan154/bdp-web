import React, { Component } from "react";
import TemplateIssue from "./TemplateIssue";

const data = [
  {
    id: "2",
    issue: "prostitution",
    title: "The Horrors of Child Prostitution",
    author: "Marjan Ansar",
    articleFile: "prostitution2",
    img: "prostitutionArticle1.jpg"
  },
  {
    id: "1",
    issue: "prostitution",
    title: "Prostitution in Bangladesh",
    author: "Shourov Deb",
    articleFile: "prostitution1",
    img: "prostitutionArticle2.jpg"
  },
  {
    id: "3",
    issue: "prostitution",
    title: "The Prevalence of Brothels in Bangladesh",
    author: "Mahima Hayat",
    articleFile: "prostitution3",
    img: "prostitutionArticle3.jpg"
  }
];
const mainImg = require("../images/mainProstitution.jpg");
const mainSummary = (
  <div>
    Thousands of women have their lives stolen away from them, and are trapped
    into a life of prostitution. Help these women take back their basic human
    rights!{" "}
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
