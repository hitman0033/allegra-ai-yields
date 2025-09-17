import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';
import { PERFORMANCE_METRICS } from '../../../const';

const PerformanceSection: React.FC = () => {

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Performance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-driven strategies have consistently delivered strong returns 
            while maintaining the highest standards of risk management and transparency.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {PERFORMANCE_METRICS.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-blue-50 group-hover:shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                    {metric.value}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {metric.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Performance Chart Placeholder */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Historical Performance
            </h3>
            <p className="text-gray-600">
              Track our performance over time with real-time data and analytics
            </p>
          </div>
          
          {/* Chart Placeholder */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="h-64 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Interactive Performance Chart</p>
                <p className="text-sm text-gray-400">Available in the DApp dashboard</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/performance" 
            className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 font-medium px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-lg transition-colors mr-2 sm:mr-4 mb-4 sm:mb-0"
          >
            View Detailed Performance
          </Link>
          <Link 
            to="/dapp" 
            className="inline-flex items-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-lg transition-colors"
          >
            Track Your Returns
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
