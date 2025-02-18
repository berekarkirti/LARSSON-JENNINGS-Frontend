import React from 'react';
import '../Styles/Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaTiktok, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="footer-top">
        <h1 className="brandName">LARSSON & JENNINGS</h1>
        <p className="offerText">
          <b>Buy One, Get One Free</b> & enjoy <b>an extra 5% off</b> when signing up for news, inspiration & more special offers.
        </p>
        <div className="inputContainer">
          <input
            type="email"
            placeholder="Enter your email address"
            className="input"
          />
          <button className="button">→</button>
        </div>
      </div>
      <div className="footer-bottom ">
        <div className="section ">
          <h6><b>About</b></h6>
          <p>
            We are a watch & jewelry brand, born out of the desire to create bold, empowering timepieces that foster self-expression and confidence. Combining the best of contemporary Swedish design, British heritage, and quality craftsmanship, we make it our mission to design the pieces you will love forever.
          </p>
          <p>100% vegan and cruelty-free. We put sustainability first.</p>
          <p>From Stockholm & London. Since 2012.</p>
        </div>
        <div className="section">
          <h6><b>Shop</b></h6>
          <ul className="list">
            <li>Watches</li>
            <li>Jewelry</li>
            <li>Straps</li>
            <li>Gift Cards</li>
            <li>Spring Sale</li>
          </ul>
        </div>
        <div className="section">
          <h6><b>Brand</b></h6>
          <ul className="list">
            <li>Story</li>
            <li>Studio</li>
            <li>Sustainability</li>
            <li>Collabs</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div className="section">
          <h6><b>Service</b></h6>
          <ul className="list">
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Shipping</li>
            <li>Exchanges & Returns</li>
            <li>T&Cs</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="section">
          <h6><b>Gift Vouchers</b></h6>
          <p>Get a Larsson & Jennings Gift Card</p>
          <h2>Follow Us</h2>
          <ul className="socialList">
            <li><FaFacebookF /></li>
            <li><FaInstagram /></li>
            <li><FaYoutube /></li>
            <li><FaTwitter /></li>
            <li><FaTiktok /></li>
            <li><FaPinterest /></li>
          </ul>
          <div className="ratings">
            <p>Trustpilot</p>
            <p>⭐⭐⭐⭐⭐</p>
          </div>

          <div className="image-slider">
            <img src="src\assets\Logo_Animation_400x.webp" alt="" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
