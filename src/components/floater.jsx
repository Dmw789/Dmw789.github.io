import React from 'react'
import Icon from './icon'

import styles from './floater.module.css'

function Floater({icons}) {
    return(
        <div className={styles.floater}>
            <ul className={styles.flex_container}> 
                {
                    {icons} = icons.map((icon) =>  
                        <li key={icon.label}>
                            <Icon info={icon}/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Floater;