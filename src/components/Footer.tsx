import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_QUICK_LINKS, FOOTER_LEGAL_LINKS, SOCIAL_LINKS } from '../const';

const Footer = (): React.JSX.Element => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img 
                  src="/src/assets/allega-logo.jpg" 
                  alt="Allega Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">ALLEGRA</h3>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              AI-Driven Trading Protocol: Integrating AI with blockchain for transparent, 
              verifiable trading strategies. Operated by Allegra Technologies Ltd.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.ariaLabel}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {FOOTER_QUICK_LINKS.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {FOOTER_LEGAL_LINKS.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Allegra Technologies Ltd. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Operated by Allegra Technologies Ltd., a registered entity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
