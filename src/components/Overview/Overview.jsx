import React from "react";
import styles from "./Overview.module.css";
import Chips from "../Chips/Chips";

const Overview = () => {
  const chipsText = [
    "Personal Mentorship",
    "Internship Assistance",
    "Industry Certified Courses",
  ];
  return (
    <div>
      <div>
        <div className={styles.heading}>An IIT Delhi Alumni Initiative</div>
        <div><h1 className={styles.mainheading}>Become an Expert in the field of Data Science with 6 courses</h1></div>
        <p>A specially crafted Tech Kickstarter, with 5+ extensive online courses.</p>
        <div className={styles.chips}>
          {/* Pass the text prop to each Chips component */}
          {chipsText.map((text, index) => (
            <Chips key={index} text={text} />
          ))}
        </div>
        <div>
          <div className={styles.enroll}>Enroll Now</div>
          <div className={styles.knowmore}>Know More</div>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Overview;
