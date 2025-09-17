import React, { useState, useEffect } from 'react';
import { X, Eye, EyeOff, Wallet, Download, Copy, Check, Mail, AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { mockWalletData } from '../data/mockData';
import { AuthModalProps, FormData, GeneratedWallet, ValidationErrors, PasswordStrength } from '../types';
import { validateForm, validatePassword, getPasswordStrengthLabel, getPasswordStrengthColor } from '../utils/validation';
import WalletModal from './WalletModal';

const EnhancedAuthModal = ({ isOpen, onClose }: AuthModalProps): React.JSX.Element | null => {
  const [activeTab, setActiveTab] = useState<'signup' | 'signin' | 'forgot'>('signup');
  const [accountType, setAccountType] = useState<'regular' | 'enterprise'>('regular');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [walletStep, setWalletStep] = useState<'choose' | 'backup'>('choose');
  const [generatedWallet, setGeneratedWallet] = useState<GeneratedWallet | null>(null);
  const [seedPhrase, setSeedPhrase] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>({
    score: 0,
    feedback: [],
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSymbol: false,
    hasMinLength: false,
  });
  const [showEmailVerification, setShowEmailVerification] = useState<boolean>(false);
  const [showWalletModal, setShowWalletModal] = useState<boolean>(false);
  
  const { signUp, signIn, forgotPassword, authState, user, connectWalletInfo } = useAuth();

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

  useEffect(() => {
    if (formData.password) {
      setPasswordStrength(validatePassword(formData.password));
    }
  }, [formData.password]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Clear validation error for this field
    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors({
        ...validationErrors,
        [name]: undefined,
      });
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm(formData, accountType);
    setValidationErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      const result = await signUp({
        ...formData,
        accountType,
      });
      
      if (result.success) {
        setShowEmailVerification(true);
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setValidationErrors({
        email: !formData.email ? 'Email is required' : undefined,
        password: !formData.password ? 'Password is required' : undefined,
      });
      return;
    }

    try {
      const result = await signIn(formData.email, formData.password, formData.rememberMe);
      if (result.success) {
        if (result.user?.isEmailVerified) {
          setWalletStep('choose');
        } else {
          setShowEmailVerification(true);
        }
      }
    } catch (error) {
      console.error('Signin error:', error);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!formData.email) {
      setValidationErrors({ email: 'Email is required' });
      return;
    }

    try {
      await forgotPassword(formData.email);
    } catch (error) {
      console.error('Forgot password error:', error);
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
      // const walletData = {
      //   address: generatedWallet.address,
      //   chainId: 1,
      //   provider: 'ALLEGRA Wallet'
      // };
      // createWallet(walletData);
      onClose();
    }
  };

  const handleWalletConnection = (): void => {
    setShowWalletModal(true);
  };

  const handleWalletConnected = (walletInfo: any): void => {
    connectWalletInfo(walletInfo);
    setShowWalletModal(false);
    onClose();
  };

  const renderPasswordStrengthMeter = () => {
    if (!formData.password) return null;

    return (
      <div className="mt-2">
        <div className="flex items-center space-x-2 mb-1">
          <div className="flex-1 h-1 bg-gray-200 rounded">
            <div 
              className={`h-1 rounded transition-all ${getPasswordStrengthColor(passwordStrength.score)}`}
              style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
            />
          </div>
          <span className="text-xs font-medium text-gray-600">
            {getPasswordStrengthLabel(passwordStrength.score)}
          </span>
        </div>
        {passwordStrength.feedback.length > 0 && (
          <div className="text-xs text-gray-500">
            Missing: {passwordStrength.feedback.join(', ')}
          </div>
        )}
      </div>
    );
  };

  const renderError = (error?: string) => {
    if (!error) return null;
    return (
      <div className="flex items-center space-x-1 text-red-600 text-sm mt-1">
        <AlertCircle className="w-4 h-4" />
        <span>{error}</span>
      </div>
    );
  };

  const renderEmailVerification = () => (
    <div className="text-center space-y-4">
      <Mail className="w-16 h-16 text-primary mx-auto" />
      <h3 className="text-xl font-semibold">Check Your Email</h3>
      <p className="text-gray-600">
        We've sent a verification link to <strong>{formData.email}</strong>. 
        Please check your email and click the link to verify your account.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
        <h4 className="font-medium text-blue-800 mb-2">Didn't receive the email?</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Check your spam/junk folder</li>
          <li>• Make sure you entered the correct email address</li>
          <li>• Wait a few minutes for the email to arrive</li>
        </ul>
      </div>
      <button
        onClick={() => setShowEmailVerification(false)}
        className="btn-secondary"
      >
        Back to Sign In
      </button>
    </div>
  );

  const renderForgotPasswordSuccess = () => (
    <div className="text-center space-y-4">
      <Mail className="w-16 h-16 text-primary mx-auto" />
      <h3 className="text-xl font-semibold">Reset Link Sent</h3>
      <p className="text-gray-600">
        If an account with that email exists, we've sent you a password reset link.
      </p>
      <button
        onClick={() => {
          setActiveTab('signin');
          setValidationErrors({});
        }}
        className="btn-secondary"
      >
        Back to Sign In
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            {showEmailVerification 
              ? 'Email Verification' 
              : authState.resetTokenSent 
                ? 'Password Reset' 
                : walletStep === 'choose' 
                  ? 'Join ALLEGRA' 
                  : 'Wallet Setup'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {showEmailVerification ? (
            renderEmailVerification()
          ) : authState.resetTokenSent ? (
            renderForgotPasswordSuccess()
          ) : walletStep === 'choose' ? (
            <>
              {/* Account Type Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Choose Your Account Type</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition-colors">
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
                      <div className="text-sm text-gray-500">For individual users and personal investments</div>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition-colors">
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
                      <div className="text-sm text-gray-500">For businesses, institutions, and higher limits</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Auth Tabs */}
              <div className="flex border-b border-gray-200 mb-6">
                <button
                  onClick={() => {
                    setActiveTab('signup');
                    setValidationErrors({});
                  }}
                  className={`flex-1 py-2 text-sm font-medium ${
                    activeTab === 'signup'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Sign Up
                </button>
                <button
                  onClick={() => {
                    setActiveTab('signin');
                    setValidationErrors({});
                  }}
                  className={`flex-1 py-2 text-sm font-medium ${
                    activeTab === 'signin'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Sign In
                </button>
              </div>

              {/* Global Error Display */}
              {authState.error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center space-x-2 text-red-700">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">{authState.error}</span>
                  </div>
                </div>
              )}

              {/* Sign Up Form */}
              {activeTab === 'signup' && (
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        validationErrors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {renderError(validationErrors.email)}
                  </div>

                  {accountType === 'enterprise' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                            validationErrors.businessName ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="Enter your business name"
                        />
                        {renderError(validationErrors.businessName)}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Business Address *
                        </label>
                        <textarea
                          name="businessAddress"
                          value={formData.businessAddress}
                          onChange={handleInputChange}
                          required
                          rows={3}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                            validationErrors.businessAddress ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="Enter your business address"
                        />
                        {renderError(validationErrors.businessAddress)}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                            validationErrors.phone ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="+1 (555) 123-4567"
                        />
                        {renderError(validationErrors.phone)}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Website
                        </label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                            validationErrors.website ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="https://yourcompany.com"
                        />
                        {renderError(validationErrors.website)}
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        minLength={8}
                        className={`w-full px-3 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          validationErrors.password ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Create a strong password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {renderPasswordStrengthMeter()}
                    {renderError(validationErrors.password)}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-3 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          validationErrors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {renderError(validationErrors.confirmPassword)}
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                      className={`mt-1 text-primary focus:ring-primary ${
                        validationErrors.termsAccepted ? 'border-red-300' : ''
                      }`}
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
                  {renderError(validationErrors.termsAccepted)}

                  <button
                    type="submit"
                    disabled={authState.isLoading}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    {authState.isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                    <span>Create Account</span>
                  </button>
                </form>
              )}

              {/* Sign In Form */}
              {activeTab === 'signin' && (
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        validationErrors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {renderError(validationErrors.email)}
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
                        className={`w-full px-3 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          validationErrors.password ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {renderError(validationErrors.password)}
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab('forgot');
                        setValidationErrors({});
                      }}
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={authState.isLoading}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    {authState.isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                    <span>Sign In</span>
                  </button>
                </form>
              )}

              {/* Forgot Password Form */}
              {activeTab === 'forgot' && (
                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold mb-2">Reset Your Password</h3>
                    <p className="text-sm text-gray-600">
                      Enter your email address and we'll send you a link to reset your password.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        validationErrors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {renderError(validationErrors.email)}
                  </div>

                  <button
                    type="submit"
                    disabled={authState.isLoading}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    {authState.isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                    <span>Send Reset Link</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('signin');
                      setValidationErrors({});
                    }}
                    className="w-full btn-secondary"
                  >
                    Back to Sign In
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

      <WalletModal
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
        onWalletConnected={handleWalletConnected}
      />
    </div>
  );
};

export default EnhancedAuthModal;
