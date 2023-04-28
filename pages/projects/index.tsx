import React from 'react'
import TopBar from '../../components/TopBar'
import Footer from '../../components/Footer'
import styles from '../../styles/IndexPage.module.css'


const index = () => {
  return (
    <div>
      <TopBar/>
        <div className={styles.body}>
          <div className={styles.div}>
            <img className={styles.img1} src="/portf1.png" />
            <div className="">
            <img className={styles.img2} src="/portf2.jpg" />
            <img className={styles.img3} src="/portf3.png" />
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default index