'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function DustBackground() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;

    const effectiveTheme = theme === 'system' ? systemTheme : theme;
    const isDark = effectiveTheme === 'dark';

    // ---------- CLEANUP ----------
    const cleanup = () => {
      document.getElementById('dust-bg-container')?.remove();
      document
        .querySelectorAll('style[data-dust-stars]')
        .forEach(s => s.remove());
    };

    cleanup();

    // ---------- CONTAINER ----------
    const container = document.createElement('div');
    container.id = 'dust-bg-container';
    container.className =
      'fixed inset-0 pointer-events-none -z-10 overflow-hidden';

    // ---------- STAR LAYER ----------
    const starLayer = document.createElement('div');
    starLayer.className = 'absolute inset-0';

    const STAR_COUNT = isDark ? 32 : 44;

    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement('div');

      // 🔥 SIZE DIFFERENCE HERE
      const size = isDark
        ? Math.random() * 1 + 2      // ⭐ 2px – 4px (dark)
        : Math.random() * 3 + 3;     // ⭐ 3px – 6px (light)

      const duration = Math.random() * 30 + 25;

      star.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        background: ${
          isDark
            ? 'rgba(255,255,255,0.95)'
            : 'rgba(0,169,157,0.95)'
        };
        box-shadow:
          0 0 ${size * 2.5}px ${
            isDark
              ? 'rgba(255,255,255,0.5)'
              : 'rgba(0,169,157,0.6)'
          };
        opacity: ${Math.random() * 0.4 + 0.6};
        animation: starFloat ${duration}s linear infinite;
        animation-delay: ${Math.random() * 20}s;
      `;

      starLayer.appendChild(star);
    }

    container.appendChild(starLayer);

    // ---------- ANIMATION ----------
    const style = document.createElement('style');
    style.setAttribute('data-dust-stars', 'true');
    style.textContent = `
      @keyframes starFloat {
        0% {
          transform: translateY(0);
          opacity: 0;
        }
        15% {
          opacity: 1;
        }
        85% {
          opacity: 1;
        }
        100% {
          transform: translateY(-140vh);
          opacity: 0;
        }
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(container);

    return cleanup;
  }, [theme, systemTheme, mounted]);

  return null;
}
