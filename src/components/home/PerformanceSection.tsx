import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, DollarSign, Calendar, Calculator } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts";

const PerformanceSection = () => {
  const [investment, setInvestment] = useState(10000);
  const [days, setDays] = useState(30);

  // Mock performance data
  const performanceData = [
    { day: "Day 1", value: 10000, return: 0 },
    { day: "Day 5", value: 10250, return: 2.5 },
    { day: "Day 10", value: 10800, return: 8 },
    { day: "Day 15", value: 11200, return: 12 },
    { day: "Day 20", value: 11650, return: 16.5 },
    { day: "Day 25", value: 12100, return: 21 },
    { day: "Day 30", value: 12500, return: 25 },
  ];

  const calculateReturns = () => {
    const avgDailyReturn = 0.8; // 0.8% average
    const totalReturn = investment * (Math.pow(1 + avgDailyReturn / 100, days) - 1);
    const finalValue = investment + totalReturn;
    
    return {
      totalReturn: totalReturn.toFixed(2),
      finalValue: finalValue.toFixed(2),
      percentage: ((totalReturn / investment) * 100).toFixed(2)
    };
  };

  const results = calculateReturns();

  return (
    <section className="section-container bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Verifiable <span className="gradient-text">Yields</span> from Real Trades
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transparent performance metrics with on-chain verification
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Performance Chart */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Historical Performance</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      fillOpacity={1}
                      fill="url(#colorValue)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-success">0.1-5%</p>
                  <p className="text-xs text-muted-foreground">Daily Range</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">42.5%</p>
                  <p className="text-xs text-muted-foreground">Avg. APY</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">Non-Comp</p>
                  <p className="text-xs text-muted-foreground">Distribution</p>
                </div>
              </div>
            </Card>

            {/* Yield Calculator */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Yield Calculator</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="investment">Investment Amount (USDT)</Label>
                  <div className="relative mt-2">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="investment"
                      type="number"
                      value={investment}
                      onChange={(e) => setInvestment(Number(e.target.value))}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="days">Investment Period (Days)</Label>
                  <div className="relative mt-2">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="days"
                      type="number"
                      value={days}
                      onChange={(e) => setDays(Number(e.target.value))}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-success/10 border border-primary/20">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Estimated Returns</span>
                      <span className="font-bold text-success">+${results.totalReturn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Final Value</span>
                      <span className="font-bold text-xl">${results.finalValue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ROI</span>
                      <span className="font-bold text-primary">{results.percentage}%</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full btn-primary">
                  <Calculator className="mr-2 h-4 w-4" />
                  View Detailed Analysis
                </Button>
              </div>
            </Card>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 rounded-lg bg-warning/10 border border-warning/20">
            <p className="text-sm text-center text-muted-foreground">
              <span className="font-semibold text-warning">Disclaimer:</span> Past performance is not indicative of future results. 
              All investments carry risk. Please review our risk disclosure before investing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;