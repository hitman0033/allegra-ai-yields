import React from 'react';
import { Search, Scale, Zap, Gift, ArrowRight } from 'lucide-react';

const AllegraCoreOverview: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Allegra Core
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ALLEGRA operates as an intelligent AI ensemble combined with blockchain governance and execution. 
            Our system uses multiple specialized AI models working together to identify, validate, and execute 
            profitable trading strategies while maintaining strict risk controls.
          </p>
        </div>

        {/* Pipeline Flow Diagram */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-center space-x-8">
              {/* Searchers */}
              <div className="flex flex-col items-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Searchers</h3>
                <p className="text-sm text-gray-600 text-center max-w-32">
                  AI models identify trading opportunities
                </p>
              </div>

              <ArrowRight className="w-8 h-8 text-gray-400" />

              {/* Judge */}
              <div className="flex flex-col items-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Scale className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Judge</h3>
                <p className="text-sm text-gray-600 text-center max-w-32">
                  Ensemble filter validates proposals
                </p>
              </div>

              <ArrowRight className="w-8 h-8 text-gray-400" />

              {/* Executor */}
              <div className="flex flex-col items-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Executor</h3>
                <p className="text-sm text-gray-600 text-center max-w-32">
                  Smart contracts execute trades
                </p>
              </div>

              <ArrowRight className="w-8 h-8 text-gray-400" />

              {/* Rewards */}
              <div className="flex flex-col items-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rewards</h3>
                <p className="text-sm text-gray-600 text-center max-w-32">
                  Profits distributed to users
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Search className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Searchers</h3>
                <p className="text-gray-600">AI models identify trading opportunities</p>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Judge</h3>
                <p className="text-gray-600">Ensemble filter validates proposals</p>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Executor</h3>
                <p className="text-gray-600">Smart contracts execute trades</p>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Rewards</h3>
                <p className="text-gray-600">Profits distributed to users</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            This automated pipeline operates 24/7, continuously analyzing market conditions, 
            identifying opportunities, and executing trades while maintaining strict risk parameters 
            to protect your investments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AllegraCoreOverview;
