import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Globe, Zap, Users, ChartBar } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const FeaturesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      icon: Brain,
      title: "Multi-Model AI Ensemble",
      description: "Combines Graph Neural Networks, LSTM, and Transformer models for comprehensive market analysis",
      details: [
        "Real-time pattern recognition",
        "Cross-market correlation analysis",
        "Predictive modeling with 85%+ accuracy"
      ]
    },
    {
      icon: Shield,
      title: "Risk Prioritization",
      description: "Capital preservation through sophisticated risk management systems",
      details: [
        "Dynamic hedging strategies",
        "Circuit breakers for volatility",
        "Portfolio diversification algorithms"
      ]
    },
    {
      icon: Globe,
      title: "Blockchain Integration",
      description: "Multi-chain support across Ethereum, BNB Chain, and Tron networks",
      details: [
        "Cross-chain liquidity aggregation",
        "Gas optimization algorithms",
        "Smart contract automation"
      ]
    },
    {
      icon: Zap,
      title: "Enhanced Transparency",
      description: "Every trade and decision verifiable on-chain with complete audit trails",
      details: [
        "Real-time trade broadcasting",
        "Immutable transaction history",
        "Public performance metrics"
      ]
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "No minimum deposits with support for all investor types",
      details: [
        "Retail investor friendly",
        "Enterprise solutions available",
        "Global 24/7 access"
      ]
    },
    {
      icon: ChartBar,
      title: "Liquidity Terms",
      description: "Flexible deposit and withdrawal options with transparent vesting",
      details: [
        "30-day initial lock period",
        "7-day reward vesting",
        "Instant withdrawals after unlock"
      ]
    }
  ];

  return (
    <section className="section-container bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Protocol <span className="gradient-text">Highlights</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Advanced features that set ALLEGRA apart in the DeFi ecosystem
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`feature-card cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? 'ring-2 ring-primary shadow-glow' : ''
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {feature.description}
                  </CardDescription>
                  {activeIndex === index && (
                    <ul className="space-y-2 animate-fade-in">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;