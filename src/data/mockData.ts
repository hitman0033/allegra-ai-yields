// Mock data for ALLEGRA DApp
import {
  User, Wallet, Trade, Investment, Reward, ProtocolStats,
  PerformanceDataPoint, PerformanceData, TradeHistory, News, Alert,
  MarketData, MarketDataCollection, RiskMetrics, BacktestResult,
  MockWalletData, PerformanceStats, YieldExample, VerificationMethod,
  CaseStudy, CalculatorInputs, Document, SocialChannel, MockUseCase, FAQ,
  RiskLayer, RiskMechanism, EventScenario, Resource, WhitePaperData
} from '../types';

export const mockUser: User = {
  id: '1',
  email: 'user@example.com',
  accountType: 'regular',
  createdAt: '2024-01-01T00:00:00Z',
  isEmailVerified: true,
  profileCompleted: true,
};

export const mockWallet: Wallet = {
  address: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
  chainId: 1,
  provider: 'MetaMask',
};

export const mockInvestments: Investment[] = [
  {
    id: 1,
    amount: 10000,
    depositDate: new Date('2024-01-15'),
    lockEndDate: new Date('2024-02-14'),
    currentValue: 12500,
    accumulatedRewards: 2500,
    status: 'active',
    strategy: 'Arbitrage-focused',
    dailyYield: 2.3,
    trades: [
      {
        id: 1,
        timestamp: new Date('2024-01-20T10:30:00Z'),
        type: 'buy',
        asset: 'ETH',
        amount: 0.5,
        price: 2500,
        profit: 125,
      },
      {
        id: 2,
        timestamp: new Date('2024-01-20T14:15:00Z'),
        type: 'sell',
        asset: 'ETH',
        amount: 0.5,
        price: 2625,
        profit: 125,
      },
    ],
  },
  {
    id: 2,
    amount: 5000,
    depositDate: new Date('2024-01-20'),
    lockEndDate: new Date('2024-02-19'),
    currentValue: 6100,
    accumulatedRewards: 1100,
    status: 'active',
    strategy: 'Trend-following',
    dailyYield: 1.8,
    trades: [
      {
        id: 3,
        timestamp: new Date('2024-01-21T09:45:00Z'),
        type: 'buy',
        asset: 'BTC',
        amount: 0.1,
        price: 45000,
        profit: 90,
      },
    ],
  },
  {
    id: 3,
    amount: 25000,
    depositDate: new Date('2024-01-10'),
    lockEndDate: new Date('2024-02-09'),
    currentValue: 31250,
    accumulatedRewards: 6250,
    status: 'unlocked',
    strategy: 'Multi-asset',
    dailyYield: 2.1,
    trades: [
      {
        id: 4,
        timestamp: new Date('2024-01-18T16:20:00Z'),
        type: 'buy',
        asset: 'USDC',
        amount: 1000,
        price: 1,
        profit: 50,
      },
    ],
  },
];

export const mockRewards: Reward[] = [
  {
    id: 1,
    amount: 250,
    date: new Date('2024-01-20'),
    vestingEndDate: new Date('2024-01-27'),
    status: 'vested',
    source: 'Investment #1',
    transactionHash: '0x1234567890abcdef...',
  },
  {
    id: 2,
    amount: 180,
    date: new Date('2024-01-21'),
    vestingEndDate: new Date('2024-01-28'),
    status: 'vesting',
    source: 'Investment #2',
    transactionHash: '0xabcdef1234567890...',
  },
  {
    id: 3,
    amount: 320,
    date: new Date('2024-01-19'),
    vestingEndDate: new Date('2024-01-26'),
    status: 'vested',
    source: 'Investment #1',
    transactionHash: '0x567890abcdef1234...',
  },
  {
    id: 4,
    amount: 150,
    date: new Date('2024-01-22'),
    vestingEndDate: new Date('2024-01-29'),
    status: 'vesting',
    source: 'Investment #3',
    transactionHash: '0xdef1234567890abc...',
  },
];

export const mockProtocolStats: ProtocolStats = {
  totalValueLocked: 12500000,
  currentAPY: 156.8,
  reserveFund: 2500000,
  totalUsers: 15420,
  dailyVolume: 850000,
  totalTrades: 125000,
  successRate: 87.3,
  averageDailyReturn: 2.3,
};

