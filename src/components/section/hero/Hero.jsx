import React from 'react'
import styles from './Hero.module.scss'
import Header from '../../UI/header'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__gradient}>
        <div className={styles.hero__container}>
          <Header />
          <h1 className={styles.hero__title}>Hi, It’s Théophile Seyrig</h1>
          <h3 className={styles.hero__subtitle}>
            Designer from Porto, Portugal
          </h3>
          <div className={styles.hero__link}>Latest works</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
