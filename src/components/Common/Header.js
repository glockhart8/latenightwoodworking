import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const location = useLocation()

	const [click, setClick] = useState(false);
    const handleBurgerClick = () => {
		setClick(!click);

		// Burger Animation
		const burger = document.querySelector('.burger');
		burger.classList.toggle('toggleBurger');
	}

    const isHome = location.pathname === '/'

    return (
        <div className='nav-wrapper'>
            <nav className={isHome ? 'home-nav' : ''}>
                <Link to="/" className='logo-container'>
                    <img className='logo' src={isHome ? '../../assets/logo.png' : '../../assets/logo_black.png'} alt="Logo" />
                </Link>
                <div onClick={handleBurgerClick} className="burger"> 
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
