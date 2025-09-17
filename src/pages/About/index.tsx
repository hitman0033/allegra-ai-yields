import React from 'react';
import HeroSection from './components/HeroSection';
import MissionVision from './components/MissionVision';
import ValuesSection from './components/ValuesSection';
import TeamSection from './components/TeamSection';
import TimelineSection from './components/TimelineSection';
import CTASection from './components/CTASection';

const About = (): React.JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <MissionVision />
      <ValuesSection />
      <TeamSection />
      <TimelineSection />
      <CTASection />
    </div>
  );
};

export default About;
