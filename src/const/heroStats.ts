// Hero section key stats constants
import { TrendingUp, Eye, Shield, Users } from 'lucide-react';
import { HeroStat } from '../types';

export const HERO_KEY_STATS: HeroStat[] = [
  { 
    icon: TrendingUp, 
    label: 'Daily Returns', 
    value: '0.1% to 5%', 
    color: 'text-green-600' 
  },
  { 
    icon: Eye, 
    label: 'Transparency', 
    value: 'On-chain verifiable', 
    color: 'text-blue-600' 
  },
  { 
    icon: Shield, 
    label: 'Risk Management', 
    value: '5-layer protection', 
    color: 'text-purple-600' 
  },
  { 
    icon: Users, 
    label: 'Active Users', 
    value: '15,420+', 
    color: 'text-orange-600' 
  },
] as const;
