// Component props interfaces

export interface HeaderProps {
  onAuthClick: () => void;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  inquiryType: string;
}

export interface DAppHeaderProps {
  wallet?: {
    address?: string;
  };
}

export interface InvestmentsTabProps {
  investments: any[];
  timeLeft: any;
}

export interface OverviewTabProps {
  protocolStats: any;
  investments: any[];
}

export interface RewardsTabProps {
  rewards: any[];
}

import { WalletInfo } from './wallet';

export interface SettingsTabProps {
  user?: {
    accountType?: string;
  };
  wallet?: WalletInfo | null;
}

export interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export interface CTASectionProps {
  onWhitePaperDownload: () => void;
}

export interface HeroSectionProps {
  onScrollToExecutiveSummary: () => void;
}

export interface ResourcesHeroSectionProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export interface FilterSectionProps {
  selectedCategory: string;
  selectedType: string;
  selectedDifficulty: string;
  onCategoryChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
}

export interface QuickStatsProps {
  resourceCount: number;
}

export interface AllResourcesProps {
  resources: Resource[];
}

export interface FeaturedResourcesProps {
  resources: Resource[];
}

// Import Resource from data types
import { Resource } from './data';
