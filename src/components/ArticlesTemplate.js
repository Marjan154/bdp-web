import React, { Component } from "react";
import "../styles/articles.css";
import { Header } from "semantic-ui-react";

class ArticlesTemplate extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }

  componentDidMount() {}

  render() {
    const { id, mainImg, mainTitle, date, author, file } = this.props;
    console.log("file", file);
    const content = require("./articles/" + file);

    return (
      <div class="articlebody">
        <div>
          <img class="articleimage" src={mainImg} alt="" />
          <Header
            as="h1"
            style={{ fontSize: "5em", color: "rgb(47, 137, 60)" }}
          >
            {mainTitle}
          </Header>
          {date && (
            <Header as="h4" style={{ fontSize: "1em" }}>
              By: {author} {date}
            </Header>
          )}
          <div />
        </div>

        <div>
          <p style={{ fontSize: "1.33em", color: "black" }}>{content}</p>
        </div>
      </div>
    );
  }
}

export default ArticlesTemplate;
