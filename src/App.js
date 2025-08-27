import React, { useState, useEffect } from 'react';
import './App.css';

// Import components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Location from './components/Location';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

// Import content data
import contentData from './data/content.json';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading Ekaant...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navigation navigationData={contentData.navigation} />
      <Hero heroData={contentData.hero} />
      <About aboutData={contentData.about} />
      <Services servicesData={contentData.services} />
      <Location locationData={contentData.location} />
      <FAQs faqsData={contentData.faqs} />
      <Footer footerData={contentData.footer} />
    </div>
  );
}

export default App;
