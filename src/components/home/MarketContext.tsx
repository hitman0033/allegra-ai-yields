import { Card } from "@/components/ui/card";
import { TrendingDown, AlertTriangle, Rocket } from "lucide-react";

const MarketContext = () => {
  const contexts = [
    {
      icon: TrendingDown,
      title: "Challenges in TradFi",
      color: "text-destructive",
      points: [
        "Low yields in traditional markets",
        "High barriers to entry",
        "Limited transparency",
        "Geographic restrictions"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Challenges in DeFi",
      color: "text-warning",
      points: [
        "Extreme volatility",
        "Smart contract risks",
        "Complexity for newcomers",
        "Lack of consistent yields"
      ]
    },
    {
      icon: Rocket,
      title: "Opportunities in Crypto",
      color: "text-success",
      points: [
        "24/7 market availability",
        "Global accessibility",
        "Emerging inefficiencies",
        "AI-driven optimization"
      ]
    }
  ];

  return (
    <section className="section-container bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Navigating <span className="gradient-text">Crypto Opportunities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Understanding the landscape and how ALLEGRA addresses key market challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contexts.map((context, index) => (
              <Card
                key={index}
                className="relative overflow-hidden p-6 hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial opacity-20" />
                <div className="relative">
                  <div className={`flex items-center space-x-3 mb-4 ${context.color}`}>
                    <context.icon className="h-8 w-8" />
                    <h3 className="text-xl font-semibold">{context.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {context.points.map((point, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-current ${context.color}`} />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketContext;