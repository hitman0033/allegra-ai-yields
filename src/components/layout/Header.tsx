import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Wallet } from "lucide-react";
import AuthModal from "@/components/auth/AuthModal";
import { useAuth } from "@/contexts/AuthContext";
import { Brain } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Technology", path: "/technology" },
    { name: "Risk Management", path: "/risk-management" },
    { name: "Performance", path: "/performance" },
    { name: "Resources", path: "/resources" },
    { name: "DApp", path: "/dapp", requiresAuth: true },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string, requiresAuth?: boolean) => {
    if (requiresAuth && !user) {
      setIsAuthModalOpen(true);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass border-b" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <Brain className="w-10 h-10 text-primary" />
                <div className="absolute inset-0 w-10 h-10 bg-primary/20 blur-xl animate-pulse-slow" />
              </div>
              <div>
                <span className="text-2xl font-bold gradient-text">ALLEGRA</span>
                <p className="text-xs text-muted-foreground">AI-Driven Trading Protocol</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleNavClick(item.path, item.requiresAuth)}
                  className={`nav-link px-4 py-2 rounded-lg transition-all ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hidden md:flex items-center space-x-2"
                  >
                    <Wallet className="w-4 h-4" />
                    <span>0x...{user.walletAddress?.slice(-4) || "demo"}</span>
                  </Button>
                  <Link to="/dapp">
                    <Button className="btn-primary">Dashboard</Button>
                  </Link>
                  <Button
                    variant="ghost"
                    onClick={logout}
                    className="hidden md:block"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button
                  className="btn-primary"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Sign Up / Log In
                </Button>
              )}

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden glass border-t">
            <nav className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleNavClick(item.path, item.requiresAuth)}
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {user && (
                <Button
                  variant="ghost"
                  onClick={logout}
                  className="w-full mt-4"
                >
                  Logout
                </Button>
              )}
            </nav>
          </div>
        )}
      </header>

      <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
    </>
  );
};

export default Header;