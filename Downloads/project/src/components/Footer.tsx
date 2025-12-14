import React from 'react';
import { ShoppingBag, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-8 w-8 text-rose-600" />
              <span className="text-xl font-bold text-gray-900">Sweet Shop</span>
            </div>
            <p className="text-gray-600 max-w-md">
              Your favorite destination for premium sweets and confections. 
              We bring you the finest selection of treats from around the world.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/sweets" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Browse Sweets
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-rose-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Sweet Shop. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-500 text-sm mt-4 sm:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-rose-500 fill-current" />
            <span>for sweet lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;