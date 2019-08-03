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
    const { id, file } = this.props;
    console.log(file);
    import(`./articles/${file}`)
      .then(({content, title}) => this.setState({ 
        content: content, 
      title: title,}))
  }

  render() {
    // mainImg, mainTitle, date, author,
    console.log(this.state.content);
    const { title: Title } = this.state;
    const { content: Component } = this.state;
    return (
      <div class="articlebody">
        <div>
          {Component && <Title/>}
        </div>
          {Component && <Component/>}
      </div>
    );
  }
}

export default ArticlesTemplate;
