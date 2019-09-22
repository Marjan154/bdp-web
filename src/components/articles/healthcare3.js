import React, { Component } from "react";
import "../../styles/articles.css";

class content extends Component {
  render() {
    return (
      <div style={{ padding: "20px", marginLeft: "8%" }}>
        <h1 className="tStyle">Medical Falsification in Bangladesh</h1>

        <h5>By: Karima Khondakar </h5>

        <img
          src={require("../../images/healthcard1.jpg")}
          style={{ padding: "20px", maxHeight: "400px" }}
        ></img>

        <div className="pStyle">
          Medical negligence, or otherwise known as medical malpractice, is an
          error that is present during the treatment/diagnosis of a patient or
          the aftermath, such as being prescribed the wrong medicine. In
          Bangladesh, there are many cases where patients have died from
          consuming the wrong medicine, which were prescribed to them by the
          doctor. Certain deaths could have been prevented if they were treated
          with proper care and respect in the hospital.
        </div>
        <div className="pStyle">
          Over the last couple of years, medical negligence has been a common
          trend present in all the hospitals. Multiple claims have been made by
          families of their deceased family members. For example, a first year
          student in the Zoology department from Dhaka University, named Afia
          Akter Chaity, had died in the hospital due to an error in identifying
          the main cause of her sickness. In 2018, she was diagnosed with Acute
          Myeloid (Myeloblastic) Leukemia, which is a cancer of the blood and
          bone marrow, acute meaning it occurs rapidly. However, despite the
          analysis proving the same diagnostic, doctors said she was suffering
          from Dengue, a viral disease transmitted by mosquitoes. An article in
          the Dhaka Tribune stated, “...Sometimes the doctors refused to share
          information about the patient with their family members, which can
          lead to wrong treatment.” Doctors don't always tell the truth to the
          patient's family so they can prescribe the wrong medicine on purpose.
          A hospital is supposed to help people recover from their sickness or
          find the main source of their illness but multiple patients are being
          harmed or even killed due to the wrong treatment.
        </div>
        <div className="pStyle">
          Since people are given the wrong treatment and medicine, The
          Directorate General of Drug Administration (DGDA) has created six
          international standard mini-labs to make sure fake medicine aren't
          being given out and to lower the number of medical mishaps. Within
          three hours, the administration can verify if the medicine is good
          quality. This is better than labs, which takes several weeks to figure
          out its components. It’s present in areas such as Rangpur, Dhaka,
          Chattogram, Barisal, Rajshahi and Khulna. They are trying to spread
          out and help lower the number of deaths.
        </div>
        <div className="pStyle">
          From October 2008 to February 2016, more than 500 people had died from
          medical accidents. Another similar case occurred in 2011 with an eight
          month old baby, the baby remains nameless. His dad, Mustafiz (not his
          real name), took the baby to the United Hospital and later he was
          placed in an intensive care unit. Mustafiz was told that his child was
          suffering from pneumonia, so they shifted his kid to a normal room; he
          was put under the ventilator for eighteen days. After twenty-one days,
          his baby died and the doctors didn't release any information about the
          cause of the death. After this incident, Dhaka Tribune said, Mustafiz
          created a group on Facebook called “Blacklist Doctors.” Multiple
          people wrote a countless numbers of doctors names who used wrong
          treatments or their practice resulted in the patients' deaths.
        </div>
        <div className="pStyle">
          These deaths have made people question whether or not they should go
          to the hospital. Usually when people go to treat their illness, they
          get a wrong treatment in Bangladesh and when they travel to a hospital
          in another country, they are told that they didn't need to do a
          certain action. For example, in the Dhaka Tribune, Afrose Jahan Chaity
          said, “In fiscal year 2015-16, India saw 460,000 inbound patients at
          its different hospitals,...165,000 were from Bangladesh.
          Interestingly, only around 58,000 medical visas were issued to
          Bangladeshi nationals then, the survey reveals” (Chaity). Usually
          patients would be confused on what to do and have no trust in
          Bangladeshi doctors so they relied heavily on hospitals in other
          countries. Another example is from 2001, Suraiaya Begum, found a
          tumour present in her back. When she went to a hospital in Dhaka, they
          removed her left ovary. However, when she went to Kolkata, a doctor
          had informed her that removing her ovary was unnecessary and she
          could've have better treatment. People tend to not trust Bangladesh
          hospitals for their misleading treatments and because doctors choose
          not to explore better options that would benefit the patients.
        </div>
        <div className="pStyle">
          Bangladesh is trying to improve their hospital records. They have
          taken measures to check the quality of all the medicine to make sure
          they are safe. Medical mishaps cases have a huge record in Bangladesh
          and the government is updating their system by changing their old
          ways.
        </div>

        <div className="wStyle">
          Sources used:
          <br />
          https://www.dhakatribune.com/opinion/special/2018/01/27/will-medical-professionals-bangladesh-receive-immunity
          <br />
          https://www.dhakatribune.com/feature/health-wellness/2017/11/30/doctor-trust-bangladesh
          <br />
          https://www.thedailystar.net/backpage/news/minilabs-six-districts-1683232
          <br />
        </div>
      </div>
    );
  }
}

export { content };
