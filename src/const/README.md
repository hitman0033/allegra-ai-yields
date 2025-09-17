# ALLEGRA Constants Directory

This directory contains all constant values, configuration, and utility functions used throughout the ALLEGRA application.

## Directory Structure

```
src/const/
├── README.md          # This documentation file
├── index.ts           # Central export file for all constants
├── config.ts          # Application configuration and feature flags
├── contact.ts         # Contact information and inquiry types
├── features.ts        # Executive summary features
├── filters.ts         # Resource filter options and types
├── heroStats.ts       # Hero section key statistics
├── navigation.ts      # Navigation menus and links
├── performance.ts     # Performance metrics and data
├── social.ts          # Social media links and icons
├── team.ts           # Team member information
├── timeline.ts       # Company milestones and roadmap
├── useCases.ts       # Use case definitions
├── utils.ts          # Utility functions for constants
└── values.ts         # Company values and principles
```

## Usage

### Importing Constants

All constants can be imported from the main index file:

```typescript
import { 
  MAIN_NAVIGATION, 
  COMPANY_VALUES, 
  RESOURCE_CATEGORIES,
  getDifficultyColor 
} from '../const';
```

### Individual File Imports

For better tree-shaking, you can also import from specific files:

```typescript
import { MAIN_NAVIGATION } from '../const/navigation';
import { COMPANY_VALUES } from '../const/values';
```

## File Descriptions

### Core Constants

- **`filters.ts`** - Resource filtering options (categories, types, difficulty levels)
- **`navigation.ts`** - All navigation menus (main nav, footer links, DApp tabs)
- **`social.ts`** - Social media links with icons and labels
- **`contact.ts`** - Contact information and inquiry form types

### Content Constants

- **`features.ts`** - Executive summary features with icons and descriptions
- **`heroStats.ts`** - Key statistics displayed in hero sections
- **`performance.ts`** - Performance metrics and data visualizations
- **`team.ts`** - Team member profiles and information
- **`timeline.ts`** - Company milestones and development roadmap
- **`useCases.ts`** - Different user types and their use cases
- **`values.ts`** - Company values and core principles

### Configuration & Utilities

- **`config.ts`** - Application configuration, feature flags, and external services
- **`utils.ts`** - Helper functions for working with constants
- **`index.ts`** - Central export point for all constants and utilities

## Best Practices

### Adding New Constants

1. Create constants in the appropriate file based on their purpose
2. Add proper TypeScript interfaces for complex objects
3. Use `as const` assertions for immutable arrays and objects
4. Add JSDoc comments for better documentation
5. Export from the main `index.ts` file

### Naming Conventions

- Use `SCREAMING_SNAKE_CASE` for constant names
- Use descriptive names that indicate the constant's purpose
- Group related constants in the same file
- Use consistent naming patterns across files

### Type Safety

- Define interfaces for complex constant structures
- Export derived types using `typeof` for better type inference
- Use union types for string literals where appropriate

## Examples

### Defining a New Constant

```typescript
/**
 * Available theme options for the application
 */
export const THEME_OPTIONS = [
  { id: 'light', label: 'Light Theme', icon: Sun },
  { id: 'dark', label: 'Dark Theme', icon: Moon },
  { id: 'auto', label: 'Auto', icon: Monitor },
] as const;

export type ThemeId = typeof THEME_OPTIONS[number]['id'];
```

### Using Utility Functions

```typescript
import { getDifficultyColor, getCategoryLabel } from '../const';

// Get CSS classes for difficulty styling
const badgeClasses = getDifficultyColor('intermediate');

// Get human-readable category label
const categoryName = getCategoryLabel('getting-started');
```

## Migration Notes

This constants system was created by extracting hardcoded values from components throughout the application. All components have been updated to use these centralized constants, improving maintainability and consistency.

For any questions or modifications to the constants system, please refer to the individual file documentation or the main application documentation.
