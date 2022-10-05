import React from 'react'
import styles from './home.module.css'
import homeImg from '../../assets/homepage.jpg'

function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.imgWrapper}>
            <h1 className={styles.title}>Home Page, nothing much in here...</h1>
                <img className={styles.image} width={700} height={600} src={homeImg} alt="Home Page" />
            </div>
        </div>
    </div>
  )
}

export default Home