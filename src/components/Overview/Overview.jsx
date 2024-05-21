import React from "react";
import styles from "./Overview.module.css";
import Chips from "../Chips/Chips";
import graduation_hat from "../../assets/icons/Graduation hat.svg";
import arrow_up from '../../assets/icons/arrow-up.svg'
import interrogation from '../../assets/icons/fi-br-interrogation.svg'
import BottomFrame from "./BottomFrame";

const Overview = () => {
  const chipsText = [
    "Personal Mentorship",
    "Internship Assistance",
    "Industry Certified Courses",
  ];

  return (
    <>
    <div id="overview" className={styles.container}>
      <div>
        <div className={styles.heading}>
          {" "}
          <img src={graduation_hat} alt="" />
          An IIT Delhi Alumni Initiative
        </div>
        <div>
          <h1 className={styles.mainheading}>
            Become an Expert in the field of
            <span> Data Science with 6 courses</span>
          </h1>
        </div>
        <p className={styles.para}>
          A specially crafted Tech Kickstarter, with 5+ extensive online
          courses.
        </p>
        <div className={styles.chips}>
          {/* Pass the text prop to each Chips component */}
          {chipsText.map((text, index) => (
            <Chips key={index} text={text} />
          ))}
        </div>
        <div className={styles.buttons}>
          <div className={styles.enroll}>Enroll Now <img src={arrow_up} alt="" /></div>
          <div className={styles.knowmore}>Know More <img src={interrogation} alt="" /></div>
        </div>
      </div>
    </div>
    <BottomFrame/>
    </>

  );
};

export default Overview;
