/**
 * Filter constants for the Resources page
 * 
 * This file contains all filter-related constants used in the Resources section:
 * - Resource categories (getting-started, trading-strategies, etc.)
 * - Resource types (documentation, tutorial, video, etc.)
 * - Difficulty levels (beginner, intermediate, advanced)
 * 
 * @fileoverview Resources filter constants and type definitions
 */

/**
 * Available resource categories for filtering
 * Used in the Resources page filter dropdown
 */
export const RESOURCE_CATEGORIES = [
  { id: 'all', label: 'All Categories' },
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'trading-strategies', label: 'Trading Strategies' },
  { id: 'risk-management', label: 'Risk Management' },
  { id: 'technology', label: 'Technology' },
  { id: 'governance', label: 'Governance' },
  { id: 'security', label: 'Security' },
] as const;

/**
 * Available resource types for filtering
 * Defines the different formats of educational content
 */
export const RESOURCE_TYPES = [
  { id: 'all', label: 'All Types' },
  { id: 'documentation', label: 'Documentation' },
  { id: 'tutorial', label: 'Tutorial' },
  { id: 'video', label: 'Video' },
  { id: 'whitepaper', label: 'Whitepaper' },
  { id: 'guide', label: 'Guide' },
  { id: 'faq', label: 'FAQ' },
] as const;

/**
 * Available difficulty levels for filtering
 * Helps users find content appropriate to their experience level
 */
export const DIFFICULTY_LEVELS = [
  { id: 'all', label: 'All Levels' },
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' },
] as const;

// Import type definitions
import { ResourceCategoryId, ResourceTypeId, DifficultyLevelId } from '../types';
