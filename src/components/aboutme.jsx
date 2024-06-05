import React from 'react'

import styles from './aboutme.module.css'

function AboutMe({name, ramble}) {
    return(
        <div className={styles.about_me}>
            <div className= {styles.personal}>
                <div className={styles.profile}>
                    <img src="assets/portrait.jpg" alt='portrait'/> 
                </div>
                <div className={styles.description}>
                    <div className={styles.title}>
                        <h1>{name}</h1>
                    </div>
                    <div className={styles.ramble}>
                        <p>{ramble}</p>
                    </div>
                    <div className={styles.icons}>
                        <a href="assets/Dylan+Whitehead+Resume.pdf">Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
export default AboutMe;