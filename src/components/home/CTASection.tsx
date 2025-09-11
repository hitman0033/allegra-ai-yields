import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download, Users, FileText } from "lucide-react";
import { useState } from "react";
import AuthModal from "@/components/auth/AuthModal";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleMainCTA = () => {
    if (user) {
      navigate("/dapp");
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const resources = [
    {
      icon: FileText,
      title: "White Paper",
      description: "Complete protocol documentation",
      action: "Download PDF"
    },
    {
      icon: Users,
      title: "Join Community",
      description: "Connect with 10,000+ members",
      action: "Join Discord"
    }
  ];

  return (
    <section className="section-container">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <Card className="relative overflow-hidden p-12 text-center">
            <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
            <div className="relative z-10 space-y-6 animate-fade-up">
              <h2 className="text-4xl font-bold">
                Get Started <span className="gradient-text">Today</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of investors earning sustainable yields through AI-powered trading. 
                No minimum deposit required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="btn-primary text-lg px-8 py-6 group"
                  onClick={handleMainCTA}
                >
                  {user ? "Launch DApp" : "Sign Up & Connect Wallet"}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-8 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-bold">$125M+</p>
                  <p className="text-sm text-muted-foreground">Total Value Locked</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">15,000+</p>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">42.5%</p>
                  <p className="text-sm text-muted-foreground">Average APY</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Resource Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <resource.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      {resource.action}
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
    </section>
  );
};

export default CTASection;