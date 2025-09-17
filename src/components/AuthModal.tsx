import React, { useState } from 'react';
import { X, Eye, EyeOff, Wallet, Download, Copy, Check } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { mockWalletData } from '../data/mockData';
import { AuthModalProps, FormData, GeneratedWallet } from '../types';

const AuthModal = ({ isOpen, onClose }: AuthModalProps): React.JSX.Element | null => {
  const [activeTab, setActiveTab] = useState<'signup' | 'signin'>('signup');
  const [accountType, setAccountType] = useState<'regular' | 'enterprise'>('regular');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [walletStep, setWalletStep] = useState<'choose' | 'backup'>('choose');
  const [generatedWallet, setGeneratedWallet] = useState<GeneratedWallet | null>(null);
  const [seedPhrase, setSeedPhrase] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  
  const { signUp, signIn, connectWallet, createWallet } = useAuth();

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    businessAddress: '',
    phone: '',
    website: '',
    rememberMe: false,
    termsAccepted: false,
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const result = await signUp({
        email: formData.email,
        accountType,
        businessName: formData.businessName,
        businessAddress: formData.businessAddress,
      });
      
      if (result.success) {
        setWalletStep('choose');
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const result = await signIn(formData.email, formData.password);
      if (result.success) {
        onClose();
      }
    } catch (error) {
      console.error('Signin error:', error);
    }
  };

  const generateWallet = (): void => {
    // Mock wallet generation - in real app, use bip39 and ethers.js
    setGeneratedWallet({
      address: mockWalletData.address,
      privateKey: mockWalletData.privateKey,
    });
    setSeedPhrase(mockWalletData.seedPhrase);
    setWalletStep('backup');
  };

  const copyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWalletCreation = (): void => {
    if (generatedWallet) {
      const walletData = {
        address: generatedWallet.address,
        chainId: 1,
        provider: 'ALLEGRA Wallet'
      };
      createWallet(walletData);
      onClose();
    }
  };

  const handleWalletConnection = (): void => {
    // Mock wallet connection
    const mockWallet = {
      address: mockWalletData.address,
      chainId: 1,
      provider: 'MetaMask',
    };
    connectWallet(mockWallet);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            {walletStep === 'choose' ? 'Join ALLEGRA' : 'Wallet Setup'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {walletStep === 'choose' ? (
            <>
              {/* Account Type Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Choose Your Account Type</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="accountType"
                      value="regular"
                      checked={accountType === 'regular'}
                      onChange={(e) => setAccountType(e.target.value as 'regular' | 'enterprise')}
                      className="text-primary focus:ring-primary"
                    />
                    <div>
                      <div className="font-medium">Regular Account</div>
                      <div className="text-sm text-gray-500">For individual users</div>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="accountType"
                      value="enterprise"
                      checked={accountType === 'enterprise'}
                      onChange={(e) => setAccountType(e.target.value as 'regular' | 'enterprise')}
                      className="text-primary focus:ring-primary"
                    />
                    <div>
                      <div className="font-medium">Enterprise Account</div>
                      <div className="text-sm text-gray-500">For businesses and institutions</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Auth Tabs */}
              <div className="flex border-b border-gray-200 mb-6">
                <button
                  onClick={() => setActiveTab('signup')}
                  className={`flex-1 py-2 text-sm font-medium ${
                    activeTab === 'signup'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Sign Up
                </button>
                <button
                  onClick={() => setActiveTab('signin')}
                  className={`flex-1 py-2 text-sm font-medium ${
                    activeTab === 'signin'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Sign In
                </button>
              </div>

              {/* Sign Up Form */}
              {activeTab === 'signup' && (
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  {accountType === 'enterprise' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Business Name
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Business Address
                        </label>
                        <textarea
                          name="businessAddress"
                          value={formData.businessAddress}
                          onChange={handleInputChange}
                          required
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        minLength={8}
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="mt-1 text-primary focus:ring-primary"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <a href="#" className="text-primary hover:underline">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Sign Up
                  </button>
                </form>
              )}

              {/* Sign In Form */}
              {activeTab === 'signin' && (
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <a href="#" className="text-sm text-primary hover:underline">
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Sign In
                  </button>
                </form>
              )}
            </>
          ) : (
            /* Wallet Setup */
            <div className="space-y-6">
              <div className="text-center">
                <Wallet className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Connect or Create Your Wallet</h3>
                <p className="text-gray-600 text-sm">
                  Choose how you'd like to connect your wallet to ALLEGRA
                </p>
              </div>

              <div className="space-y-4">
                  <button
                    onClick={handleWalletConnection}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition-colors text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <Wallet className="w-6 h-6 text-primary" />
                      <div>
                        <div className="font-medium">Connect Existing Wallet</div>
                        <div className="text-sm text-gray-500">Use MetaMask, WalletConnect, or other Web3 wallets</div>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={generateWallet}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition-colors text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <Download className="w-6 h-6 text-primary" />
                      <div>
                        <div className="font-medium">Create New Wallet</div>
                        <div className="text-sm text-gray-500">Generate a new wallet with seed phrase</div>
                      </div>
                    </div>
                  </button>
                </div>

              {walletStep === 'backup' && (
                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-yellow-800">Important Security Notice</h4>
                        <p className="text-sm text-yellow-700 mt-1">
                          Store your seed phrase securely. We don't save this information and cannot recover it for you.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Seed Phrase (12 words)
                    </label>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <div className="grid grid-cols-3 gap-2 text-sm font-mono">
                        {seedPhrase.split(' ').map((word, index) => (
                          <div key={index} className="flex items-center space-x-1">
                            <span className="text-gray-500 text-xs">{index + 1}.</span>
                            <span>{word}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(seedPhrase)}
                      className="mt-2 flex items-center space-x-1 text-sm text-primary hover:underline"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied!' : 'Copy to clipboard'}</span>
                    </button>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-medium text-red-800 mb-2">Security Checklist</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>✓ Write down your seed phrase on paper</li>
                      <li>✓ Store it in a secure location</li>
                      <li>✓ Never share it with anyone</li>
                      <li>✓ Never store it digitally in plain text</li>
                    </ul>
                  </div>

                  <button
                    onClick={handleWalletCreation}
                    className="w-full btn-primary"
                  >
                    I've Secured My Seed Phrase - Continue
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
