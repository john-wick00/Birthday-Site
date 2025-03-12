"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MEMORIES } from '../config';

interface Memory {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

const Memories: React.FC = () => {
  const [memories, setMemories] = useState<Memory[]>([]);

  useEffect(() => {
    // Set memories from config file
    setMemories(MEMORIES);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="memories" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Beautiful Memories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every moment with you is a treasure. Here are some of my favorite memories we've shared together.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {memories.map((memory) => (
            <motion.div
              key={memory.id}
              variants={itemVariants}
              className="card group hover:-translate-y-2"
            >
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={memory.imageUrl}
                  alt={memory.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="absolute bottom-3 right-3 text-white text-sm font-medium bg-primary/80 px-3 py-1 rounded-full">
                  {memory.date}
                </p>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">{memory.title}</h3>
              <p className="text-gray-600">{memory.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Memories; 