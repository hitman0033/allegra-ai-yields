import React from 'react';
import { mockYieldExamples } from '../../../data/mockData';

const YieldModelSection: React.FC = () => {
  const yieldExamples = mockYieldExamples;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Yield Model & Examples
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent yield calculation with real-world examples
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Yield Characteristics</h3>
            <div className="space-y-6">
              <div className="card">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Yield Range</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Daily Returns</span>
                    <span className="font-bold text-green-600">0.1% - 5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Source</span>
                    <span className="font-bold text-blue-600">Actual Trading P/L</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Distribution</span>
                    <span className="font-bold text-purple-600">Daily USDT</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Distribution</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Non-compounding approach to avoid risk amplification</li>
                  <li>• Predictable liquidity outflows for protocol stability</li>
                  <li>• Automated distribution via smart contracts</li>
                  <li>• 7-day vesting period before withdrawal</li>
                </ul>
              </div>

              <div className="card">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Verification</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• All deposits and yields immutably recorded on-chain</li>
                  <li>• Live dashboard with real-time APY, TVL, and reserve fund</li>
                  <li>• Curated feed of entry and exit transactions</li>
                  <li>• Fully automated system with no manual intervention</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Example Scenarios</h3>
            <div className="space-y-4">
              {yieldExamples.map((example, index) => (
                <div key={index} className="card">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {example.deposit} Deposit
                    </h4>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded">
                      {example.timeframe}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Daily Yield:</span>
                      <span className="font-medium ml-2">{example.dailyYield}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Total Return:</span>
                      <span className="font-medium ml-2 text-green-600">{example.totalReturn}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Final Value:</span>
                      <span className="font-medium ml-2">{example.finalValue}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">APY:</span>
                      <span className="font-medium ml-2 text-blue-600">{example.apy}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YieldModelSection;
