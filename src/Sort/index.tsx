import React from 'react'
import styles from './index.module.scss'

function Sort() {
  return (
    <div className={styles.container}>
      <div className={`${styles.cheap} ${styles.active}`}>Самый дешевый</div>
      <div className={styles.fast}>Самый быстрый</div>
      <div className={styles.optimal}>Оптимальный</div>
    </div>
  )
}

export default Sort
