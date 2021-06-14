import React from 'react'
import Transfer from '../Transfer'
import styles from './index.module.scss'
import s7logo from '../../resources/img/s7logo.svg'

function Ticket() {
  return (
    <div className={styles.container}>
      <div className={styles.price}>
        <span>13 400 P</span>
        <span><img src={s7logo} alt="s7logo" /></span>
      </div>
      <Transfer />
      <Transfer />
    </div>
  )
}

export default Ticket
