import React from 'react';

const FAQSection = (): React.JSX.Element => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick answers to common questions about ALLEGRA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              How do I get started with ALLEGRA?
            </h3>
            <p className="text-gray-600">
              Simply connect your wallet, create an account, and start investing. 
              Our platform guides you through the entire process.
            </p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What are the minimum investment requirements?
            </h3>
            <p className="text-gray-600">
              There's no minimum investment required. You can start with any amount 
              you're comfortable with.
            </p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              How secure is my investment?
            </h3>
            <p className="text-gray-600">
              We use multi-layered security protocols, smart contracts, and regular 
              audits to ensure your funds are protected.
            </p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Can I withdraw my funds anytime?
            </h3>
            <p className="text-gray-600">
              Yes, you can withdraw your funds at any time, subject to a 7-day 
              vesting period for security purposes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
