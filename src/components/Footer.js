import React from 'react';
import './Footer.css';
import playStore from  '../assets/images/playstore.png';    
import appStore from  '../assets/images/appstore.png';

const Footer = () => {
  return (
    <footer className="footer">
      <h2>For better experience download <br></br><strong>FoodPie App</strong></h2>
      <div className="download-buttons">
        <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
          <img src={playStore} alt="Get it on Google Play" />
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={appStore} alt="Download on the App Store" />
        </a>
      </div>
      &copy; 2025 FoodPie. All Rights Reserved. Crafted with ❤️ by Sushmita Tiwari
    </footer>
  );
};

export default Footer;
