import { Card } from "@/components/ui/card";
import { User, Building, Briefcase, Globe } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: User,
      title: "Individual Investors",
      description: "Retail traders seeking consistent returns",
      benefits: [
        "No minimum investment",
        "Daily yields",
        "Full transparency",
        "Easy withdrawal"
      ],
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Building,
      title: "Institutions",
      description: "Professional investors and funds",
      benefits: [
        "Enterprise accounts",
        "Bulk deposits",
        "API access",
        "Custom reporting"
      ],
      color: "from-success/20 to-success/5"
    },
    {
      icon: Briefcase,
      title: "Corporate Treasury",
      description: "Businesses optimizing idle capital",
      benefits: [
        "Better than TradFi",
        "Risk management",
        "Liquidity options",
        "Tax efficiency"
      ],
      color: "from-warning/20 to-warning/5"
    }
  ];

  return (
    <section className="section-container bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Who Benefits from <span className="gradient-text">ALLEGRA?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Designed for diverse participants in the global financial ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden p-6 hover:shadow-glow transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color}`} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-background/80 flex items-center justify-center mb-4">
                    <useCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground">
              <Globe className="h-5 w-5" />
              <span className="font-semibold">Available Globally - No Geographic Restrictions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;