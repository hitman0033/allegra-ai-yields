import React from 'react';
import HeroSection from './components/HeroSection';
import RiskOverview from './components/RiskOverview';
import CTASection from './components/CTASection';

const RiskManagement = (): React.JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <RiskOverview />
      <CTASection />
    </div>
  );
};

export default RiskManagement;
