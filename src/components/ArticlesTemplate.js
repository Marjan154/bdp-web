import React, { Component } from "react";
import "../styles/articles.css";

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
    const { content: Component } = this.state;
    return <div class="articlebody">{Component && <Component />}</div>;
  }
}

export default ArticlesTemplate;
