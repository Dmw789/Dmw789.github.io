import React, { useState, useEffect } from 'react';
import styles from './carousel.module.css';

function Carousel({ faces, onChange }) {
    const [selectedIndex, setSelectedIndex] = useState(2); // Default to the third button (index 2)

    useEffect(() => {
        onChange(2); // Trigger the onChange for the default selection
    }, []); // Empty dependency array ensures this runs only once

    const handleButtonClick = (index) => {
        setSelectedIndex(index);
        onChange(index);
    };

    return (
        <div className={styles.container}>
            <ul>
                {faces.map((face, index) => (
                    <li key={face.label} className={index === selectedIndex ? styles.selected : ''}>
                        <button onClick={() => handleButtonClick(index)}>
                            <img alt={face.label} src={face.image} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Carousel;
