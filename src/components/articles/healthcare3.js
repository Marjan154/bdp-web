import React, { Component } from "react";
import "../../styles/articles.css";

class content extends Component {
  render() {
    return (
      <div style={{ padding: "20px", marginLeft: "8%" }}>
        <h1 className="tStyle">Access to Healthcare in Bangladesh: A Review</h1>

        <h5>By: Murad Razzak </h5>

        <img
          src={require("../../images/healthcard1.jpg")}
          style={{ padding: "20px", maxHeight: "400px" }}
        ></img>

        <div className="pStyle">
          Martin Luther King Jr. once said, “Of all the forms of inequality,
          injustice in health care is the most shocking and inhumane”. He
          encapsulated the importance of a proper and equal healthcare system.
          Access to healthcare is a greater issue in third world countries.
          Bangladesh, a developing nation, suffers from a large socioeconomic
          gap in access to care. This gap creates an inefficient delivery of
          proper healthcare which leads to major health concerns.
        </div>
        <div className="pStyle">
          Bangladesh gained its independence in 1971 and ever since then, it has
          grown into a well-developed nation. In 2018, the United Nations
          recognized Bangladesh as a developing nation.1 However, this is far
          from perfect. The healthcare system of Bangladesh follows the Primary
          Healthcare System or the PHC, which plans to make universal healthcare
          for all. There are three levels of healthcare service: Primary,
          Secondary and Tertiary level. The primary level is the union
          domiciliary, secondary is provided through medical facilities in each
          district, while tertiary is available in medical college or public
          health institutes at the national level.2 However, there is a large
          shortage of Human Health Resources (HHR) in Bangladesh. 3 According to
          the World Health Organization (WHO), there is 3.05 physicians per
          10,000 population and 1.07 nurses per 10,000 population.4These numbers
          signify a poor result of delivery. Without the right resources based
          on an even geographic distribution, in national and district level,
          delivering proper healthcare for all becomes difficult. It is also
          important to note that there is a disparity between sanctioned and
          filled health worker positions.
          <br />1
          https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(17)30470-9/fulltext
        </div>
        <div className="pStyle">
          Let us focus on the tertiary level of service. According to the WHO,
          70% of Bangladesh’s population is in rural areas. However, most of the
          HHR is located in tertiary level which makes it virtually inaccessible
          for the rural population. So what are some issues that could be
          addressed? WHO recognized these as the major challenges. The need for
          a centralized and well-governed healthcare structure with a proper
          regulation and framework, fragmented delivery service for the public,
          maldistribution of the HHR, poor maintenance of the facilities and
          lack of regulation of the public sector. A major step in solving the
          issue is with the governmental level: increasing the funding and
          standardizing the healthcare system with proper public policies to
          ensure equal service. Figure 2 shows a tremendous low healthcare
          expenditure in Bangladesh. In order to tackle these inequalities, it
          is important to make healthcare affordable for the poor and increase
          HHR in rural areas through small facilities. Decentralize the
          recruitment process and recruit high-quality doctors and nurses to
          tackle the issue of malpractice. In order to decrease the cost, create
          a digitized healthcare database with patient information accessible
          throughout the country. Increase the frontline health workers and foot
          doctors, which can address the lack of care in rural areas.
          <br />2 https://en.wikipedia.org/wiki/Health_policy_in_Bangladesh
          <br />3 https://www.who.int/workforcealliance/countries/bgd/en/
          <br />4 Ibid
        </div>
        <div className="pStyle">
          Tackling the issue of healthcare is a major concern for any country,
          however, with the right amount of effort and awareness it is possible.
          Bangladesh has the capacity to improve their healthcare significantly,
          however, without a proper structure and mindset, it will be only a
          dream.
        </div>

        <div className="wStyle">
          Sources used:
          <br />
          Who.int. (2019). WHO | Bangladesh. [online]. Accessed 14 Jun. 2019.
          https://www.who.int/workforcealliance/countries/bgd/en/
          <br />
          Allyane, Adams, Syed Masud Ahmed, and Timothy G. Evans. "Universal
          Health Care in Bangladesh—promises and Perils." The Lancet. Accessed
          June 13, 2019.
          https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(17)30470-9/fulltext.
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
