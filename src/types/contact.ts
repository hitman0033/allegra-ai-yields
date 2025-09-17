import { LucideIcon } from 'lucide-react';

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  details: string[];
  description: string;
  link?: string;
}
