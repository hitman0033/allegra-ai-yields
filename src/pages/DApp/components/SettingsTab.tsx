import React, { useState } from 'react';
import { Download, BarChart3, Calendar } from 'lucide-react';
import { SettingsTabProps } from '../../../types';
import WalletManager from '../../../components/WalletManager';
import WalletModal from '../../../components/WalletModal';


const SettingsTab = ({ user, wallet }: SettingsTabProps): React.JSX.Element => {
  const [showWalletModal, setShowWalletModal] = useState<boolean>(false);

  const handleWalletConnected = (walletInfo: any) => {
    // This would be handled by the AuthContext
    console.log('Wallet connected:', walletInfo);
    setShowWalletModal(false);
  };

  const handleWalletDisconnected = () => {
    // This would be handled by the AuthContext
    console.log('Wallet disconnected');
  };

  return (
    <div className="space-y-8">
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Notifications
            </label>
            <div className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="text-primary focus:ring-primary" />
              <span className="text-sm text-gray-600">Receive email notifications for unlocks and claims</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Push Notifications
            </label>
            <div className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="text-primary focus:ring-primary" />
              <span className="text-sm text-gray-600">Receive push notifications for important updates</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Performance Reports
            </label>
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="text-primary focus:ring-primary" />
              <span className="text-sm text-gray-600">Weekly performance reports via email</span>
            </div>
          </div>
        </div>
      </div>

      <WalletManager
        user={user}
        wallet={wallet}
        onWalletConnected={handleWalletConnected}
        onWalletDisconnected={handleWalletDisconnected}
      />

      {user?.accountType === 'enterprise' && (
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Enterprise Features</h3>
          <div className="space-y-4">
            <button className="btn-outline flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export Investment Report (CSV)</span>
            </button>
            <button className="btn-outline flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Generate Performance Analytics</span>
            </button>
            <button className="btn-outline flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Schedule Custom Reports</span>
            </button>
          </div>
        </div>
      )}

      <WalletModal
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
        onWalletConnected={handleWalletConnected}
      />
    </div>
  );
};

export default SettingsTab;