export const mockPerformanceData: PerformanceData = {
  daily: [
    { date: '2024-01-15', return: 2.1, value: 10000 },
    { date: '2024-01-16', return: 2.3, value: 10210 },
    { date: '2024-01-17', return: 1.8, value: 10435 },
    { date: '2024-01-18', return: 2.5, value: 10623 },
    { date: '2024-01-19', return: 2.0, value: 10888 },
    { date: '2024-01-20', return: 2.4, value: 11106 },
    { date: '2024-01-21', return: 1.9, value: 11373 },
    { date: '2024-01-22', return: 2.2, value: 11589 },
  ],
  weekly: [
    { week: 'Week 1', return: 15.2, value: 10000 },
    { week: 'Week 2', return: 18.7, value: 11520 },
    { week: 'Week 3', return: 22.1, value: 13675 },
    { week: 'Week 4', return: 25.3, value: 16698 },
  ],
  monthly: [
    { month: 'Jan 2024', return: 25.3, value: 10000 },
    { month: 'Dec 2023', return: 18.7, value: 12530 },
    { month: 'Nov 2023', return: 22.1, value: 10550 },
    { month: 'Oct 2023', return: 19.8, value: 8640 },
  ],
};

export const mockTradeHistory: TradeHistory[] = [
  {
    id: 1,
    timestamp: new Date('2024-01-22T10:30:00Z'),
    type: 'buy',
    asset: 'ETH',
    amount: 0.5,
    price: 2500,
    profit: 125,
    strategy: 'Arbitrage',
    transactionHash: '0x1234567890abcdef...',
    gasUsed: 21000,
    gasPrice: 20,
  },
  {
    id: 2,
    timestamp: new Date('2024-01-22T14:15:00Z'),
    type: 'sell',
    asset: 'ETH',
    amount: 0.5,
    price: 2625,
    profit: 125,
    strategy: 'Arbitrage',
    transactionHash: '0xabcdef1234567890...',
    gasUsed: 21000,
    gasPrice: 20,
  },
  {
    id: 3,
    timestamp: new Date('2024-01-21T09:45:00Z'),
    type: 'buy',
    asset: 'BTC',
    amount: 0.1,
    price: 45000,
    profit: 90,
    strategy: 'Trend-following',
    transactionHash: '0x567890abcdef1234...',
    gasUsed: 25000,
    gasPrice: 18,
  },
  {
    id: 4,
    timestamp: new Date('2024-01-21T16:20:00Z'),
    type: 'sell',
    asset: 'BTC',
    amount: 0.1,
    price: 45900,
    profit: 90,
    strategy: 'Trend-following',
    transactionHash: '0xdef1234567890abc...',
    gasUsed: 25000,
    gasPrice: 18,
  },
];

export const mockNews: News[] = [
  {
    id: 1,
    title: 'ALLEGRA Protocol Reaches $10M TVL Milestone',
    summary: 'The protocol has successfully reached $10 million in total value locked, marking a significant milestone in its growth.',
    date: new Date('2024-01-20'),
    category: 'Protocol Update',
    readTime: '2 min read',
  },
  {
    id: 2,
    title: 'New AI Model Integration Improves Performance',
    summary: 'Latest update includes enhanced AI models that have improved daily returns by 15% over the past month.',
    date: new Date('2024-01-18'),
    category: 'Technology',
    readTime: '3 min read',
  },
  {
    id: 3,
    title: 'ALLEGRA DAO Governance Proposal Passed',
    summary: 'Community proposal to increase reserve fund allocation has been approved with 78% of votes.',
    date: new Date('2024-01-15'),
    category: 'Governance',
    readTime: '4 min read',
  },
];

export const mockAlerts: Alert[] = [
  {
    id: 1,
    type: 'success',
    title: 'Investment Unlocked',
    message: 'Your investment of $10,000 has been unlocked and is now available for withdrawal.',
    timestamp: new Date('2024-01-22T10:00:00Z'),
    read: false,
  },
  {
    id: 2,
    type: 'info',
    title: 'Rewards Available',
    message: 'You have $430 in vested rewards available for claiming.',
    timestamp: new Date('2024-01-22T09:30:00Z'),
    read: false,
  },
  {
    id: 3,
    type: 'warning',
    title: 'High Gas Fees',
    message: 'Current gas fees are elevated. Consider waiting for lower fees before making transactions.',
    timestamp: new Date('2024-01-22T08:15:00Z'),
    read: true,
  },
];

