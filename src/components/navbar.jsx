import React from 'react'
//import ReactDOM from 'react-dom/client'
import styles from './navbar.module.css'
import { useState, useEffect } from 'react';


// $(window).scroll(function(){
//     $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
// })
// const navEle = document.querySelector(".navbar");

// window.addEventListener('scroll', () =>{
//     if(window.scrollY > 50) {
//         navEle.classList.add('navbar_scrolled');
//     }
// })

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
                            <a href={header.link}>{header.label}</a>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar;