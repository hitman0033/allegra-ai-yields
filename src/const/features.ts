// Features constants for Executive Summary and other sections
import { Brain, Shield, Zap, Eye, Globe, BarChart3 } from 'lucide-react';
import { Feature } from '../types';

export const EXECUTIVE_SUMMARY_FEATURES: Feature[] = [
  {
    icon: Brain,
    title: 'AI-Powered Trading',
    description: 'Advanced machine learning models identify and execute profitable opportunities across multiple cryptocurrency markets.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Multi-layered risk controls including circuit breakers, position sizing, and hedging strategies protect your capital.',
  },
  {
    icon: Zap,
    title: 'Real-time Execution',
    description: 'Lightning-fast trade execution ensures you capture opportunities before they disappear from the market.',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description: 'All trades are recorded on-chain and publicly verifiable. Track your performance in real-time through our dashboard.',
  },
  {
    icon: Globe,
    title: 'Multi-Chain Support',
    description: 'Deploy across Ethereum, BNB Chain, and Tron networks to maximize opportunities and diversify risk.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Comprehensive analytics and reporting tools help you understand your investment performance and strategy effectiveness.',
  },
] as const;
