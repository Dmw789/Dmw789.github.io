import React from 'react'
import styles from './navbar.module.css'
import { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar({headers}) {

    const [active, setActive] = useState(false);

    const changeNavbar = () =>{
        if (window.scrollY >= 50) {
            setActive(true)
          } else {
            setActive(false)
          }
    }

    useEffect(()=>{
        changeNavbar();
        window.addEventListener("scroll", changeNavbar);
    })

    return(
        <nav className={active ? (`${styles.navbar_scrolled} ${styles.navbar}`) : styles.navbar}>
            <ul className={styles.flex_container}>
                {
                    {headers} = headers.map((header) =>  
                        <li key={header.label}>
                            <Link to={header.link}>{header.label}</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar;