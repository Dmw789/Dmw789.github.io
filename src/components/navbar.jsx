import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar({ headers }) {
    const [active, setActive] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const changeNavbar = () => {
        if (window.scrollY >= 50) {
            setActive(true);
        } else {
            setActive(false);
        }
    };

    const updateWindowWidth = () => {
        setIsMobile(window.innerWidth < 768);
    };

    const toggleDropdown = () => {
        setDropdownVisible(prev => !prev);
    };

    useEffect(() => {
        changeNavbar();
        window.addEventListener('scroll', changeNavbar);
        window.addEventListener('resize', updateWindowWidth);

        return () => {
            window.removeEventListener('scroll', changeNavbar);
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);

    return (
        <nav className={active ? `${styles.navbar_scrolled} ${styles.navbar}` : styles.navbar}>
            <ul className={styles.flex_container}>
                <li key={headers[0].label}>
                    <Link to={headers[0].link}>{headers[0].label}</Link>
                </li>
                {isMobile && (
                    <li className={styles.hamburger} onClick={toggleDropdown}>
                        &#9776;
                    </li>
                )}
                {!isMobile && headers.slice(1).map((header) => (
                    <li key={header.label}>
                        <Link to={header.link}>{header.label}</Link>
                    </li>
                ))}
            </ul>
            {dropdownVisible && isMobile && (
                <ul className={styles.dropdown_menu}>
                    {headers.slice(1).map((header) => (
                        <li key={header.label}>
                            <Link to={header.link}>{header.label}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
