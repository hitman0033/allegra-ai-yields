/**
 * Application configuration constants
 * 
 * This file contains application-wide configuration values that
 * control behavior, limits, and settings throughout the app.
 * 
 * @fileoverview Application configuration constants
 */

/**
 * API and network configuration
 */
export const API_CONFIG = {
  /** Default timeout for API requests in milliseconds */
  REQUEST_TIMEOUT: 30000,
  /** Number of retry attempts for failed requests */
  RETRY_ATTEMPTS: 3,
  /** Delay between retry attempts in milliseconds */
  RETRY_DELAY: 1000,
} as const;

/**
 * UI and UX configuration
 */
export const UI_CONFIG = {
  /** Default animation duration in milliseconds */
  ANIMATION_DURATION: 300,
  /** Debounce delay for search inputs in milliseconds */
  SEARCH_DEBOUNCE: 500,
  /** Number of items to show per page in pagination */
  ITEMS_PER_PAGE: 12,
  /** Maximum number of items to load at once */
  MAX_ITEMS_LOAD: 100,
} as const;

/**
 * Form validation configuration
 */
export const VALIDATION_CONFIG = {
  /** Minimum password length */
  MIN_PASSWORD_LENGTH: 8,
  /** Maximum password length */
  MAX_PASSWORD_LENGTH: 128,
  /** Maximum length for text inputs */
  MAX_TEXT_LENGTH: 500,
  /** Maximum length for email addresses */
  MAX_EMAIL_LENGTH: 254,
} as const;

/**
 * Feature flags for controlling application behavior
 */
export const FEATURE_FLAGS = {
  /** Enable dark mode toggle */
  ENABLE_DARK_MODE: false,
  /** Enable beta features */
  ENABLE_BETA_FEATURES: false,
  /** Enable analytics tracking */
  ENABLE_ANALYTICS: true,
  /** Enable performance monitoring */
  ENABLE_PERFORMANCE_MONITORING: true,
} as const;

/**
 * External service URLs and identifiers
 */
export const EXTERNAL_SERVICES = {
  /** Discord server invite link */
  DISCORD_URL: 'https://discord.gg/allegra',
  /** Twitter profile URL */
  TWITTER_URL: 'https://twitter.com/AllegraProtocol',
  /** LinkedIn company page URL */
  LINKEDIN_URL: 'https://linkedin.com/company/allegra-protocol',
  /** GitHub repository URL */
  GITHUB_URL: 'https://github.com/allegra-protocol',
} as const;

/**
 * Application metadata
 */
export const APP_METADATA = {
  /** Application name */
  NAME: 'ALLEGRA',
  /** Application version */
  VERSION: '1.0.0',
  /** Application description */
  DESCRIPTION: 'AI-Driven Trading Protocol',
  /** Company name */
  COMPANY: 'Allegra Technologies Ltd.',
  /** Copyright year */
  COPYRIGHT_YEAR: '2024',
} as const;
