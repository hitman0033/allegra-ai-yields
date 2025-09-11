import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Brain, Shield, Activity, Code } from "lucide-react";

const TechnologyOverview = () => {
  const techStack = [
    {
      id: "ai-framework",
      label: "AI Framework",
      icon: Brain,
      content: {
        title: "Multi-Model Ensemble",
        description: "Advanced machine learning models working in harmony",
        components: [
          {
            name: "Graph Neural Networks (GNN)",
            role: "Market structure analysis",
            accuracy: "87%"
          },
          {
            name: "Long Short-Term Memory (LSTM)",
            role: "Time series prediction",
            accuracy: "82%"
          },
          {
            name: "Transformer Models",
            role: "Pattern recognition",
            accuracy: "89%"
          },
          {
            name: "Random Forest Judge",
            role: "Strategy evaluation",
            accuracy: "91%"
          }
        ]
      }
    },
    {
      id: "safeguards",
      label: "Safeguards",
      icon: Shield,
      content: {
        title: "Risk Management Systems",
        description: "Multiple layers of protection for capital preservation",
        components: [
          {
            name: "Dynamic Hedging",
            role: "Automatic position protection",
            effectiveness: "95%"
          },
          {
            name: "Circuit Breakers",
            role: "Volatility control",
            effectiveness: "99.9%"
          },
          {
            name: "Position Sizing",
            role: "Risk-adjusted exposure",
            effectiveness: "88%"
          },
          {
            name: "Liquidity Monitoring",
            role: "Real-time market depth analysis",
            effectiveness: "92%"
          }
        ]
      }
    },
    {
      id: "execution",
      label: "Execution",
      icon: Activity,
      content: {
        title: "Smart Contract Layer",
        description: "On-chain execution with complete transparency",
        components: [
          {
            name: "Multi-Chain Support",
            role: "ETH, BNB, TRON networks",
            status: "Active"
          },
          {
            name: "MEV Protection",
            role: "Front-running prevention",
            status: "Enabled"
          },
          {
            name: "Gas Optimization",
            role: "Transaction cost reduction",
            status: "Optimized"
          },
          {
            name: "Atomic Swaps",
            role: "Cross-chain trades",
            status: "Available"
          }
        ]
      }
    }
  ];

  return (
    <section className="section-container">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4">
              The <span className="gradient-text">Allegra Core</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art technology stack powering intelligent trading decisions
            </p>
          </div>

          <Tabs defaultValue="ai-framework" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {techStack.map((tech) => (
                <TabsTrigger key={tech.id} value={tech.id} className="flex items-center space-x-2">
                  <tech.icon className="h-4 w-4" />
                  <span>{tech.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {techStack.map((tech) => (
              <TabsContent key={tech.id} value={tech.id} className="space-y-6 animate-fade-in">
                <Card className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <tech.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{tech.content.title}</h3>
                      <p className="text-muted-foreground">{tech.content.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tech.content.components.map((component, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{component.name}</h4>
                          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                            {component.accuracy || component.effectiveness || component.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{component.role}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Architecture Diagram */}
                <div className="p-8 rounded-xl glass">
                  <div className="flex justify-center">
                    <div className="relative">
                      <Code className="h-32 w-32 text-primary/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-mono text-primary">
                          {tech.id === "ai-framework" && "ML Pipeline"}
                          {tech.id === "safeguards" && "Risk Layer"}
                          {tech.id === "execution" && "On-Chain"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TechnologyOverview;