import React, { Component } from "react";

import ArticlesTemplate from "./ArticlesTemplate.js";

const mainImg = require("../images/mainProstitution.jpg");

class Articles extends Component {
  state = {};
  render() {
    const { issuetype, articleid } = this.props.match.params;
    return (
      <ArticlesTemplate
        id={articleid}
        file={issuetype + articleid + ".js"}
      />
    );
  }
}

export default Articles;
