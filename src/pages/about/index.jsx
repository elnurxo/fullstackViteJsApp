import React from 'react'
import styles from './about.module.css'
import aboutImg from '../../assets/about.jpeg'

function About() {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.imgWrapper}>
            <h1 className={styles.title}>About Page, nothing much in here...</h1>
            <p style={{textAlign:'center',marginBottom:'10px'}}>Hey I'm 20 years old front-end developer</p>
                <img className={styles.image} width={700} height={600} src={aboutImg} alt="About Page" />
            </div>
        </div>
    </div>
  )
}

export default About