export const mockMarketData: MarketDataCollection = {
  btc: {
    price: 45250,
    change24h: 2.3,
    volume24h: 28500000000,
  },
  eth: {
    price: 2625,
    change24h: 1.8,
    volume24h: 15200000000,
  },
  usdt: {
    price: 1.00,
    change24h: 0.1,
    volume24h: 45000000000,
  },
  bnb: {
    price: 315,
    change24h: 3.2,
    volume24h: 1200000000,
  },
};

export const mockRiskMetrics: RiskMetrics = {
  portfolioHealth: 98.7,
  maxDrawdown: 2.3,
  sharpeRatio: 1.8,
  volatility: 15.2,
  beta: 0.85,
  var95: 1.2,
  expectedShortfall: 1.8,
};

export const mockBacktestResults: BacktestResult[] = [
  {
    period: '2020-2021',
    marketCondition: 'Bull Market',
    returns: 342.7,
    maxDrawdown: 8.2,
    sharpeRatio: 1.8,
    winRate: 78.5,
    totalTrades: 1250,
    averageReturn: 2.1,
  },
  {
    period: '2021-2022',
    marketCondition: 'Bear Market',
    returns: 156.3,
    maxDrawdown: 12.4,
    sharpeRatio: 1.2,
    winRate: 71.2,
    totalTrades: 980,
    averageReturn: 1.6,
  },
  {
    period: '2022-2023',
    marketCondition: 'Volatile Market',
    returns: 198.9,
    maxDrawdown: 9.7,
    sharpeRatio: 1.5,
    winRate: 74.8,
    totalTrades: 1150,
    averageReturn: 1.9,
  },
  {
    period: '2023-2024',
    marketCondition: 'Recovery Market',
    returns: 287.4,
    maxDrawdown: 7.8,
    sharpeRatio: 1.1,
    winRate: 76.3,
    totalTrades: 1320,
    averageReturn: 2.3,
  },
];

// Auth Modal Mock Data

export const mockWalletData: MockWalletData = {
  seedPhrase: 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about',
  address: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
  privateKey: '0x' + Math.random().toString(16).substr(2, 64),
};

// Performance Page Mock Data

export const mockPerformanceStats: PerformanceStats = {
  '7d': { returns: '3.2%', volatility: '12.5%', sharpe: '1.8', drawdown: '0.8%' },
  '30d': { returns: '8.7%', volatility: '15.2%', sharpe: '1.6', drawdown: '2.1%' },
  '90d': { returns: '24.3%', volatility: '18.7%', sharpe: '1.4', drawdown: '3.2%' },
  '1y': { returns: '156.8%', volatility: '22.1%', sharpe: '1.2', drawdown: '5.4%' },
  'all': { returns: '287.4%', volatility: '25.3%', sharpe: '1.1', drawdown: '7.8%' },
};


export const mockYieldExamples: YieldExample[] = [
  {
    deposit: '$1,000',
    timeframe: '30 days',
    dailyYield: '0.3%',
    totalReturn: '$90',
    finalValue: '$1,090',
    apy: '109.5%',
  },
  {
    deposit: '$5,000',
    timeframe: '30 days',
    dailyYield: '0.3%',
    totalReturn: '$450',
    finalValue: '$5,450',
    apy: '109.5%',
  },
  {
    deposit: '$10,000',
    timeframe: '30 days',
    dailyYield: '0.3%',
    totalReturn: '$900',
    finalValue: '$10,900',
    apy: '109.5%',
  },
  {
    deposit: '$50,000',
    timeframe: '30 days',
    dailyYield: '0.3%',
    totalReturn: '$4,500',
    finalValue: '$54,500',
    apy: '109.5%',
  },
];


export const mockVerificationMethods: VerificationMethod[] = [
  {
    title: 'On-Chain Verification',
    description: 'All trades are recorded on blockchain for complete transparency',
    features: ['Public transaction records', 'Smart contract execution', 'Real-time tracking'],
    icon: 'Eye',
  },
  {
    title: 'Independent Audits',
    description: 'Regular third-party audits verify performance claims',
    features: ['Quarterly performance audits', 'Strategy validation', 'Risk assessment'],
    icon: 'CheckCircle',
  },
  {
    title: 'Open Source',
    description: 'Core algorithms and smart contracts are open source',
    features: ['Public GitHub repository', 'Community review', 'Transparent code'],
    icon: 'Download',
  },
];


