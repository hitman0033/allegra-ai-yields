import React, { useState } from 'react';
import { 
  Wallet, 
  Copy, 
  Check, 
  ExternalLink, 
  AlertCircle, 
  Settings, 
  Download,
  Trash2,
  RefreshCw,
  Shield,
  Eye,
  EyeOff
} from 'lucide-react';
import { WalletInfo, WalletManagerProps, WalletSettings, WalletTransaction, WalletBalance } from '../types';
import { formatAddress, getChainInfo } from '../utils/wallet';

const WalletManager = ({ user, wallet, onWalletConnected, onWalletDisconnected }: WalletManagerProps): React.JSX.Element => {
  const [showPrivateKey, setShowPrivateKey] = useState<boolean>(false);
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({});
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [settings, setSettings] = useState<WalletSettings>({
    autoApprove: false,
    gasLimit: '21000',
    slippage: 0.5,
    notifications: {
      transactions: true,
      rewards: true,
      unlocks: true,
    },
  });

  // Mock data - in real app, this would come from API
  const mockBalances: WalletBalance[] = [
    { token: 'USDT', balance: '10,000.00', usdValue: '$10,000.00' },
    { token: 'ETH', balance: '5.25', usdValue: '$12,600.00' },
  ];

  const mockTransactions: WalletTransaction[] = [
    {
      id: '1',
      type: 'deposit',
      amount: '5,000.00',
      token: 'USDT',
      status: 'confirmed',
      hash: '0x1234567890abcdef...',
      timestamp: '2024-01-15T10:30:00Z',
      blockNumber: 19000000,
    },
    {
      id: '2',
      type: 'reward',
      amount: '50.00',
      token: 'USDT',
      status: 'confirmed',
      hash: '0xabcdef1234567890...',
      timestamp: '2024-01-14T15:45:00Z',
      blockNumber: 18999950,
    },
  ];

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied({ ...copied, [key]: true });
      setTimeout(() => {
        setCopied({ ...copied, [key]: false });
      }, 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const exportWalletData = () => {
    if (!wallet) return;

    const walletData = {
      address: wallet.address,
      provider: wallet.provider,
      chainId: wallet.chainId,
      exportDate: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(walletData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `allegra-wallet-data-${formatAddress(wallet.address)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const openBlockExplorer = () => {
    if (!wallet) return;
    
    const chainInfo = getChainInfo(wallet.chainId);
    if (chainInfo) {
      window.open(`${chainInfo.blockExplorer}/address/${wallet.address}`, '_blank');
    }
  };

  if (!wallet) {
    return (
      <div className="card">
        <div className="text-center py-8">
          <Wallet className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Wallet Connected</h3>
          <p className="text-gray-600 mb-4">
            Connect your wallet to manage your investments and view transactions.
          </p>
          <button
            onClick={() => onWalletConnected({} as WalletInfo)}
            className="btn-primary"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    );
  }

  const chainInfo = getChainInfo(wallet.chainId);

  return (
    <div className="space-y-6">
      {/* Wallet Overview */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Wallet Overview</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={onWalletDisconnected}
              className="p-2 text-red-400 hover:text-red-600 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Address</p>
              <p className="text-sm text-gray-600 font-mono">
                {formatAddress(wallet.address)}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => copyToClipboard(wallet.address, 'address')}
                className="p-2 text-gray-400 hover:text-primary transition-colors"
              >
                {copied.address ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <button
                onClick={openBlockExplorer}
                className="p-2 text-gray-400 hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Provider</p>
              <p className="text-sm text-gray-600">{wallet.provider}</p>
            </div>
            <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
              Connected
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Network</p>
              <p className="text-sm text-gray-600">{chainInfo?.name || 'Unknown'}</p>
            </div>
            <button className="btn-outline text-sm px-3 py-1">
              Switch
            </button>
          </div>

          {wallet.provider === 'ALLEGRA Wallet' && wallet.privateKey && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-gray-900">Private Key</p>
                <button
                  onClick={() => setShowPrivateKey(!showPrivateKey)}
                  className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPrivateKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPrivateKey ? 'text' : 'password'}
                  value={wallet.privateKey}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"
                />
                <button
                  onClick={() => copyToClipboard(wallet.privateKey, 'privateKey')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
                >
                  {copied.privateKey ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={exportWalletData}
            className="btn-outline flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export Wallet Data</span>
          </button>
        </div>
      </div>

      {/* Wallet Settings */}
      {showSettings && (
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Wallet Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Auto-approve Transactions</p>
                <p className="text-sm text-gray-600">Automatically approve small transactions</p>
              </div>
              <input
                type="checkbox"
                checked={settings.autoApprove}
                onChange={(e) => setSettings({ ...settings, autoApprove: e.target.checked })}
                className="text-primary focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gas Limit
              </label>
              <input
                type="text"
                value={settings.gasLimit}
                onChange={(e) => setSettings({ ...settings, gasLimit: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Slippage Tolerance (%)
              </label>
              <input
                type="number"
                value={settings.slippage}
                onChange={(e) => setSettings({ ...settings, slippage: parseFloat(e.target.value) })}
                step="0.1"
                min="0"
                max="10"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="space-y-3">
              <p className="font-medium text-gray-900">Notifications</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Transaction confirmations</span>
                  <input
                    type="checkbox"
                    checked={settings.notifications.transactions}
                    onChange={(e) => setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, transactions: e.target.checked }
                    })}
                    className="text-primary focus:ring-primary"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Reward claims</span>
                  <input
                    type="checkbox"
                    checked={settings.notifications.rewards}
                    onChange={(e) => setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, rewards: e.target.checked }
                    })}
                    className="text-primary focus:ring-primary"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Investment unlocks</span>
                  <input
                    type="checkbox"
                    checked={settings.notifications.unlocks}
                    onChange={(e) => setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, unlocks: e.target.checked }
                    })}
                    className="text-primary focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Balances */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Balances</h3>
        <div className="space-y-3">
          {mockBalances.map((balance, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{balance.token}</p>
                <p className="text-sm text-gray-600">{balance.balance}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">{balance.usdValue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {mockTransactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  tx.type === 'deposit' ? 'bg-green-100' : 
                  tx.type === 'withdrawal' ? 'bg-red-100' : 'bg-blue-100'
                }`}>
                  <span className={`text-xs font-medium ${
                    tx.type === 'deposit' ? 'text-green-600' : 
                    tx.type === 'withdrawal' ? 'text-red-600' : 'text-blue-600'
                  }`}>
                    {tx.type.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 capitalize">{tx.type}</p>
                  <p className="text-sm text-gray-600">{tx.amount} {tx.token}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  tx.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                  tx.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {tx.status}
                </div>
                {tx.hash && (
                  <button
                    onClick={() => copyToClipboard(tx.hash!, `tx-${tx.id}`)}
                    className="mt-1 flex items-center space-x-1 text-xs text-gray-500 hover:text-primary"
                  >
                    <span className="font-mono">{formatAddress(tx.hash, 6, 4)}</span>
                    {copied[`tx-${tx.id}`] ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Warning */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-2">
          <Shield className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-yellow-800">Security Reminder</h4>
            <p className="text-sm text-yellow-700 mt-1">
              Keep your private keys secure. Never share them with anyone. ALLEGRA cannot recover lost wallets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletManager;
