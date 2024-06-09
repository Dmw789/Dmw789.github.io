import React from 'react'

import styles from './hero.module.css'

function Hero({title, subtitle, image}) {
    return(
        <div className={styles.hero_container} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.hero_content}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}
  
export default Hero;