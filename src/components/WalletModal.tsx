import React, { useState, useEffect } from 'react';
import { 
  X, 
  Wallet, 
  Download, 
  Copy, 
  Check, 
  AlertCircle, 
  Loader2, 
  Eye, 
  EyeOff,
  ExternalLink,
  Shield,
  Key,
  FileText
} from 'lucide-react';
import { 
  generateWallet, 
  connectMetaMask, 
  connectTronLink, 
  createKeystore,
  verifyMnemonic,
  deriveWalletFromMnemonic,
  formatAddress,
  WalletInfo,
  SUPPORTED_CHAINS,
  WALLET_PROVIDERS
} from '../utils/wallet';
import { WalletModalProps } from '../types/wallet';

const WalletModal = ({ isOpen, onClose, onWalletConnected }: WalletModalProps): React.JSX.Element | null => {
  const [step, setStep] = useState<'choose' | 'create' | 'verify' | 'backup' | 'connect' | 'success'>('choose');
  const [provider, setProvider] = useState<string>('');
  const [wordCount, setWordCount] = useState<12 | 24>(12);
  const [generatedWallet, setGeneratedWallet] = useState<WalletInfo | null>(null);
  const [seedPhrase, setSeedPhrase] = useState<string>('');
  const [verificationWords, setVerificationWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [showPrivateKey, setShowPrivateKey] = useState<boolean>(false);
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      setStep('choose');
      setGeneratedWallet(null);
      setSeedPhrase('');
      setVerificationWords([]);
      setSelectedWords([]);
      setError('');
      setPassword('');
      setConfirmPassword('');
    }
  }, [isOpen]);

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

  const handleCreateWallet = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const result = await generateWallet(wordCount);
      
      if (result.success && result.wallet) {
        setGeneratedWallet(result.wallet);
        setSeedPhrase(result.wallet.mnemonic);
        setStep('backup');
      } else {
        setError(result.error || 'Failed to generate wallet');
      }
    } catch (error) {
      setError('Failed to generate wallet');
    } finally {
      setIsLoading(false);
    }
  };

  const handleConnectWallet = async (providerType: string) => {
    setIsLoading(true);
    setError('');
    setProvider(providerType);
    
    try {
      let result;
      
      switch (providerType) {
        case 'metamask':
          result = await connectMetaMask();
          break;
        case 'tronlink':
          result = await connectTronLink();
          break;
        default:
          throw new Error('Unsupported provider');
      }
      
      if (result.success && result.wallet) {
        setGeneratedWallet(result.wallet);
        onWalletConnected(result.wallet);
        setStep('success');
      } else {
        setError(result.error || 'Failed to connect wallet');
      }
    } catch (error) {
      setError('Failed to connect wallet');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyMnemonic = () => {
    if (selectedWords.length !== seedPhrase.split(' ').length) {
      setError('Please select all words in the correct order');
      return;
    }

    const reconstructedPhrase = selectedWords.join(' ');
    if (reconstructedPhrase !== seedPhrase) {
      setError('Word order is incorrect. Please try again.');
      return;
    }

    if (generatedWallet) {
      onWalletConnected(generatedWallet);
      setStep('success');
    }
  };

  const handleExportKeystore = async () => {
    if (!generatedWallet?.privateKey || !password) {
      setError('Password is required for keystore export');
      return;
    }

    try {
      const keystore = await createKeystore(generatedWallet.privateKey, password);
      const blob = new Blob([keystore], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `allegra-wallet-${formatAddress(generatedWallet.address)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      setError('Failed to export keystore');
    }
  };

  const generateVerificationWords = () => {
    const words = seedPhrase.split(' ');
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setVerificationWords(shuffled);
    setSelectedWords([]);
  };

  const selectWord = (word: string) => {
    if (selectedWords.includes(word)) return;
    
    setSelectedWords([...selectedWords, word]);
  };

  const removeWord = (index: number) => {
    setSelectedWords(selectedWords.filter((_, i) => i !== index));
  };

  if (!isOpen) return null;

  const renderChooseStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <Wallet className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Connect Your Wallet</h3>
        <p className="text-gray-600">
          Choose how you'd like to connect your wallet to ALLEGRA
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 text-red-700">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">{error}</span>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <button
          onClick={() => handleConnectWallet('metamask')}
          disabled={isLoading}
          className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition-colors text-left disabled:opacity-50"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">M</span>
            </div>
            <div>
              <div className="font-medium">Connect MetaMask</div>
              <div className="text-sm text-gray-500">Connect your existing MetaMask wallet</div>
            </div>
          </div>
        </button>

        <button
          onClick={() => handleConnectWallet('tronlink')}
          disabled={isLoading}
          className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition-colors text-left disabled:opacity-50"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">T</span>
            </div>
            <div>
              <div className="font-medium">Connect TronLink</div>
              <div className="text-sm text-gray-500">Connect your existing TronLink wallet</div>
            </div>
          </div>
        </button>

        <button
          onClick={() => setStep('create')}
          disabled={isLoading}
          className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition-colors text-left disabled:opacity-50"
        >
          <div className="flex items-center space-x-3">
            <Download className="w-8 h-8 text-primary" />
            <div>
              <div className="font-medium">Create New Wallet</div>
              <div className="text-sm text-gray-500">Generate a new wallet with seed phrase</div>
            </div>
          </div>
        </button>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-2">
          <Shield className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-yellow-800">Security Notice</h4>
            <p className="text-sm text-yellow-700 mt-1">
              Only connect wallets you control. Never share your private keys or seed phrases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCreateStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <Key className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Create New Wallet</h3>
        <p className="text-gray-600">
          Choose the security level for your new wallet
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Seed Phrase Length
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition-colors">
              <input
                type="radio"
                name="wordCount"
                value="12"
                checked={wordCount === 12}
                onChange={() => setWordCount(12)}
                className="text-primary focus:ring-primary"
              />
              <div>
                <div className="font-medium">12 words</div>
                <div className="text-sm text-gray-500">Standard security</div>
              </div>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition-colors">
              <input
                type="radio"
                name="wordCount"
                value="24"
                checked={wordCount === 24}
                onChange={() => setWordCount(24)}
                className="text-primary focus:ring-primary"
              />
              <div>
                <div className="font-medium">24 words</div>
                <div className="text-sm text-gray-500">Enhanced security</div>
              </div>
            </label>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-800 mb-2">Important</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Your seed phrase will be generated client-side</li>
            <li>• We never store your private keys or seed phrase</li>
            <li>• You'll need to verify the seed phrase before proceeding</li>
          </ul>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={() => setStep('choose')}
            className="flex-1 btn-secondary"
          >
            Back
          </button>
          <button
            onClick={handleCreateWallet}
            disabled={isLoading}
            className="flex-1 btn-primary flex items-center justify-center space-x-2"
          >
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
            <span>Generate Wallet</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderBackupStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Backup Your Seed Phrase</h3>
        <p className="text-gray-600">
          Write down these words in the exact order shown
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-2">
          <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-yellow-800">Critical Security Warning</h4>
            <p className="text-sm text-yellow-700 mt-1">
              Anyone with access to your seed phrase can control your wallet and steal your funds.
            </p>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Seed Phrase ({wordCount} words)
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
          onClick={() => copyToClipboard(seedPhrase, 'seedPhrase')}
          className="mt-2 flex items-center space-x-1 text-sm text-primary hover:underline"
        >
          {copied.seedPhrase ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span>{copied.seedPhrase ? 'Copied!' : 'Copy to clipboard'}</span>
        </button>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h4 className="font-medium text-red-800 mb-2">Security Checklist</h4>
        <ul className="text-sm text-red-700 space-y-1">
          <li>✓ Write down your seed phrase on paper</li>
          <li>✓ Store it in a secure, offline location</li>
          <li>✓ Never share it with anyone</li>
          <li>✓ Never store it digitally in plain text</li>
          <li>✓ Never take screenshots of your seed phrase</li>
        </ul>
      </div>

      <button
        onClick={() => {
          generateVerificationWords();
          setStep('verify');
        }}
        className="w-full btn-primary"
      >
        I've Secured My Seed Phrase - Continue
      </button>
    </div>
  );

  const renderVerifyStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <Check className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Verify Your Seed Phrase</h3>
        <p className="text-gray-600">
          Select the words in the correct order to verify your backup
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 text-red-700">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">{error}</span>
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Selected Words ({selectedWords.length}/{seedPhrase.split(' ').length})
        </label>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 min-h-[60px]">
          {selectedWords.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {selectedWords.map((word, index) => (
                <button
                  key={index}
                  onClick={() => removeWord(index)}
                  className="bg-primary text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1"
                >
                  <span>{word}</span>
                  <X className="w-3 h-3" />
                </button>
              ))}
            </div>
          ) : (
            <div className="text-gray-500 text-sm">Click words below to add them</div>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Available Words
        </label>
        <div className="grid grid-cols-3 gap-2">
          {verificationWords.map((word, index) => (
            <button
              key={index}
              onClick={() => selectWord(word)}
              disabled={selectedWords.includes(word)}
              className="p-2 border border-gray-200 rounded-lg text-sm hover:border-primary hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={() => setStep('backup')}
          className="flex-1 btn-secondary"
        >
          Back
        </button>
        <button
          onClick={handleVerifyMnemonic}
          disabled={selectedWords.length !== seedPhrase.split(' ').length}
          className="flex-1 btn-primary"
        >
          Verify & Continue
        </button>
      </div>
    </div>
  );

  const renderSuccessStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Wallet Connected Successfully!</h3>
        <p className="text-gray-600">
          Your wallet is now connected to ALLEGRA
        </p>
      </div>

      {generatedWallet && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Address:</span>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-sm">{formatAddress(generatedWallet.address)}</span>
                <button
                  onClick={() => copyToClipboard(generatedWallet.address, 'address')}
                  className="text-primary hover:text-primary-dark"
                >
                  {copied.address ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Provider:</span>
              <span className="text-sm">{generatedWallet.provider}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Network:</span>
              <span className="text-sm">
                {SUPPORTED_CHAINS[generatedWallet.chainId === 1 ? 'ethereum' : 'tron']?.name || 'Unknown'}
              </span>
            </div>
          </div>
        </div>
      )}

      {generatedWallet?.provider === WALLET_PROVIDERS.allegra && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Private Key
            </label>
            <div className="relative">
              <input
                type={showPrivateKey ? 'text' : 'password'}
                value={generatedWallet.privateKey}
                readOnly
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPrivateKey(!showPrivateKey)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPrivateKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <button
              onClick={() => copyToClipboard(generatedWallet.privateKey, 'privateKey')}
              className="mt-1 flex items-center space-x-1 text-sm text-primary hover:underline"
            >
              {copied.privateKey ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied.privateKey ? 'Copied!' : 'Copy private key'}</span>
            </button>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-800">Export Keystore</h4>
                <p className="text-sm text-yellow-700 mt-1">
                  Save your wallet as a keystore file for backup purposes.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password for Keystore
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter a strong password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Confirm your password"
              />
            </div>
            <button
              onClick={handleExportKeystore}
              disabled={!password || password !== confirmPassword}
              className="w-full btn-outline flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Export Keystore File</span>
            </button>
          </div>
        </div>
      )}

      <button
        onClick={onClose}
        className="w-full btn-primary"
      >
        Continue to ALLEGRA
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            {step === 'choose' && 'Connect Wallet'}
            {step === 'create' && 'Create Wallet'}
            {step === 'backup' && 'Backup Seed Phrase'}
            {step === 'verify' && 'Verify Seed Phrase'}
            {step === 'success' && 'Wallet Connected'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {step === 'choose' && renderChooseStep()}
          {step === 'create' && renderCreateStep()}
          {step === 'backup' && renderBackupStep()}
          {step === 'verify' && renderVerifyStep()}
          {step === 'success' && renderSuccessStep()}
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
