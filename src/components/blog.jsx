import React, { useEffect, useState } from 'react';
import styles from './blog.module.css';

function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://codesleepy.blogspot.com/feeds/posts/default?alt=json-in-script&max-results=3&callback=displayRecentPosts";
        document.body.appendChild(script);

        window.displayRecentPosts = (json) => {
            const fetchedPosts = json.feed.entry.map(entry => {
                const title = entry.title.$t;
                const url = entry.link.find(link => link.rel === 'alternate').href;
                const thumbnail = entry.media$thumbnail ? entry.media$thumbnail.url.replace("/s72-c/", "/s1600/") : '/assets/default-thumbnail.jpg'; // Changed to /w1600/ for higher resolution
                console.log(thumbnail);
                return { title, url, thumbnail };
            });
            setPosts(fetchedPosts);
        };

        return () => {
            document.body.removeChild(script);
            delete window.displayRecentPosts;
        };
    }, []);

    return (
        <div className={styles.blog}>
            <div className={styles.checkout}>
                <h2>Check out some of my recent blog posts!</h2>
            </div>
            <div className={styles.display}>
                <div className={styles.header}>
                    <h1>i code when im sleepy</h1>
                    <p>
                        hey. sorry, didn't mean to wake you. could you check out my blog? it's  got some code. it's got some games. it's got some game code. what more  could you want?
                    </p>
                    <div className={styles.stylebar}> </div>
                </div>
                <ul className={styles.thumbnailList}>
                    {posts.map((post, index) => (
                        <li key={index} className={styles.thumbnailContainer}>
                            <div className={styles.thumbnailItem}>
                                <a href={post.url} target="_blank" rel="noopener noreferrer">
                                    <img src={post.thumbnail} alt={post.title} className={styles.thumbnailImage} />
                                </a>
                                <a href={post.url} target="_blank" rel="noopener noreferrer" className={styles.postTitle}>
                                    {post.title}
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Blog;
