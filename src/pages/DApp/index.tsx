import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { mockInvestments, mockRewards, mockProtocolStats } from '../../data/mockData';
import DAppHeader from './components/DAppHeader';
import TabNavigation from './components/TabNavigation';
import OverviewTab from './components/OverviewTab';
import InvestmentsTab from './components/InvestmentsTab';
import RewardsTab from './components/RewardsTab';
import SettingsTab from './components/SettingsTab';
import AuthRequired from './components/AuthRequired';
import WalletRequired from './components/WalletRequired';

const DApp = (): React.JSX.Element => {
  const { user, wallet, isAuthenticated, isWalletConnected } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [timeLeft, setTimeLeft] = useState({});

  // Mock data for investments
  const [investments, setInvestments] = useState(mockInvestments);

  // Mock data for rewards
  const [rewards, setRewards] = useState(mockRewards);

  // Mock protocol stats
  const protocolStats = mockProtocolStats;

  // Calculate time remaining for investments
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const timeLeftData = {};
      
      investments.forEach(investment => {
        if (investment.status === 'active') {
          const timeDiff = investment.lockEndDate.getTime() - now.getTime();
          if (timeDiff > 0) {
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            timeLeftData[investment.id] = { days, hours, minutes };
          } else {
            timeLeftData[investment.id] = { days: 0, hours: 0, minutes: 0 };
          }
        }
      });
      
      setTimeLeft(timeLeftData);
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [investments]);

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <AuthRequired />;
  }

  if (!isWalletConnected) {
    return <WalletRequired />;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab protocolStats={protocolStats} investments={investments} />;
      case 'investments':
        return <InvestmentsTab investments={investments} timeLeft={timeLeft} />;
      case 'rewards':
        return <RewardsTab rewards={rewards} />;
      case 'settings':
        return <SettingsTab user={user} wallet={wallet} />;
      default:
        return <OverviewTab protocolStats={protocolStats} investments={investments} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DAppHeader wallet={wallet} />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default DApp;
