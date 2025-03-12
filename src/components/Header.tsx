"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaBirthdayCake, FaGift } from 'react-icons/fa';
import { BIRTHDAY_PERSON_NAME, HEADER_MESSAGE } from '../config';

const Header: React.FC = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const birthdayPersonName = BIRTHDAY_PERSON_NAME;
  const headerMessage = HEADER_MESSAGE;
  
  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);
  
  return (
    <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-purple-200 opacity-80"></div>
      
      {/* Floating hearts and decorations */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary opacity-70"
          initial={{ 
            x: Math.random() * 100 - 50, 
            y: -20,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: windowHeight,
            rotate: Math.random() * 360,
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 5
          }}
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`
          }}
        >
          {i % 3 === 0 ? <FaHeart /> : i % 3 === 1 ? <FaBirthdayCake /> : <FaGift />}
        </motion.div>
      ))}
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-4">
            Happy Birthday!
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-dark mb-8 max-w-2xl mx-auto">
            {headerMessage}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#memories" className="btn-primary">Our Memories</a>
          <a href="#wishes" className="btn-secondary">Birthday Wishes</a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-dark"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </header>
  );
};

export default Header; 