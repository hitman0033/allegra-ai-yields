import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';
import { PERFORMANCE_METRICS } from '../../../const';

const PerformanceSection: React.FC = () => {

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Proven Performance
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Our AI-driven strategies have consistently delivered strong returns 
            while maintaining the highest standards of risk management and transparency.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-16">
          {PERFORMANCE_METRICS.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 h-full transition-all duration-300 group-hover:bg-blue-50 group-hover:shadow-lg">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold mb-2 ${metric.color}`}>
                    {metric.value}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                    {metric.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Performance Chart Placeholder */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl md:rounded-3xl p-6 md:p-12 mb-8 md:mb-16">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-4">
              Historical Performance
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Track our performance over time with real-time data and analytics
            </p>
          </div>
          
          {/* Chart Placeholder */}
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm">
            <div className="h-48 md:h-64 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg md:rounded-xl flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-2 md:mb-4" />
                <p className="text-sm md:text-base text-gray-500">Interactive Performance Chart</p>
                <p className="text-xs md:text-sm text-gray-400">Available in the DApp dashboard</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Link 
            to="/performance" 
            className="inline-flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 font-medium px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors text-sm md:text-base"
          >
            View Detailed Performance
          </Link>
          <Link 
            to="/dapp" 
            className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors text-sm md:text-base"
          >
            Track Your Returns
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
