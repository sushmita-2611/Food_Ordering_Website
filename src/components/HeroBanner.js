import React from 'react';
import './HeroBanner.css';

function HeroBanner() {
  return (
    <div className="hero-banner" id="home">
      <div className="hero-content">
        <h1>Deliciously Delivered, Perfectly Prepared</h1>
        <p>Delight in a world of flavors with chef-crafted meals made from premium ingredients-all delivered hot and fresh, right to your doorstep.Your perfect meal is just a click away.</p>
        <a href="#menu">
        <button className="explore-btn">Explore Menu</button>
        </a>
      </div>
    </div>
  );
}

export default HeroBanner;
