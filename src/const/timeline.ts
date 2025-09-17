// Timeline/milestones constants for About page
import { Milestone } from '../types';

export const COMPANY_MILESTONES: Milestone[] = [
  {
    year: '2023',
    title: 'Protocol Launch',
    description: 'ALLEGRA protocol launched with initial AI trading strategies',
    status: 'completed',
  },
  {
    year: '2024',
    title: 'DAO Formation',
    description: 'Community governance established with ALGT token',
    status: 'completed',
  },
  {
    year: '2025',
    title: 'Global Expansion',
    description: 'Multi-chain support and institutional partnerships',
    status: 'planned',
  },
] as const;
