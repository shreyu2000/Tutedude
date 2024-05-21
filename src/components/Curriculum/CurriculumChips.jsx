import React from "react";
import eye from "../../assets/icons/fi-br-eye.svg";
import styles from "./CurriculumChips.module.css";

const CurriculumChips = ({ course, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>{course}</h1> <p>{description}</p>
      </div>
      <div className={styles.curriculum}>
        <img src={eye} alt="" /> View Curriculum
      </div>
    </div>
  );
};

export default CurriculumChips;
