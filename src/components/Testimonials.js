import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Smansys has completely transformed how we manage our school. The time saved on administrative tasks is incredible.',
      author: 'Principal',
      role: 'ABC School',
      rating: 5
    },
    {
      quote: 'As a teacher, I love how easy it is to mark attendance and enter marks. Everything is at my fingertips.',
      author: 'Teacher',
      role: 'XYZ School',
      rating: 5
    },
    {
      quote: 'Parents can now track their child\'s progress in real-time. This transparency has improved parent engagement significantly.',
      author: 'Parent',
      role: 'Parent Community',
      rating: 5
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Users Say</h2>
          <p className="section-subtitle">
            Join schools that have transformed their operations with Pathyakram
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <div className="author-name">{testimonial.author}</div>
                <div className="author-role">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
