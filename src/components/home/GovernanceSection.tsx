import { Card } from "@/components/ui/card";
import { Users, Vote, Shield, FileText, Coins, Building } from "lucide-react";

const GovernanceSection = () => {
  const governanceFeatures = [
    {
      icon: Users,
      title: "ALLEGRA DAO",
      description: "Community-driven governance through decentralized voting"
    },
    {
      icon: Coins,
      title: "ALGT Token",
      description: "Governance token for protocol decisions and fee sharing"
    },
    {
      icon: Vote,
      title: "Proposal System",
      description: "Submit and vote on protocol improvements"
    },
    {
      icon: Shield,
      title: "Smart Contracts",
      description: "Audited and verified on-chain execution"
    },
    {
      icon: FileText,
      title: "Transparent Fees",
      description: "1% management fee, 10% performance fee structure"
    },
    {
      icon: Building,
      title: "Legal Structure",
      description: "Registered entity with regulatory compliance"
    }
  ];

  const timeline = [
    { phase: "Phase 1", title: "Launch", status: "completed", description: "Protocol deployment" },
    { phase: "Phase 2", title: "Growth", status: "active", description: "User expansion" },
    { phase: "Phase 3", title: "DAO Formation", status: "upcoming", description: "Governance launch" },
    { phase: "Phase 4", title: "Full Decentralization", status: "upcoming", description: "Community control" }
  ];

  return (
    <section className="section-container">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Built on <span className="gradient-text">Trust and Decentralization</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Progressive decentralization roadmap with community governance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {governanceFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <Card className="p-4 inline-block">
                      <div className="flex items-center space-x-2">
                        <span className={`w-2 h-2 rounded-full ${
                          item.status === 'completed' ? 'bg-success' :
                          item.status === 'active' ? 'bg-primary animate-pulse' :
                          'bg-muted-foreground'
                        }`} />
                        <span className="text-xs font-semibold text-muted-foreground">
                          {item.phase}
                        </span>
                      </div>
                      <h4 className="font-semibold mt-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;