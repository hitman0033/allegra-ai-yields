import React from 'react';
import { Wallet, Bell, Copy } from 'lucide-react';
import { DAppHeaderProps } from '../../../types';


const DAppHeader = ({ wallet }: DAppHeaderProps): React.JSX.Element => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">ALLEGRA DApp</h1>
            <p className="text-sm text-gray-500">AI-Driven Trading Dashboard</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Wallet className="w-4 h-4" />
              <span className="font-mono">
                {wallet?.address?.slice(0, 6)}...{wallet?.address?.slice(-4)}
              </span>
              <button className="text-gray-400 hover:text-gray-600">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAppHeader;
