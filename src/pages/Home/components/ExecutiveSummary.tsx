import React from 'react';
import { Link } from 'react-router-dom';
import { EXECUTIVE_SUMMARY_FEATURES } from '../../../const';

const ExecutiveSummary: React.FC = () => {

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Executive Summary
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ALLEGRA represents a paradigm shift in decentralized finance, combining 
            cutting-edge artificial intelligence with blockchain technology to deliver 
            institutional-grade trading strategies to users worldwide.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {EXECUTIVE_SUMMARY_FEATURES.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-blue-50 group-hover:shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-white via-green-50 to-green-200 rounded-3xl p-12 text-black text-center">
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            To democratize access to institutional-grade AI trading strategies, 
            making sophisticated financial tools available to everyone while maintaining 
            the highest standards of transparency, security, and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about" 
              className="bg-white text-black-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Learn About Our Vision
            </Link>
            <Link 
              to="/whitepaper" 
              className="border-2 border-white text-black hover:bg-white hover:text-blue-600 font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Read Whitepaper
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
