// Footer.js
import React, { useState, useEffect } from 'react'
import './Footer.css'

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop
            const isFooterVisible =
                scrollY + window.innerHeight >= document.documentElement.scrollHeight

            setIsVisible(isFooterVisible)
        }

        window.addEventListener('scroll', handleScroll)

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <footer className={isVisible ? 'visible' : ''}>
            <div className="social-links">
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/socials/youtube.png" alt="YouTube" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/socials/instagram.png" alt="Instagram" />
                </a>
                <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/socials/tiktok.png" alt="TikTok" />
                </a>
            </div>
            <p>&copy; 2024 Late Night Woodworking</p>
        </footer>
    )
}

export default Footer
