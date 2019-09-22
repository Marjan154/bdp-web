import React, { Component } from "react";
import "../../styles/articles.css";

class content extends Component {
  render() {
    return (
      <div style={{ padding: "20px", marginLeft: "8%" }}>
        <h1 className="tStyle">Religious Schools </h1>

        <h5>Sila Pollen </h5>
        <img
          src={require("../../images/educationArticle3.jpg")}
          style={{ padding: "20px" }}
        ></img>

        <div className="pStyle">
          Bangladesh is a developing country with the vast majority of the
          population being on the less fortunate and poorer side. Education in
          itself is a luxury item. That many people fail to be able to afford.
          Bangladesh has been a predominantly Muslim majority country. Sending
          students to Madrasas help provide an education to the poorer students
          even though these religious schools limit the amount of scientific or
          secular teaching. Religious schools are well respected, and they’re
          seen as a pure ground of teaching the innocent. Schools with such
          respected societal views are often more concerned with their own
          self-image rather than the wellbeing of their students. There are over
          4million poor children that seek educational refuge in these religious
          institutions. 50 Thousand religious schools are currently collectively
          education these children. 50 thousand religious schools as in 50
          thousand institutions that must collectively worry about their
          reputation so they can continue to hold the amount of societal respect
          they have held.
        </div>
        <div className="pStyle">
          One very recent event that we must shed light on is the injustice done
          to Nusrat Jahan Rafi by her Madrasa. At only 19 years of age, she was
          courageous enough to speak out against a sexual predator in her
          Madrasa and she was forced to pay for this with her life. She had
          originally filed a sexual harassment complaint. Most sexual harassment
          complaints like these are easily dismissed. Experiences of sexual
          abuse from people of such high social status (the headmaster of her
          Madrasa) are often not reported or easily dismissed. Nusrat on the
          other hand didn’t stop until action was taken against her claims. Her
          Madrasa later threatened and bribed her to take down her claims yet
          she continue to refuse. Later on she was escorted to the roof top by a
          female student (who had been bribed to do so) and was set on fire by
          four others. The Police Bureau of investigations, chief Majumder
          stated that they wanted to frame the murder to make it look like.
          Suicide. She was son hospitalized for her burns as it covered 80% of
          her body. While in the ambulance Nusrat stated “The teacher touched me
          , I will fight this crime till my last breath”. Later on April 10,
          2019 she passed away and several thousands of people gathered to mourn
          her death and swear to be ring justice out of her wrongful death.
        </div>
        <div className="pStyle">
          This is just one particular case that received the recognition and
          after effect that was well deserved. Many unacknowledged and
          unreported cases like Nusrat’s are being concealed by those who hold
          enough social power to do so. Though religious schools are able to
          provide an education to many students, we also need to take into
          account the other hardships these educational refuge centers may bring
          for the children that are the future of Bangladesh. If we teach them
          that corruption and social injustice is acceptable, how can we expect
          a better and brighter future for Bangladesh as a collective?
        </div>

        <div className="wStyle">
          Sources used:
          <br />
          https://www.bbc.com/news/world-asia-47947117
          <br />
          https://journals.sagepub.com/doi/abs/10.1177/0973598406110016?journalCode=jnra
          <br />
        </div>
      </div>
    );
  }
}

export { content };
