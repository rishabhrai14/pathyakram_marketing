import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Smansys</span>
          </div>
          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#benefits" onClick={() => setIsMobileMenuOpen(false)}>Benefits</a>
            <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="cta-button" onClick={() => setIsMobileMenuOpen(false)}>Get Started</a>
          </nav>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
