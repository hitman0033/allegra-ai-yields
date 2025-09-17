import React from 'react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Experience the ALLEGRA protocol in action and start earning with AI-driven DeFi strategies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/dapp" className="bg-white text-indigo-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition-colors">
            Launch DApp
          </Link>
          <Link to="/about" className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-medium px-8 py-3 rounded-lg transition-colors">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
