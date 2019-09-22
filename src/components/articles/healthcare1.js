import React, { Component } from "react";
import "../../styles/articles.css";

class content extends Component {
  render() {
    return (
      <div style={{ padding: "20px", marginLeft: "8%" }}>
        <h1 className="tStyle">
          Bangladesh’s Ongoing Struggle: Arsenic in Water
        </h1>

        <h5>By: Priya Saha</h5>

        <img
          src={require("../../images/healthArticle1.jpg")}
          style={{ padding: "20px" }}
        ></img>

        <div className="pStyle">
          Excess amounts of arsenic in water have now become a debilitating
          problem for the civilians of Bangladesh. The population being exposed
          to the arsenic-contaminated groundwater is at an all time high and
          requires immediate attention/action. The civilians of Bangladesh have
          no other option but to drink the potentially contaminated groundwater,
          which raises major health concerns. There have been reports over time
          of individuals affected by arsenic in Bangladesh and surrounding
          areas. It has been discovered that the arsenic contamination is
          extremely high in the tube-wells, which is where majority of the
          population retrieve their water. Arsenic in groundwater poses a huge
          threat to the lives of millions in Bangladesh.
        </div>
        <div className="pStyle">
          Attached below is a table breaking down the different regions of
          Bangladesh and how they compare to containing arsenic contaminants in
          groundwater. Contamination of drinking-water by arsenic in Bangladesh:
          a public health emergency. As you can see here, arsenic in groundwater
          is dominant in many regions of Bangladesh out of the samples surveyed.
          This issue is being brought to light as of recently due to the
          significant use of tube-wells by most of the Bangladeshi population.
          The effects of arsenic are major and cause life-threatening
          complications. These include (but are not limited to) skin lesions,
          skin cancer, pulmonary disease, etc. There have also been reports of a
          small number of cases of skin cancer, which may lead to a rapid
          increase if arsenic levels aren’t managed. Tube-wells have been used
          for over decades and continue to be used by the majority. The lack of
          awareness should not be the cause of millions of individuals being
          affected on a daily basis.
        </div>
        <div className="pStyle">
          There should be increased urgency and action taken against the high
          concentrations of arsenic in groundwater. The mitigation of arsenic
          exposure is fairly straightforward, however the lack of funding makes
          this an increasingly difficult problem to solve. Innocent lives
          shouldn’t be at stake for a problem that can be moderated by taking a
          few steps to raise awareness and gain funds.
        </div>
        <div className="wStyle">
          Works Cited Ahmad, Sk Akhtar et al. “Arsenic contamination in
          groundwater in Bangladesh: implications and challenges for healthcare
          policy.” Risk management and healthcare policy vol. 11 251-261. 30
          Nov. 2018, doi:10.2147/RMHP.S153188 Smith, A H et al. “Contamination
          of drinking-water by arsenic in Bangladesh: a public health
          emergency.” Bulletin of the World Health Organization vol. 78,9
          (2000): 1093-103.
        </div>
      </div>
    );
  }
}

export { content };
