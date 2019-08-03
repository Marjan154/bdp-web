import React, { Component } from "react";

import ArticlesTemplate from "./ArticlesTemplate.js";

const mainImg = require("../images/mainProstitution.jpg");

//const mainTitle = <div>Prostitution</div>;

// const content = (
//   <div>
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//     tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum
//     nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet
//     bibendum enim facilisis gravida. Nisl nunc mi ipsum faucibus vitae aliquet
//     nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat
//     maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas
//     egestas fringilla phasellus faucibus scelerisque eleifend. Sagittis orci a
//     scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl
//     suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat
//     in. Fusce ut placerat orci nulla. Pharetra vel turpis nunc eget lorem dolor.
//     Tristique senectus et netus et malesuada.
//   </div>
// );

class Articles extends Component {
  state = {};
  render() {
    const { issuetype, articleid } = this.props.match.params;
    return (
      <ArticlesTemplate
        id={articleid}
        // mainImg={mainImg}
        // mainTitle={mainTitle}
        // author="JOHN DOE"
        // date="7/11/19"
        file={issuetype + articleid + ".js"}
      />
    );
  }
}

export default Articles;
