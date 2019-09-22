import React, { Component } from "react";
import "../../styles/articles.css";

class content extends Component {
  render() {
    return (
      <div style={{ padding: "20px", marginLeft: "8%" }}>
        <h1 className="tStyle">The Horrors of Child Prostitution</h1>

        <h5>By: Marjan Ansar</h5>

        <img
          src={require("../../images/prostitutionArticle1.jpg")}
          style={{ padding: "20px" }}
        ></img>

        <div className="pStyle">
          It is not uncommon that women are sold, forced or tricked into
          prostitution in Bangladesh. However, there are those who never even
          known of an alternative life. These girls are those who were born into
          prostitution. Despite there existing laws that forbid child
          prostitution, they are not upheld and as a result brothels consist of
          large group of minors. Girls who are unfortunate enough to be born
          into prostitution have had their lives decided for them at conception.
        </div>
        <div className="pStyle">
          The young girls who were born into prostitution had no opportunity to
          get an education to prepare for a better life. They have no family to
          escape to as they are usually birthed from a prostitute and a
          customer. The government enables the victimization while society shuns
          the victims. With no money, nowhere to go, and no support from society
          or a higher institution, they are essentially imprisoned to a life of
          emotional, sexual, and physical abuse. They are forever branded as
          “bonded girls”.
        </div>
        <div className="pStyle">
          Unfortunately, the struggle of “bonded girls” does not just end here.
          Many of them are forced to take body enhancing drugs, the same
          steroids used to fatten cattle. These drugs make young girls gain
          weight and curves, despite being severely malnourished and unhealthy.
          The consequences of these drugs are debilitating, but they are ignored
          in exchange for better business.
        </div>
        <div className="pStyle">
          In addition to this, the young girls themselves barely make one dollar
          a day. Those who bear their own children must provide for themselves
          and their children with this income. If somehow they are able to send
          their children off to somewhere better, the money they make is rarely
          enough to provide. If they cannot, their children then have to live as
          a prostitute, and the cycle begins again. To make things worse, the
          blood stained money is often even confiscated from the workers.
        </div>
        <div className="pStyle">
          While these girls are put in an impossible situation, they are by no
          means weak. When they grow up, many working prostitutes try to protect
          their children from such a horrible life, and go through extensive
          measures to give them access to education and isolate them from the
          brothels. With their collective effort, they will bring the change and
          freedom that society failed to give them.
        </div>
        <div className="pStyle">
          “Eleven-year-old Shefali, a prostitute, gets her eyebrow threaded.
          Shefali was born in Kandapara brothel because her mother was also a
          prostitute. She has to serve around 20-25 customers per day. Shefali
          doesn&#39;t know how much she earns as her Madam takes away all of her
          income. In exchange she gets food three times a day and, occasionally,
          some gifts.”
        </div>
        <div className="wStyle">
          Works Cited
          <br />
          https://widerimage.reuters.com/story/teenage-prostitutes-in-bangladesh
        </div>
      </div>
    );
  }
}

export { content };
