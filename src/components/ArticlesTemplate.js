import React, { Component } from "react";
import "../styles/articles.css";
import { Header } from "semantic-ui-react";

class ArticlesTemplate extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      title: null
    };
  }

  componentDidMount() {
    const { issuetype, articleid } = this.props.match.params;
    const file = issuetype + articleid + ".js";
    import(`./articles/${file}`).then(({ content }) =>
      this.setState({
        content: content
      })
    );
  }

  render() {
    // mainImg, mainTitle, date, author,
    // const { title: Title } = this.state;
    const { content: Component } = this.state;
    return <div class="articlebody">{Component && <Component />}</div>;
  }
}

export default ArticlesTemplate;
