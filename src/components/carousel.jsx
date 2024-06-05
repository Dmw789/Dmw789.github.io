import React from 'react'

import styles from './carousel.module.css'

function Carousel({faces, onChange}) {
    return(
        <div className={styles.container}>
            <ul>
            {
                {faces} = faces.map((face, index) =>  
                    <li key={face.label}>
                        <button onClick={() => onChange(index)}>
                            <img alt={face.label} src={face.image}/>
                        </button>
                    </li>
                )
            }
            </ul>
        </div>
    )
}

export default Carousel;