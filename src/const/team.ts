// Team members constants for About page
import { TeamMember } from '../types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    bio: 'Former Google AI researcher with 15+ years in machine learning and blockchain technology.',
    image: '/api/placeholder/150/150',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Chief Executive Officer',
    bio: 'Ex-Goldman Sachs quantitative analyst and DeFi protocol architect.',
    image: '/api/placeholder/150/150',
  },
  {
    name: 'Dr. Aisha Patel',
    role: 'Head of Risk Management',
    bio: 'Former JP Morgan risk management director with expertise in algorithmic trading.',
    image: '/api/placeholder/150/150',
  },
] as const;
