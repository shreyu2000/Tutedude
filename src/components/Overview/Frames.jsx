import React from 'react'
import styles from './Frames.module.css'

const CurriculumFrame = ({icon , num ,text}) => {
  return (
    <div className={styles.curriculumframe}>
        <img src={icon} alt="" />
        <div>
          <span>{num}</span>
          <p>{text}</p>
        </div>
    </div>
  )
}

export default CurriculumFrame
