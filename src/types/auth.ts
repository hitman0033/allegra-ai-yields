import { User, Wallet } from './data';
import { WalletInfo } from './wallet';

export interface AuthContextType {
  user: User | null;
  wallet: Wallet | null;
  walletInfo: WalletInfo | null;
  loading: boolean;
  authState: AuthState;
  signUp: (userData: any) => Promise<{ success: boolean; user?: User; error?: string }>;
  signIn: (email: string, password: string, rememberMe?: boolean) => Promise<{ success: boolean; user?: User; error?: string }>;
  signOut: () => void;
  verifyEmail: (token: string) => Promise<{ success: boolean; error?: string }>;
  resendVerificationEmail: () => Promise<{ success: boolean; error?: string }>;
  forgotPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  resetPassword: (token: string, newPassword: string) => Promise<{ success: boolean; error?: string }>;
  connectWallet: (walletData: Wallet) => void;
  createWallet: (walletData: Wallet) => void;
  connectWalletInfo: (wallet: WalletInfo) => void;
  disconnectWallet: () => void;
  isAuthenticated: boolean;
  isWalletConnected: boolean;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  businessName: string;
  businessAddress: string;
  phone: string;
  website: string;
  rememberMe: boolean;
  termsAccepted: boolean;
}

export interface PasswordStrength {
  score: number;
  feedback: string[];
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
  hasSymbol: boolean;
  hasMinLength: boolean;
}

export interface ValidationErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  businessName?: string;
  businessAddress?: string;
  phone?: string;
  website?: string;
  termsAccepted?: string;
}

export interface AuthState {
  isLoading: boolean;
  error: string | null;
  isEmailVerified: boolean;
  resetTokenSent: boolean;
  loginAttempts: number;
  lastLoginAttempt: number;
}

export interface GeneratedWallet {
  address: string;
  privateKey: string;
}
