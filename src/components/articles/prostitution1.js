import React, { Component } from "react";
import "../../styles/articles.css";

class content extends Component {
  render() {
    return (
      <div style={{ padding: "20px", marginLeft: "8%" }}>
        <h1 className="tStyle">Prostitution in Bangladesh</h1>

        <h5>By: Shourov Deb</h5>

        <img
          src={require("../../images/prostitutionArticle2.jpg")}
          style={{ padding: "20px" }}
        ></img>
        <div className="pStyle">
          In Bangladesh, a predominantly Muslim country, prostitution is
          legalized under certain conditions. To become a prostitute, a woman
          must submit an affidavit stating they want to be a prostitute under
          their own choice and that they cannot find any other work. Given this
          offer, a struggling woman may decide to submit an affidavit and sell
          her body for sex in exchange for money. The reasons for working such a
          gruesome job include seeking refuge, need for survival, poor living
          conditions, issues with family, and/or being forced or sold off to a
          brothel at a young age. Often times, the issues associated with
          becoming a prostitute can have devastating effects on a woman’s mental
          health. A prostitute is prone to be condemned, disgraced, degraded,
          mistreated, abused, and neglected by her social environment. Despite
          these circumstances, struggling women in Bangladesh have no choice but
          to continue working in order to make money and survive.
        </div>
        <div className="pStyle">
          Moyna, a woman raised in a small rural town to the west of Dhaka,
          recalls her traumatic experience growing up as a child and becoming a
          prostitute. She was sold to a brothel house by her husband at a very
          young age, however the process and events that preceded this were
          arguably even more life-altering. When she was 11, she had lived a
          carefree childhood, going to school regularly and playing outside. She
          would frequently play hide-and-seek with her 15-year old cousin,
          Monir. One day, she decided to forego playing for a day and go home.
          Upon reaching home, her grandmother told her that she will marry Monir
          by next week, explaining that everything had been arranged for her to
          settle into a marriage. As a young girl, Moyna had no idea what
          marriage entailed. As a 11-year old girl she knew little about life
          other than going to school and playing with her friends. Furthermore,
          the legal age of marriage in Bangladesh is 18. Despite this law,
          certain loopholes allow for underage marriages. Also, the law is
          frequently disobeyed, which led to Bangladesh having the highest rate
          of marriage in the world for girls under the age of 15. With little
          choice, Moyna continued into the marriage, and soon after had a baby
          at the age of 12. After some time, Monir invited her to a small
          village called Daulatdia so that they could spend time together. Once
          arriving, Monir took her to a small room and told her he would step
          out for a bit, and never returned. Soon, she realized what had
          happened to her. She was sold to a brothel house for a price of
          300,000 taka (approx.. 3.5k USD.) As years passed, she became
          dedicated to this lifestyle, being dependent on the income she would
          get from selling sex to approximately 15-20 customers daily. In the
          brothel house, she had witnessed several young children experiencing
          the same dreadful circumstances as her. Many kids had foregone their
          income for their services in exchange for food.
        </div>
        <div className="pStyle">
          Several stories similar to the one stated exist in Bangladesh. Despite
          the widespread occurrence of illegal forms of prostitution, the legal
          forms of prostitution are common as well. For example, a woman who
          gets a divorce with her long time husband can face difficulties
          raising enough income to support herself and her children. Often times
          the woman is a stay-at-home mom who takes care of the children and
          maintains the household while the husband works to earn a living
          income. Women who have economic dependence on their husband are at
          risk of having difficult living standards after a divorce.
        </div>
        <div className="pStyle">
          Another circumstance that can cause a woman to pursue a career in
          prostitution is not having a stable living condition. An example is a
          woman who is homeless, poor, hungry, and uneducated. Giving these
          unfavorable qualities, the labor force can deny her basic jobs. Also,
          she may not have a partner to support her. This can motivate her to
          pursue a career in prostitution in order to continue living her life.
        </div>
        <div className="pStyle">
          Prostitution can allow for woman to earn an income to support their
          lives, however the associated issues evidently trump any benefit
          gained from the work. One can very easily see the work as demoralizing
          and degrading. Despite this, brothel homes in Bangladesh continue to
          exist and grow in its population, and poverty and social issues play a
          large role in the growth of prostitution
        </div>

        <div className="wStyle">
          Works Cited
          <br />
          https://en.wikipedia.org/wiki/Prostitution_in_Bangladesh#Child_prostitution
          <br />
          https://www.elle.com/uk/life-and-culture/longform/a40923/bangladesh-husband-sold-me-to-a-brothel/
          <br />
          https://www.aljazeera.com/programmes/101east/2017/07/bangladesh-biggest-brothel-170726081750179.html
          <br />
        </div>
      </div>
    );
  }
}

export { content };
