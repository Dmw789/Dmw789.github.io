import React from 'react' 
import styles from './thumbnail.module.css'

function Thumbnail({image, link}) {
    return(
        <div className={styles.thumbnail}>
            <a href="">
                <img alt="thumbnail" src={image}/>
            </a>
        </div>
    )
}

export default Thumbnail;