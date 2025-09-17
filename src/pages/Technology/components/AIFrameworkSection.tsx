import React, { useState } from 'react';
import { Network, Clock, Brain, CheckCircle, AlertTriangle, Zap, Search, Scale } from 'lucide-react';

const AIFrameworkSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('searchers');

  const tabs = [
    {
      id: 'searchers',
      label: 'Searchers',
      icon: <Search className="w-5 h-5" />,
      models: [
        {
          name: 'Graph Neural Network (GNN)',
          description: 'Analyzes complex relationships between different DeFi protocols and market dynamics',
          task: 'Network analysis and relationship mapping'
        },
        {
          name: 'LSTM (Long Short-Term Memory)',
          description: 'Processes time-series data to identify patterns in price movements and market cycles',
          task: 'Time-series pattern recognition'
        },
        {
          name: 'Transformer Model',
          description: 'Advanced attention mechanism for processing market sentiment and news patterns',
          task: 'Market sentiment analysis'
        }
      ]
    },
    {
      id: 'judge',
      label: 'Judge',
      icon: <Scale className="w-5 h-5" />,
      models: [
        {
          name: 'Random Forest Ensemble',
          description: 'Combines multiple decision trees to validate trading proposals with high accuracy',
          task: 'Multi-criteria validation'
        },
        {
          name: 'NLP Sentiment Analysis',
          description: 'Analyzes market sentiment from news, social media, and protocol communications',
          task: 'Sentiment scoring and filtering'
        },
        {
          name: 'Anomaly Detection Model',
          description: 'Identifies unusual market conditions and prevents risky trades during volatility',
          task: 'Risk anomaly detection'
        }
      ]
    },
    {
      id: 'executor',
      label: 'Executor',
      icon: <Zap className="w-5 h-5" />,
      models: [
        {
          name: 'Smart Contract Agent',
          description: 'Automated execution engine that processes validated strategies on-chain',
          task: 'On-chain trade execution'
        },
        {
          name: 'Gas Optimization Engine',
          description: 'Minimizes transaction costs by optimizing gas usage and timing',
          task: 'Cost optimization'
        },
        {
          name: 'Slippage Protection',
          description: 'Prevents excessive slippage by monitoring liquidity and adjusting trade sizes',
          task: 'Execution protection'
        }
      ]
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Multi-Model AI Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI ensemble uses specialized models for each stage of the trading process, 
            ensuring maximum accuracy and risk management.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-white text-purple-600 shadow-lg border-2 border-purple-200'
                  : 'bg-white text-gray-600 hover:text-purple-600 hover:shadow-md border-2 border-transparent'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              {activeTabData?.icon}
              <span className="ml-3">{activeTabData?.label}</span>
            </h3>
            <p className="text-gray-600 text-lg">
              {activeTab === 'searchers' && 'Advanced AI models that continuously scan the DeFi ecosystem to identify profitable trading opportunities.'}
              {activeTab === 'judge' && 'Ensemble validation system that filters and scores trading proposals before execution.'}
              {activeTab === 'executor' && 'Smart contract-based execution engine that processes validated strategies with optimal efficiency.'}
            </p>
          </div>

          {/* Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTabData?.models.map((model, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {activeTab === 'searchers' && <Network className="w-5 h-5 text-blue-500" />}
                    {activeTab === 'judge' && <CheckCircle className="w-5 h-5 text-green-500" />}
                    {activeTab === 'executor' && <Zap className="w-5 h-5 text-purple-500" />}
                  </div>
                  <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-medium">
                    {model.task}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{model.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{model.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">24/7 Operation</h4>
                <p className="text-sm text-gray-600">Continuous monitoring and execution</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Risk Management</h4>
                <p className="text-sm text-gray-600">Built-in safeguards and monitoring</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Self-Learning</h4>
                <p className="text-sm text-gray-600">Models improve over time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFrameworkSection;
