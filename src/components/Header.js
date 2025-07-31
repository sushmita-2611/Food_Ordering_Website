import React from 'react';
import './Header.css';
import { FaSearch, FaShoppingBasket, FaUserCircle } from 'react-icons/fa';

function Header({ onSignInClick, onUserIconClick, onCartClick, onSearchClick}) {
  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo">FoodPie</div>
      </div>
      <nav className="nav-links">
        <a href="#home" className="active">home</a>
        <a href="#menu">menu</a>
        <a href="#app">mobile app</a>
        <a href="#contact">contact us</a>
      </nav>
      <div className="icons">
        <FaSearch className="icon"  onClick={onSearchClick} style={{ cursor: 'pointer' }} />
        <FaShoppingBasket className="icon" onClick={onCartClick} style={{ cursor: 'pointer' }} />
        <FaUserCircle className="icon" onClick={onUserIconClick} style={{ cursor: 'pointer' }} />
        <button className="signin" onClick={onSignInClick}>sign in</button>
      </div>
    </header>
  );
}

export default Header;