import React, { useState } from 'react';
import { 
  X, 
  AlertCircle, 
  Loader2, 
  Check, 
  ExternalLink,
  Shield,
  Clock,
  DollarSign
} from 'lucide-react';
import { TransactionModalProps } from '../types';

const TransactionModal = ({ 
  isOpen, 
  onClose, 
  transactionType, 
  amount, 
  token, 
  onConfirm 
}: TransactionModalProps): React.JSX.Element | null => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  if (!isOpen) return null;

  const handleConfirm = async () => {
    if (!agreedToTerms) {
      setError('You must agree to the terms before proceeding');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await onConfirm();
      onClose();
    } catch (error) {
      setError('Transaction failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getTransactionIcon = () => {
    switch (transactionType) {
      case 'deposit':
        return <DollarSign className="w-8 h-8 text-green-600" />;
      case 'withdrawal':
        return <DollarSign className="w-8 h-8 text-red-600" />;
      case 'reward':
        return <Check className="w-8 h-8 text-blue-600" />;
      default:
        return <DollarSign className="w-8 h-8 text-gray-600" />;
    }
  };

  const getTransactionTitle = () => {
    switch (transactionType) {
      case 'deposit':
        return 'Confirm Deposit';
      case 'withdrawal':
        return 'Confirm Withdrawal';
      case 'reward':
        return 'Claim Rewards';
      default:
        return 'Confirm Transaction';
    }
  };

  const getTransactionDescription = () => {
    switch (transactionType) {
      case 'deposit':
        return `You are about to deposit ${amount} ${token} to your ALLEGRA investment account.`;
      case 'withdrawal':
        return `You are about to withdraw ${amount} ${token} from your ALLEGRA account.`;
      case 'reward':
        return `You are about to claim ${amount} ${token} in rewards from your investments.`;
      default:
        return `You are about to process a ${amount} ${token} transaction.`;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">{getTransactionTitle()}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            disabled={isLoading}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Transaction Details */}
          <div className="text-center">
            {getTransactionIcon()}
            <h3 className="text-lg font-semibold mt-4 mb-2">{getTransactionTitle()}</h3>
            <p className="text-gray-600">{getTransactionDescription()}</p>
          </div>

          {/* Transaction Summary */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Amount:</span>
                <span className="font-semibold text-gray-900">{amount} {token}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Type:</span>
                <span className="capitalize text-gray-900">{transactionType}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Network Fee:</span>
                <span className="text-gray-900">~$5.00</span>
              </div>
              {transactionType === 'deposit' && (
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Lock Period:</span>
                  <span className="text-gray-900">30 days</span>
                </div>
              )}
            </div>
          </div>

          {/* Security Warning */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-red-800">Important Security Notice</h4>
                <ul className="text-sm text-red-700 mt-2 space-y-1">
                  <li>• Blockchain transactions are irreversible</li>
                  <li>• Double-check the amount and recipient address</li>
                  <li>• Ensure you're using the correct network</li>
                  <li>• Transaction fees are non-refundable</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compliance Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-800">Compliance & Legal</h4>
                <p className="text-sm text-blue-700 mt-1">
                  This transaction may be subject to regulatory requirements. By proceeding, you confirm 
                  compliance with applicable laws and regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1 text-primary focus:ring-primary"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I understand the risks and agree to proceed with this transaction. 
              I have verified all details are correct and accept responsibility for this action.
            </label>
          </div>

          {/* Error Display */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 text-red-700">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm">{error}</span>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 btn-secondary"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={!agreedToTerms || isLoading}
              className="flex-1 btn-primary flex items-center justify-center space-x-2"
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              <span>
                {isLoading ? 'Processing...' : `Confirm ${transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}`}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
