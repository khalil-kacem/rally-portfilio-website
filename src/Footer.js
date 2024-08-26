import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import fb from './Lucy/facebook.png';
import insta from './Lucy/inst.png';
import twitter from './Lucy/twitter.png';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2>Rally</h2>
        <div className="social-links">
          <a href="#"><img src={twitter}/></a>
          <a href='#'><img src={fb}/></a>
          <a href="#"><img src={insta}/></a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Rally. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
