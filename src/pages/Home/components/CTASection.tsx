import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ExternalLink } from 'lucide-react';
import { CTASectionProps } from '../../../types';


const CTASection: React.FC<CTASectionProps> = ({ onWhitePaperDownload }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50 to-green-200 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Earning?
        </h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
          Join thousands of users who are already earning transparent, verifiable returns 
          with ALLEGRA's AI-driven DeFi strategies. No minimums, full transparency, 
          maximum security.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Link 
            to="/dapp" 
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Launch DApp Now
          </Link>
          <button 
            onClick={onWhitePaperDownload}
            className="border-2 border-white text-blue-600 hover:bg-white hover:text-blue-600 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5 inline mr-2" />
            Download Whitepaper
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">15,420+</div>
            <div className="text-black/80">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">$12.5M</div>
            <div className="text-black/80">Total Value Locked</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">156.8%</div>
            <div className="text-black/80">Average APY</div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/20">
          <p className="text-black/80 mb-6">
            Need more information? Explore our resources and community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/about" 
              className="text-black/80 hover:text-black transition-colors"
            >
              About Us
            </Link>
            <span className="text-black/40">•</span>
            <Link 
              to="/resources" 
              className="text-black/80 hover:text-black transition-colors"
            >
              Resources
            </Link>
            <span className="text-black/40">•</span>
            <Link 
              to="/contact" 
              className="text-black/80 hover:text-black transition-colors"
            >
              Contact
            </Link>
            <span className="text-black/40">•</span>
            <a 
              href="https://discord.gg/allegra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black/80 hover:text-black transition-colors inline-flex items-center"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
