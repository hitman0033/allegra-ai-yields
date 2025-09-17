import React from 'react';
import { TrendingUp, BarChart3, DollarSign, Users } from 'lucide-react';
import { OverviewTabProps } from '../../../types';


const OverviewTab = ({ protocolStats, investments }: OverviewTabProps): React.JSX.Element => {
  return (
    <div className="space-y-8">
      {/* Protocol Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Value Locked</p>
              <p className="text-2xl font-bold text-gray-900">
                ${(protocolStats.totalValueLocked / 1000000).toFixed(1)}M
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Current APY</p>
              <p className="text-2xl font-bold text-gray-900">
                {protocolStats.currentAPY}%
              </p>
            </div>
            <BarChart3 className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Reserve Fund</p>
              <p className="text-2xl font-bold text-gray-900">
                ${(protocolStats.reserveFund / 1000000).toFixed(1)}M
              </p>
            </div>
            <DollarSign className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">
                {protocolStats.totalUsers.toLocaleString()}
              </p>
            </div>
            <Users className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Personal Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Portfolio</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Invested</span>
              <span className="font-semibold">
                ${investments.reduce((sum, inv) => sum + inv.amount, 0).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Current Value</span>
              <span className="font-semibold text-green-600">
                ${investments.reduce((sum, inv) => sum + inv.currentValue, 0).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Rewards</span>
              <span className="font-semibold text-blue-600">
                ${investments.reduce((sum, inv) => sum + inv.accumulatedRewards, 0).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Active Investments</span>
              <span className="font-semibold">
                {investments.filter(inv => inv.status === 'active').length}
              </span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full btn-primary flex items-center justify-center space-x-2">
              <span>Make New Deposit</span>
            </button>
            <button className="w-full btn-outline flex items-center justify-center space-x-2">
              <span>Claim Rewards</span>
            </button>
            <button className="w-full btn-outline flex items-center justify-center space-x-2">
              <span>View Trade History</span>
            </button>
          </div>
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance History</h3>
        <div className="h-64 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">Performance chart would be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
