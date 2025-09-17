import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Wallet, AuthContextType, AuthProviderProps, AuthState, WalletInfo } from '../types';
import { sendVerificationEmail, verifyEmailToken, sendPasswordResetEmail, resetPassword, getStoredUser, updateStoredUser, clearAuthStorage, createSession, validateSession, cleanupExpiredTokens } from '../utils/auth';
import { simulateRateLimit } from '../utils/validation';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};


export const AuthProvider = ({ children }: AuthProviderProps): React.JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [authState, setAuthState] = useState<AuthState>({
    isLoading: false,
    error: null,
    isEmailVerified: false,
    resetTokenSent: false,
    loginAttempts: 0,
    lastLoginAttempt: 0,
  });

  useEffect(() => {
    // Check for existing auth state and validate session
    const initializeAuth = async () => {
      try {
        cleanupExpiredTokens();
        
        if (validateSession()) {
          const savedUser = getStoredUser();
          const savedWallet = localStorage.getItem('allegra_wallet');
          const savedWalletInfo = localStorage.getItem('allegra_wallet_info');
          
          if (savedUser) {
            setUser(savedUser);
            setAuthState(prev => ({ ...prev, isEmailVerified: savedUser.isEmailVerified }));
          }
          if (savedWallet) {
            setWallet(JSON.parse(savedWallet));
          }
          if (savedWalletInfo) {
            setWalletInfo(JSON.parse(savedWalletInfo));
          }
        } else {
          // Session expired, clear auth data
          clearAuthStorage();
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        clearAuthStorage();
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const signUp = async (userData: any): Promise<{ success: boolean; user?: User; error?: string }> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Check if email already exists (mock check)
      const existingUser = getStoredUser();
      if (existingUser && existingUser.email === userData.email) {
        setAuthState(prev => ({ ...prev, isLoading: false, error: 'Email already registered' }));
        return { success: false, error: 'Email already registered' };
      }

      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        accountType: userData.accountType,
        isEmailVerified: false,
        createdAt: new Date().toISOString(),
        businessName: userData.businessName,
        businessAddress: userData.businessAddress,
        phone: userData.phone,
        website: userData.website,
        profileCompleted: userData.accountType === 'regular' ? true : !!(userData.businessName && userData.businessAddress),
      };

      // Send verification email
      const verificationResult = await sendVerificationEmail(userData.email);
      if (!verificationResult.success) {
        setAuthState(prev => ({ ...prev, isLoading: false, error: 'Failed to send verification email' }));
        return { success: false, error: 'Failed to send verification email' };
      }

      setUser(newUser);
      updateStoredUser(newUser);
      createSession(newUser, userData.rememberMe);
      
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: false, 
        isEmailVerified: false,
        error: null 
      }));

      return { success: true, user: newUser };
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false, error: 'Sign up failed. Please try again.' }));
      return { success: false, error: 'Sign up failed. Please try again.' };
    }
  };

  const signIn = async (email: string, password: string, rememberMe: boolean = false): Promise<{ success: boolean; user?: User; error?: string }> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Check rate limiting
      const rateLimitCheck = simulateRateLimit(authState.loginAttempts, authState.lastLoginAttempt);
      if (!rateLimitCheck.allowed) {
        setAuthState(prev => ({ 
          ...prev, 
          isLoading: false, 
          error: `Too many login attempts. Please wait ${rateLimitCheck.waitTime} minutes.` 
        }));
        return { success: false, error: `Too many login attempts. Please wait ${rateLimitCheck.waitTime} minutes.` };
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock user lookup - in real app, this would validate credentials
      const existingUser = getStoredUser();
      if (!existingUser || existingUser.email !== email) {
        setAuthState(prev => ({ 
          ...prev, 
          isLoading: false, 
          error: 'Invalid email or password',
          loginAttempts: prev.loginAttempts + 1,
          lastLoginAttempt: Date.now()
        }));
        return { success: false, error: 'Invalid email or password' };
      }

      // Update last login time
      const updatedUser = {
        ...existingUser,
        lastLoginAt: new Date().toISOString(),
      };

      setUser(updatedUser);
      updateStoredUser(updatedUser);
      createSession(updatedUser, rememberMe);
      
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: false, 
        isEmailVerified: updatedUser.isEmailVerified,
        loginAttempts: 0,
        error: null 
      }));

      return { success: true, user: updatedUser };
    } catch (error) {
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: false, 
        error: 'Sign in failed. Please try again.',
        loginAttempts: prev.loginAttempts + 1,
        lastLoginAttempt: Date.now()
      }));
      return { success: false, error: 'Sign in failed. Please try again.' };
    }
  };

  const signOut = (): void => {
    setUser(null);
    setWallet(null);
    setWalletInfo(null);
    setAuthState({
      isLoading: false,
      error: null,
      isEmailVerified: false,
      resetTokenSent: false,
      loginAttempts: 0,
      lastLoginAttempt: 0,
    });
    clearAuthStorage();
  };

  const verifyEmail = async (token: string): Promise<{ success: boolean; error?: string }> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const result = await verifyEmailToken(token);
      
      if (result.success && user) {
        const updatedUser = { ...user, isEmailVerified: true };
        setUser(updatedUser);
        updateStoredUser(updatedUser);
        setAuthState(prev => ({ ...prev, isLoading: false, isEmailVerified: true }));
        return { success: true };
      } else {
        setAuthState(prev => ({ ...prev, isLoading: false, error: result.error || 'Email verification failed' }));
        return { success: false, error: result.error || 'Email verification failed' };
      }
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false, error: 'Email verification failed' }));
      return { success: false, error: 'Email verification failed' };
    }
  };

  const resendVerificationEmail = async (): Promise<{ success: boolean; error?: string }> => {
    if (!user?.email) {
      return { success: false, error: 'No user email found' };
    }

    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const result = await sendVerificationEmail(user.email);
      setAuthState(prev => ({ ...prev, isLoading: false }));
      return result;
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false, error: 'Failed to resend verification email' }));
      return { success: false, error: 'Failed to resend verification email' };
    }
  };

  const forgotPassword = async (email: string): Promise<{ success: boolean; error?: string }> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null, resetTokenSent: false }));

    try {
      const result = await sendPasswordResetEmail(email);
      setAuthState(prev => ({ ...prev, isLoading: false, resetTokenSent: true }));
      return result;
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false, error: 'Failed to send reset email' }));
      return { success: false, error: 'Failed to send reset email' };
    }
  };

  const resetUserPassword = async (token: string, newPassword: string): Promise<{ success: boolean; error?: string }> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const result = await resetPassword(token, newPassword);
      setAuthState(prev => ({ ...prev, isLoading: false }));
      return result;
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false, error: 'Password reset failed' }));
      return { success: false, error: 'Password reset failed' };
    }
  };

  const connectWallet = (walletData: Wallet): void => {
    setWallet(walletData);
    localStorage.setItem('allegra_wallet', JSON.stringify(walletData));
  };

  const createWallet = (walletData: Wallet): void => {
    setWallet(walletData);
    localStorage.setItem('allegra_wallet', JSON.stringify(walletData));
  };

  const connectWalletInfo = (wallet: WalletInfo): void => {
    setWalletInfo(wallet);
    localStorage.setItem('allegra_wallet_info', JSON.stringify(wallet));
  };

  const disconnectWallet = (): void => {
    setWalletInfo(null);
    localStorage.removeItem('allegra_wallet_info');
  };

  const value: AuthContextType = {
    user,
    wallet,
    walletInfo,
    loading,
    authState,
    signUp,
    signIn,
    signOut,
    verifyEmail,
    resendVerificationEmail,
    forgotPassword,
    resetPassword: resetUserPassword,
    connectWallet,
    createWallet,
    connectWalletInfo,
    disconnectWallet,
    isAuthenticated: !!user,
    isWalletConnected: !!walletInfo,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