export const mockCaseStudies: CaseStudy[] = [
  {
    title: 'Individual Investor',
    deposit: '$1,000',
    timeframe: '30 days',
    dailyYield: '2.5%',
    totalReturn: '$750',
    finalValue: '$1,750',
    apy: '912.5%',
    icon: 'Users',
    color: 'green',
  },
  {
    title: 'Enterprise Treasury',
    deposit: '$250,000',
    timeframe: '90 days',
    dailyYield: '1.8%',
    totalReturn: '$405,000',
    finalValue: '$655,000',
    apy: '657%',
    icon: 'Building2',
    color: 'blue',
  },
  {
    title: 'Institutional Fund',
    deposit: '$1,000,000',
    timeframe: '1 year',
    dailyYield: '1.2%',
    totalReturn: '$4,380,000',
    finalValue: '$5,380,000',
    apy: '438%',
    icon: 'Briefcase',
    color: 'purple',
  },
];


export const mockCalculatorInputs: CalculatorInputs = {
  depositAmount: 10000,
  timePeriod: 30,
  riskLevel: 'medium',
  dailyYield: 2.5,
};

// Resources Page Mock Data

export const mockDocuments: Document[] = [
  {
    title: 'ALLEGRA White Paper',
    description: 'Comprehensive technical documentation covering protocol architecture, AI models, and economic design.',
    type: 'PDF',
    size: '2.4 MB',
    pages: '47 pages',
    downloadUrl: '#',
    icon: 'FileText',
  },
  {
    title: 'Technical Documentation',
    description: 'Detailed API documentation, smart contract specifications, and integration guides.',
    type: 'PDF',
    size: '1.8 MB',
    pages: '32 pages',
    downloadUrl: '#',
    icon: 'FileText',
  },
  {
    title: 'Risk Assessment Report',
    description: 'Independent risk analysis and security audit results from leading blockchain security firms.',
    type: 'PDF',
    size: '1.2 MB',
    pages: '18 pages',
    downloadUrl: '#',
    icon: 'FileText',
  },
  {
    title: 'Performance Backtests',
    description: 'Historical performance data, strategy analysis, and market condition studies.',
    type: 'CSV',
    size: '856 KB',
    pages: 'Data files',
    downloadUrl: '#',
    icon: 'BarChart3',
  },
];


export const mockSocialChannels: SocialChannel[] = [
  {
    name: 'Twitter',
    handle: '@AllegraProtocol',
    description: 'Latest updates, announcements, and community discussions',
    icon: 'Twitter',
    url: '#',
    followers: '12.5K',
  },
  {
    name: 'Telegram',
    handle: 't.me/allegraprotocol',
    description: 'Real-time community chat and support',
    icon: 'MessageCircle',
    url: '#',
    members: '8.3K',
  },
  {
    name: 'Discord',
    handle: 'discord.gg/allegra',
    description: 'Developer community and technical discussions',
    icon: 'Users',
    url: '#',
    members: '5.7K',
  },
  {
    name: 'LinkedIn',
    handle: 'Allegra Technologies',
    description: 'Professional updates and industry insights',
    icon: 'Linkedin',
    url: '#',
    followers: '2.1K',
  },
];


export const mockUseCases: MockUseCase[] = [
  {
    title: 'Individual Investors',
    description: 'Access institutional-grade AI trading strategies with transparent, verifiable returns.',
    benefits: [
      'No minimum deposit requirements',
      'Daily yield distribution',
      'Full transparency and control',
      'Multi-chain support',
    ],
    icon: 'Users',
    color: 'bg-blue-500',
  },
  {
    title: 'Institutional Investors',
    description: 'Scale your crypto treasury management with enterprise-grade AI trading solutions.',
    benefits: [
      'Higher investment limits',
      'Custom reporting and analytics',
      'Dedicated account management',
      'Priority support',
    ],
    icon: 'Building',
    color: 'bg-purple-500',
  },
  {
    title: 'Corporate Treasury',
    description: 'Optimize corporate crypto holdings with risk-adjusted AI-driven strategies.',
    benefits: [
      'Compliance-ready reporting',
      'Risk management tools',
      'Audit trail maintenance',
      'Regulatory guidance',
    ],
    icon: 'Target',
    color: 'bg-green-500',
  },
  {
    title: 'DeFi Protocols',
    description: 'Integrate AI trading capabilities into your DeFi protocol or application.',
    benefits: [
      'API integration',
      'Custom strategy development',
      'Revenue sharing opportunities',
      'Technical support',
    ],
    icon: 'Globe',
    color: 'bg-orange-500',
  },
];


