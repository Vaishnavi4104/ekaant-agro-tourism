import React from 'react';
import resortAerialImage from '../assets/images/resort-aerial.png';

const About = ({ aboutData }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              {aboutData.title}
            </h2>
            
            <div className="space-y-6 text-lg text-primary/80 leading-relaxed">
              {aboutData.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-primary/80">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
              {aboutData.ctaButton}
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={resortAerialImage}
                alt="Ekaant Resort"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent rounded-xl shadow-lg p-4 transform rotate-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">Peaceful Retreat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
