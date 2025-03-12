"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBirthdayCake, FaGift, FaHeart, FaSnowflake, FaStar } from 'react-icons/fa';
import confetti from 'canvas-confetti';

const VisualEffects: React.FC = () => {
  const [effectsEnabled, setEffectsEnabled] = useState(false);
  const [currentEffect, setCurrentEffect] = useState<string>('confetti');

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const toggleEffects = () => {
    setEffectsEnabled(!effectsEnabled);
    if (!effectsEnabled) {
      triggerConfetti();
    }
  };

  const changeEffect = (effect: string) => {
    setCurrentEffect(effect);
    if (effect === 'confetti') {
      triggerConfetti();
    }
  };

  return (
    <motion.div 
      className="fixed bottom-4 left-4 z-50 bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <button 
          onClick={toggleEffects}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark transition-colors mb-2"
        >
          <FaBirthdayCake />
        </button>
        
        {effectsEnabled && (
          <motion.div 
            className="flex flex-col space-y-2 mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <button 
              onClick={() => changeEffect('confetti')}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${currentEffect === 'confetti' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300 transition-colors`}
              title="Confetti"
            >
              <FaStar />
            </button>
            <button 
              onClick={() => changeEffect('hearts')}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${currentEffect === 'hearts' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300 transition-colors`}
              title="Hearts"
            >
              <FaHeart />
            </button>
            <button 
              onClick={() => changeEffect('gifts')}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${currentEffect === 'gifts' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300 transition-colors`}
              title="Gifts"
            >
              <FaGift />
            </button>
            <button 
              onClick={() => changeEffect('snow')}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${currentEffect === 'snow' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300 transition-colors`}
              title="Snow"
            >
              <FaSnowflake />
            </button>
          </motion.div>
        )}
      </div>
      
      {/* Floating elements based on current effect */}
      {effectsEnabled && (
        <>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed text-primary opacity-70 pointer-events-none"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: window.innerHeight + 100,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: -100,
                rotate: Math.random() * 360,
              }}
              transition={{ 
                duration: Math.random() * 10 + 5, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 5
              }}
              style={{
                fontSize: `${Math.random() * 20 + 10}px`
              }}
            >
              {currentEffect === 'hearts' ? <FaHeart /> : 
               currentEffect === 'gifts' ? <FaGift /> : 
               currentEffect === 'snow' ? <FaSnowflake /> : 
               <FaStar />}
            </motion.div>
          ))}
        </>
      )}
    </motion.div>
  );
};

export default VisualEffects; 