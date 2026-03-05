'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';

interface FloatingBoxProps {
  children: ReactNode;
  index?: number;
}

// Seeded pseudo-random for deterministic per-box values
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

export function FloatingBox({ children, index = 0 }: FloatingBoxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animRef = useRef<number>(0);

  // Generate unique movement profile per box using seeded randomness
  const seed = index + 1;
  const ySpeed = 5 + seededRandom(seed * 1) * 10;            // 5-15px vertical range
  const yDir = seededRandom(seed * 2) > 0.5 ? 1 : -1;       // random up/down
  const xSpeed = 10 + seededRandom(seed * 3) * 10;           // 10-20px horizontal range
  const xDir = seededRandom(seed * 4) > 0.5 ? 1 : -1;       // random left/right
  const phaseX = seededRandom(seed * 7) * Math.PI * 2;       // phase offset for X wave

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.01, rootMargin: '200px' }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      cancelAnimationFrame(animRef.current);
      animRef.current = requestAnimationFrame(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const windowCenter = window.innerHeight / 2;
        const boxCenter = rect.top + rect.height / 2;
        // Normalized -1 to 1 based on viewport position
        const progress = Math.max(-1.2, Math.min(1.2, (boxCenter - windowCenter) / windowCenter));

        // Vertical: direct parallax with direction
        const y = progress * ySpeed * yDir;
        // Horizontal: sinusoidal wave offset by phase so each box drifts differently
        const x = Math.sin(progress * Math.PI + phaseX) * xSpeed * xDir;

        ref.current.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animRef.current);
    };
  }, [isVisible, ySpeed, yDir, xSpeed, xDir, phaseX]);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? undefined : 'translate3d(0, 40px, 0)',
        willChange: 'transform, opacity',
        transition: isVisible
          ? 'opacity 0.8s ease, transform 0.2s ease-out'
          : 'opacity 0.8s ease, transform 0.6s ease-out',
      }}
    >
      {children}
    </div>
  );
}
