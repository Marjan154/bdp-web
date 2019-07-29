import React, { Component } from "react";
import "../styles/articles.css";
import { Header } from "semantic-ui-react";

class ArticlesTemplate extends Component {
  state = {};
  render() {
    const { mainImg, mainTitle, date, author, content } = this.props;
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
