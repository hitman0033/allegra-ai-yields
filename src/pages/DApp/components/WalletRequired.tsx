import React, { useState } from 'react';
import { Wallet, Download, AlertCircle, Shield } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { mockWalletData } from '../../../data/mockData';

const WalletRequired = (): React.JSX.Element => {
  const [isConnecting, setIsConnecting] = useState(false);
  const { connectWallet, createWallet, user } = useAuth();

  const handleWalletConnection = async () => {
    setIsConnecting(true);
    
    // Simulate wallet connection delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock wallet connection
    const mockWallet = {
      address: mockWalletData.address,
      chainId: 1,
      provider: 'MetaMask',
    };
    connectWallet(mockWallet);
    
    setIsConnecting(false);
  };

  const handleWalletCreation = async () => {
    setIsConnecting(true);
    
    // Simulate wallet creation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock wallet creation
    const walletData = {
      address: mockWalletData.address,
      chainId: 1,
      provider: 'ALLEGRA Wallet'
    };
    createWallet(walletData);
    
    setIsConnecting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <Wallet className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Wallet Connection Required</h2>
          <p className="text-gray-600">
            Welcome {user?.email ? user.email : 'to ALLEGRA'}! To access the DApp and manage your investments, 
            please connect or create a wallet.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-800 mb-1">Secure & Private</h3>
              <p className="text-sm text-blue-700">
                Your wallet keys are never stored on our servers. You maintain full control of your assets.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <button
            onClick={handleWalletConnection}
            disabled={isConnecting}
            className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition-colors text-left disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center space-x-3">
              <Wallet className="w-6 h-6 text-primary" />
              <div className="flex-1">
                <div className="font-medium">Connect Existing Wallet</div>
                <div className="text-sm text-gray-500">
                  Use MetaMask, WalletConnect, or other Web3 wallets
                </div>
              </div>
              {isConnecting && <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />}
            </div>
          </button>

          <button
            onClick={handleWalletCreation}
            disabled={isConnecting}
            className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition-colors text-left disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center space-x-3">
              <Download className="w-6 h-6 text-primary" />
              <div className="flex-1">
                <div className="font-medium">Create New Wallet</div>
                <div className="text-sm text-gray-500">
                  Generate a new wallet with secure seed phrase
                </div>
              </div>
              {isConnecting && <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />}
            </div>
          </button>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-800 mb-1">Important Note</h4>
              <p className="text-sm text-yellow-700">
                Make sure to securely backup your wallet seed phrase. ALLEGRA cannot recover lost wallets or funds.
              </p>
            </div>
          </div>
        </div>

        {isConnecting && (
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-2 text-primary">
              <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <span className="text-sm">Connecting wallet...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletRequired;
