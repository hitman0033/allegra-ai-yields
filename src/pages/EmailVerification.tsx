import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CheckCircle, AlertCircle, Mail, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const EmailVerification = (): React.JSX.Element => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { verifyEmail, resendVerificationEmail, authState } = useAuth();
  
  const [token] = useState(searchParams.get('token') || '');
  const [isVerifying, setIsVerifying] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const verifyEmailToken = async () => {
      if (!token) {
        setError('Invalid verification link');
        setIsVerifying(false);
        return;
      }

      try {
        const result = await verifyEmail(token);
        if (result.success) {
          setSuccess(true);
          setTimeout(() => {
            navigate('/dapp', { replace: true });
          }, 3000);
        } else {
          setError(result.error || 'Email verification failed');
        }
      } catch (error) {
        setError('Email verification failed. Please try again.');
      } finally {
        setIsVerifying(false);
      }
    };

    verifyEmailToken();
  }, [token, verifyEmail, navigate]);

  const handleResendEmail = async () => {
    try {
      const result = await resendVerificationEmail();
      if (result.success) {
        setError('');
        // Show success message or update UI
      } else {
        setError(result.error || 'Failed to resend verification email');
      }
    } catch (error) {
      setError('Failed to resend verification email');
    }
  };

  if (isVerifying) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900">Verifying Your Email</h2>
          <p className="text-gray-600 mt-2">Please wait while we verify your email address...</p>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Verified Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Your email address has been verified. You now have full access to the ALLEGRA DApp.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-green-700">
              Redirecting to DApp in a few seconds...
            </p>
          </div>
          <button
            onClick={() => navigate('/dapp', { replace: true })}
            className="w-full btn-primary"
          >
            Continue to DApp
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Verification Failed</h2>
        <p className="text-gray-600 mb-6">{error}</p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <h3 className="font-medium text-red-800 mb-2">Common Issues:</h3>
          <ul className="text-sm text-red-700 space-y-1 text-left">
            <li>• The verification link may have expired</li>
            <li>• The link may have already been used</li>
            <li>• The link may be incomplete or corrupted</li>
          </ul>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleResendEmail}
            disabled={authState.isLoading}
            className="w-full btn-primary flex items-center justify-center space-x-2"
          >
            {authState.isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
            <Mail className="w-4 h-4" />
            <span>Resend Verification Email</span>
          </button>
          
          <button
            onClick={() => navigate('/', { replace: true })}
            className="w-full btn-secondary"
          >
            Return to Home
          </button>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          <p>
            Still having trouble? Contact our support team for assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
