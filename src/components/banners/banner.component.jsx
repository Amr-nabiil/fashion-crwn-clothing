import React from 'react';
import './banner.styles.scss';

const Banner = () => {
  return (
    <div id="banner" className="section-m1">
      <h4>Repair Services</h4>
      <h2>Up to <span>70% Off</span> - All T-Shirts & Jackets</h2>
      <a href="#">
        <button className="normal">Explore More</button>
      </a>
    </div>
  );
};

export default Banner;
