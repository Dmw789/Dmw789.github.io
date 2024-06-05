import React from 'react'
import Icon from './icon'

import styles from './contact.module.css'

function Contact({icons}) {
    return(
        <div className={styles.flex_container}>
            <div className={styles.contact}>
                <div className={styles.title}>
                    <h1>
                        Contact Me
                    </h1>
                </div>
                <div className = {styles.links}>
                    <a href="src/assets/Dylan+Whitehead+Resume.pdf">Resume</a>
                </div>
                <div className = {styles.icons}>
                    {
                        {icons} = icons.map((icon) =>  
                        <li key={icon.label}>
                            <Icon info={icon}/>
                        </li>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact;