import React from 'react'
import styles from './index.module.scss'
import plane from '../../resources/img/plane.svg'

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={plane} alt="logo" />
    </div>
  )
}

export default Logo
