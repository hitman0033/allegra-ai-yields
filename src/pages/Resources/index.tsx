import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import QuickStats from './components/QuickStats';
import FilterSection from './components/FilterSection';
import FeaturedResources from './components/FeaturedResources';
import AllResources from './components/AllResources';
import LearningPaths from './components/LearningPaths';
import CommunitySupport from './components/CommunitySupport';
import CTASection from './components/CTASection';
import { mockResources } from '../../data/mockData';

const Resources = (): React.JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const resources = mockResources;

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesDifficulty = selectedDifficulty === 'all' || resource.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesType && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <QuickStats resourceCount={resources.length} />

      <FilterSection
        selectedCategory={selectedCategory}
        selectedType={selectedType}
        selectedDifficulty={selectedDifficulty}
        onCategoryChange={setSelectedCategory}
        onTypeChange={setSelectedType}
        onDifficultyChange={setSelectedDifficulty}
      />
      
      <FeaturedResources resources={resources} />
      
      <AllResources resources={filteredResources} />
      
      <LearningPaths />
      
      <CommunitySupport />
      
      <CTASection />
    </div>
  );
};

export default Resources;
