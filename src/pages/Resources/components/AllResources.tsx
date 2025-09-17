import React from 'react';
import { 
  FileText, 
  BookOpen, 
  Video, 
  Clock, 
  Calendar, 
  ExternalLink, 
  Play, 
  Zap, 
  TrendingUp, 
  Shield, 
  Globe, 
  Users,
  Search
} from 'lucide-react';
import { Resource, AllResourcesProps } from '../../../types';


const AllResources: React.FC<AllResourcesProps> = ({ resources }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'documentation':
        return <FileText className="w-5 h-5" />;
      case 'tutorial':
        return <BookOpen className="w-5 h-5" />;
      case 'video':
        return <Video className="w-5 h-5" />;
      case 'whitepaper':
        return <FileText className="w-5 h-5" />;
      case 'guide':
        return <BookOpen className="w-5 h-5" />;
      case 'faq':
        return <FileText className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'text-green-600 bg-green-100';
      case 'intermediate':
        return 'text-yellow-600 bg-yellow-100';
      case 'advanced':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'getting-started':
        return <Zap className="w-5 h-5" />;
      case 'trading-strategies':
        return <TrendingUp className="w-5 h-5" />;
      case 'risk-management':
        return <Shield className="w-5 h-5" />;
      case 'technology':
        return <Globe className="w-5 h-5" />;
      case 'governance':
        return <Users className="w-5 h-5" />;
      case 'security':
        return <Shield className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">All Resources</h2>
          <p className="text-xl text-gray-600">
            {resources.length} resources found
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="card group hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(resource.type)}
                  <span className="text-sm font-medium text-gray-600 capitalize">
                    {resource.type}
                  </span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                  {resource.difficulty}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {resource.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{resource.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{resource.lastUpdated}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getCategoryIcon(resource.category)}
                  <span className="text-sm text-gray-600 capitalize">
                    {resource.category.replace('-', ' ')}
                  </span>
                </div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                >
                  {resource.type === 'video' ? (
                    <>
                      <Play className="w-4 h-4 mr-1" />
                      Watch
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Read
                    </>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>

        {resources.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No resources found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllResources;
