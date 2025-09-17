import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-red-600 to-orange-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Risk Management</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-8">
          Institutional-grade risk controls and real-time monitoring to protect your investments
        </p>
        <Link 
          to="/dapp" 
          className="inline-flex items-center bg-white text-red-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition-colors"
        >
          <Shield className="w-5 h-5 mr-2" />
          View Risk Dashboard
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
