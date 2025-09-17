import React from 'react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Track Your Own Performance
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Join thousands of users earning transparent, verifiable yields with 
          institutional-grade AI trading strategies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/dapp" className="bg-white text-green-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition-colors">
            Sign Up & Connect Wallet
          </Link>
          <Link to="/dapp" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-medium px-8 py-3 rounded-lg transition-colors">
            View Live Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
