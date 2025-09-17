import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wallet, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { MAIN_NAVIGATION } from '../const';
import { HeaderProps } from '../types';


const Header = ({ onAuthClick }: HeaderProps): React.JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const { user, wallet, walletInfo, signOut, isAuthenticated, isWalletConnected } = useAuth();


  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg overflow-hidden">
              <img 
                src="/src/assets/allega-logo.jpg" 
                alt="Allega Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">ALLEGRA</h1>
              <p className="text-xs md:text-sm text-gray-500 hidden sm:block">
                AI-Driven Trading Protocol
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2 xl:space-x-4">
            {MAIN_NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-2 xl:px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Wallet Status */}
            {isWalletConnected && walletInfo && (
              <div className="hidden xl:flex items-center space-x-2 text-xs lg:text-sm text-gray-600">
                <Wallet className="w-4 h-4" />
                <span className="font-mono">
                  {walletInfo.address.slice(0, 6)}...{walletInfo.address.slice(-4)}
                </span>
              </div>
            )}

            {/* Auth Buttons */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <Link
                  to="/dapp"
                  className="btn-primary text-sm md:text-base px-3 md:px-5 py-2 md:py-2.5"
                >
                  Dashboard
                </Link>
                <button
                  onClick={signOut}
                  className="flex items-center space-x-1 text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="btn-primary text-sm md:text-base px-3 md:px-5 py-2 md:py-2.5"
              >
                <span className="hidden sm:inline">Sign Up / Log In</span>
                <span className="sm:hidden">Sign Up</span>
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              {MAIN_NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile wallet status */}
              {isWalletConnected && walletInfo && (
                <div className="px-3 py-2 text-sm text-gray-600 border-t border-gray-200 mt-2 pt-2">
                  <div className="flex items-center space-x-2">
                    <Wallet className="w-4 h-4" />
                    <span className="font-mono text-xs">
                      {walletInfo.address.slice(0, 10)}...{walletInfo.address.slice(-6)}
                    </span>
                  </div>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
