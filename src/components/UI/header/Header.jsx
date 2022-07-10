import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>Portofolio</div>
      <nav>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>Home</li>
          <li className={styles.header__item}>About</li>
          <li className={styles.header__item}>Skills</li>
          <li className={styles.header__item}>Portfolio</li>
          <li className={styles.header__item}>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
