import React from 'react'
import styles from './index.module.scss'

function Transfer() {
  return (
    <div className={styles.container}>
      <div className={styles.data}>
        <span>MOW – HKT</span>
        <span>11:20 – 00:50</span>
      </div>
      <div className={styles.duration}>
        <span>В пути</span>
        <span>13ч 30м</span>
      </div>
      <div className={styles.stops}>
        <span>1 пересадка</span>
        <span>HKG, JNB</span>
      </div>
    </div>
  )
}

export default Transfer
