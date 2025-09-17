import React, { useState } from 'react';
import { Plus, RefreshCw, AlertTriangle, Clock, ExternalLink } from 'lucide-react';
import { InvestmentsTabProps } from '../../../types';


const InvestmentsTab = ({ investments, timeLeft }: InvestmentsTabProps): React.JSX.Element => {
  const [depositAmount, setDepositAmount] = useState('');
  const [isDepositing, setIsDepositing] = useState(false);

  const handleDeposit = async () => {
    if (!depositAmount || parseFloat(depositAmount) <= 0) return;
    
    setIsDepositing(true);
    
    // Simulate deposit process
    setTimeout(() => {
      setDepositAmount('');
      setIsDepositing(false);
    }, 3000);
  };

  return (
    <div className="space-y-8">
      {/* Deposit Interface */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Make a New Deposit</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deposit Amount (USDT)
            </label>
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={handleDeposit}
              disabled={isDepositing || !depositAmount}
              className="w-full btn-primary flex items-center justify-center space-x-2"
            >
              {isDepositing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Deposit</span>
                </>
              )}
            </button>
          </div>
        </div>
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-yellow-800">
              <p className="font-medium">30-Day Lock Period</p>
              <p>Your deposit will be locked for 30 days to ensure system stability. Rewards are distributed daily and vest over 7 days.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Investments List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Your Investments</h3>
        {investments.map((investment) => (
          <div key={investment.id} className="card">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600">Deposit Amount</p>
                <p className="font-semibold">${investment.amount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Current Value</p>
                <p className="font-semibold text-green-600">${investment.currentValue.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Accumulated Rewards</p>
                <p className="font-semibold text-blue-600">${investment.accumulatedRewards.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <span className={`px-2 py-1 text-xs rounded ${
                  investment.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {investment.status === 'active' ? 'Locked' : 'Unlocked'}
                </span>
              </div>
            </div>
            
            {investment.status === 'active' && timeLeft[investment.id] && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-900">Unlock Timer</p>
                    <p className="text-sm text-blue-700">
                      {timeLeft[investment.id].days} days, {timeLeft[investment.id].hours} hours, {timeLeft[investment.id].minutes} minutes
                    </p>
                  </div>
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            )}
            
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <p>Strategy: {investment.strategy}</p>
                <p>Daily Yield: {investment.dailyYield}%</p>
              </div>
              <button className="text-primary hover:underline text-sm flex items-center space-x-1">
                <span>View Details</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentsTab;
