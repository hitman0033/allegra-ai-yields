import React from 'react';
import { Brain, Shield, Link, Eye, Users, DollarSign, TrendingUp, Zap, Globe, Lock } from 'lucide-react';

const ProtocolFeatures: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Multi-Model AI Ensemble',
      description: 'Advanced artificial intelligence combining multiple specialized models for optimal decision-making',
      details: [
        'Graph Neural Networks for relationship analysis',
        'LSTM models for time-series prediction',
        'Transformer architectures for sentiment analysis',
        'Ensemble validation for risk assessment'
      ],
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Risk Prioritization',
      description: 'Comprehensive risk management framework prioritizing capital preservation over maximum returns',
      details: [
        'Real-time risk monitoring and assessment',
        'Dynamic position sizing based on volatility',
        'Correlation analysis across multiple assets',
        'Stress testing and scenario analysis'
      ],
      color: 'green',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: 'Blockchain Integration',
      description: 'Seamless integration with multiple blockchain networks for maximum opportunity access',
      details: [
        'Smart contract-based execution',
        'Multi-chain interoperability',
        'Gas optimization algorithms',
        'Cross-chain arbitrage opportunities'
      ],
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Enhanced Transparency',
      description: 'Complete visibility into all operations through blockchain-based transparency',
      details: [
        'On-chain trade verification',
        'Real-time performance tracking',
        'Public audit trails',
        'Open-source smart contracts'
      ],
      color: 'indigo',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Accessibility',
      description: 'No minimum deposit requirements with multi-chain support for universal access',
      details: [
        'Zero minimum investment threshold',
        'Cross-chain wallet compatibility',
        'User-friendly interface design',
        'Mobile and desktop support'
      ],
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Liquidity Terms',
      description: 'Flexible liquidity options with graduated withdrawal limits for pool stability',
      details: [
        'Flexible withdrawal schedules',
        'Graduated withdrawal limits',
        'Emergency liquidity provisions',
        'Stable pool management'
      ],
      color: 'teal',
      gradient: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Protocol Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive features that make ALLEGRA the most advanced AI-powered DeFi protocol, 
            combining cutting-edge technology with user-friendly accessibility.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Header with Icon */}
              <div className={`bg-gradient-to-r ${feature.gradient} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90">Feature</div>
                    <div className="text-lg font-bold">{index + 1}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                    Key Components
                  </h4>
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-${feature.color}-500`}></div>
                      <span className="text-sm text-gray-600 leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className={`text-${feature.color}-600 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300`}>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Learn more about this feature
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">24/7</h4>
              <p className="text-gray-300">Continuous Operation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">3+</h4>
              <p className="text-gray-300">Blockchain Networks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">100%</h4>
              <p className="text-gray-300">Transparent</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">0</h4>
              <p className="text-gray-300">Minimum Deposit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtocolFeatures;
