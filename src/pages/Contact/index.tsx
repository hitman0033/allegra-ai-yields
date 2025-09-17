import React from 'react';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';

const Contact = (): React.JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Contact;
