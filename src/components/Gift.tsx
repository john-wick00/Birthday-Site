"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGift, FaHeart } from 'react-icons/fa';
import { GIFT_MESSAGE } from '../config';

const Gift: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const giftMessage = GIFT_MESSAGE;

  const handleGiftClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setShowMessage(true);
      }, 1000);
    }
  };

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">A Special Gift For You</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I've prepared something special just for you. Click on the gift to unwrap it!
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            className="relative cursor-pointer"
            onClick={handleGiftClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {!isOpen ? (
              <motion.div
                className="relative"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-64 h-64 bg-primary rounded-xl flex items-center justify-center shadow-xl">
                  <div className="absolute w-full h-10 bg-accent top-1/2 transform -translate-y-1/2"></div>
                  <div className="absolute h-full w-10 bg-accent left-1/2 transform -translate-x-1/2"></div>
                  <FaGift className="text-white text-8xl z-10" />
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-5 bg-accent w-20 h-10 rounded-lg"></div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
                className="w-64 h-64 bg-white rounded-xl flex items-center justify-center shadow-xl border-4 border-primary overflow-hidden"
              >
                {showMessage ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center p-4"
                  >
                    <FaHeart className="text-primary text-5xl mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-dark mb-2">I Love You!</h3>
                    <p className="text-gray-600">
                      {giftMessage}
                    </p>
                    <div className="mt-4">
                      <span className="text-primary font-bold">Your real gift is waiting for you in person! ❤️</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center"
                  >
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </motion.div>
                )}
              </motion.div>
            )}
            
            {!isOpen && (
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-dark text-sm bg-white px-3 py-1 rounded-full shadow-md"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Click to open
              </motion.div>
            )}
          </motion.div>
        </div>
        
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-xl text-gray-700 italic">
              "The best gift I could ever receive is having you in my life."
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gift; 