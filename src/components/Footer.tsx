"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold mb-4">Made With Love</h3>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-white/20 w-16"></div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mx-4"
              >
                <FaHeart className="text-primary text-2xl" />
              </motion.div>
              <div className="h-px bg-white/20 w-16"></div>
            </div>
            
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              This website was created especially for you, to celebrate your special day and to show you how much you mean to me. 
              Every moment with you is a gift, and I'm looking forward to celebrating many more birthdays together.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <a href="#" className="text-white border border-white/30 rounded-full py-2 px-6 hover:bg-white/10 transition-colors duration-300">
                Back to Top
              </a>
            </motion.div>
          </motion.div>
          
          <div className="mt-12 pt-6 border-t border-white/10 text-white/60 text-sm">
            <p>© {new Date().getFullYear()} | Created with ❤️ for your birthday</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 