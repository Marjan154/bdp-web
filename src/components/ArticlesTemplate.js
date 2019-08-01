import React, { Component } from "react";
import "../styles/articles.css";
import { Header } from "semantic-ui-react";

class ArticlesTemplate extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }

  componentDidMount() {
    this.readTextFile(this.props.file);
  }
  readTextFile = file => {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          let allText = rawFile.responseText;
          this.setState({
            content: allText
          });
        }
      }
    };
    rawFile.send(null);
  };

  render() {
    const { id, mainImg, mainTitle, date, author, file } = this.props;

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
          <p style={{ fontSize: "1.33em", color: "black" }}>
            {this.state.content}
          </p>
        </div>
      </div>
    );
  }
}

export default ArticlesTemplate;
