import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      number: '90%',
      title: 'Reduce Paperwork',
      description: 'Eliminate manual forms, spreadsheets, and paper-based processes'
    },
    {
      number: '0',
      title: 'Calculation Errors',
      description: 'Automated calculations ensure accuracy in marks, attendance, and percentages'
    },
    {
      number: 'Hours',
      title: 'Save Daily',
      description: 'Streamlined workflows help you save hours every day on administrative tasks'
    },
    {
      number: '24/7',
      title: 'Real-Time Access',
      description: 'Parents and students can access information anytime, anywhere'
    },
    {
      number: '100%',
      title: 'Data-Driven',
      description: 'Make informed decisions with comprehensive analytics and insights'
    },
    {
      number: '1',
      title: 'Unified Platform',
      description: 'All school operations managed from one integrated system'
    }
  ];

  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Pathyakram?</h2>
          <p className="section-subtitle">
            Transform your school operations and see measurable results
          </p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-number">{benefit.number}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
