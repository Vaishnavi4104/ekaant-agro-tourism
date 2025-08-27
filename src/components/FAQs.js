import React, { useState } from 'react';

const FAQs = ({ faqsData }) => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? -1 : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-primary"></div>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mx-6">
              {faqsData.title}
            </h2>
            <div className="w-16 h-0.5 bg-primary"></div>
          </div>
        </div>

        {/* FAQs Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Questions Column */}
          <div className="space-y-4">
            {faqsData.questions.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                >
                  <span className="font-semibold text-primary">
                    Q. {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-primary transition-transform duration-300 ${
                      openQuestion === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Answers Column */}
          <div className="space-y-4">
            {faqsData.questions.map((faq, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-xl p-6 transition-all duration-300 ${
                  openQuestion === index
                    ? 'border-accent shadow-lg'
                    : 'border-gray-200'
                }`}
              >
                <div className={`transition-all duration-300 ${
                  openQuestion === index ? 'opacity-100' : 'opacity-60'
                }`}>
                  <p className="text-primary/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
