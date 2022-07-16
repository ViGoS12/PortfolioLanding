import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__title}>Get in Touch</div>
        <div className={styles.footer__content}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>Dribbble</li>
            <li className={styles.footer__item}>Behance</li>
            <li className={styles.footer__item}>CodePen</li>
            <li className={styles.footer__item}>GitHub</li>
            <li className={styles.footer__item}>Medium</li>
          </ul>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>LinkedIn</li>
            <li className={styles.footer__item}>Facebook</li>
            <li className={styles.footer__item}>Instagram</li>
            <li className={styles.footer__item}>Twitter</li>
          </ul>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>seyrig@mailme.com</li>
            <li className={styles.footer__item}>+ 55 6645 665544</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
