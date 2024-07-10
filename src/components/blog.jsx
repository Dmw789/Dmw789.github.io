import React from 'react'
import styles from './blog.module.css'

function Blog({posts}) {
    return(
        <div className={styles.coming_soon}>
            <h1>Blog - Coming Soon!</h1>
            <iframe
                src="https://yourblogname.blogspot.com/2024/07/your-post-title.html"
                width="100%"
                height="600px"
                frameBorder="0"
                scrolling="yes"
                title="Blogger Post"
            ></iframe>
        </div>
    )
}

export default Blog;