import { Button } from "@/components/ui/button";
import { ArrowDown, Shield, TrendingUp, Eye } from "lucide-react";
import { useState } from "react";
import AuthModal from "@/components/auth/AuthModal";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCTA = () => {
    if (user) {
      navigate("/dapp");
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const stats = [
    { label: "Daily Returns", value: "0.1% - 5%", icon: TrendingUp },
    { label: "Transparency", value: "On-chain", icon: Eye },
    { label: "Security", value: "Audited", icon: Shield },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg" />
      <div className="hero-overlay" />
      
      {/* Floating Particles */}
      <div className="particle-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          {/* Logo and Tagline */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">ALLEGRA</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              AI-Driven Trading Protocol
            </p>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Unlock AI-Powered Yields in
              <br />
              <span className="gradient-text">Crypto Markets</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Sustainable, risk-adjusted returns through transparent, verifiable trading strategies. 
              Operated by Allegra Technologies Ltd.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="h-5 w-5 text-primary" />
                  <span className="text-xs text-success font-medium">LIVE</span>
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-primary text-lg px-8 py-6"
              onClick={handleCTA}
            >
              {user ? "Launch DApp" : "Sign Up Now"}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2"
              onClick={() => window.open("#", "_blank")}
            >
              Read White Paper
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-8">
            <div className="animate-bounce">
              <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
            </div>
          </div>
        </div>
      </div>

      <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
    </section>
  );
};

export default HeroSection;