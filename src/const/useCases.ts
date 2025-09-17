// Use cases constants for Home page
import { Users, Building2, Target, Globe } from 'lucide-react';
import { UseCase } from '../types';

export const USE_CASES: UseCase[] = [
  {
    title: 'Individual Investors',
    description: 'Access institutional-grade AI trading strategies with transparent, verifiable returns.',
    benefits: ['No minimum deposit', 'Daily yield distribution', 'Full transparency'],
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    title: 'Institutional Investors',
    description: 'Scale your crypto treasury management with enterprise-grade AI trading solutions.',
    benefits: ['Higher limits', 'Custom reporting', 'Dedicated support'],
    icon: Building2,
    color: 'bg-purple-500',
  },
  {
    title: 'Corporate Treasury',
    description: 'Optimize corporate crypto holdings with risk-adjusted AI-driven strategies.',
    benefits: ['Compliance ready', 'Risk management', 'Audit trail'],
    icon: Target,
    color: 'bg-green-500',
  },
  {
    title: 'DeFi Protocols',
    description: 'Integrate AI trading capabilities into your DeFi protocol or application.',
    benefits: ['API integration', 'Custom strategies', 'Revenue sharing'],
    icon: Globe,
    color: 'bg-orange-500',
  },
] as const;
