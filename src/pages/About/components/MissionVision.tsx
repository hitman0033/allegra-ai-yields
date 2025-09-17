import React from 'react';
import { Target, Shield, Globe, CheckCircle } from 'lucide-react';

const MissionVision = (): React.JSX.Element => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              To democratize access to institutional-grade AI trading strategies by creating 
              a transparent, decentralized protocol that generates sustainable returns while 
              maintaining complete verifiability on-chain.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Accessible AI Trading</h3>
                  <p className="text-gray-600">Make sophisticated trading strategies available to everyone</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Risk Management</h3>
                  <p className="text-gray-600">Advanced risk controls protect user investments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Global Impact</h3>
                  <p className="text-gray-600">Building the infrastructure for the future of DeFi</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We envision a world where AI-powered trading strategies are transparent, 
              accessible, and verifiable. A future where anyone can benefit from 
              institutional-grade financial tools without compromising on security or trust.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Principles</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Transparency in all operations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Community-driven governance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Sustainable growth model</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Innovation through AI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