export const mockFAQs: FAQ[] = [
  {
    question: 'How does ALLEGRA generate returns?',
    answer: 'ALLEGRA uses advanced AI models to identify and execute profitable trading opportunities across multiple cryptocurrency markets. Our ensemble of AI models analyzes market data, identifies patterns, and executes trades automatically with risk management controls.',
  },
  {
    question: 'What are the minimum investment requirements?',
    answer: 'ALLEGRA has no minimum investment requirements, making it accessible to investors of all sizes. However, we recommend starting with at least $100 to cover gas fees and ensure meaningful returns.',
  },
  {
    question: 'How transparent is the performance tracking?',
    answer: 'All trades are recorded on-chain and publicly verifiable. Users can track their investments in real-time through our DApp dashboard, and all performance metrics are independently auditable.',
  },
  {
    question: 'What are the risks involved?',
    answer: 'Like all investments, ALLEGRA carries risks including market volatility, smart contract risks, and potential loss of principal. We implement multiple layers of risk management, but users should only invest what they can afford to lose.',
  },
  {
    question: 'How do I get started?',
    answer: 'Getting started is simple: 1) Sign up for an account, 2) Connect or create a wallet, 3) Make your first deposit, 4) Start earning yields. The entire process takes less than 10 minutes.',
  },
  {
    question: 'What chains does ALLEGRA support?',
    answer: 'ALLEGRA currently supports Ethereum, BNB Chain, and Tron. We are actively working on expanding to additional chains based on community demand and technical feasibility.',
  },
];

// Risk Management Mock Data

export const mockRiskLayers: RiskLayer[] = [
  {
    level: 1,
    title: 'Model Layer',
    description: 'Ensemble of AI models reduces overfitting and individual model risk',
    features: ['Multiple AI strategies', 'Model diversity', 'Risk distribution'],
    color: 'bg-green-500',
    icon: 'BarChart3',
  },
  {
    level: 2,
    title: 'Execution Layer',
    description: 'Circuit breakers stop extreme trades and prevent cascading losses',
    features: ['Price movement limits', 'Volume thresholds', 'Automatic halts'],
    color: 'bg-blue-500',
    icon: 'AlertTriangle',
  },
  {
    level: 3,
    title: 'Liquidity Layer',
    description: '30-day lock stabilizes capital flows and prevents panic runs',
    features: ['Capital stability', 'Panic prevention', 'Reserve management'],
    color: 'bg-yellow-500',
    icon: 'Lock',
  },
  {
    level: 4,
    title: 'Hedging Layer',
    description: 'Minimizes downside risk in volatile markets through strategic hedging',
    features: ['Options hedging', 'Cross-asset protection', 'Volatility management'],
    color: 'bg-purple-500',
    icon: 'TrendingDown',
  },
  {
    level: 5,
    title: 'Protocol Layer',
    description: 'Reserve fund for emergencies and protocol-level safeguards',
    features: ['Emergency reserves', 'Multi-signature controls', 'Protocol insurance'],
    color: 'bg-red-500',
    icon: 'Shield',
  },
];


export const mockRiskMechanisms: RiskMechanism[] = [
  {
    mechanism: 'Circuit Breaker',
    purpose: 'Stops trading beyond X% loss threshold',
    example: 'Prevents cascading losses in flash crash',
  },
  {
    mechanism: 'Hedging',
    purpose: 'Offsets risk via opposite positions',
    example: 'Protects in BTC/ETH crash',
  },
  {
    mechanism: 'Liquidity Locks',
    purpose: 'Prevents panic runs',
    example: 'Stabilizes protocol reserves',
  },
  {
    mechanism: 'Position Sizing',
    purpose: 'Dynamic allocation based on volatility',
    example: 'Reduces exposure during high volatility',
  },
  {
    mechanism: 'Reserve Fund',
    purpose: 'Emergency capital for extreme events',
    example: 'Deployed during black swan events',
  },
  {
    mechanism: 'Multi-Signature Controls',
    purpose: 'Requires multiple approvals for critical actions',
    example: 'Prevents unauthorized protocol changes',
  },
];


