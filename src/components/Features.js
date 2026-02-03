import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '👥',
      title: 'Multi-Role Dashboards',
      description: 'Personalized interfaces for Super Admin, Teachers, Parents, and Students with role-based access control.'
    },
    {
      icon: '✅',
      title: 'Attendance Management',
      description: 'Mark attendance in seconds with real-time analytics and automated percentage calculations.'
    },
    {
      icon: '📝',
      title: 'Exam & Marks Management',
      description: 'Create exams, enter marks in bulk, and get automatic percentile calculations with configurable passing percentages.'
    },
    {
      icon: '📅',
      title: 'Timetable Management',
      description: 'Drag-and-drop timetable creation with visual grid, exam schedule integration, and holiday management.'
    },
    {
      icon: '📚',
      title: 'Homework Tracking',
      description: 'Create assignments, track completion, and monitor student progress in real-time.'
    },
    {
      icon: '💬',
      title: 'Communication Hub',
      description: 'Direct messaging between teachers and parents, notice board for announcements, and real-time notifications.'
    },
    {
      icon: '📊',
      title: 'Analytics & Reporting',
      description: 'Comprehensive dashboards with performance metrics, attendance trends, and data-driven insights.'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Built with modern technology (Go, React, PostgreSQL) for reliability, performance, and scalability.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Everything You Need in One Platform</h2>
          <p className="section-subtitle">
            Comprehensive features designed to streamline every aspect of school management
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
