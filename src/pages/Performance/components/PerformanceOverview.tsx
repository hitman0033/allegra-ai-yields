import React from 'react';
import { TrendingUp, Calendar, Shield } from 'lucide-react';
import { mockPerformanceStats } from '../../../data/mockData';

const PerformanceOverview: React.FC = () => {
  const performanceStats = mockPerformanceStats;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ALLEGRA's Yield Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expected daily returns: 0.1% – 5%. Non-compounding yield structure with rewards subject to vesting schedule.
          </p>
        </div>

        {/* Summary Card Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card text-center">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900 mb-1">0.1% - 5%</h3>
            <p className="text-gray-600">Daily Yield Range</p>
          </div>
          <div className="card text-center">
            <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900 mb-1">30 Days</h3>
            <p className="text-gray-600">Example Period</p>
          </div>
          <div className="card text-center">
            <Shield className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900 mb-1">100%</h3>
            <p className="text-gray-600">Transparency Score</p>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="card text-center">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {performanceStats['30d'].returns}
            </h3>
            <p className="text-gray-600">Total Returns</p>
          </div>
          <div className="card text-center">
            <div className="w-8 h-8 text-blue-500 mx-auto mb-3">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {performanceStats['30d'].volatility}
            </h3>
            <p className="text-gray-600">Volatility</p>
          </div>
          <div className="card text-center">
            <div className="w-8 h-8 text-purple-500 mx-auto mb-3">🏆</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {performanceStats['30d'].sharpe}
            </h3>
            <p className="text-gray-600">Sharpe Ratio</p>
          </div>
          <div className="card text-center">
            <div className="w-8 h-8 text-red-500 mx-auto mb-3">📉</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {performanceStats['30d'].drawdown}
            </h3>
            <p className="text-gray-600">Max Drawdown</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceOverview;
