/**
 * Navigation constants for the ALLEGRA application
 * 
 * This file contains all navigation-related constants including:
 * - DApp tab navigation
 * - Main site navigation
 * - Footer navigation links
 * 
 * @fileoverview Navigation constants
 */

import { BarChart3, DollarSign, Gift, Settings } from 'lucide-react';
import { NavigationTab, NavigationItem } from '../types';

/**
 * Navigation tabs for the DApp interface
 * Used in the main DApp dashboard for switching between different views
 */
export const DAPP_TABS: NavigationTab[] = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'investments', label: 'Investments', icon: DollarSign },
  { id: 'rewards', label: 'Rewards & Vesting', icon: Gift },
  { id: 'settings', label: 'Settings', icon: Settings },
] as const;

/**
 * Main site navigation menu items
 * Used in the header navigation across all pages
 */
export const MAIN_NAVIGATION: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Technology', href: '/technology' },
  { name: 'Risk Management', href: '/risk-management' },
  { name: 'Performance', href: '/performance' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
] as const;

/**
 * Quick links displayed in the footer
 * Subset of main navigation for easy access
 */
export const FOOTER_QUICK_LINKS: NavigationItem[] = [
  { name: 'About Us', href: '/about' },
  { name: 'Technology', href: '/technology' },
  { name: 'Performance', href: '/performance' },
  { name: 'Resources', href: '/resources' },
] as const;

/**
 * Legal and policy links displayed in the footer
 * Includes both internal routes and external links
 */
export const FOOTER_LEGAL_LINKS = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Risk Disclaimer', href: '#' },
  { name: 'Contact Us', href: '/contact' },
] as const;