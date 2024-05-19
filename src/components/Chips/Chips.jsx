import React from 'react'
import award from '../../assets/icons/award_star.svg';
import styles from './Chips.module.css'

const Chips = ({text}) => {
  return (
    <div className={styles.chips}>
    <img src={award} alt="" />
    <p>{text}</p>
    </div>
  )
}

export default Chips
