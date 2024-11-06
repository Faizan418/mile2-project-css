import React from 'react'
import styles from '../Skills/Skills.module.css'

export default function Skills() {
  return (
    <div className={styles.containar}>
      
      <h2 className={styles.head2}>My Skills</h2>

<div className={styles.skill}>
  <div className={styles.skill_info}>
    <span className={styles.skill_name}>HTML</span>
    <span className={styles.skill_level}>90%</span>
  </div>
  <div className={styles.bar_container}>
    <div className={styles.bar_html}>90%</div>
  </div>
</div>

<div className={styles.skill}>
  <div className={styles.skill_info}>
    <span className={styles.skill_name}>CSS</span>
    <span className={styles.skill_level}>80%</span>
  </div>
  <div className={styles.bar_container}>
    <div className={styles.bar_css}>80%</div>
  </div>
</div>

<div className={styles.skill}>
  <div className={styles.skill_info}>
    <span className={styles.skill_name}>TypeScript</span>
    <span className={styles.skill_level}>60%</span>
  </div>
  <div className={styles.bar_container}>
    <div className={styles.bar_typescript}>60%</div>
  </div>
</div>

<div className={styles.skill}>
  <div className={styles.skill_info}>
    <span className={styles.skill_name}>JavaScript</span>
    <span className={styles.skill_level}>60%</span>
  </div>
  <div className={styles.bar_container}>
    <div className={styles.bar_javascript}>60%</div>
  </div>
</div>

<div className={styles.skill}>
  <div className={styles.skill_info}>
    <span className={styles.skill_name}>Python</span>
    <span className={styles.skill_level}>30%</span>
  </div>
  <div className={styles.bar_container}>
    <div className={styles.bar_python}>30%</div>
  </div>
</div>

    </div>
  )
}
