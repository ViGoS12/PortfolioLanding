import React from 'react'
import styles from './Skills.module.scss'

import profile from '../../../assets/png/Profile_picture.png'
import classNames from 'classnames'

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.skills__container}>
        <div className={styles.skills__title}>Skills</div>
        <div className={styles.skills__content}>
          <img src={profile} alt='' className={styles.skills__img} />

          <ul className={styles.skills__list}>
            <li
              className={classNames(
                styles.skills__item,
                styles.skills__border
              )}>
              Profile
            </li>
            <li
              className={classNames(
                styles.skills__item,
                styles.skills__border
              )}>
              UX Research
            </li>
            <li
              className={classNames(
                styles.skills__item,
                styles.skills__border
              )}>
              Tools
            </li>
            <li
              className={classNames(
                styles.skills__item,
                styles.skills__border
              )}>
              UI Design
            </li>
            <li
              className={classNames(
                styles.skills__item,
                styles.skills__border
              )}>
              Tools
            </li>
            <li
              className={classNames(
                styles.skills__item,
                styles.skills__border
              )}>
              Front-end Dev
            </li>
            <li
              className={classNames(
                styles.skills__item,
                styles.skills__border
              )}>
              Tools
            </li>
          </ul>
          <ul className={styles.skills__list}>
            <li className={styles.skills__item}>
              UI / UX Engineer, Front-end Developer
            </li>
            <li className={styles.skills__item}>
              <div
                style={{
                  background:
                    'linear-gradient(90deg, #C66C49 86%, #F5D6AB 14%)',
                }}
                className={styles.skills__progressBar}></div>
            </li>
            <li className={styles.skills__item}>Paper, Pen, Balsamiq</li>
            <li className={styles.skills__item}>
              <div
                style={{
                  background:
                    'linear-gradient(90deg, #C66C49 80%, #F5D6AB 20%)',
                }}
                className={styles.skills__progressBar}></div>
            </li>
            <li className={styles.skills__item}>
              Adobe PS, AI, XD, Figma, InVision
            </li>
            <li className={styles.skills__item}>
              <div
                style={{
                  background:
                    'linear-gradient(90deg, #C66C49 64%, #F5D6AB 20%)',
                }}
                className={styles.skills__progressBar}></div>
            </li>
            <li className={styles.skills__item}>
              HTML, CSS, JS, Bootstrap, React
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
