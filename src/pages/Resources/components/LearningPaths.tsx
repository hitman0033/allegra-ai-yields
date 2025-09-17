import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  Clock, 
  ArrowRight 
} from 'lucide-react';

const LearningPaths: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Paths</h2>
          <p className="text-xl text-gray-600">Structured learning journeys for different skill levels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Beginner Path</h3>
            <p className="text-gray-600 mb-6">
              Start your DeFi journey with basic concepts and simple strategies
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>5 Resources</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 text-green-500 mr-2" />
                <span>2-3 hours</span>
              </div>
            </div>
            <Link 
              to="/resources?path=beginner" 
              className="inline-flex items-center bg-green-600 text-white hover:bg-green-700 font-medium px-6 py-2 rounded-lg transition-colors"
            >
              Start Learning
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Intermediate Path</h3>
            <p className="text-gray-600 mb-6">
              Dive deeper into trading strategies and risk management
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                <span>8 Resources</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 text-blue-500 mr-2" />
                <span>4-5 hours</span>
              </div>
            </div>
            <Link 
              to="/resources?path=intermediate" 
              className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 font-medium px-6 py-2 rounded-lg transition-colors"
            >
              Start Learning
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Path</h3>
            <p className="text-gray-600 mb-6">
              Master advanced strategies and become a DeFi expert
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                <span>12 Resources</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 text-purple-500 mr-2" />
                <span>6-8 hours</span>
              </div>
            </div>
            <Link 
              to="/resources?path=advanced" 
              className="inline-flex items-center bg-purple-600 text-white hover:bg-purple-700 font-medium px-6 py-2 rounded-lg transition-colors"
            >
              Start Learning
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
