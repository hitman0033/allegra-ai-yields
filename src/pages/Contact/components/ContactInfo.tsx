import React from 'react';
import { CONTACT_INFORMATION, SOCIAL_LINKS } from '../../../const';

const ContactInfo = (): React.JSX.Element => {

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
      <p className="text-lg text-gray-600 mb-8">
        We're here to help with any questions about ALLEGRA, our technology, 
        or how to get started. Reach out to us through any of the channels below.
      </p>

      <div className="space-y-6">
        {CONTACT_INFORMATION.map((info, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
              <info.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600">{detail}</p>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-1">{info.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Social Media */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          {SOCIAL_LINKS.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label={social.ariaLabel}
              >
                <IconComponent className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
