import { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
  color: string;
}
