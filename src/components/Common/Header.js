import React, { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
    const location = useLocation()

    const burgerRef = useRef(null);

	const [click, setClick] = useState(false);
    const handleBurgerClick = () => {
		setClick(!click);

		// Burger Animation
		burgerRef.current.classList.toggle('toggleBurger');
	}

    const isHome = location.pathname === '/'

    return (
        <div className={styles['nav-wrapper']}>
            <nav className={isHome ? styles['home-nav'] : ''}>
                <Link to="/" className={styles['logo-container']}>
                    <img className={styles['logo']} src={isHome ? '/assets/logo.png' : '/assets/logo_black.png'} alt="Logo" />
                </Link>
                <div ref={burgerRef} onClick={handleBurgerClick} className={styles['burger']}> 
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className={`${styles.nav} ${click ? styles.active : ''}`}>
                    <li onClick={handleBurgerClick}>
                        <Link className={styles['nav-item']} to="/">Home</Link>
                    </li>
                    <li onClick={handleBurgerClick}>
                        <Link className={styles['nav-item']} to="/shop">Shop</Link>
                    </li>
                    <li onClick={handleBurgerClick}>
                        <Link className={styles['nav-item']} to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
