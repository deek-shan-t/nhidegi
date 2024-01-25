

import React from 'react'
import styles from './infobar.module.css'

const Infobar = () => {
  return (
    <div className={styles.infobody}>
        <div className={styles.infolinks}>
          <ul>
            <li><a href="#section1">News</a></li>
            <li><a href="#section2">Politics</a></li>
            <li><a href="#section3">Sports</a></li>
            <li><a href="#section4">Education</a></li>
            <li><a href="#section5">Entertainment</a></li>
            <li><a href="#section6">Technology</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Infobar
