import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  const  location  = useLocation();

  const isHome = location.pathname === '/';


  return (
    <nav className={isHome ? 'home-nav' : ''}>
      <Link to="/" className="logo">
        <img src="../../assets/logo.png" alt="Logo" />
      </Link>
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
  );
};

export default Header;
