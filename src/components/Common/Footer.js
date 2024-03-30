// Footer.js
import React from 'react'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles['social-icon']}>
                <li className={styles['social-icon__item']}>
                    <a className={styles['social-icon__link']} href="https://www.youtube.com/channel/UCRtyWekZNAPNUySmpt3i31w?sub_confirmation=1">
                        <FaYoutube/>
                    </a>
                </li>
                <li className={styles['social-icon__item']}>
                    <a className={styles['social-icon__link']} href='https://www.instagram.com/late_night_woodworking'>
                    <FaInstagram/>
                    </a>
                </li>
                <li className={styles['social-icon__item']}>
                    <a className={styles['social-icon__link']} href="https://www.tiktok.com/@late_night_woodworking">
                    <FaTiktok/>
                    </a>
                </li>
            </ul>    
            <ul className={styles['menu']}>
                <li className={styles['menu__item']}>
                    <Link className={styles['menu__link']} to="/">Home</Link>
                </li>
                <li className={styles['menu__item']}>
                    <Link className={styles['menu__link']} to="/shop">Shop</Link>
                </li>
                <li className={styles['menu__item']}>
                    <Link className={styles['menu__link']} to="/about">About</Link>
                </li>
                <li className={styles['menu__item']}>
                    <Link className={styles['menu__link']} to="/about">Contact</Link>
                </li>
            </ul>
            <p>&copy; 2024 Late Night Woodworking</p>
        </footer>
    )
}

export default Footer
