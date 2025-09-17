import React, { useState, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import HeroSection from './components/HeroSection';
import ExecutiveSummary from './components/ExecutiveSummary';
import UseCasesSection from './components/UseCasesSection';
import PerformanceSection from './components/PerformanceSection';
import CTASection from './components/CTASection';

const Home = (): React.JSX.Element => {
  const { isAuthenticated } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const executiveSummaryRef = useRef<HTMLDivElement>(null);
  
  const scrollToExecutiveSummary = (): void => {
    executiveSummaryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleWhitePaperDownload = (): void => {
    // Mock white paper download - in real app, this would download a PDF
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual PDF URL
    link.download = 'ALLEGRA-White-Paper.pdf';
    link.click();
    
    // Show a toast or notification
    alert('White paper download will be available soon!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection onScrollToExecutiveSummary={scrollToExecutiveSummary} />
      
      <div ref={executiveSummaryRef}>
        <ExecutiveSummary />
      </div>
      
      <UseCasesSection />
      <PerformanceSection />
      <CTASection onWhitePaperDownload={handleWhitePaperDownload} />
    </div>
  );
};

export default Home;
