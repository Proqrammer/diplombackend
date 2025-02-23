import React from 'react'
import styles from './News.module.scss'

const News = () => {
  return (
    <div className={styles.container}>
        <div className={styles.basliq}>
            <h4>Take a look at our</h4>
            <h2>Latest News in Crypto</h2>
        </div>
        <div className={styles.cards}>
            <div className={styles.card}>
                <img src="" alt="" />
                
            </div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
        </div>
    </div>
  )
}

export default News