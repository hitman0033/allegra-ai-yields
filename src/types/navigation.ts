import { LucideIcon } from 'lucide-react';

/**
 * Interface for DApp navigation tabs
 */
export interface NavigationTab {
  /** Unique identifier for the tab */
  id: string;
  /** Display label for the tab */
  label: string;
  /** Lucide icon component for the tab */
  icon: LucideIcon;
}

/**
 * Interface for main navigation items
 */
export interface NavigationItem {
  /** Display name for the navigation item */
  name: string;
  /** Route path for the navigation item */
  href: string;
}
