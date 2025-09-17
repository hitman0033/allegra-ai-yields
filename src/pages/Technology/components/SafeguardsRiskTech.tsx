import React from 'react';
import { Shield, AlertTriangle, Lock, RefreshCw, TrendingDown, Zap, Clock, BarChart3 } from 'lucide-react';

const SafeguardsRiskTech: React.FC = () => {
  const safeguards = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Circuit Breakers',
      description: 'Automatic trading halt during extreme market volatility or unusual conditions',
      details: [
        'Price movement threshold monitoring',
        'Volume spike detection',
        'Market stress indicators',
        'Automatic position closure'
      ],
      color: 'red'
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: 'Dynamic Hedging',
      description: 'Real-time risk mitigation through strategic hedging positions',
      details: [
        'Correlation-based hedging',
        'Options and futures integration',
        'Portfolio-level risk balancing',
        'Dynamic hedge ratio adjustment'
      ],
      color: 'blue'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Liquidity Locks',
      description: 'Prevents sudden large withdrawals from destabilizing the investment pool',
      details: [
        'Graduated withdrawal limits',
        'Time-locked large withdrawals',
        'Emergency pause mechanisms',
        'Pool stability monitoring'
      ],
      color: 'green'
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Failover Models',
      description: 'Automatic switching to backup AI models if primary systems fail',
      details: [
        'Redundant model architecture',
        'Performance monitoring',
        'Automatic failover triggers',
        'Seamless model switching'
      ],
      color: 'purple'
    }
  ];

  const riskMetrics = [
    { label: 'Max Drawdown', value: '< 5%', icon: <BarChart3 className="w-5 h-5" /> },
    { label: 'Volatility', value: '< 15%', icon: <TrendingDown className="w-5 h-5" /> },
    { label: 'Sharpe Ratio', value: '> 2.0', icon: <Zap className="w-5 h-5" /> },
    { label: 'Response Time', value: '< 100ms', icon: <Clock className="w-5 h-5" /> }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Built-In Safeguards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple layers of protection ensure your investments are shielded from market risks 
            and system failures through advanced risk management technology.
          </p>
        </div>

        {/* Safeguards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {safeguards.map((safeguard, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg border-l-4 ${
              safeguard.color === 'red' ? 'border-red-500' :
              safeguard.color === 'blue' ? 'border-blue-500' :
              safeguard.color === 'green' ? 'border-green-500' :
              'border-purple-500'
            } hover:shadow-xl transition-all duration-300`}>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                  safeguard.color === 'red' ? 'bg-red-100 text-red-600' :
                  safeguard.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  safeguard.color === 'green' ? 'bg-green-100 text-green-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {safeguard.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{safeguard.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {safeguard.description}
              </p>

              <div className="space-y-2">
                {safeguard.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      safeguard.color === 'red' ? 'bg-red-500' :
                      safeguard.color === 'blue' ? 'bg-blue-500' :
                      safeguard.color === 'green' ? 'bg-green-500' :
                      'bg-purple-500'
                    }`}></div>
                    <span className="text-sm text-gray-600">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Risk Metrics Dashboard */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              Risk Performance Metrics
            </h3>
            <p className="text-gray-600">
              Our safeguards maintain strict risk parameters to protect your investments
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {riskMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="text-green-600">
                    {metric.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</h4>
                <p className="text-2xl font-bold text-green-600">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Safety Features */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Continuous Monitoring</h3>
              <p className="text-green-100 mb-6 leading-relaxed">
                Our risk management system operates 24/7, continuously monitoring market conditions, 
                system performance, and risk metrics to ensure optimal protection of your investments.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-3"></div>
                  <span className="text-green-100">Real-time market analysis</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-3"></div>
                  <span className="text-green-100">Automated risk alerts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-3"></div>
                  <span className="text-green-100">Emergency response protocols</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold mb-4">Safety First Approach</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-green-100">Capital Preservation</span>
                  <span className="font-bold">Priority #1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-100">Risk-Adjusted Returns</span>
                  <span className="font-bold">Optimized</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-100">Transparency</span>
                  <span className="font-bold">Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeguardsRiskTech;
