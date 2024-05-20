import React from 'react'
import styles from './Curriculum.module.css'
import CurriculumChips from './CurriculumChips'

const Curriculum = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>DATASCIENCE COURSE LEARNING PATH</div>
        <div ><h2>Data Science Course Curriculum</h2></div>

        <div>
            <CurriculumChips course="C++" description="Learn C++ for strong programming fundamentals."/>
            <CurriculumChips course="MERN Stack" description="Master the MERN stack for high-demand projects."/>
            <CurriculumChips course="Data Structure & Algorithm" description="Excel in Data Structures and Algorithms for interview success."/>
            <CurriculumChips course="Competitve Programming" description="Excel in Data Structures and Algorithms for interview success."/>
        </div>
    </div>
  )
}

export default Curriculum
