import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <div className={styles.header}>
    <div className={styles.logo}>
        LOGO
      </div>
      <div className={styles.auth}>
        <div className={styles.login}>Login</div>
        <div className={styles.signup}>SignUp</div>
      </div>
    </div>
      <div className={styles.navigation}>
        <p>Overview</p>
        <p>Curriculum</p>
        <p>Refund</p>
        <p>Testimonials</p>
      </div>
    </div>
  )
}

export default Navbar
