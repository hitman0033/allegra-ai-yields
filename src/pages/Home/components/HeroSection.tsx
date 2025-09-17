import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { HERO_KEY_STATS } from '../../../const';
import { HeroSectionProps } from '../../../types';


const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToExecutiveSummary }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-50 to-green-200 text-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-5xl font-bold mb-6 leading-tight">
            AI-Driven
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              DeFi Returns
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed">
            Experience institutional-grade AI trading strategies with transparent, 
            verifiable returns. No minimums, full transparency, maximum security.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
          {HERO_KEY_STATS.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg">
                <IconComponent className="w-8 h-8 mx-auto mb-3 text-green-600" />
                <div className={`text-2xl font-bold mb-1 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            to="/dapp" 
            className="bg-green-600 text-white hover:bg-green-700 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Launch DApp
          </Link>
          <button 
            onClick={onScrollToExecutiveSummary}
            className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
          <button 
            onClick={onScrollToExecutiveSummary}
            className="animate-bounce"
          >
            <ArrowDown className="w-6 h-6 text-gray-500 hover:text-green-600 transition-colors" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/25 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;
