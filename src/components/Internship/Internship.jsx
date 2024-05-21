import React from 'react';
import styles from './Internship.module.css';
import frame1 from '../../assets/icons/frame1.svg'
import frame2 from '../../assets/icons/frame2.svg'
import learn from '../../assets/images/learn.svg'

const Internship = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}><span>Unlock </span> 6 Certificates <span>& </span>Internship Opportunities!</h1>
      <div className={styles.imageDiv}>
        <div className={styles.image1}>
          <img src={frame1} alt="Certificates" />
        </div>
        <div className={styles.image2}>
          <img src={frame2} alt="Internship" />
        </div>
      </div>
      <div className={styles.intern}>
      <h2 className={styles.subHeader}>How does the Internship Program works ?</h2>
      <div className={styles.steps}>
        <img src={learn} alt="" />
      </div>
      </div>
      <button className={styles.applyButton}>Apply now for ₹ 2999</button>
    </div>
  );
}
export default Internship;


{/* <div className={styles.step}>
          <div className={styles.icon}><i className="fas fa-chalkboard-teacher"></i></div>
          <p>Learn from our structured pre recorded courses made by experts to meet industry needs</p>
        </div>
        <div className={styles.step}>
          <div className={styles.icon}><i className="fas fa-user-friends"></i></div>
          <p>Personal mentors to guide and help you throughout your journey as a friend</p>
        </div>
        <div className={styles.step}>
          <div className={styles.icon}><i className="fas fa-certificate"></i></div>
          <p>Get guaranteed paid internships after completion of the program along with course completion certificates</p>
        </div>
        <div className={styles.step}>
          <div className={styles.icon}><i className="fas fa-headset"></i></div>
          <p>1:1 live doubt solving support available throughout the day to clear your doubts instantly</p>
        </div>
        <div className={styles.step}>
          <div className={styles.icon}><i className="fas fa-project-diagram"></i></div>
          <p>Build major projects which makes your resume stand apart</p>
        </div> */}