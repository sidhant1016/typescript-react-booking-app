import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__column">
          <h3 className="footer__heading">About Us</h3>
          <p className="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet magna in pharetra aliquam. Aliquam convallis mauris at ultrices fermentum. Fusce euismod porta lectus, ut finibus ex lacinia quis.</p>
        </div>
        <div className="footer__column">
          <h3 className="footer__heading">Contact Us</h3>
          <p className="footer__text">123 Main Street, Anytown USA</p>
          <p className="footer__text">info@bookingwebsite.com</p>
          <p className="footer__text">(123) 456-7890</p>
        </div>
        <div className="footer__column">
          <h3 className="footer__heading"> States to Visit</h3>
          <ul className="footer__social">
            <li>Goa</li>
            <li>Rajasthan</li>
            <li>Gujarat</li>
            <li>Mp</li>
            <li>Maharastra</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2023 Booking Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
