import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from './carousel.jsx';
import styles from './projects.module.css';

function Projects({ projects, highlightId, onChange }) {
    const navigate = useNavigate();

    if (projects.length === 0) {
        return <div>Loading...</div>;
    }

    const handleButtonClick = () => {
        navigate(projects[highlightId].link);
    };

    return (
        <div className={styles.page}>
            <img className={styles.bg_image} alt="preview" src={projects[highlightId].preview} />
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className={styles.title}>
                        <h1>{projects[highlightId].label}</h1>
                        <p>{projects[highlightId].date}</p>
                    </div>
                    <div className={styles.description}>
                        <p>
                            {projects[highlightId].description}
                        </p>
                    </div>
                    <div className={styles.learnMore}>
                        {projects[highlightId].link != "" &&
                        (
                            <button onClick={handleButtonClick} className={styles.learnMoreButton}>
                                LEARN MORE
                            </button>
                        )}
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
