import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
