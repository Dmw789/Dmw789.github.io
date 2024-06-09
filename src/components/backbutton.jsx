import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './backbutton.module.css';

const BackButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className={styles.floatingButton} onClick={handleClick}>
            <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} />
        </div>
    );
};

export default BackButton;
