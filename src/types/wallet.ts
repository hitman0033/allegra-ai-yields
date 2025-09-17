export interface WalletInfo {
  address: string;
  privateKey: string;
  publicKey?: string;
  mnemonic: string;
  provider: string;
  chainId: number;
}

export interface WalletConnectionResult {
  success: boolean;
  wallet?: WalletInfo;
  error?: string;
}

export interface WalletCreationResult {
  success: boolean;
  wallet?: WalletInfo;
  error?: string;
}

export interface SupportedChain {
  id: number;
  name: string;
  rpcUrl: string;
  blockExplorer: string;
  currency: string;
}

export interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWalletConnected: (wallet: WalletInfo) => void;
}

export interface WalletManagerProps {
  user: any;
  wallet: WalletInfo | null;
  onWalletConnected: (wallet: WalletInfo) => void;
  onWalletDisconnected: () => void;
}

export interface WalletTransaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'reward';
  amount: string;
  token: string;
  status: 'pending' | 'confirmed' | 'failed';
  hash?: string;
  timestamp: string;
  blockNumber?: number;
}

export interface WalletBalance {
  token: string;
  balance: string;
  usdValue: string;
}

export interface WalletSettings {
  autoApprove: boolean;
  gasLimit: string;
  slippage: number;
  notifications: {
    transactions: boolean;
    rewards: boolean;
    unlocks: boolean;
  };
}

export interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  transactionType: 'deposit' | 'withdrawal' | 'reward';
  amount: string;
  token: string;
  onConfirm: () => Promise<void>;
}

export const WALLET_PROVIDERS = {
  metamask: 'MetaMask',
  walletconnect: 'WalletConnect',
  tronlink: 'TronLink',
  allegra: 'ALLEGRA Wallet',
} as const;

export type WalletProvider = keyof typeof WALLET_PROVIDERS;
