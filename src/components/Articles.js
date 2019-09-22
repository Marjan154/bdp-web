import React, { Component } from "react";

import ArticlesTemplate from "./ArticlesTemplate.js";

class Articles extends Component {
  state = {};
  render() {
    const { issuetype, articleid } = this.props.match.params;
    return (
      <ArticlesTemplate id={articleid} file={issuetype + articleid + ".js"} />
    );
  }
}

export default Articles;
