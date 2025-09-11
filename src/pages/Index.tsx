import HeroSection from "@/components/home/HeroSection";
import ExecutiveSummary from "@/components/home/ExecutiveSummary";
import MarketContext from "@/components/home/MarketContext";
import FeaturesCarousel from "@/components/home/FeaturesCarousel";
import TechnologyOverview from "@/components/home/TechnologyOverview";
import PerformanceSection from "@/components/home/PerformanceSection";
import GovernanceSection from "@/components/home/GovernanceSection";
import UseCases from "@/components/home/UseCases";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <ExecutiveSummary />
      <MarketContext />
      <FeaturesCarousel />
      <TechnologyOverview />
      <PerformanceSection />
      <GovernanceSection />
      <UseCases />
      <CTASection />
    </div>
  );
};

export default Index;