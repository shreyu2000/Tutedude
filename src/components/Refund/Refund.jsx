import React from "react";
import styles from "./Refund.module.css";
import steps from "../../assets/images/steps.svg";
import refund from "../../assets/icons/refund.svg";

const Refund = () => {
  return (
    <div  id="refund" className={styles.container}>
      <div className={styles.heading}>
        Don't miss out on this <span>limited-time opportunity</span> to learn for
        <span> Free!</span>
      </div>
      <div>
        <img src={refund} alt="" />
      </div>
      <div className={styles.work}>
        <p>How does it work?</p>
      </div>
      <div className={styles.images}>
        <img src={steps} alt="" />
      </div>
    </div>
  );
};

export default Refund;
