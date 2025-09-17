import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Eye } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">ALLEGRA Whitepaper</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-8">
          The complete technical and economic specification of the ALLEGRA protocol
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/whitepaper.pdf"
            download
            className="inline-flex items-center bg-white text-indigo-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition-colors"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF
          </a>
          <Link 
            to="/dapp" 
            className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-medium px-8 py-3 rounded-lg transition-colors"
          >
            <Eye className="w-5 h-5 mr-2" />
            View Live Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
