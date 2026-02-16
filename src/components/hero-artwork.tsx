"use client";

import React, { useEffect, useRef } from 'react';

export const HeroArtwork = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="hero-artwork-container relative w-full aspect-square scale-105 lg:scale-[1.15]"
      style={{
        '--mouse-x': '0px',
        '--mouse-y': '0px',
      } as React.CSSProperties}
    >
      <style jsx global>{`
        @keyframes float-drift-1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(15px, -20px) rotate(2deg); }
          66% { transform: translate(-10px, 15px) rotate(-1deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes float-drift-2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-15px, 15px) rotate(-2deg); }
          66% { transform: translate(10px, -10px) rotate(1deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes breathe-glow {
          0%, 100% { opacity: 0.6; filter: brightness(1) blur(0px); }
          50% { opacity: 1; filter: brightness(1.3) blur(1px); }
        }

        .hero-shape {
          transform-origin: center;
          will-change: transform, opacity;
        }

        .animate-drift-1 {
          animation: float-drift-1 18s ease-in-out infinite;
        }

        .animate-drift-2 {
          animation: float-drift-2 22s ease-in-out infinite;
        }

        .animate-glow {
          animation: breathe-glow 5s ease-in-out infinite alternate;
        }

        .parallax-layer {
          transition: transform 0.1s ease-out;
          transform: translate(var(--mouse-x), var(--mouse-y));
        }

        /* Glassmorphism subtle effect */
        .glass-fill {
          mix-blend-mode: screen;
        }
      `}</style>

      <svg
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full parallax-layer"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Neon Gradients - Brighter, more saturated */}
          <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4D9FFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0.8" />
          </linearGradient>
          
          <linearGradient id="grad-teal" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00FFF0" stopOpacity="1" />
            <stop offset="100%" stopColor="#00A3CC" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="grad-lime" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EAFF00" stopOpacity="1" />
            <stop offset="100%" stopColor="#99CC00" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="grad-hex" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#AACCFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#5577AA" stopOpacity="0.8" />
          </linearGradient>

          {/* Filters for Neon Glow */}
          <filter id="neon-glow" x="-100%" y="-100%" width="300%" height="300%">
            {/* Layer 1: Tight bright glow */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur1" />
            {/* Layer 2: Wide soft glow */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur2" />
            {/* Layer 3: Extra wide wash */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur3" />
            
            {/* Combine glows */}
            <feMerge>
              <feMergeNode in="blur3" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Layer order (back to front): Square, Hexagon, Circle, Triangle - zgodnie ze zdjęciem */}

        {/* Group 1: Rounded Square (back) - electric blue */}
        <g className="hero-shape animate-drift-1 animate-glow" style={{ animationDelay: '0s' }}>
          <rect x="50" y="130" width="420" height="420" rx="80" fill="url(#grad-blue)" fillOpacity="0.05" className="glass-fill" />
          <rect x="50" y="130" width="420" height="420" rx="80" stroke="url(#grad-blue)" strokeWidth="8" filter="url(#neon-glow)" opacity="0.8" />
          <rect x="50" y="130" width="420" height="420" rx="80" stroke="white" strokeWidth="2" opacity="0.6" />
          <rect x="80" y="160" width="360" height="360" rx="60" stroke="url(#grad-blue)" strokeWidth="4" opacity="0.5" />
        </g>

        {/* Group 2: Hexagon (back) - light blue */}
        <g className="hero-shape animate-drift-2 animate-glow" style={{ animationDelay: '-7s' }}>
          <path d="M 742 632 L 858 700 Q 880 712 880 737 L 880 871 Q 880 896 858 908 L 742 976 Q 720 988 698 976 L 582 908 Q 560 896 560 871 L 560 737 Q 560 712 582 700 L 698 632 Q 720 620 742 632 Z" fill="url(#grad-hex)" fillOpacity="0.05" className="glass-fill" />
          <path d="M 742 632 L 858 700 Q 880 712 880 737 L 880 871 Q 880 896 858 908 L 742 976 Q 720 988 698 976 L 582 908 Q 560 896 560 871 L 560 737 Q 560 712 582 700 L 698 632 Q 720 620 742 632 Z" stroke="url(#grad-hex)" strokeWidth="8" strokeLinejoin="round" filter="url(#neon-glow)" opacity="0.8" />
          <path d="M 742 632 L 858 700 Q 880 712 880 737 L 880 871 Q 880 896 858 908 L 742 976 Q 720 988 698 976 L 582 908 Q 560 896 560 871 L 560 737 Q 560 712 582 700 L 698 632 Q 720 620 742 632 Z" stroke="white" strokeWidth="2" strokeLinejoin="round" opacity="0.6" />
          <path d="M 742 673 L 818 717 Q 840 730 840 750 L 840 858 Q 840 878 818 891 L 742 935 Q 720 948 698 935 L 622 891 Q 600 878 600 858 L 600 750 Q 600 730 622 717 L 698 673 Q 720 660 742 673 Z" stroke="url(#grad-hex)" strokeWidth="4" strokeLinejoin="round" opacity="0.5" />
        </g>

        {/* Group 3: Circle (middle) - teal/cyan - nakłada się na kwadrat, pod trójkątem */}
        <g className="hero-shape animate-drift-2 animate-glow" style={{ animationDelay: '-5s' }}>
          <circle cx="680" cy="420" r="240" fill="url(#grad-teal)" fillOpacity="0.05" className="glass-fill" />
          <circle cx="680" cy="420" r="240" stroke="url(#grad-teal)" strokeWidth="8" filter="url(#neon-glow)" opacity="0.8" />
          <circle cx="680" cy="420" r="240" stroke="white" strokeWidth="2" opacity="0.6" />
          <circle cx="680" cy="420" r="200" stroke="url(#grad-teal)" strokeWidth="4" opacity="0.5" />
        </g>

        {/* Group 4: Triangle (front) - neon yellow - na wierzchu */}
        <g className="hero-shape animate-drift-1 animate-glow" style={{ animationDelay: '-2s' }}>
          <path d="M 166 689 L 572 516 Q 586 511 583 526 L 465 930 Q 462 945 450 935 L 164 705 Q 152 697 166 689 Z" fill="url(#grad-lime)" fillOpacity="0.05" className="glass-fill" />
          <path d="M 166 689 L 572 516 Q 586 511 583 526 L 465 930 Q 462 945 450 935 L 164 705 Q 152 697 166 689 Z" stroke="url(#grad-lime)" strokeWidth="8" strokeLinejoin="round" filter="url(#neon-glow)" opacity="0.8" />
          <path d="M 166 689 L 572 516 Q 586 511 583 526 L 465 930 Q 462 945 450 935 L 164 705 Q 152 697 166 689 Z" stroke="white" strokeWidth="2" strokeLinejoin="round" opacity="0.6" />
          <path d="M 213 710 L 538 565 Q 547 560 544 571 L 455 892 Q 449 905 441 899 L 212 720 Q 201 714 213 710 Z" stroke="url(#grad-lime)" strokeWidth="4" strokeLinejoin="round" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
};
