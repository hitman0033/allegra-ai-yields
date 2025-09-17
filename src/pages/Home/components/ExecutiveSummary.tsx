import React from 'react';
import { Link } from 'react-router-dom';
import { EXECUTIVE_SUMMARY_FEATURES } from '../../../const';

const ExecutiveSummary: React.FC = () => {

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Executive Summary
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            ALLEGRA represents a paradigm shift in decentralized finance, combining 
            cutting-edge artificial intelligence with blockchain technology to deliver 
            institutional-grade trading strategies to users worldwide.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-16">
          {EXECUTIVE_SUMMARY_FEATURES.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 h-full transition-all duration-300 group-hover:bg-blue-50 group-hover:shadow-lg">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-white via-green-50 to-green-200 rounded-2xl md:rounded-3xl p-8 md:p-12 text-black text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Mission</h3>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto mb-6 md:mb-8 px-4">
            To democratize access to institutional-grade AI trading strategies, 
            making sophisticated financial tools available to everyone while maintaining 
            the highest standards of transparency, security, and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link 
              to="/about" 
              className="bg-white text-black hover:bg-gray-100 font-medium px-6 md:px-8 py-2.5 md:py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              Learn About Our Vision
            </Link>
            <Link 
              to="/whitepaper" 
              className="border-2 border-white text-black hover:bg-white hover:text-blue-600 font-medium px-6 md:px-8 py-2.5 md:py-3 rounded-lg transition-colors text-sm md:text-base"
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
