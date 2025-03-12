"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [gradientColors, setGradientColors] = useState(['#ffcce6', '#e6ccff', '#ccf2ff']);
  const particlesRef = useRef<any[]>([]);
  const animationFrameRef = useRef<number>(0);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize particles
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Create particles
    const particleCount = Math.floor(dimensions.width * dimensions.height / 15000);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        radius: Math.random() * 2 + 1,
        color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        directionChangeTimer: 0,
        directionChangeCooldown: Math.random() * 200 + 50
      });
    }

    particlesRef.current = particles;

    // Start animation
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, gradientColors[0]);
      gradient.addColorStop(0.5, gradientColors[1]);
      gradient.addColorStop(1, gradientColors[2]);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particlesRef.current.forEach(particle => {
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }

        // Randomly change direction
        particle.directionChangeTimer++;
        if (particle.directionChangeTimer > particle.directionChangeCooldown) {
          particle.speedX = Math.random() * 0.5 - 0.25;
          particle.speedY = Math.random() * 0.5 - 0.25;
          particle.directionChangeTimer = 0;
          particle.directionChangeCooldown = Math.random() * 200 + 50;
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [dimensions]);

  // Cycle through gradient colors
  useEffect(() => {
    const colorSets = [
      ['#ffcce6', '#e6ccff', '#ccf2ff'], // Pink to purple to blue
      ['#ffcccc', '#ffe6cc', '#ffffcc'], // Red to orange to yellow
      ['#ccffcc', '#ccffee', '#ccf2ff'], // Green to teal to blue
      ['#e6ccff', '#ccccff', '#ccf2ff']  // Purple to blue to light blue
    ];

    const interval = setInterval(() => {
      const currentIndex = colorSets.findIndex(set => 
        set[0] === gradientColors[0] && 
        set[1] === gradientColors[1] && 
        set[2] === gradientColors[2]
      );
      
      const nextIndex = (currentIndex + 1) % colorSets.length;
      setGradientColors(colorSets[nextIndex]);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [gradientColors]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
    </div>
  );
};

export default AnimatedBackground; 