import React from 'react';
import HeroSection from './components/HeroSection';
import PerformanceOverview from './components/PerformanceOverview';
import YieldModelSection from './components/YieldModelSection';
import CTASection from './components/CTASection';

const Performance = (): React.JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <PerformanceOverview />
      <YieldModelSection />
      <CTASection />
    </div>
  );
};

export default Performance;
