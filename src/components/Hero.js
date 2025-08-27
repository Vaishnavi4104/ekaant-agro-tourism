import React from 'react';
import heroForestImage from '../assets/images/hero-forest.jpg';

const Hero = ({ heroData }) => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 62, 23, 0.4), rgba(0, 62, 23, 0.4)), url(${heroForestImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {heroData.title}
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 font-light">
          {heroData.subtitle}
        </p>
        
        <button className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
          {heroData.ctaButton}
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent rounded-full opacity-80 animate-ping"></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
