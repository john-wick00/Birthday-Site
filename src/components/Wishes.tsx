"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaHeart, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { WISHES } from '../config';

interface Wish {
  id: number;
  name: string;
  message: string;
  color: string;
}

const Wishes: React.FC = () => {
  const [activeWish, setActiveWish] = useState<number | null>(null);
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    // Set wishes from config file
    setWishes(WISHES);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="wishes" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Birthday Wishes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            So many people love you and want to wish you a happy birthday! Here are some special messages just for you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {wishes.map((wish) => (
            <motion.div
              key={wish.id}
              variants={itemVariants}
              className={`relative p-6 rounded-xl border-2 ${wish.color} shadow-md hover:shadow-lg transition-all duration-300 ${activeWish === wish.id ? 'scale-105 z-10' : ''}`}
              onClick={() => setActiveWish(activeWish === wish.id ? null : wish.id)}
            >
              <div className="absolute -top-3 -left-3">
                <FaStar className="text-accent text-2xl" />
              </div>
              <div className="absolute -bottom-3 -right-3">
                <FaHeart className="text-primary text-2xl" />
              </div>
              
              <h3 className="text-xl font-bold text-dark mb-3">From {wish.name}</h3>
              
              <div className="flex">
                <FaQuoteLeft className="text-primary/30 text-xl mr-2 flex-shrink-0" />
                <p className="text-gray-700">{wish.message}</p>
                <FaQuoteRight className="text-primary/30 text-xl ml-2 self-end flex-shrink-0" />
              </div>
              
              <motion.div 
                className="mt-4 flex justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: activeWish === wish.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white px-4 py-2 rounded-full shadow-md">
                  <span className="text-primary font-medium">❤️ Sending love back!</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Wishes; 