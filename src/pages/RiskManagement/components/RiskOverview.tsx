import React from 'react';
import { Shield, TrendingDown, Activity, Target } from 'lucide-react';
import { mockRiskMetrics } from '../../../data/mockData';

const RiskOverview: React.FC = () => {
  const riskMetrics = mockRiskMetrics;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Risk Management Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multi-layered risk controls with real-time monitoring and automated safeguards
          </p>
        </div>

        {/* Risk Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="card text-center">
            <Shield className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {riskMetrics.portfolioHealth}%
            </h3>
            <p className="text-gray-600">Portfolio Health</p>
          </div>
          <div className="card text-center">
            <TrendingDown className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {riskMetrics.maxDrawdown}%
            </h3>
            <p className="text-gray-600">Max Drawdown</p>
          </div>
          <div className="card text-center">
            <Activity className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {riskMetrics.volatility}%
            </h3>
            <p className="text-gray-600">Volatility</p>
          </div>
          <div className="card text-center">
            <Target className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {riskMetrics.sharpeRatio}
            </h3>
            <p className="text-gray-600">Sharpe Ratio</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskOverview;
