import React, { Component } from "react";

import "../../styles/articles.css";

class content extends Component {
  state = {};
  render() {
    return (
      <div style={{ padding: "20px", marginLeft: "8%" }}>
        <h1 className="tStyle">A Look Into Child Labor in Bangladesh</h1>

        <h5>By: Tausif Islam</h5>

        <div className="pStyle">
          An alarming issue in Bangladesh is unwarranted child labor. Children
          of ages from 5-14 years old are being put into tedious, unescapable
          jobs. Most of the jobs that these children are put into often have
          hazardous and unsafe conditions. Additionally this labor is forced
          upon them. On top of this, these cases of forced labor are illegal and
          are under little to no supervision.
        </div>
        <div className="pStyle">
          There are various types of work that children in Bangladesh are forced
          or put into. Agriculture is one example of fields that the kids are
          put into and this includes farming, which includes harvesting crops
          like tobacco, and drying or processing fish. Another field that the
          children are forced into is industry. This type of work includes cruel
          labor such as mining, producing garments, brick breaking and even
          welding. In industrial work, children are also put in dangerous
          conditions, such as exposure to formaldehyde and other types of
          hazardous chemicals. Other types of hard labor consists of pulling
          rickshaws and domestic work in employer’s houses. Children are forced
          to do this cruel labor for as many as 16 hours a day while only
          getting paid less than $2 a day.
        </div>
        <div className="pStyle">
          The worst forms of child labor in Bangladesh includes smuggling and
          selling drugs and even commercial sexual exploitation. According to
          the “U.S Department of Labor”, the Rohingya ethnic minority are mostly
          targeted in this forced labor. All the displaced Rohingya children
          fleeing Burma due to ethnic cleansing, are forced into these forms of
          forced labor. Most Rohingya boys work on farms or construction, but
          young Rohingya girls are forced to work in Bangladeshi homes near
          their camps. However some are tricked into forced commercial sexual
          exploitation. To make matters worse, these refugees are prohibited
          from attending school in Bangladesh due to “lack of documentation”.
        </div>
        <div className="pStyle">
          A lot of the reasons why these issues of forced labor are not being
          solved is due to the lack of supervision on these industries where
          children are being put to work illegally. The labor laws put in place
          to prevent this sort of forced child labor are widely ignored and the
          government does not have any officials or inspectors to supervise.
          Most of this labor is off the books as well so it is hard to monitor
          the legality of the work being done. Forced and cruel child labor can
          be solved if the following things are done: 1. Everyone needs to raise
          awareness of these issues since most are not aware of this lucrative
          forced labor 2. The government needs to put in place inspectors and
          officials to supervise the conditions of these industries and crack
          down on illegal, off the books forced labor. Only then will this issue
          be resolved and the children live the carefree life they deserve.
        </div>
        <div className="wStyle">
          Sources used:
          <br />
          https://www.latimes.com/world/asia/la-fg-bangladesh-ships-20160309-story.html
          <br />
          https://www.fidh.org/IMG/pdf/DossierPresse-UK-02.pdf
          <br />
          https://www.maritime-executive.com/features/Is-There-Child-Labor-in-Shipbreaking-Yards-2014-08-05
        </div>
      </div>
    );
  }
}

export { content };
