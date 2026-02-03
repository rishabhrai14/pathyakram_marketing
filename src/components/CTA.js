import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Measure Growth & Inspire Success?</h2>
          <p className="cta-subtitle">
            Join modern schools that have digitized their operations with Pathyakram. 
            Get started today and see the difference.
          </p>
          <div className="cta-buttons">
            <a href="mailto:contact@smansys.com" className="btn btn-primary btn-large">
              Get Started Free
            </a>
            <a href="tel:+1234567890" className="btn btn-secondary btn-large">
              Schedule a Demo
            </a>
          </div>
          <div className="cta-features">
            <div className="cta-feature">✓ Free Trial Available</div>
            <div className="cta-feature">✓ No Credit Card Required</div>
            <div className="cta-feature">✓ Setup in Minutes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
