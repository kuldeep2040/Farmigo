import React from "react";
import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Farmigo</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for premium organic products. We bring freshness and quality directly to your doorstep.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300 cursor-pointer">
                <span className="text-sm">📘</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300 cursor-pointer">
                <span className="text-sm">📷</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300 cursor-pointer">
                <span className="text-sm">🐦</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300 cursor-pointer">
                <span className="text-sm">📺</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Story', 'Careers', 'Press', 'Blog', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Shop Categories</h4>
            <ul className="space-y-3">
              {[
                { name: 'Rice', link: '/category/rice' },
                { name: 'Wheat', link: '/category/wheat' },
                { name: 'Nuts', link: '/category/nuts' },
                { name: 'Sugar', link: '/category/sugar' },
                { name: 'Spices', link: '/category/spices' },
                { name: 'Fruits', link: '/category/fruits' },
                { name: 'Vegetables', link: '/category/vegetables' },
                { name: 'Pulses', link: '/category/pulses' }
              ].map((category, index) => (
                <li key={index}>
                  <a href={category.link} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">📞</span>
                </div>
                <span className="text-gray-400">+91 8840220930</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">✉️</span>
                </div>
                <span className="text-gray-400">farmigo84@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">📍</span>
                </div>
                <span className="text-gray-400">Una, Himachal Pradesh</span>
              </div>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers and updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-green-500 text-white placeholder-gray-500"
                />
                <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-r-lg transition-colors duration-300 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <span>© 2025 Farmigo. Made with ❤️ by <a href="https://github.com/kuldeep2040" className="text-white hover:text-green-400 transition-colors duration-300">Kuldeep Singh</a></span>
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Secure payments with</span>
              <div className="flex space-x-2">
                <div className="w-8 h-6 bg-gray-800 rounded flex items-center justify-center">
                  <span className="text-xs">💳</span>
                </div>
                <div className="w-8 h-6 bg-gray-800 rounded flex items-center justify-center">
                  <span className="text-xs">🏦</span>
                </div>
                <div className="w-8 h-6 bg-gray-800 rounded flex items-center justify-center">
                  <span className="text-xs">📱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;