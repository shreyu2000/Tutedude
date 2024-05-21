import React from 'react'
import styles from './Companies.module.css'
import Logo from './Logo'
const Companies = () => {
  return (
    <div id="testimonials" className={styles.container}>
    <p>Top Companies Hiring <span>Data Scientist</span></p>
      <div className={styles.logos}>
            <Logo/>
            <Logo/>
            <Logo/>
            <Logo/>
            <Logo/>
      </div>
    </div>
  )
}

export default Companies
