import React from 'react';
import HeroSection from './components/HeroSection';
import QuickStats from './components/QuickStats';
import CTASection from './components/CTASection';

const WhitePaper = (): React.JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <QuickStats />
      <CTASection />
    </div>
  );
};

export default WhitePaper;
