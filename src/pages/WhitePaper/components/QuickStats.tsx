import React from 'react';
import { mockWhitePaperData } from '../../../data/mockData';

const QuickStats: React.FC = () => {
  const whitePaperData = mockWhitePaperData;

  return (
    <section className="py-12 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{whitePaperData.sections.length}</div>
            <div className="text-gray-600">Sections</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{whitePaperData.totalPages}</div>
            <div className="text-gray-600">Pages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{whitePaperData.lastUpdated}</div>
            <div className="text-gray-600">Last Updated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{whitePaperData.version}</div>
            <div className="text-gray-600">Version</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
