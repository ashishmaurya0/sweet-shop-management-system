import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, isAdmin, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <ShoppingBag className="h-8 w-8 text-rose-600" />
            <span className="text-xl font-bold text-gray-900">Sweet Shop</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-rose-600 transition-colors">
              Home
            </Link>
            <Link to="/sweets" className="text-gray-700 hover:text-rose-600 transition-colors">
              Browse Sweets
            </Link>
            {isAuthenticated && isAdmin && (
              <Link to="/admin" className="text-gray-700 hover:text-rose-600 transition-colors">
                Admin
              </Link>
            )}
            {!isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-700 hover:text-rose-600 transition-colors">
                  Login
                </Link>
                <Link to="/register" className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors">
                  Register
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <User className="h-5 w-5 text-gray-700" />
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-700 hover:text-rose-600 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </nav>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <nav className="px-4 py-4 space-y-4">
              <Link
                to="/"
                className="block text-gray-700 hover:text-rose-600 transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/sweets"
                className="block text-gray-700 hover:text-rose-600 transition-colors"
                onClick={closeMobileMenu}
              >
                Browse Sweets
              </Link>
              {isAuthenticated && isAdmin && (
                <Link
                  to="/admin"
                  className="block text-gray-700 hover:text-rose-600 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Admin
                </Link>
              )}
              {!isAuthenticated ? (
                <div className="space-y-4 pt-4 border-t border-gray-200">
                  <Link
                    to="/login"
                    className="block text-gray-700 hover:text-rose-600 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors text-center"
                    onClick={closeMobileMenu}
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-gray-700 hover:text-rose-600 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;