/**
 * Utility functions for working with constants
 * 
 * This file provides helper functions that make it easier to work with
 * the various constants defined throughout the application.
 * 
 * @fileoverview Utility functions for constants
 */

import { RESOURCE_CATEGORIES, RESOURCE_TYPES, DIFFICULTY_LEVELS } from './filters';
import { MAIN_NAVIGATION } from './navigation';
import { COMPANY_VALUES } from './values';

/**
 * Gets the display label for a resource category by ID
 * @param categoryId - The category ID to look up
 * @returns The display label or 'Unknown Category' if not found
 */
export const getCategoryLabel = (categoryId: string): string => {
  const category = RESOURCE_CATEGORIES.find(cat => cat.id === categoryId);
  return category?.label || 'Unknown Category';
};

/**
 * Gets the display label for a resource type by ID
 * @param typeId - The type ID to look up
 * @returns The display label or 'Unknown Type' if not found
 */
export const getTypeLabel = (typeId: string): string => {
  const type = RESOURCE_TYPES.find(t => t.id === typeId);
  return type?.label || 'Unknown Type';
};

/**
 * Gets the display label for a difficulty level by ID
 * @param difficultyId - The difficulty ID to look up
 * @returns The display label or 'Unknown Level' if not found
 */
export const getDifficultyLabel = (difficultyId: string): string => {
  const difficulty = DIFFICULTY_LEVELS.find(d => d.id === difficultyId);
  return difficulty?.label || 'Unknown Level';
};

/**
 * Gets the CSS class for difficulty level styling
 * @param difficulty - The difficulty level
 * @returns CSS classes for styling the difficulty badge
 */
export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case 'beginner':
      return 'text-green-600 bg-green-100';
    case 'intermediate':
      return 'text-yellow-600 bg-yellow-100';
    case 'advanced':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

/**
 * Checks if a navigation path is active
 * @param currentPath - The current route path
 * @param navigationPath - The navigation item path to check
 * @returns True if the paths match
 */
export const isNavigationActive = (currentPath: string, navigationPath: string): boolean => {
  return currentPath === navigationPath;
};

/**
 * Gets navigation item by path
 * @param path - The path to search for
 * @returns The navigation item or undefined if not found
 */
export const getNavigationItem = (path: string) => {
  return MAIN_NAVIGATION.find(item => item.href === path);
};

/**
 * Gets a company value by title
 * @param title - The value title to search for
 * @returns The company value or undefined if not found
 */
export const getCompanyValue = (title: string) => {
  return COMPANY_VALUES.find(value => value.title === title);
};

/**
 * Formats a category ID for display (replaces hyphens with spaces and capitalizes)
 * @param categoryId - The category ID to format
 * @returns Formatted category name
 */
export const formatCategoryName = (categoryId: string): string => {
  return categoryId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Validates if a filter combination is valid
 * @param category - Selected category
 * @param type - Selected type  
 * @param difficulty - Selected difficulty
 * @returns True if the combination is valid
 */
export const isValidFilterCombination = (
  category: string,
  type: string,
  difficulty: string
): boolean => {
  const validCategory = RESOURCE_CATEGORIES.some(cat => cat.id === category);
  const validType = RESOURCE_TYPES.some(t => t.id === type);
  const validDifficulty = DIFFICULTY_LEVELS.some(d => d.id === difficulty);
  
  return validCategory && validType && validDifficulty;
};
