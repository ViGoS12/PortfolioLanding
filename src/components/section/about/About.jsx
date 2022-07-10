import React from 'react'
import styles from './About.module.scss'

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__title}>About</div>
        <div className={styles.about__text}>
          Lorem ipsum dolor sit amet, Arcu, sed nisi, mi, arcu libero phasellus
          tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue.
          Pellentesque senectus risus consectetur et sed purus sed. Consectetur
          adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra
          egestas aliquet mollis.
          <br /> <br /> Arcu, sed nisi, mi, arcu libero phasellus tincidunt.
          Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque
          senectus risus consectetur et sed purus sed. Consectetur adipiscing
          elit. Egestas porttitor nulla nulla egestas odio pharetra egestas
          aliquet mollis. diam penatibus aliquet tellus, in rutrum augue.
          Pellentesque.
        </div>
      </div>
    </div>
  )
}

export default About
