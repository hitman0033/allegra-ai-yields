import { ethers } from 'ethers';
import * as bip39 from 'bip39';
import CryptoJS from 'crypto-js';

export interface WalletInfo {
  address: string;
  privateKey: string;
  publicKey: string;
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

export const SUPPORTED_CHAINS: Record<string, SupportedChain> = {
  ethereum: {
    id: 1,
    name: 'Ethereum',
    rpcUrl: 'https://mainnet.infura.io/v3/YOUR_INFURA_KEY',
    blockExplorer: 'https://etherscan.io',
    currency: 'ETH',
  },
  bnb: {
    id: 56,
    name: 'BNB Smart Chain',
    rpcUrl: 'https://bsc-dataseed.binance.org',
    blockExplorer: 'https://bscscan.com',
    currency: 'BNB',
  },
  tron: {
    id: 1,
    name: 'Tron',
    rpcUrl: 'https://api.trongrid.io',
    blockExplorer: 'https://tronscan.org',
    currency: 'TRX',
  },
};

export const WALLET_PROVIDERS = {
  metamask: 'MetaMask',
  walletconnect: 'WalletConnect',
  tronlink: 'TronLink',
  allegra: 'ALLEGRA Wallet',
};

/**
 * Generate a new wallet using BIP39 mnemonic
 */
export const generateWallet = async (wordCount: 12 | 24 = 12): Promise<WalletCreationResult> => {
  try {
    // Generate mnemonic
    const mnemonic = bip39.generateMnemonic(wordCount === 12 ? 128 : 256);
    
    // Validate mnemonic
    if (!bip39.validateMnemonic(mnemonic)) {
      return { success: false, error: 'Invalid mnemonic generated' };
    }

    // Derive wallet from mnemonic
    const wallet = ethers.HDNodeWallet.fromMnemonic(ethers.Mnemonic.fromPhrase(mnemonic));
    
    const walletInfo: WalletInfo = {
      address: wallet.address,
      privateKey: wallet.privateKey,
      publicKey: wallet.publicKey || '',
      mnemonic,
      provider: WALLET_PROVIDERS.allegra,
      chainId: SUPPORTED_CHAINS.ethereum.id,
    };

    return { success: true, wallet: walletInfo };
  } catch (error) {
    console.error('Wallet generation error:', error);
    return { success: false, error: 'Failed to generate wallet' };
  }
};

/**
 * Connect to MetaMask wallet
 */
export const connectMetaMask = async (): Promise<WalletConnectionResult> => {
  try {
    if (typeof window === 'undefined' || !window.ethereum) {
      return { success: false, error: 'MetaMask not detected. Please install MetaMask.' };
    }

    // Request account access
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    if (!accounts || accounts.length === 0) {
      return { success: false, error: 'No accounts found' };
    }

    // Get chain ID
    const chainId = await window.ethereum.request({
      method: 'eth_chainId',
    });

    // Create provider and signer
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    
    // Verify ownership by requesting signature
    const message = 'Sign this message to verify wallet ownership for ALLEGRA';
    const signature = await signer.signMessage(message);

    const walletInfo: WalletInfo = {
      address: accounts[0],
      privateKey: '', // Not accessible from MetaMask
      publicKey: '', // Not accessible from MetaMask
      mnemonic: '', // Not accessible from MetaMask
      provider: WALLET_PROVIDERS.metamask,
      chainId: parseInt(chainId, 16),
    };

    return { success: true, wallet: walletInfo };
  } catch (error: any) {
    console.error('MetaMask connection error:', error);
    
    if (error.code === 4001) {
      return { success: false, error: 'User rejected the connection request' };
    }
    
    return { success: false, error: 'Failed to connect to MetaMask' };
  }
};

/**
 * Connect to TronLink wallet
 */
export const connectTronLink = async (): Promise<WalletConnectionResult> => {
  try {
    if (typeof window === 'undefined' || !window.tronWeb) {
      return { success: false, error: 'TronLink not detected. Please install TronLink.' };
    }

    // Request account access
    const accounts = await window.tronWeb.request({
      method: 'tron_requestAccounts',
    });

    if (!accounts || accounts.length === 0) {
      return { success: false, error: 'No accounts found' };
    }

    // Verify ownership by requesting signature
    const message = 'Sign this message to verify wallet ownership for ALLEGRA';
    const signature = await window.tronWeb.trx.signMessageV2(message);

    const walletInfo: WalletInfo = {
      address: accounts[0],
      privateKey: '', // Not accessible from TronLink
      publicKey: '', // Not accessible from TronLink
      mnemonic: '', // Not accessible from TronLink
      provider: WALLET_PROVIDERS.tronlink,
      chainId: SUPPORTED_CHAINS.tron.id,
    };

    return { success: true, wallet: walletInfo };
  } catch (error: any) {
    console.error('TronLink connection error:', error);
    
    if (error.code === 4001) {
      return { success: false, error: 'User rejected the connection request' };
    }
    
    return { success: false, error: 'Failed to connect to TronLink' };
  }
};

/**
 * Create keystore file for wallet export
 */
export const createKeystore = async (privateKey: string, password: string): Promise<string> => {
  try {
    const wallet = new ethers.Wallet(privateKey);
    return await wallet.encrypt(password);
  } catch (error) {
    console.error('Keystore creation error:', error);
    throw new Error('Failed to create keystore');
  }
};

/**
 * Decrypt keystore file
 */
export const decryptKeystore = async (keystore: string, password: string): Promise<WalletInfo> => {
  try {
    const wallet = await ethers.Wallet.fromEncryptedJson(keystore, password);
    
    return {
      address: wallet.address,
      privateKey: wallet.privateKey,
      publicKey: (wallet as any).publicKey || '',
      mnemonic: '', // Not stored in keystore
      provider: WALLET_PROVIDERS.allegra,
      chainId: SUPPORTED_CHAINS.ethereum.id,
    };
  } catch (error) {
    console.error('Keystore decryption error:', error);
    throw new Error('Failed to decrypt keystore');
  }
};

/**
 * Verify mnemonic phrase
 */
export const verifyMnemonic = (mnemonic: string): boolean => {
  return bip39.validateMnemonic(mnemonic);
};

/**
 * Derive wallet from mnemonic
 */
export const deriveWalletFromMnemonic = (mnemonic: string): WalletCreationResult => {
  try {
    if (!bip39.validateMnemonic(mnemonic)) {
      return { success: false, error: 'Invalid mnemonic phrase' };
    }

    const wallet = ethers.HDNodeWallet.fromMnemonic(ethers.Mnemonic.fromPhrase(mnemonic));
    
    const walletInfo: WalletInfo = {
      address: wallet.address,
      privateKey: wallet.privateKey,
      publicKey: wallet.publicKey || '',
      mnemonic,
      provider: WALLET_PROVIDERS.allegra,
      chainId: SUPPORTED_CHAINS.ethereum.id,
    };

    return { success: true, wallet: walletInfo };
  } catch (error) {
    console.error('Mnemonic derivation error:', error);
    return { success: false, error: 'Failed to derive wallet from mnemonic' };
  }
};

/**
 * Get chain information by ID
 */
export const getChainInfo = (chainId: number): SupportedChain | null => {
  for (const chain of Object.values(SUPPORTED_CHAINS)) {
    if (chain.id === chainId) {
      return chain;
    }
  }
  return null;
};

/**
 * Format wallet address for display
 */
export const formatAddress = (address: string, startChars: number = 6, endChars: number = 4): string => {
  if (address.length <= startChars + endChars) {
    return address;
  }
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
};

/**
 * Validate Ethereum address
 */
export const isValidAddress = (address: string): boolean => {
  try {
    return ethers.isAddress(address);
  } catch {
    return false;
  }
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    ethereum?: any;
    tronWeb?: any;
  }
}
