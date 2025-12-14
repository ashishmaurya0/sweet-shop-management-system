import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [isAuthenticated] = React.useState(false);
  const [isAdmin] = React.useState(false);

  const handleLogout = () => {
    // Mock logout functionality
  };

  const features = [
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Hand-selected sweets from the finest confectioners worldwide'
    },
    {
      icon: Users,
      title: 'Community Favorite',
      description: 'Loved by thousands of sweet enthusiasts across the globe'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in confectionery retail'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header 
        isAuthenticated={isAuthenticated} 
        isAdmin={isAdmin} 
        onLogout={handleLogout} 
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-rose-50 to-rose-100 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Welcome to
                  <span className="text-rose-600 block">Sweet Shop</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Discover the world's finest confections and treats. From artisanal chocolates 
                  to traditional candies, we bring you sweetness that delights every sense.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/sweets"
                    className="bg-rose-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-rose-700 transition-colors text-center"
                  >
                    Browse Sweets
                  </Link>
                  <Link
                    to="/register"
                    className="border-2 border-rose-600 text-rose-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-rose-600 hover:text-white transition-colors text-center"
                  >
                    Join Us
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Colorful assorted sweets and candies"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <ShoppingBag className="h-8 w-8 text-rose-600" />
                    <div>
                      <p className="text-sm text-gray-600">Premium Quality</p>
                      <p className="font-semibold text-gray-900">Guaranteed</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Sweet Shop?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to bringing you the finest sweets with exceptional service 
                and an unforgettable experience.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-rose-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Satisfy Your Sweet Tooth?
              </h2>
              <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers and discover your new favorite treats today.
              </p>
              <Link
                to="/sweets"
                className="bg-white text-rose-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors inline-block"
              >
                Start Shopping
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}