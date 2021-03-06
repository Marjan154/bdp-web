import React, { Component } from "react";
import "../../styles/articles.css";

class content extends Component {
  render() {
    return (
      <div style={{ padding: "20px", marginLeft: "8%" }}>
        <h1 className="tStyle">Access to public education in Bangladesh </h1>

        <h5>Oasima Mahi</h5>
        <img
          src={require("../../images/educationArticle2.jpg")}
          style={{ padding: "20px", maxHeight: "400px" }}
        ></img>

        <div className="pStyle">
          An article published by World Bank states that over the past two
          decades, Bangladesh has been extremely successful in ensuring access
          to education, particularly at the primary level and for girls. The net
          enrollment rate at primary school level is said to have increased from
          80 percent in 2000 to 98 percent in 2015, and secondary school net
          enrollment is now around 54 percent, up from 45 percent in 2000. On
          the other hand, the percentage of children completing primary school
          is close to 80 percent.However, approximately five million Bangladeshi
          children between the ages of six and 13 specifically from poor
          families, urban slums, and rural areas choose to work and provide for
          the family instead of getting an education given the crude poverty
          that they experience. Even though gender parity is also achieved in
          terms of education access, disparity still remains, especially in hard
          to reach rural areas where specifically females are heavily
          discouraged from receiving any form of education.Cultural beliefs of
          viewing women as inferiors or being limited only to household arena
          result in many young girls confined within the houses before or after
          their marriages or receiving only partial religious education in
          institutions called Madrasha. Many students also drop out of schools
          or colleges in order to handle the financial responsibility of the
          family. As a result, Bangladesh’s workforce of 87 million is reported
          to be largely undereducated with only 4 percent of workers having
          higher than secondary education.
        </div>
        <div className="pStyle">
          Although the government, along with many nonprofit organizations,
          particularly one named BRAC, is working to ensure that no child is
          left behind from the lights of education, the dream of universal
          education is still far from being accomplished. In order to ensure
          widespread access to public education, more schools are needed to be
          built, along with the recruitment of more teachers who can plant the
          seed of knowledge among the young and those who are left to dire
          poverty. As per data, spending on education accounts for 14.4% of the
          national budget, which corresponds to 2% of GDP. Given that many are
          still without education it is necessary that more be spent on the
          education sector.
        </div>

        <div className="wStyle">
          Sources used:
          <br />
          “Bangladesh: Ensuring Education for All Bangladeshis.” World Bank,
          projects-beta.worldbank.org/en/results/2016/10/07/ensuring-education-for-all-bangladeshis.
          <br />
          “Education in Bangladesh.” Education in Bangladesh | Global
          Partnership for Education,
          www.globalpartnership.org/country/bangladesh.
          <br />
          "Health Policy in Bangladesh." Wikipedia. October 17, 2018. Accessed
          June 14, 2019.
          https://en.wikipedia.org/wiki/Health_policy_in_Bangladesh
          <br />
          . Second Last in Govt Expenditure on Health. World Health
          Organization, World Health Statistics, 2017
          <br />
        </div>
      </div>
    );
  }
}

export { content };
