"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_EVENTS } from '../config';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-display font-bold text-center text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Journey Together
        </motion.h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300 rounded-full"></div>
          
          {/* Timeline events */}
          <div className="relative">
            {TIMELINE_EVENTS.map((event, index) => (
              <motion.div 
                key={event.id}
                className={`mb-12 flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <motion.div 
                    className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    whileHover={{ scale: 1.03 }}
                  >
                    <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                    <time className="text-sm text-gray-500 block mb-3">{event.date}</time>
                    <p className="text-gray-700">{event.description}</p>
                    
                    {event.imageUrl && (
                      <div className="mt-4 rounded-lg overflow-hidden">
                        <img 
                          src={event.imageUrl} 
                          alt={event.title} 
                          className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    )}
                  </motion.div>
                </div>
                
                {/* Center dot */}
                <div className="w-2/12 flex justify-center">
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-primary border-4 border-white shadow-md z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 15, 
                      delay: index * 0.1 + 0.2 
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                  />
                </div>
                
                {/* Empty space for alignment */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline; 