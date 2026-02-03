import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Sign Up',
      description: 'Create your account and set up your school profile in minutes'
    },
    {
      number: '2',
      title: 'Configure',
      description: 'Add classes, subjects, teachers, and students to your system'
    },
    {
      number: '3',
      title: 'Start Managing',
      description: 'Begin using attendance, exams, timetables, and all features immediately'
    },
    {
      number: '4',
      title: 'See Results',
      description: 'Track improvements with analytics and see the difference in efficiency'
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Get started in minutes and transform your school operations today
          </p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