export const mockEventScenarios: EventScenario[] = [
  {
    event: 'Flash Crash',
    description: 'Like March 2020 market crash',
    response: 'Circuit breakers activate automatically',
    timeline: [
      { time: '0s', action: 'Price drops 5%', status: 'monitoring' },
      { time: '30s', action: 'Circuit breaker triggers', status: 'active' },
      { time: '2min', action: 'Trading halted', status: 'protected' },
      { time: '5min', action: 'Risk assessment complete', status: 'safe' },
    ],
  },
  {
    event: 'Black Swan Event',
    description: 'Unexpected major market disruption',
    response: 'Reserve fund deployed, emergency protocols activated',
    timeline: [
      { time: '0s', action: 'Event detected', status: 'alert' },
      { time: '1min', action: 'Reserve fund activated', status: 'deployed' },
      { time: '5min', action: 'Emergency protocols engaged', status: 'protected' },
      { time: '15min', action: 'Portfolio stabilized', status: 'safe' },
    ],
  },
  {
    event: 'Exchange Outage',
    description: 'Major exchange goes offline',
    response: 'Executor pauses risky trades, alternative routes activated',
    timeline: [
      { time: '0s', action: 'Exchange outage detected', status: 'alert' },
      { time: '30s', action: 'Risky trades paused', status: 'protected' },
      { time: '2min', action: 'Alternative routes activated', status: 'active' },
      { time: '10min', action: 'Normal operations resume', status: 'safe' },
    ],
  },
];

// Resources Page Mock Data

export const mockResources: Resource[] = [
  {
    id: 1,
    title: 'Getting Started with ALLEGRA',
    description: 'Complete beginner guide to understanding and using the ALLEGRA protocol for DeFi investments.',
    type: 'guide',
    category: 'getting-started',
    difficulty: 'beginner',
    readTime: '10 min',
    lastUpdated: '2 days ago',
    url: '/guides/getting-started',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Trading Strategies Explained',
    description: 'Deep dive into the AI models and trading strategies used by ALLEGRA to generate returns.',
    type: 'tutorial',
    category: 'trading-strategies',
    difficulty: 'intermediate',
    readTime: '15 min',
    lastUpdated: '1 week ago',
    url: '/tutorials/ai-strategies',
    featured: true,
  },
  {
    id: 3,
    title: 'Risk Management Best Practices',
    description: 'Learn how to manage risk effectively when investing in DeFi protocols.',
    type: 'guide',
    category: 'risk-management',
    difficulty: 'intermediate',
    readTime: '12 min',
    lastUpdated: '3 days ago',
    url: '/guides/risk-management',
    featured: true,
  },
  {
    id: 4,
    title: 'Smart Contract Security',
    description: 'Understanding the security measures and audits that protect your investments.',
    type: 'documentation',
    category: 'security',
    difficulty: 'advanced',
    readTime: '20 min',
    lastUpdated: '1 week ago',
    url: '/docs/security',
    featured: false,
  },
  {
    id: 5,
    title: 'ALLEGRA Protocol Architecture',
    description: 'Technical overview of the protocol architecture and smart contract design.',
    type: 'documentation',
    category: 'technology',
    difficulty: 'advanced',
    readTime: '25 min',
    lastUpdated: '2 weeks ago',
    url: '/docs/architecture',
    featured: false,
  },
  {
    id: 6,
    title: 'Governance and DAO Participation',
    description: 'How to participate in ALLEGRA governance and vote on protocol proposals.',
    type: 'tutorial',
    category: 'governance',
    difficulty: 'intermediate',
    readTime: '8 min',
    lastUpdated: '5 days ago',
    url: '/tutorials/governance',
    featured: false,
  },
  {
    id: 7,
    title: 'Frequently Asked Questions',
    description: 'Common questions and answers about using ALLEGRA protocol.',
    type: 'faq',
    category: 'getting-started',
    difficulty: 'beginner',
    readTime: '5 min',
    lastUpdated: '1 day ago',
    url: '/faq',
    featured: true,
  },
  {
    id: 8,
    title: 'Video: Setting Up Your Wallet',
    description: 'Step-by-step video tutorial on connecting your wallet to ALLEGRA.',
    type: 'video',
    category: 'getting-started',
    difficulty: 'beginner',
    readTime: '8 min',
    lastUpdated: '1 week ago',
    url: '/videos/wallet-setup',
    featured: false,
  },
];

