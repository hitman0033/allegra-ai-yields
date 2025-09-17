import React from 'react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Ready to Start Learning?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
          Join thousands of users who are already earning with ALLEGRA's 
          AI-driven DeFi strategies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/dapp" 
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </Link>
          <Link 
            to="/about" 
            className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
