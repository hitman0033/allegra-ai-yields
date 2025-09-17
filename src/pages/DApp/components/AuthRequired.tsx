import React, { useState } from 'react';
import { Lock, Mail, AlertCircle } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import EnhancedAuthModal from '../../../components/EnhancedAuthModal';

const AuthRequired = (): React.JSX.Element => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, authState } = useAuth();

  const handleOpenAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const renderEmailVerificationRequired = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <Mail className="w-16 h-16 text-orange-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Verification Required</h2>
        <p className="text-gray-600 mb-6">
          Please verify your email address to access the DApp. Check your inbox for a verification link.
        </p>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2 text-orange-700">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm">
              Email sent to: <strong>{user?.email}</strong>
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <button
            onClick={() => {
              // In a real app, this would call resendVerificationEmail
              console.log('Resending verification email...');
            }}
            className="w-full btn-secondary"
          >
            Resend Verification Email
          </button>
          <button
            onClick={handleOpenAuthModal}
            className="w-full btn-primary"
          >
            Sign In with Different Account
          </button>
        </div>
      </div>
    </div>
  );

  const renderSignInRequired = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <Lock className="w-16 h-16 text-blue-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Authentication Required</h2>
        <p className="text-gray-600 mb-6">
          Please sign in to access the ALLEGRA DApp and start managing your investments.
        </p>
        
        {authState.error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center space-x-2 text-red-700">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm">{authState.error}</span>
            </div>
          </div>
        )}

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-medium text-blue-800 mb-2">What you'll get access to:</h3>
          <ul className="text-sm text-blue-700 space-y-1 text-left">
            <li>• Real-time portfolio overview</li>
            <li>• Investment management tools</li>
            <li>• Rewards tracking and claiming</li>
            <li>• Advanced analytics and reports</li>
          </ul>
        </div>

        <button
          onClick={handleOpenAuthModal}
          className="w-full btn-primary"
        >
          Sign In / Sign Up
        </button>
      </div>
    </div>
  );

  // Show email verification required if user is signed in but email not verified
  if (user && !user.isEmailVerified) {
    return renderEmailVerificationRequired();
  }

  // Show sign in required if no user
  return (
    <>
      {renderSignInRequired()}
      <EnhancedAuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default AuthRequired;
