import React from 'react';

const Footer = ({ footerData }) => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Tagline */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              {footerData.tagline}
            </h3>
          </div>

          {/* Right Content - Contact Info */}
          <div className="text-center lg:text-right space-y-4">
            <div className="text-lg font-medium">
              {footerData.contactInfo.phone}
            </div>
            <div className="text-lg font-medium">
              {footerData.contactInfo.email}
            </div>
            <div className="text-lg font-medium">
              {footerData.contactInfo.instagram}
            </div>
            <div className="text-lg font-medium">
              {footerData.contactInfo.location}
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center text-white/70">
            <p>&copy; 2024 Ekaant Agro Tourism Retreat. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
