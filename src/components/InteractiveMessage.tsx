"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaEnvelope, FaMagic } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { BIRTHDAY_PERSON_NAME } from '../config';

const InteractiveMessage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  
  const specialMessages = [
    `Happy Birthday, ${BIRTHDAY_PERSON_NAME}! Today is all about celebrating the amazing person you are.`,
    "Your smile lights up my world. I hope today brings you endless joy and laughter.",
    "Every moment with you is a gift. Thank you for being in my life.",
    "You deserve all the happiness in the world today and always.",
    "I'm so grateful for your love and friendship. Here's to another wonderful year!",
    "You make the world a better place just by being in it. Never forget how special you are."
  ];

  const handleOpenMessage = () => {
    setIsOpen(true);
    setHasOpened(true);
    
    // Trigger confetti when message opens
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleNextMessage = () => {
    setMessageIndex((prev) => (prev + 1) % specialMessages.length);
    
    // Small confetti burst on message change
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.7 }
    });
  };

  // Pulse animation for the envelope when not opened
  useEffect(() => {
    if (!hasOpened) {
      const interval = setInterval(() => {
        const envelope = document.getElementById('envelope-icon');
        if (envelope) {
          envelope.classList.add('animate-pulse');
          setTimeout(() => {
            envelope.classList.remove('animate-pulse');
          }, 1000);
        }
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [hasOpened]);

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 text-center">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <button
                onClick={handleOpenMessage}
                className="relative bg-gradient-to-r from-pink-400 to-purple-500 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <FaEnvelope 
                  id="envelope-icon"
                  className="text-white text-6xl mb-4 transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="text-white font-medium">
                  Click to open your special birthday message
                </div>
                <motion.div
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  1
                </motion.div>
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="bg-white rounded-xl shadow-2xl p-8 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 to-purple-500"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-pink-200 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-200 rounded-full opacity-50"></div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={messageIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaHeart className="text-pink-500 text-4xl mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Special Message</h3>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {specialMessages[messageIndex]}
                    </p>
                  </motion.div>
                </AnimatePresence>
                
                <div className="flex justify-center mt-6">
                  <button
                    onClick={handleNextMessage}
                    className="flex items-center gap-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <FaMagic /> 
                    <span>Read Another Message</span>
                  </button>
                </div>
              </div>
              
              {/* Floating hearts around the message */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-pink-400 opacity-70"
                  initial={{ 
                    x: 0, 
                    y: 0,
                    scale: 0.5 + Math.random() * 0.5
                  }}
                  animate={{ 
                    x: (Math.random() - 0.5) * 100,
                    y: (Math.random() - 0.5) * 100,
                    rotate: Math.random() * 360,
                  }}
                  transition={{ 
                    duration: 10 + Math.random() * 10, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: Math.random() * 5
                  }}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 20 + 10}px`
                  }}
                >
                  <FaHeart />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveMessage; 