import React from 'react'
import styles from './Portfolio.module.scss'

import left_btn from '../../../assets/svg/left_btn.svg'
import right_btn from '../../../assets/svg/right_btn.svg'
import img1 from '../../../assets/png/img_l1.png'
import img2 from '../../../assets/png/img_l2.png'
import img3 from '../../../assets/png/img_r1.png'
import img4 from '../../../assets/png/img_r2.png'

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolio__container}>
        <div className={styles.portfolio__title}>Portfolio</div>
        <div className={styles.portfolio__subtitle}>UX Research</div>
        <div className={styles.portfolio__content}>
          <div className={styles.portfolio__leftside}>
            <div className={styles.portfolio__content}>
              <div className={styles.portfolio__text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                dictum nibh nam odio cursus id. Diam massa semper a tincidunt
                cursus ultricies lectus eget urna.
              </div>
            </div>
            <img className={styles.portfolio__left_btn} src={left_btn} alt='' />
            <img
              className={styles.portfolio__right_btn}
              src={right_btn}
              alt=''
            />
          </div>
          <div className={styles.portfolio__rightside}>
            <div className={styles.images}></div>
            <div className={styles.images__left}>
              <img src={img1} alt='' className={styles.images__img1} />
              <img src={img2} alt='' className={styles.images__img2} />
            </div>
            <div className={styles.images__right}>
              <img src={img3} alt='' className={styles.images__img3} />
              <img src={img4} alt='' className={styles.images__img4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
