import React from 'react';
import { Search } from 'lucide-react';
import { ResourcesHeroSectionProps } from '../../../types';


const HeroSection: React.FC<ResourcesHeroSectionProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <section className="bg-gradient-to-br from-white via-green-50 to-green-200 text-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Knowledge Hub</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-8">
          Everything you need to understand and succeed with ALLEGRA's AI-driven DeFi platform
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 ring-1 ring-gray-200 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
