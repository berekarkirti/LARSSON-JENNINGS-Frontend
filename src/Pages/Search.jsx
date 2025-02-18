import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Search.css';
import { FaFacebookF, FaInstagram,FaTwitter,FaGoogle, FaTimes } from 'react-icons/fa';

const Search = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/'); // Navigate to homepage
  };

  return (
    <div className="coming-soon">
      <header className="header">
        <h1>Larsson & Jennings | Official Store</h1>
        <button className="cancel-button" onClick={handleCancel}>
          <FaTimes />
        </button>
      </header>
      <main className="main-content">
        <h2>Opening Soon</h2>
        <p>We are doing a spot of site maintenance and will be back soon. Sorry for the inconvenience.</p>
        <form className="email-form">
          <label htmlFor="email">Find out when we open</label>
          <div className="email-input">
            <input type="email" id="email" placeholder="Email" required />
            <button type="submit" className="submit-button">→</button>
          </div>
        </form>
        <footer className="footer">
          <p className="spread-the-word">SPREAD THE WORD</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <FaGoogle />
            </a>
          </div>
        </footer>
      </main>
      <footer className="footer-powered">
        <p>This shop will be powered by <span className="shopify-logo">Shopify</span></p>
      </footer>
    </div>
  );
};

export default Search;
