"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Import components with dynamic loading for better performance
const Header = dynamic(() => import('@/components/Header'), { ssr: true });
const Countdown = dynamic(() => import('@/components/Countdown'), { ssr: true });
const Memories = dynamic(() => import('@/components/Memories'), { ssr: true });
const Wishes = dynamic(() => import('@/components/Wishes'), { ssr: true });
const Gift = dynamic(() => import('@/components/Gift'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
const MusicPlayer = dynamic(() => import('@/components/MusicPlayer'), { ssr: false });
const VisualEffects = dynamic(() => import('@/components/VisualEffects'), { ssr: false });
const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), { ssr: false });
const PhotoGallery = dynamic(() => import('@/components/PhotoGallery'), { ssr: true });
const Timeline = dynamic(() => import('@/components/Timeline'), { ssr: true });
const InteractiveMessage = dynamic(() => import('@/components/InteractiveMessage'), { ssr: false });

export default function Home() {
  return (
    <main>
      <AnimatedBackground />
      <Header />
      <Countdown />
      <InteractiveMessage />
      <Memories />
      <PhotoGallery />
      <Timeline />
      <Wishes />
      <Gift />
      <Footer />
      <MusicPlayer />
      <VisualEffects />
    </main>
  );
} 