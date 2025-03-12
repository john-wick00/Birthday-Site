"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { BACKGROUND_MUSIC } from '../config';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % BACKGROUND_MUSIC.length;
    setCurrentSongIndex(nextIndex);
  };

  const prevSong = () => {
    const prevIndex = (currentSongIndex - 1 + BACKGROUND_MUSIC.length) % BACKGROUND_MUSIC.length;
    setCurrentSongIndex(prevIndex);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, []);

  useEffect(() => {
    // Reset audio when song changes
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
    }
  }, [currentSongIndex]);

  return (
    <motion.div 
      className="fixed bottom-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-2 flex items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <audio 
        ref={audioRef} 
        src={BACKGROUND_MUSIC[currentSongIndex].url} 
        loop={BACKGROUND_MUSIC[currentSongIndex].loop}
      />
      
      <div className="flex items-center space-x-2">
        <button 
          onClick={togglePlay}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        
        <div className="hidden md:flex items-center space-x-2">
          <button 
            onClick={toggleMute}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 accent-primary"
          />
        </div>
        
        <div className="hidden md:block text-xs text-gray-600 max-w-[150px] truncate">
          {BACKGROUND_MUSIC[currentSongIndex].title}
        </div>
        
        <div className="flex space-x-1">
          <button 
            onClick={prevSong}
            className="text-xs px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
          >
            Prev
          </button>
          <button 
            onClick={nextSong}
            className="text-xs px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer; 