// Footer.js
import React from 'react'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='social-icon'>
                <li className='social-icon__item'>
                    <a className='social-icon__link' href="https://www.youtube.com/channel/UCRtyWekZNAPNUySmpt3i31w?sub_confirmation=1">
                        <FaYoutube/>
                    </a>
                </li>
                <li className='social-icon__item'>
                    <a className='social-icon__link' href='https://www.instagram.com/late_night_woodworking'>
                    <FaInstagram/>
                    </a>
                </li>
                <li className='social-icon__item'>
                    <a className="social-icon__link" href="https://www.tiktok.com/@late_night_woodworking">
                    <FaTiktok/>
                    </a>
                </li>
            </ul>

            <ul class="menu">
                <li class="menu__item">
                    <Link class="menu__link" to="/">Home</Link>
                </li>
                <li class="menu__item">
                    <Link class="menu__link" to="/shop">Shop</Link>
                </li>
                <li class="menu__item">
                    <Link class="menu__link" to="/about">About</Link>
                </li>
                <li class="menu__item">
                    <Link class="menu__link" to="/about">Contact</Link>
                </li>
            </ul>
            <p>&copy; 2024 Late Night Woodworking</p>
        </footer>
    )
}

export default Footer
