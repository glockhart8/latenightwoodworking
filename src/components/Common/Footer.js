// Footer.js
import React from 'react'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import './Footer.css'

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
                    <a class="menu__link" href="/">Home</a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="/shop">Shop</a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="/about">About</a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="/">Contact</a>
                </li>
            </ul>
            <p>&copy; 2024 Late Night Woodworking</p>
        </footer>
    )
}

export default Footer
