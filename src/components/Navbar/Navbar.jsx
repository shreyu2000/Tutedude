import React from 'react'
import styles from './Navbar.module.css'
import { Link as ScrollLink } from 'react-scroll';


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
      <ScrollLink to="overview" smooth={true} duration={500} className={styles.navLink}>Overview</ScrollLink>
        <ScrollLink to="curriculum" smooth={true} duration={500} className={styles.navLink}>Curriculum</ScrollLink>
        <ScrollLink to="refund" smooth={true} duration={500} className={styles.navLink}>Refund</ScrollLink>
        <ScrollLink to="testimonials" smooth={true} duration={500} className={styles.navLink}>Testimonials</ScrollLink>
      </div>
    </div>
  )
}

export default Navbar
