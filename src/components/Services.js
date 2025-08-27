import React from 'react';
import farmStayImage from '../assets/images/farm-stay.png';
import farmingImage from '../assets/images/farming.png';
import wildlifeImage from '../assets/images/wildlife.png';
import stargazingImage from '../assets/images/stargazing.png';
import bonfireImage from '../assets/images/bonfire.png';
import wellnessImage from '../assets/images/wellness.png';

const Services = ({ servicesData }) => {
  // Create a mapping of service titles to their imported images
  const imageMap = {
    'Boutique Farm Stay': farmStayImage,
    'Agro-Tourism Activities': farmingImage,
    'Forest & Wildlife Encounters': wildlifeImage,
    'Stargazing Nights': stargazingImage,
    'Bonfire Evenings': bonfireImage,
    'Digital Detox & Wellness': wellnessImage
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-primary"></div>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mx-6">
              {servicesData.title}
            </h2>
            <div className="w-16 h-0.5 bg-primary"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {servicesData.items.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={imageMap[service.title]}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-primary/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
            {servicesData.ctaButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
