import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transform Your School Management
              <span className="gradient-text"> Digitally</span>
            </h1>
            <p className="hero-subtitle">
              Smansys is the complete all-in-one platform that replaces manual paperwork, 
              streamlines operations, and helps you manage your entire school from one unified interface.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">90%</div>
                <div className="stat-label">Less Paperwork</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Digital</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Access</div>
              </div>
            </div>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Get Started Free</a>
              <a href="#features" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="dashboard-mockup">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="mockup-content">
                <div className="mockup-sidebar"></div>
                <div className="mockup-main">
                  <div className="mockup-card"></div>
                  <div className="mockup-card"></div>
                  <div className="mockup-card"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
