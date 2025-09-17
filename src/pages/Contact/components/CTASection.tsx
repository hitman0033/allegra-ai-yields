import React from 'react';

const CTASection = (): React.JSX.Element => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Join thousands of users already earning with ALLEGRA's AI-driven trading strategies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/dapp" className="bg-white text-green-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition-colors">
            Launch DApp
          </a>
          <a href="/whitepaper" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-medium px-8 py-3 rounded-lg transition-colors">
            Read Documentation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