// WhitePaper Page Mock Data

export const mockWhitePaperData: WhitePaperData = {
  sections: [
    {
      id: 'executive-summary',
      title: 'Executive Summary',
      summary: 'Overview of ALLEGRA protocol, its mission, and key value propositions.',
      content: 'ALLEGRA is a revolutionary AI-driven DeFi protocol that democratizes access to institutional-grade trading strategies. Our platform combines advanced machine learning models with blockchain technology to deliver transparent, verifiable returns to users of all sizes.',
      pages: '5',
      readTime: '10 min',
    },
    {
      id: 'technology',
      title: 'Technology Architecture',
      summary: 'Deep dive into the technical infrastructure and AI models powering ALLEGRA.',
      content: 'The ALLEGRA protocol is built on a robust foundation of cutting-edge technologies including ensemble AI models, smart contracts, and real-time risk management systems. Our architecture ensures scalability, security, and transparency.',
      pages: '12',
      readTime: '25 min',
      subsections: [
        {
          title: 'AI Model Ensemble',
          content: 'Our ensemble of AI models includes deep learning networks, reinforcement learning agents, and traditional quantitative models working together to identify profitable trading opportunities.',
        },
        {
          title: 'Smart Contract Design',
          content: 'All trading operations are executed through audited smart contracts that ensure transparency, immutability, and automatic execution of trading strategies.',
        },
      ],
    },
    {
      id: 'tokenomics',
      title: 'Tokenomics & Economics',
      summary: 'Economic model, token distribution, and incentive mechanisms.',
      content: 'ALLEGRA employs a sustainable economic model that aligns incentives between users, developers, and the protocol. Our tokenomics ensure long-term viability and growth of the ecosystem.',
      pages: '8',
      readTime: '15 min',
    },
    {
      id: 'governance',
      title: 'Governance & DAO',
      summary: 'Decentralized governance structure and community participation mechanisms.',
      content: 'ALLEGRA is governed by a decentralized autonomous organization (DAO) where token holders can propose and vote on protocol upgrades, parameter changes, and strategic decisions.',
      pages: '6',
      readTime: '12 min',
    },
    {
      id: 'roadmap',
      title: 'Development Roadmap',
      summary: 'Future development plans, milestones, and expansion strategies.',
      content: 'Our roadmap outlines the planned development phases, including new AI model integrations, multi-chain expansion, and advanced features for institutional users.',
      pages: '4',
      readTime: '8 min',
    },
    {
      id: 'team',
      title: 'Team & Advisors',
      summary: 'Core team members, advisors, and their expertise in AI, blockchain, and finance.',
      content: 'The ALLEGRA team consists of experienced professionals from leading technology companies, financial institutions, and blockchain projects, bringing together expertise in AI, DeFi, and traditional finance.',
      pages: '3',
      readTime: '6 min',
    },
    {
      id: 'risks',
      title: 'Risk Assessment',
      summary: 'Comprehensive analysis of potential risks and mitigation strategies.',
      content: 'While ALLEGRA implements multiple layers of risk management, users should be aware of potential risks including market volatility, smart contract risks, and regulatory changes.',
      pages: '7',
      readTime: '14 min',
    },
  ],
  highlights: [
    {
      title: 'AI-Powered Trading',
      description: 'Advanced ensemble of AI models delivering institutional-grade trading strategies',
      icon: 'TrendingUp',
    },
    {
      title: 'Transparent & Verifiable',
      description: 'All trades recorded on-chain with real-time performance tracking',
      icon: 'Shield',
    },
    {
      title: 'Decentralized Governance',
      description: 'Community-driven protocol development through DAO governance',
      icon: 'Users',
    },
    {
      title: 'Multi-Chain Support',
      description: 'Deploying across multiple blockchain networks for maximum accessibility',
      icon: 'Globe',
    },
    {
      title: 'Risk Management',
      description: 'Multi-layered risk controls protecting user investments',
      icon: 'Shield',
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to handle institutional-scale trading volumes and users',
      icon: 'Zap',
    },
  ],
  totalPages: 45,
  lastUpdated: 'January 2024',
  version: 'v1.0',
};