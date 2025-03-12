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

export default function Home() {
  return (
    <main>
      <Header />
      <Countdown />
      <Memories />
      <Wishes />
      <Gift />
      <Footer />
    </main>
  );
} 