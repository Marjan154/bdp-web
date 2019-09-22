import React, { Component } from "react";
import "../../styles/articles.css";

class content extends Component {
  render() {
    return (
      <div style={{ padding: "20px", marginLeft: "8%" }}>
        <h1 className="tStyle">The Prevalence of Brothels in Bangladesh</h1>

        <h5>By: Mahima Hayat</h5>

        <img
          src={require("../../images/prostitutionArticle3.jpg")}
          style={{ padding: "20px" }}
        ></img>

        <div className="pStyle">
          The practice of prostitution and young girls being exploited in
          exchange for money amongst many other things is prevalent in
          Bangladesh. In fact, Daulatdia, which is 100km west of the capital of
          Bangladesh, is known to be a brothel-district and has been called one
          of the biggest brothels in the world. It is an entire village that is
          centered around prostitution. The second largest brothel in Bangladesh
          is the Tangail District Brothel. The sex workers in these brothels
          are, more often than not, very young girls from the age of 10 and they
          all have one thing in common: extremely poor social and financial
          conditions.
        </div>
        <div className="pStyle">
          Despite the fact that Bangladesh is a secular nation, it is also a
          predominantly Islamic country and these brothels operate on thin ice
          amongst the Muslim society. Bangladesh is one of few Muslim countries
          where prostitution is legal. What does this entail? The workers and
          the buyers are vulnerable to sexually transmitted diseases such as
          AIDs and STDs, the literacy rate stays in equilibrium or in some cases
          decline, early pregnancy may occur, and lastly self-esteem and
          self-confidence may deplete. Some of the sex workers may even be given
          steroids or other drugs to make them seem much more full-figured and
          volumptuous, so they can appeal to the male gaze. Young girls get sold
          off are trafficked to men who are double or more than triple their
          age. For a child to be stripped away of their childhood and thrown
          into a brothel is worrisome. Someone who could ideally be a father and
          take away these children’s innocence is beyond a call for help and is
          a sign of a state of emergency.
        </div>
        <div className="pStyle">
          Most of the women in the Daulatdia and Tangail districts cannot afford
          food or other necessities for themselves and their children, so they
          resort to sending their young sons to work and exploit themselves as
          well as their daughters to those who are willing to pay for sex. This
          can only provide them the basic necessities, but cannot afford the
          cost of school, therefore a lot of sex workers are illiterate. Over
          1,000 enslaved, young, or abandoned women traffic themselves in the
          Daulatdia district. We owe the children and women of Bangladesh so
          much more than investing in a field of work that harms their physical
          and mental well-being.
        </div>
        <div className="pStyle">
          Hope is in high demand but in short supply with many of the young sex
          workers in these slums. The prevalence of brothels in Bangladesh is
          unfortunately much too lucrative for thousands in the area and it
          should not have to be this way. No one needs to empathize to logically
          see that there must be reform. With education, reform and with
          out-pouring support, many of the girls may find themselves out of this
          situation.
        </div>

        <div className="wStyle">
          Works Cited
          <br />
          “UN Team Visit Tangail Brothel as a Part of the 16 Days of Activism
          Campaign against Gender-Based Violence.” UNFPA Bangladesh | UN Team
          Visit Tangail Brothel as a Part of the 16 Days of Activism Campaign
          against Gender-Based Violence, United Nations Population Fund, 24 Dec.
          2018,
          bangladesh.unfpa.org/en/news/un-team-visit-tangail-brothel-part-16-days-activism-campaign-against-gender-based-violence.
          <br />
          Buncombe, Andrew. “Independent Appeal: Sex Workers Dicing with Death
          in Bangladesh.” The Independent, Independent Digital News and Media,
          23 Oct. 2011,
          www.independent.co.uk/news/world/asia/independent-appeal-sex-workers-dicing-with-death-in-bangladesh-1216245.html.
          <br />
          Joan M. Blakey, Alana Gunn. (2018) The “ickiness factor”: Stigma as a
          barrier to exiting prostitution. Journal of Offender Rehabilitation
          57:8, pages 538-561.
          <br />
        </div>
      </div>
    );
  }
}

export { content };
