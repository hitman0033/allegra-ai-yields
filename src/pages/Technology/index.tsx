import React from 'react';
import HeroSection from './components/HeroSection';
import AllegraCoreOverview from './components/AllegraCoreOverview';
import AIFrameworkSection from './components/AIFrameworkSection';
import BlockchainIntegration from './components/BlockchainIntegration';
import SafeguardsRiskTech from './components/SafeguardsRiskTech';
import ProtocolFeatures from './components/ProtocolFeatures';
import TransparencyVerification from './components/TransparencyVerification';
import CTASection from './components/CTASection';

const Technology = (): React.JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50">
      <HeroSection />
      <AllegraCoreOverview />
      <AIFrameworkSection />
      <BlockchainIntegration />
      <SafeguardsRiskTech />
      <ProtocolFeatures />
      <TransparencyVerification />
      <CTASection />
    </div>
  );
};

export default Technology;
