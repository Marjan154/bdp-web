import React, { Component } from "react";

import "../../styles/articles.css";

class content extends Component {
  state = {};
  render() {
    return (
      <div style={{ padding: "20px", marginLeft: "8%" }}>
        <h1 className="tStyle">
          Fashion at a Cost: Child Labor in Bangladesh’s Sweatshops
        </h1>

        <h5>By: Farhana Hussain</h5>

        <img
          src={require("../../images/laborArticle3.jpg")}
          style={{ padding: "20px" }}
        ></img>

        <div className="pStyle">
          In the globalized world we live in today, it is easier than ever to
          follow the latest fashion trends and wear stylish clothes at an
          affordable price. Every article of clothing that has gotten its way
          into our hands has its own story, but chances are it was most likely
          made by impoverished people in developing countries, such as
          Bangladesh. Many of these workers, in fact, are actually children as
          young as ten who work long hours in poor working conditions for low
          wages. Unfortunately, child labor is a particularly common practice
          within Bangladesh’s expansive textile and garments manufacturing
          industry – which has steadily gained international recognition as one
          of the largest garments exporters and distributors in the world.” 1
        </div>
        <div className="pStyle">
          As Bangladesh struggles with a growing demand for more jobs due to
          overpopulation – which is only projected to increase to nearly 185
          million by 2030, its garments industry has served a valuable role in
          employing more than 25 million people, most of whom are women and
          young children from poor families.2 Nevertheless, this financial
          stability does not justify the exploitation of children in garment
          factories. According to a 2016 study conducted by the Overseas
          Development Institute, “children as young as six employed full time
          and others working up to 100 to 110 hours a week … [earned] on average
          less than $2 a day.”3
        </div>
        <div className="pStyle">
          But what leads children in Bangladesh to work in garments factories?
          The answer lies within a larger issue – poverty. Due to the “absence
          of living wages, adequate social protection schemes, lack of
          opportunities to access education and prevailing social norms” many
          children are pressured to work in these factories at a young age –
          especially those whose parents are already garments factory workers.
          Working in garment factories is one of the few ways poor children in
          Bangladesh can contribute to supporting themselves and their families
          which, in turn, negatively impacts their quality of education and
          prevents them from continuing school. Children employed in
          Bangladesh’s many sprawling garments factories, or rather
          “sweatshops,” engage in various kinds of jobs ranging from operating
          clothes machines to
        </div>

        <div className="wStyle">
          Sources used:
          <br />
          1 UNICEF “The Ready Made Garment Sector and Children in Bangladesh”
          <br />
          2 UNICEF “The Ready Made Garment Sector and Children in Bangladesh”
          <br />
          3 Beaubien, Jason. “Study: Child Laborers in Bangladesh Are Working 64
          Hours A Week”
          <br />4 UNICEF “The Ready Made Garment Sector and Children in
          Bangladesh”
        </div>
      </div>
    );
  }
}

export { content };
