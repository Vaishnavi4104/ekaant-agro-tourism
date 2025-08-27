import React from 'react';
import locationPinImage from '../assets/images/location-pin.png';

const Location = ({ locationData }) => {
  return (
    <section id="location" className="py-20 bg-lightBackground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-left mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">
            {locationData.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Location Pin Illustration - Left Side */}
          <div className="relative order-2 lg:order-1 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Large Location Pin - Centered */}
              <div className="flex justify-center items-center" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <img 
                  src={locationPinImage} 
                  alt="Location Pin" 
                  className="w-96 h-96 object-contain"
                  style={{ 
                    filter: 'brightness(1.1) saturate(1.2)',
                    transform: 'translateX(-10px) translateY(10px)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="space-y-8 order-1 lg:order-2">
            <p className="text-lg text-primary/80 leading-relaxed">
              {locationData.description}
            </p>

            {/* Transportation Options */}
            <div className="space-y-6">
              {Object.entries(locationData.transportation).map(([key, transport]) => (
                <div key={key} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                    <span className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {key === 'byRoad' ? '🚗' : key === 'byTrain' ? '🚂' : '✈️'}
                    </span>
                    {transport.title}
                  </h3>
                  <ul className="space-y-3">
                    {transport.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-primary/80 text-base">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
