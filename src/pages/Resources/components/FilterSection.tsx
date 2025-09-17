import React from 'react';
import { Filter } from 'lucide-react';
import { RESOURCE_CATEGORIES, RESOURCE_TYPES, DIFFICULTY_LEVELS } from '../../../const';
import { FilterSectionProps } from '../../../types';


const FilterSection: React.FC<FilterSectionProps> = ({
  selectedCategory,
  selectedType,
  selectedDifficulty,
  onCategoryChange,
  onTypeChange,
  onDifficultyChange,
}) => {

  return (
    <section className="py-8 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filters:</span>
          </div>
          
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {RESOURCE_CATEGORIES.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => onTypeChange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {RESOURCE_TYPES.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
                </option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => onDifficultyChange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {DIFFICULTY_LEVELS.map((difficulty) => (
                <option key={difficulty.id} value={difficulty.id}>
                  {difficulty.label}
                </option>
              ))}
            </select>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
