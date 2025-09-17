import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Cpu, Brain, Shield } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-green-50 text-gray-800 py-24 overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating tech icons */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Cpu className="w-8 h-8 text-green-400 opacity-30" />
      </div>
      <div className="absolute top-32 right-16 animate-pulse delay-1000">
        <Brain className="w-6 h-6 text-green-500 opacity-30" />
      </div>
      <div className="absolute bottom-20 left-20 animate-pulse delay-2000">
        <Shield className="w-7 h-7 text-green-600 opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-green-700 bg-clip-text text-transparent pb-8">
          Technology Behind ALLEGRA
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-700 mb-8 leading-relaxed">
          The Allegra Core combines multi-model AI, blockchain integration, and risk safeguards for sustainable yield generation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/whitepaper" 
            className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FileText className="w-5 h-5 mr-2" />
            Read the White Paper (PDF)
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
