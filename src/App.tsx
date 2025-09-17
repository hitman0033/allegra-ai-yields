import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Technology from './pages/Technology';
import RiskManagement from './pages/RiskManagement';
import Performance from './pages/Performance';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import DApp from './pages/DApp';
import WhitePaper from './pages/WhitePaper';
import PasswordReset from './pages/PasswordReset';
import EmailVerification from './pages/EmailVerification';
import EnhancedAuthModal from './components/EnhancedAuthModal';
import { AuthProvider } from './contexts/AuthContext';

function App(): React.JSX.Element {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header onAuthClick={() => setIsAuthModalOpen(true)} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/risk-management" element={<RiskManagement />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dapp" element={<DApp />} />
              <Route path="/whitepaper" element={<WhitePaper />} />
              <Route path="/reset-password" element={<PasswordReset />} />
              <Route path="/verify-email" element={<EmailVerification />} />
            </Routes>
          </main>
          <Footer />
          <EnhancedAuthModal 
            isOpen={isAuthModalOpen} 
            onClose={() => setIsAuthModalOpen(false)} 
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
