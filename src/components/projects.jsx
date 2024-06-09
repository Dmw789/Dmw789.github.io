import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './carousel.jsx';
import styles from './projects.module.css';

function Projects({ projects, highlightId, onChange }) {
    if (projects.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.page}>
            <img className={styles.bg_image} alt="preview" src={projects[highlightId].preview} />
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className={styles.title}>
                        <h1>{projects[highlightId].label}</h1>
                    </div>
                    <div className={styles.description}>
                        <p>
                            {projects[highlightId].description}
                            <br />
                            <Link to={projects[highlightId].link}>
                                Learn more
                            </Link>
                        </p>
                    </div>
                </div>
                <div className={styles.projects}>
                    <Carousel faces={projects} onChange={onChange} />
                </div>
            </div>
        </div>
    );
}

export default Projects;
