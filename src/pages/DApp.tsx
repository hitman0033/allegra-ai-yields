import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Gift, Settings } from "lucide-react";

const DApp = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold gradient-text mb-8">DApp Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="data-card">
          <div className="flex items-center space-x-3">
            <TrendingUp className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Total Value Locked</p>
              <p className="text-2xl font-bold">$125,430</p>
            </div>
          </div>
        </Card>
        
        <Card className="data-card">
          <div className="flex items-center space-x-3">
            <Clock className="h-8 w-8 text-warning" />
            <div>
              <p className="text-sm text-muted-foreground">Current APY</p>
              <p className="text-2xl font-bold">42.5%</p>
            </div>
          </div>
        </Card>
        
        <Card className="data-card">
          <div className="flex items-center space-x-3">
            <Gift className="h-8 w-8 text-success" />
            <div>
              <p className="text-sm text-muted-foreground">Rewards Earned</p>
              <p className="text-2xl font-bold">$2,345</p>
            </div>
          </div>
        </Card>
        
        <Card className="data-card">
          <div className="flex items-center space-x-3">
            <Settings className="h-8 w-8 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Active Strategies</p>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-8">
        <Button className="btn-primary">Make a Deposit</Button>
      </div>
    </div>
  );
};

export default DApp;