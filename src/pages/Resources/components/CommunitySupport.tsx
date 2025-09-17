import React from 'react';
import { 
  Users, 
  FileText, 
  Video, 
  Shield, 
  ExternalLink 
} from 'lucide-react';

const CommunitySupport: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Community & Support</h2>
          <p className="text-xl text-gray-600">Get help from our community and support team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Discord</h3>
            <p className="text-gray-600 mb-4">Join our community for real-time discussions</p>
            <a
              href="https://discord.gg/allegra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Join Discord
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="card text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
            <p className="text-gray-600 mb-4">Comprehensive technical documentation</p>
            <a
              href="/docs"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              Read Docs
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="card text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Tutorials</h3>
            <p className="text-gray-600 mb-4">Step-by-step video guides</p>
            <a
              href="/tutorials"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
            >
              Watch Videos
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="card text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
            <p className="text-gray-600 mb-4">Get help from our support team</p>
            <a
              href="/support"
              className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
            >
              Contact Support
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySupport;
