import React from 'react'
import styles from './index.module.scss'

function Filter() {
  return (
    <div className={styles.filter}>
      <div className={styles.title}>количество пересадок</div>
      <input type="checkbox" id="all" />
      <label htmlFor="all">Все</label>
      <input type="checkbox" id="without" />
      <label htmlFor="without">Без пересадок</label>
      <input type="checkbox" id="one" />
      <label htmlFor="one">1 пересадка</label>
      <input type="checkbox" id="two" />
      <label htmlFor="two">2 пересадки</label>
      <input type="checkbox" id="three" />
      <label htmlFor="three">3 пересадки</label>
    </div>
  )
}

export default Filter
