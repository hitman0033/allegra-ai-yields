// Company values constants for About page
import { Shield, Eye, Users, TrendingUp } from 'lucide-react';
import { Value } from '../types';

export const COMPANY_VALUES: Value[] = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Multi-layered security protocols and regular audits ensure user funds are protected.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'All trading activities and performance metrics are verifiable on-chain.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Decentralized governance ensures the protocol evolves with community needs.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Focused',
    description: 'Continuous optimization of AI models for maximum sustainable returns.',
  },
] as const;
