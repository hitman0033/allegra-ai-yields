// Performance metrics constants
import { TrendingUp, BarChart3, Shield, Award } from 'lucide-react';
import { PerformanceMetric } from '../types';

export const PERFORMANCE_METRICS: PerformanceMetric[] = [
  {
    icon: TrendingUp,
    title: 'Average Daily Returns',
    value: '2.3%',
    description: 'Consistent performance across market conditions',
    color: 'text-green-600',
  },
  {
    icon: BarChart3,
    title: 'Total Value Locked',
    value: '$12.5M',
    description: 'Growing trust from the community',
    color: 'text-blue-600',
  },
  {
    icon: Shield,
    title: 'Security Score',
    value: '98.7%',
    description: 'Audited smart contracts and risk controls',
    color: 'text-purple-600',
  },
  {
    icon: Award,
    title: 'Success Rate',
    value: '87.3%',
    description: 'Profitable trades across all strategies',
    color: 'text-orange-600',
  },
] as const;
