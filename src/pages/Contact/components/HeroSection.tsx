import React from 'react';

const HeroSection = (): React.JSX.Element => {
  return (
    <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
          Get in touch with our team. We're here to help and answer any questions you may have.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
