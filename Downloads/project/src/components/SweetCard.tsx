import React from 'react';
import { ShoppingCart, Package } from 'lucide-react';
import { motion } from 'framer-motion';

interface Sweet {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  description?: string;
  image?: string;
}

interface SweetCardProps {
  sweet: Sweet;
  onPurchase: (sweetId: string) => void;
  isLoading?: boolean;
}

const SweetCard: React.FC<SweetCardProps> = ({ sweet, onPurchase, isLoading = false }) => {
  const isOutOfStock = sweet.quantity === 0;
  const isLowStock = sweet.quantity > 0 && sweet.quantity <= 5;

  const handlePurchase = () => {
    if (!isOutOfStock && !isLoading) {
      onPurchase(sweet.id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative overflow-hidden">
        {sweet.image ? (
          <motion.img
            src={sweet.image}
            alt={sweet.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
            <Package className="h-12 w-12 text-rose-400" />
          </div>
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-rose-600 transition-colors">
            {sweet.name}
          </h3>
          <motion.span
            className="text-xl font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full"
            whileHover={{ scale: 1.1 }}
          >
            ${sweet.price.toFixed(2)}
          </motion.span>
        </div>
        
        <p className="text-sm text-gray-600 mb-3 capitalize font-medium">
          {sweet.category}
        </p>
        
        {sweet.description && (
          <p className="text-sm text-gray-700 mb-4 line-clamp-2 leading-relaxed">
            {sweet.description}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 font-medium">Stock:</span>
            <span className={`text-sm font-bold px-2 py-1 rounded-full ${
              isOutOfStock 
                ? 'text-red-700 bg-red-100' 
                : isLowStock 
                ? 'text-yellow-700 bg-yellow-100' 
                : 'text-green-700 bg-green-100'
            }`}>
              {sweet.quantity}
            </span>
          </div>
          
          <motion.button
            onClick={handlePurchase}
            disabled={isOutOfStock || isLoading}
            whileHover={!isOutOfStock && !isLoading ? { scale: 1.05 } : {}}
            whileTap={!isOutOfStock && !isLoading ? { scale: 0.95 } : {}}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              isOutOfStock
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : isLoading
                ? 'bg-rose-400 text-white cursor-not-allowed animate-pulse'
                : 'bg-rose-600 text-white hover:bg-rose-700 hover:shadow-lg'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>
              {isOutOfStock ? 'Out of Stock' : isLoading ? 'Purchasing...' : 'Purchase'}
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SweetCard;