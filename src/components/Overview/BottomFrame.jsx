import React from 'react'
import styles from './BottomFrame.module.css'
import OnlineLearning from '../../assets/icons/Online learning.svg'
import graduated from '../../assets/icons/Graduated.svg'
import QuestionMark from '../../assets/icons/Question mark.svg'
import Complete from '../../assets/icons/Complete.svg'
import Frames from '../../components/Overview/Frames'

const BottomFrame = () => {
  return (
    <div className={styles.frame}>
      <Frames icon={OnlineLearning} num="24" text="Courses" />
      <Frames icon={graduated} num="30k+" text="Learners" />
      <Frames icon={QuestionMark} num="100k+" text="Doubts Solved" />
      <Frames icon={Complete} num="10k+" text="Student Projects" />
    </div>
  )
}

export default BottomFrame
