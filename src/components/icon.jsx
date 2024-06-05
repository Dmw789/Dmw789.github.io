import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './icon.module.css'

function Icon({info}) {
    return(
        <div className = {styles.icon}>
            <a href={info.link}><FontAwesomeIcon className="fa-2x" icon={info.image}/></a>
        </div>
    )
}

export default Icon;