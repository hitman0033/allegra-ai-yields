import { LucideIcon } from 'lucide-react';

export interface HeroStat {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
}

export interface PerformanceMetric {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  color: string;
}
