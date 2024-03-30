import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    const location = useLocation()

	const [click, setClick] = useState(false);
    const handleBurgerClick = () => {
		setClick(!click);
        document.getElementById('swiper-wrapper').classList.toggle('hidden')
		// Burger Animation
		const burger = document.querySelector('.burger');
		burger.classList.toggle('toggleBurger');
	}

    const isHome = location.pathname === '/'

    return (
        <div className='nav-wrapper'>
            <nav className={isHome ? 'home-nav' : ''}>
                <Link to="/" className='logo-container'>
                    <img className='logo' src={isHome ? '/assets/logo.png' : '/assets/logo_black.png'} alt="Logo" />
                </Link>
                <div onClick={handleBurgerClick} className="burger"> 
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul id='header' className={click ? 'nav active' : 'nav'}>
                    <li onClick={handleBurgerClick}>
                        <Link className='nav-item' to="/">Home</Link>
                    </li>
                    <li onClick={handleBurgerClick}>
                        <Link className='nav-item' to="/shop">Shop</Link>
                    </li>
                    <li onClick={handleBurgerClick}>
                        <Link className='nav-item' to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
