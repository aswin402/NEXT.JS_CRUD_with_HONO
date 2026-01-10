'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function DustBackground() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Determine current theme
    const effectiveTheme = theme === 'system' ? systemTheme : theme;
    setCurrentTheme(effectiveTheme || 'light');
    
    // Clean up existing dust elements
    const existingContainer = document.getElementById('dust-bg-container');
    if (existingContainer) {
      existingContainer.remove();
    }
    
    // Remove any existing animation styles
    const existingStyles = document.querySelectorAll('style[data-dust-animations]');
    existingStyles.forEach(style => style.remove());
    
    // Only create dust effect for dark theme
    if (effectiveTheme === 'dark') {
      const container = document.createElement('div');
      container.id = 'dust-bg-container';
      container.className = 'fixed inset-0 pointer-events-none -z-10 overflow-hidden';
      
      // Base dark background
      const baseBg = document.createElement('div');
      baseBg.className = 'absolute inset-0 bg-[#0a0a0a]';
      container.appendChild(baseBg);
      
      // Dust layer with the good visual style
      const dustLayer = document.createElement('div');
      dustLayer.className = 'absolute inset-0 opacity-30';
      dustLayer.style.cssText = `
        background-image: radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0.5px, transparent 1px),
                          radial-gradient(circle at 75% 75%, rgba(255,255,255,0.08) 0.5px, transparent 1px),
                          radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0.5px, transparent 1px);
        background-size: 100px 100px, 150px 150px, 200px 200px;
        animation: dustMove 20s linear infinite;
      `;
      container.appendChild(dustLayer);
      
      // Sparkles container
      const sparklesContainer = document.createElement('div');
      sparklesContainer.className = 'absolute inset-0';
      
      // Add 15 sparkles with the good visual style
      for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
          position: absolute;
          width: 1px;
          height: 1px;
          background: white;
          border-radius: 50%;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          opacity: 0;
          animation: sparkle ${Math.random() * 3 + 2}s ease-in-out infinite;
          animation-delay: ${Math.random() * 2}s;
          box-shadow: 0 0 3px 1px rgba(255,255,255,0.6);
        `;
        sparklesContainer.appendChild(sparkle);
      }
      container.appendChild(sparklesContainer);
      
      // Add the animations from the first component
      const style = document.createElement('style');
      style.setAttribute('data-dust-animations', 'true');
      style.textContent = `
        @keyframes dustMove {
          0% {
            background-position: 0 0, 0 0, 0 0;
          }
          100% {
            background-position: 100px 100px, 150px 150px, 200px 200px;
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
      `;
      
      document.head.appendChild(style);
      document.body.appendChild(container);
    }
    
    return () => {
      const container = document.getElementById('dust-bg-container');
      if (container) container.remove();
      
      const styles = document.querySelectorAll('style[data-dust-animations]');
      styles.forEach(style => style.remove());
    };
  }, [theme, systemTheme, mounted]);

  if (!mounted) return null;

  return null;
}