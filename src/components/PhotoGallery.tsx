"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaExpand } from 'react-icons/fa';
import { PHOTO_GALLERY } from '../config';

const PhotoGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextPhoto = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PHOTO_GALLERY.length);
  };

  const prevPhoto = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + PHOTO_GALLERY.length) % PHOTO_GALLERY.length);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? -15 : 15,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? -15 : 15,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="gallery" className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-display font-bold text-center text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Photo Gallery
        </motion.h2>

        <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4' : 'h-[500px] max-w-4xl mx-auto'}`}>
          {/* Navigation buttons */}
          <button 
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors"
            aria-label="Previous photo"
          >
            <FaArrowLeft />
          </button>
          
          <button 
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors"
            aria-label="Next photo"
          >
            <FaArrowRight />
          </button>
          
          <button 
            onClick={toggleFullscreen}
            className="absolute right-4 top-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors"
            aria-label="Toggle fullscreen"
          >
            <FaExpand />
          </button>

          {/* Photo carousel */}
          <div className="w-full h-full relative overflow-hidden rounded-xl shadow-2xl perspective-1000">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
                style={{ 
                  backgroundImage: `url(${PHOTO_GALLERY[currentIndex].imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{PHOTO_GALLERY[currentIndex].title}</h3>
                  <p className="text-sm opacity-90">{PHOTO_GALLERY[currentIndex].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Thumbnails */}
          {!isFullscreen && (
            <div className="flex justify-center mt-4 space-x-2 overflow-x-auto py-2">
              {PHOTO_GALLERY.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-16 h-16 rounded-md overflow-hidden flex-shrink-0 transition-all transform ${
                    index === currentIndex ? 'ring-2 ring-primary scale-110' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={photo.imageUrl} 
                    alt={photo.title} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Fullscreen overlay close button */}
        {isFullscreen && (
          <button 
            onClick={toggleFullscreen}
            className="fixed top-4 right-4 z-50 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/40 transition-colors"
          >
            Close
          </button>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery; 