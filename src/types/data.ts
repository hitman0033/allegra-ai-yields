// Core data interfaces for ALLEGRA DApp

export interface User {
  id: string;
  email: string;
  accountType: 'regular' | 'enterprise';
  isEmailVerified: boolean;
  createdAt: string;
  businessName?: string;
  businessAddress?: string;
  phone?: string;
  website?: string;
  lastLoginAt?: string;
  profileCompleted: boolean;
}

export interface Wallet {
  address: string;
  chainId: number;
  provider: string;
}

export interface Trade {
  id: number;
  timestamp: Date;
  type: 'buy' | 'sell';
  asset: string;
  amount: number;
  price: number;
  profit: number;
}

export interface Investment {
  id: number;
  amount: number;
  depositDate: Date;
  lockEndDate: Date;
  currentValue: number;
  accumulatedRewards: number;
  status: 'active' | 'unlocked';
  strategy: string;
  dailyYield: number;
  trades: Trade[];
}

export interface Reward {
  id: number;
  amount: number;
  date: Date;
  vestingEndDate: Date;
  status: 'vested' | 'vesting';
  source: string;
  transactionHash: string;
}

export interface ProtocolStats {
  totalValueLocked: number;
  currentAPY: number;
  reserveFund: number;
  totalUsers: number;
  dailyVolume: number;
  totalTrades: number;
  successRate: number;
  averageDailyReturn: number;
}

export interface PerformanceDataPoint {
  date?: string;
  week?: string;
  month?: string;
  return: number;
  value: number;
}

export interface PerformanceData {
  daily: PerformanceDataPoint[];
  weekly: PerformanceDataPoint[];
  monthly: PerformanceDataPoint[];
}

export interface TradeHistory {
  id: number;
  timestamp: Date;
  type: 'buy' | 'sell';
  asset: string;
  amount: number;
  price: number;
  profit: number;
  strategy: string;
  transactionHash: string;
  gasUsed: number;
  gasPrice: number;
}

export interface News {
  id: number;
  title: string;
  summary: string;
  date: Date;
  category: string;
  readTime: string;
}

export interface Alert {
  id: number;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

export interface MarketData {
  price: number;
  change24h: number;
  volume24h: number;
}

export interface MarketDataCollection {
  btc: MarketData;
  eth: MarketData;
  usdt: MarketData;
  bnb: MarketData;
}

export interface RiskMetrics {
  portfolioHealth: number;
  maxDrawdown: number;
  sharpeRatio: number;
  volatility: number;
  beta: number;
  var95: number;
  expectedShortfall: number;
}

export interface BacktestResult {
  period: string;
  marketCondition: string;
  returns: number;
  maxDrawdown: number;
  sharpeRatio: number;
  winRate: number;
  totalTrades: number;
  averageReturn: number;
}

export interface MockWalletData {
  seedPhrase: string;
  address: string;
  privateKey: string;
}

export interface PerformanceStats {
  [key: string]: {
    returns: string;
    volatility: string;
    sharpe: string;
    drawdown: string;
  };
}

export interface YieldExample {
  deposit: string;
  timeframe: string;
  dailyYield: string;
  totalReturn: string;
  finalValue: string;
  apy: string;
}

export interface VerificationMethod {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface CaseStudy {
  title: string;
  deposit: string;
  timeframe: string;
  dailyYield: string;
  totalReturn: string;
  finalValue: string;
  apy: string;
  icon: string;
  color: string;
}

export interface CalculatorInputs {
  depositAmount: number;
  timePeriod: number;
  riskLevel: string;
  dailyYield: number;
}

export interface Document {
  title: string;
  description: string;
  type: string;
  size: string;
  pages: string;
  downloadUrl: string;
  icon: string;
}

export interface SocialChannel {
  name: string;
  handle: string;
  description: string;
  icon: string;
  url: string;
  followers?: string;
  members?: string;
}

export interface MockUseCase {
  title: string;
  description: string;
  benefits: string[];
  icon: string;
  color: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface RiskLayer {
  level: number;
  title: string;
  description: string;
  features: string[];
  color: string;
  icon: string;
}

export interface RiskMechanism {
  mechanism: string;
  purpose: string;
  example: string;
}

export interface EventScenario {
  event: string;
  description: string;
  response: string;
  timeline: {
    time: string;
    action: string;
    status: string;
  }[];
}

export interface Resource {
  id: number;
  title: string;
  description: string;
  type: string;
  category: string;
  difficulty: string;
  readTime: string;
  lastUpdated: string;
  url: string;
  featured: boolean;
}

export interface WhitePaperSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  pages: string;
  readTime: string;
  subsections?: {
    title: string;
    content: string;
  }[];
}

export interface WhitePaperHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface WhitePaperData {
  sections: WhitePaperSection[];
  highlights: WhitePaperHighlight[];
  totalPages: number;
  lastUpdated: string;
  version: string;
}
