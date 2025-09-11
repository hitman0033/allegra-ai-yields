import { CheckCircle, Brain, Shield, Users, Coins, Lock } from "lucide-react";

const ExecutiveSummary = () => {
  const highlights = [
    {
      icon: Coins,
      title: "Daily Returns",
      description: "Achieve 0.1% to 5% daily returns through AI-optimized trading strategies"
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Multi-model ensemble combining GNN, LSTM, and Transformer models"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Advanced hedging, circuit breakers, and capital preservation mechanisms"
    },
    {
      icon: CheckCircle,
      title: "Transparency",
      description: "All trades verifiable on-chain with complete audit trails"
    },
    {
      icon: Users,
      title: "Governance",
      description: "Community-driven through ALLEGRA DAO and ALGT token"
    },
    {
      icon: Lock,
      title: "Security",
      description: "Audited smart contracts with multi-signature controls"
    }
  ];

  return (
    <section className="section-container">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Revolutionizing <span className="gradient-text">DeFi with AI</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ALLEGRA addresses the fundamental challenges in cryptocurrency markets by combining 
              sophisticated AI models with blockchain technology to deliver consistent, 
              risk-adjusted returns while maintaining complete transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="feature-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual AI Flow */}
          <div className="mt-16 p-8 rounded-xl glass animate-fade-up">
            <h3 className="text-2xl font-bold text-center mb-8">AI Ensemble Architecture</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Searchers</h4>
                <p className="text-sm text-muted-foreground">
                  GNN, LSTM, and Transformer models analyze market data
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Judge</h4>
                <p className="text-sm text-muted-foreground">
                  Random Forest and NLP evaluate and rank strategies
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Executor</h4>
                <p className="text-sm text-muted-foreground">
                  Implements trades on-chain with risk controls
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;