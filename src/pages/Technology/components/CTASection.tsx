import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, FileText, Zap } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50 text-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating icons */}
      <div className="absolute top-10 left-10 animate-pulse">
        <Zap className="w-6 h-6 text-green-400 opacity-30" />
      </div>
      <div className="absolute bottom-10 right-10 animate-pulse delay-1000">
        <FileText className="w-8 h-8 text-green-500 opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-green-700 bg-clip-text text-transparent">
          Explore the Power of AI + Blockchain
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-700 leading-relaxed">
          Join the future of DeFi with ALLEGRA's advanced AI-powered trading protocol. 
          Experience transparent, secure, and profitable yield generation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            to="/dapp" 
            className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Wallet className="w-6 h-6 mr-3" />
            Sign Up & Connect Wallet
          </Link>
          <Link 
            to="/whitepaper" 
            className="inline-flex items-center border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <FileText className="w-6 h-6 mr-3" />
            Read the White Paper
          </Link>
        </div>

        {/* Additional benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Instant Access</h3>
            <p className="text-gray-600 text-sm">No minimum deposit required</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Full Transparency</h3>
            <p className="text-gray-600 text-sm">All operations on-chain</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wallet className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Secure & Private</h3>
            <p className="text-gray-600 text-sm">Your keys, your control</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
