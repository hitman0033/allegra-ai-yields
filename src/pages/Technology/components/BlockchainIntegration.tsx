import React from 'react';
import { Shield, Link, Wallet, Eye, CheckCircle } from 'lucide-react';

const BlockchainIntegration: React.FC = () => {
  const chains = [
    {
      name: 'Ethereum',
      icon: '⟠',
      description: 'Primary smart contract platform',
      status: 'Active'
    },
    {
      name: 'BNB Chain',
      icon: '🟡',
      description: 'High-performance DeFi ecosystem',
      status: 'Active'
    },
    {
      name: 'Tron',
      icon: '🔺',
      description: 'Low-cost transaction network',
      status: 'Active'
    }
  ];

  const wallets = [
    { name: 'MetaMask', icon: '🦊' },
    { name: 'WalletConnect', icon: '🔗' },
    { name: 'Coinbase Wallet', icon: '🔷' },
    { name: 'Trust Wallet', icon: '🔐' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            On-Chain Transparency
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every trade, decision, and reward is recorded on the blockchain, ensuring complete transparency 
            and verifiability for all users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Smart Contract Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Smart Contract Execution</h3>
              </div>
              <p className="text-gray-600 mb-6">
                All trading strategies are executed through audited smart contracts, ensuring 
                transparent, verifiable, and immutable operations on the blockchain.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Immutable transaction records</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Automated execution logic</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Gas-optimized operations</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Public Verification</h3>
              </div>
              <p className="text-gray-600 mb-4">
                All trades and performance metrics are publicly verifiable through blockchain explorers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Etherscan
                </span>
                <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  BscScan
                </span>
                <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  TronScan
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Multi-chain Support */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-center mb-6">
                <Link className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Multi-Chain Support</h3>
              </div>
              <p className="text-gray-600 mb-6">
                ALLEGRA operates across multiple blockchain networks to maximize opportunities 
                and minimize risks through diversification.
              </p>
              
              <div className="space-y-4">
                {chains.map((chain, index) => (
                  <div key={index} className="flex items-center justify-between bg-white rounded-lg p-4 border border-purple-200">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{chain.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{chain.name}</h4>
                        <p className="text-sm text-gray-600">{chain.description}</p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {chain.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-8 border border-orange-200">
              <div className="flex items-center mb-6">
                <Wallet className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Wallet Integration</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Seamless integration with popular Web3 wallets for easy access and management.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {wallets.map((wallet, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg p-3 border border-orange-200">
                    <span className="text-xl mr-2">{wallet.icon}</span>
                    <span className="font-medium text-gray-900">{wallet.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Key Benefits */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Why Blockchain Integration Matters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Trustless Execution</h4>
              <p className="text-gray-300">
                No need to trust centralized entities - code is law
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Complete Transparency</h4>
              <p className="text-gray-300">
                Every action is visible and verifiable on-chain
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Link className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Interoperability</h4>
              <p className="text-gray-300">
                Access opportunities across multiple blockchain networks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainIntegration;
