import React from 'react';
import { Gift, Clock, CheckCircle } from 'lucide-react';
import { RewardsTabProps } from '../../../types';


const RewardsTab = ({ rewards }: RewardsTabProps): React.JSX.Element => {
  const claimRewards = (rewardId: string) => {
    // Handle reward claiming logic
    console.log('Claiming reward:', rewardId);
  };

  return (
    <div className="space-y-8">
      {/* Rewards Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card text-center">
          <Gift className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-gray-900">
            ${rewards.filter(r => r.status === 'vested').reduce((sum, r) => sum + r.amount, 0).toLocaleString()}
          </h3>
          <p className="text-gray-600">Vested Rewards</p>
        </div>
        <div className="card text-center">
          <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-gray-900">
            ${rewards.filter(r => r.status === 'vesting').reduce((sum, r) => sum + r.amount, 0).toLocaleString()}
          </h3>
          <p className="text-gray-600">Vesting Rewards</p>
        </div>
        <div className="card text-center">
          <CheckCircle className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-gray-900">
            ${rewards.filter(r => r.status === 'vested').reduce((sum, r) => sum + r.amount, 0).toLocaleString()}
          </h3>
          <p className="text-gray-600">Vested Rewards</p>
        </div>
      </div>

      {/* Rewards List */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Rewards & Vesting</h3>
        <div className="space-y-4">
          {rewards.map((reward) => (
            <div key={reward.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">${reward.amount.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">From {reward.source}</p>
                  <p className="text-sm text-gray-500">
                    Earned: {reward.date.toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 text-xs rounded ${
                    reward.status === 'vested' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {reward.status === 'vested' ? 'Vested' : 'Vesting'}
                  </span>
                  {reward.status === 'vested' && (
                    <button
                      onClick={() => claimRewards(reward.id)}
                      className="mt-2 btn-primary text-sm px-3 py-1"
                    >
                      Claim
                    </button>
                  )}
                </div>
              </div>
              
              {reward.status === 'vesting' && (
                <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-700">Vesting ends:</span>
                    <span className="text-blue-900 font-medium">
                      {reward.vestingEndDate.toLocaleDateString()}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewardsTab;
