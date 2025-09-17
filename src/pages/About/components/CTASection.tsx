import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = (): React.JSX.Element => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50 to-green-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join the ALLEGRA Community
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Be part of the future of AI-driven decentralized finance. 
          Connect with us and start your journey today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition-colors">
            Get in Touch
          </Link>
          <Link to="/dapp" className="border-2 border-white bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-600 font-medium px-8 py-3 rounded-lg transition-colors">
            Launch DApp
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
