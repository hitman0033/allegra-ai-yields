import React from 'react';

const HeroSection = (): React.JSX.Element => {
  return (
    <section className="bg-gradient-to-br from-white via-green-50 to-green-200 text-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About ALLEGRA</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
          Pioneering the future of AI-driven decentralized finance through transparent, 
          verifiable trading strategies.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
