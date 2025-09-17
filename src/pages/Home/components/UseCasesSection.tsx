import React from 'react';
import { Link } from 'react-router-dom';
import { USE_CASES } from '../../../const';

const UseCasesSection: React.FC = () => {

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who Can Benefit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ALLEGRA serves a diverse range of users, from individual investors to 
            large institutions, all seeking transparent and profitable DeFi strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {USE_CASES.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className={`w-16 h-16 ${useCase.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/dapp" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:underline"
                  >
                    Get Started
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/about" 
            className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Learn More About Our Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
