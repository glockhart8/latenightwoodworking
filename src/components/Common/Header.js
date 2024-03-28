// import React, { useState } from 'react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    const location = useLocation()

	// const [click, setClick] = useState(false);
    // const handleBurgerClick = () => {
	// 	setClick(!click);

	// 	// Burger Animation
	// 	const burger = document.querySelector('.burger');
	// 	burger.classList.toggle('toggleBurger');
	// }

    const isHome = location.pathname === '/'

    return (
        // <div className='nav-wrapper'>
        //     <nav className={isHome ? 'home-nav' : ''}>
        //         <Link to="/" className='logo-container'>
        //             <img className='logo' src={isHome ? '../../assets/logo.png' : '../../assets/logo_black.png'} alt="Logo" />
        //         </Link>
        //         <div onClick={handleBurgerClick} className="burger"> 
        //             <div className="line1"></div>
        //             <div className="line2"></div>
        //             <div className="line3"></div>
        //         </div>
        //         <ul className={click ? 'nav active' : 'nav'}>
        //             <li>
        //                 <Link to="/">Home</Link>
        //             </li>
        //             <li>
        //                 <Link to="/shop">Shop</Link>
        //             </li>
        //             <li>
        //                 <Link to="/about">About</Link>
        //             </li>
        //         </ul>
        //     </nav>
        // </div>
        <div className='container'>
            <input id='toggle' type='checkbox'/>
            <label className='toggle-container'for='toggle'>
                <span className='button button-toggle'/>
            </label>
            <Link to="/" className='logo-container'>
                <img className='logo' src={isHome ? '../../assets/logo.png' : '../../assets/logo_black.png'} alt="Logo" />
            </Link>
            <nav className='nav'>
                <Link to="/" className='nav-item'>Home</Link>
                <Link to="/shop" className='nav-item'>Shop</Link>
                <Link to="/about" className='nav-item'>About</Link>
            </nav>
        </div>
    )
}

export default Header
