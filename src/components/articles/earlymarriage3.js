import React, { Component } from "react";
import "../../styles/articles.css";

class content extends Component {
  render() {
    return (
      <div style={{ padding: "20px", marginLeft: "8%" }}>
        <h1 className="tStyle">
          Early Child Marriage: A Cover for Pedophilia in Bangladesh?
        </h1>

        <h5>By: Farhana Hussain</h5>
        <img
          src={require("../../images/marriageArticle2.jpg")}
          style={{ padding: "20px" }}
        ></img>

        <div className="pStyle">
          Early child marriages typically involve younger girls being married to
          men, who are usually much older, due to family pressure and social
          stigma they face in their communities. This is no exception within
          Bangladesh, which ranks as one of the top countries in the world with
          the highest rates of early child marriages. According to 2017
          estimates, nearly 71% of rural girls are married before age 18
          compared with 54% of young girls from urban regions who are also
          married despite being underage. 1 Child marriage is not just connected
          to cultural norms but also other related underlying problems and
          behaviors that are often ignored in Bangladeshi society – particularly
          the “hidden” issue of pedophilia.
        </div>
        <div className="pStyle">
          Numerous cases of pedophilia and sexual abuse against children are
          reported in Bangladeshi news media. Last month, the Dhaka Tribune
          reported a case of a 20-year-old man from Madhupur who coaxed a
          7-year-old girl to his home and tried raping her but was ultimately
          unsuccessful upon the girl’s fortunate rescue from nearby neighbors
          who heard her cries.2 Just as recent as last week, two more atrocious
          cases of rape were revealed in which the perpetrators were also
          pedophiles; in the first, two young teenage girls were abducted and
          raped by older men in Naranyanganj and in the latter case a
          12-year-old sixth grader was raped by two older men more than twice
          her age. The ill behavior of pedophiles can be linked to their
          feelings of entitlement to sex, wanting to feel more masculine and
          dominant, and their desire to have their sexual needs met by someone
          deemed weak, subordinate, and easy to manipulate.3
        </div>
        <div className="pStyle">
          Although these cases have been reported, a significantly larger amount
          of child sexual abuse cases that involve pedophiles are not brought to
          the attention of authorities due to various reasons such as lack of
          trust in the legal system, time consuming and high costs of taking
          legal action, and families simply preferring to avoid negative stigma
          from the public.4 Such cases are also “underreported largely due to
          the fact that children do not fully understand their traumas, and the
          perpetrator is often a close family friend or relative.”5
        </div>

        <div className="wStyle">
          Sources used:
          <br />
          1 UCA News, “Child brides, a cover for cultural pedophilia”
          <br />
          2 Al Numan, Abdullah. Dhaka Tribune, “Man Arrested for Attempted Rape
          in Tangail”
          <br />
          3 Fattah, Kazi et al., “No Place is Safe: Sexual Abuse of Children in
          Rural Bangladesh”
          <br />4 Fattah, Kazi et al., “No Place is Safe: Sexual Abuse of
          Children in Rural Bangladesh”
          <br />5 Dhaka Tribune, “A sickness within our society”
        </div>
      </div>
    );
  }
}

export { content };
