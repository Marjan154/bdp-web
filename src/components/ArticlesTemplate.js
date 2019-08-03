import React, { Component } from "react";
import "../styles/articles.css";
import { Header } from "semantic-ui-react";

// const content = (
//   <div>
//     It is not uncommon that women are sold, forced or tricked into prostitution
//     in Bangladesh. However, there are those who never even known of an
//     alternative life. These girls are those who were born into prostitution.
//     Despite there existing laws that forbid child prostitution, they are not
//     upheld and as a result brothels consist of large group of minors. Girls who
//     are unfortunate enough to be born into prostitution have had their lives
//     decided for them at conception. The young girls who were born into
//     prostitution had no opportunity to get an education to prepare for a better
//     life. They have no family to escape to as they are usually birthed from a
//     prostitute and a customer. The government enables the victimization while
//     society shuns the victims. With no money, nowhere to go, and no support from
//     society or a higher institution, they are essentially imprisoned to a life
//     of emotional, sexual, and physical abuse. They are forever branded as
//     “bonded girls”. Unfortunately, the struggle of “bonded girls” does not just
//     end here. Many of them are forced to take body enhancing drugs, the same
//     steroids used to fatten cattle. These drugs make young girls gain weight and
//     curves, despite being severely malnourished and unhealthy. The consequences
//     of these drugs are debilitating, but they are ignored in exchange for better
//     business. In addition to this, the young girls themselves barely make one
//     dollar a day. Those who bear their own children must provide for themselves
//     and their children with this income. If somehow they are able to send their
//     children off to somewhere better, the money they make is rarely enough to
//     provide. If they cannot, their children will then have to live as a
//     prostitute, and the cycle begins again. To make things worse, the blood
//     stained money is often even confiscated from the workers. While these girls
//     are put in an impossible situation, they are by no means weak. When they
//     grow up, many working prostitutes try to protect their children from such a
//     horrible life, and go through extensive measures to give them access to
//     education and isolate them from the brothels. With their collective effort,
//     they will bring the change and freedom that society failed to give them.
//   </div>
// );

class ArticlesTemplate extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { 
      content: null,
      title: null
      // data: null
      // content: [],
      // author: null,
      // date: null,
      // mainTitle: null,
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
      // <div class="articlebody">
      //   <div>
      //     <img class="articleimage" src={data.mainImg} alt="" />
      //     <Header
      //       as="h1"
      //       style={{ fontSize: "5em", color: "rgb(47, 137, 60)" }}
      //     >
      //       {/* {mainTitle} */}
      //     </Header>
      //     {data.date && (
      //       <Header as="h4" style={{ fontSize: "1em" }}>
      //         By: {data.author} {data.date}
      //       </Header>
      //     )}
      //     <div />
      //   </div>

      //   <div>
      //     <p style={{ fontSize: "1.33em", color: "black", padding: "20px" }}>
      //       {this.content}
      //     </p>
      //   </div>
      // </div>
    );
  }
}

export default ArticlesTemplate;
