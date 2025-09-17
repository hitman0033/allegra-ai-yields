import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, ExternalLink, CheckCircle, BarChart3, FileText, Wallet, TrendingUp } from 'lucide-react';

const TransparencyVerification: React.FC = () => {
  const verificationMethods = [
    {
      icon: <ExternalLink className="w-6 h-6" />,
      title: 'Blockchain Explorers',
      description: 'View all transactions and smart contract interactions on public blockchain explorers',
      platforms: [
        { name: 'Etherscan', url: 'https://etherscan.io', color: 'bg-blue-100 text-blue-800' },
        { name: 'BscScan', url: 'https://bscscan.com', color: 'bg-yellow-100 text-yellow-800' },
        { name: 'TronScan', url: 'https://tronscan.org', color: 'bg-red-100 text-red-800' }
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Performance Tracking',
      description: 'Real-time performance metrics and historical data publicly available',
      platforms: [
        { name: 'Trade History', url: '/dapp', color: 'bg-green-100 text-green-800' },
        { name: 'Yield Analytics', url: '/performance', color: 'bg-purple-100 text-purple-800' },
        { name: 'Risk Metrics', url: '/risk-management', color: 'bg-orange-100 text-orange-800' }
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Audit Reports',
      description: 'Third-party security audits and smart contract verification',
      platforms: [
        { name: 'Security Audit', url: '/whitepaper', color: 'bg-indigo-100 text-indigo-800' },
        { name: 'Code Review', url: '/whitepaper', color: 'bg-teal-100 text-teal-800' },
        { name: 'Compliance', url: '/whitepaper', color: 'bg-pink-100 text-pink-800' }
      ]
    }
  ];

  const transparencyFeatures = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'All Trades Logged On-Chain',
      description: 'Every single trade, decision, and transaction is permanently recorded on the blockchain',
      benefits: [
        'Immutable transaction records',
        'Public audit trail',
        'No hidden operations',
        'Complete transaction history'
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Performance Claims Verifiable',
      description: 'All performance metrics and yield claims can be independently verified by anyone',
      benefits: [
        'Real-time performance tracking',
        'Historical data analysis',
        'Independent verification',
        'Transparent reporting'
      ]
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: 'Rewards Distribution Traceable',
      description: 'Complete transparency in how rewards are calculated and distributed to users',
      benefits: [
        'Fair distribution algorithms',
        'Public reward calculations',
        'Automatic distribution',
        'User balance tracking'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Verifiable by Design
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete transparency and verifiability are core principles of ALLEGRA. 
            Every aspect of our operations is open to public scrutiny and verification.
          </p>
        </div>

        {/* Transparency Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {transparencyFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <div className="text-green-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              <div className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Methods */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Eye className="w-8 h-8 text-blue-600 mr-3" />
              How to Verify
            </h3>
            <p className="text-gray-600">
              Multiple ways to independently verify our claims and track our performance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {verificationMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">
                    {method.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{method.title}</h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {method.description}
                </p>
                
                <div className="space-y-2">
                  {method.platforms.map((platform, platformIndex) => (
                    <a
                      key={platformIndex}
                      href={platform.url}
                      className={`inline-block ${platform.color} px-3 py-1 rounded-full text-sm font-medium hover:opacity-80 transition-opacity`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {platform.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">View Trade History (DApp)</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Access our DApp to view real-time trade history, performance metrics, 
            and verify all transactions on the blockchain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/dapp" 
              className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition-colors"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              View Trade History
            </Link>
            <Link 
              to="/whitepaper" 
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium px-8 py-3 rounded-lg transition-colors"
            >
              <FileText className="w-5 h-5 mr-2" />
              Read Technical Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencyVerification;
