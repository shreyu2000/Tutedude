import React from 'react'
import styles from './Overview.module.css'
import Chips from '../Chips/Chips'

const Overview = () => {
  return (
    <div>
      <div>
      <div>
      An IIT Delhi Alumni Initiative
      </div>
      <div>
      Become an Expert in the field of Data Science with 6 courses
      </div>
      <p>
      Become an Expert in the field of Data Science with 6 courses
      </p>
      <div className={styles.chips}>
        <Chips text={PersonalMentorship} />
        <Chips/>
        <Chips/>
      </div>
      <div>
        <div className={styles.enroll}>Enroll Now</div>
        <div>Know More</div>
      </div>

      </div>
      <div className={styles.bottom}>

      </div>
    </div>
  )
}

export default Overview
