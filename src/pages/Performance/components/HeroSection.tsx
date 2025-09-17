import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Verifiable Yields, Transparent Results</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-8">
          Track sustainable, risk-adjusted performance — powered by AI and secured on-chain.
        </p>
        <Link 
          to="/dapp" 
          className="inline-flex items-center bg-white text-green-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition-colors"
        >
          <Eye className="w-5 h-5 mr-2" />
          View Live Dashboard
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
