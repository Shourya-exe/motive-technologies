'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export const FullScreenScrollVideo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableHeight = containerRef.current.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Full-Screen High-Resolution Cinematic Canvas Renderer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate 3D volumetric particles for cinematic frame playback
    const particleCount = 280;
    const particles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * 2000,
      y: (Math.random() - 0.5) * 2000,
      z: Math.random() * 2000,
      baseZ: Math.random() * 2000,
      size: Math.random() * 2 + 1,
      isRed: Math.random() < 0.22, // 22% signature red
      speed: Math.random() * 2 + 1,
    }));

    let animationId: number;

    const render = () => {
      // Cinematic rich black backdrop
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const p = scrollProgress; // 0.0 to 1.0

      // Dynamic cinematic camera fly-through driven by scroll progress
      const cameraZ = p * 1800;
      const rotationAngle = p * Math.PI * 1.5;

      // Draw subtle ambient vignette
      const vignette = ctx.createRadialGradient(cx, cy, 100, cx, cy, Math.max(width, height) * 0.75);
      vignette.addColorStop(0, 'rgba(237, 28, 46, 0.03)');
      vignette.addColorStop(0.7, 'rgba(5, 5, 5, 0.6)');
      vignette.addColorStop(1, '#050505');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      // Core 3D geometry transformation:
      // When scrolling, particles fly forward through z-space (Apple warp effect)
      ctx.save();
      ctx.translate(cx, cy);

      const fov = 450;
      const visibleParticles: { x: number; y: number; size: number; alpha: number; isRed: boolean }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i];

        // Z-depth calculation relative to camera position
        let relZ = (pt.z - cameraZ) % 2000;
        if (relZ < 10) relZ += 2000;

        // Perspective scale
        const scale = fov / relZ;

        // Apply slight orbital twist
        const angle = rotationAngle * (1 - relZ / 2000) * 0.4;
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const rotatedX = pt.x * cosA - pt.y * sinA;
        const rotatedY = pt.x * sinA + pt.y * cosA;

        const screenX = rotatedX * scale;
        const screenY = rotatedY * scale;

        // Alpha based on depth
        const alpha = Math.min(1, Math.max(0, 1 - relZ / 2000));

        if (screenX > -width && screenX < width && screenY > -height && screenY < height) {
          visibleParticles.push({
            x: screenX,
            y: screenY,
            size: pt.size * scale,
            alpha,
            isRed: pt.isRed,
          });
        }
      }

      // Draw light trails connecting nearby particles as they warp
      const trailLength = Math.min(70, visibleParticles.length);
      for (let i = 0; i < trailLength; i += 2) {
        const p1 = visibleParticles[i];
        const p2 = visibleParticles[(i + 1) % trailLength];
        if (!p1 || !p2) continue;

        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180 * (1 - p * 0.4)) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = p1.isRed || p2.isRed
            ? `rgba(237, 28, 46, ${p1.alpha * 0.35})`
            : `rgba(255, 255, 255, ${p1.alpha * 0.15})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Draw glowing particles
      for (let i = 0; i < visibleParticles.length; i++) {
        const pt = visibleParticles[i];
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, Math.max(0.8, pt.size), 0, Math.PI * 2);
        if (pt.isRed) {
          ctx.fillStyle = `rgba(237, 28, 46, ${pt.alpha})`;
          ctx.shadowColor = '#ED1C2E';
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${pt.alpha * 0.9})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Central glowing core in later frames (converging intelligence)
      if (p > 0.3) {
        const coreAlpha = Math.min(1, (p - 0.3) * 2.2);
        const coreRadius = (40 + Math.sin(Date.now() * 0.003) * 8) * (1 + p * 0.5);

        // Volumetric ambient glow
        const glow = ctx.createRadialGradient(0, 0, 5, 0, 0, coreRadius * 2);
        glow.addColorStop(0, `rgba(237, 28, 46, ${coreAlpha * 0.4})`);
        glow.addColorStop(0.5, `rgba(237, 28, 46, ${coreAlpha * 0.1})`);
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(0, 0, coreRadius * 2, 0, Math.PI * 2);
        ctx.fill();

        // Architectural geometric rings
        ctx.strokeStyle = `rgba(255, 255, 255, ${coreAlpha * 0.3})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, 0, coreRadius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = `rgba(237, 28, 46, ${coreAlpha * 0.6})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(0, 0, coreRadius * 1.5, coreRadius * 0.6, rotationAngle, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [scrollProgress]);

  // Determine which cinematic editorial title to display based on scroll percentage
  const getActiveTitle = () => {
    if (scrollProgress < 0.28) {
      return {
        stage: '01 / 04',
        label: 'WE UNDERSTAND BUSINESS PROBLEMS',
        headline: 'INNOVATE.',
        sub: 'Modern companies struggle with disconnected software, manual bottlenecks, and sluggish response times.',
      };
    } else if (scrollProgress < 0.58) {
      return {
        stage: '02 / 04',
        label: 'WE BUILD INTELLIGENT TECHNOLOGY SOLUTIONS',
        headline: 'AUTOMATE.',
        sub: 'We engineer autonomous AI agents and automated operational pipelines that eliminate human tedium.',
      };
    } else if (scrollProgress < 0.86) {
      return {
        stage: '03 / 04',
        label: 'WE HELP BUSINESSES OPERATE, COMPETE AND GROW',
        headline: 'TRANSFORM.',
        sub: 'Sub-second digital platforms, native mobile applications, and technical search visibility built to scale.',
      };
    } else {
      return {
        stage: '04 / 04',
        label: 'A BRIGHTER TOMORROW',
        headline: 'SMARTER AUTOMATION.',
        sub: 'Motive Technologies — Your unified technology and digital transformation partner.',
      };
    }
  };

  const titleData = getActiveTitle();

  return (
    <section ref={containerRef} className="relative h-[320vh] bg-black select-none">
      {/* Sticky Full-Screen Viewport (Fills 100% of the screen edge-to-edge) */}
      <div className="sticky top-0 h-screen w-screen overflow-hidden flex flex-col justify-between">
        
        {/* Full-bleed Edge-to-Edge Canvas (No boxes, no cards) */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover block z-0" />

        {/* Minimalist Top Edge HUD */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-12 pt-8 flex items-center justify-between text-white pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-motive-red animate-ping" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 font-semibold">
              MOTIVE &bull; CINEMATIC SYSTEM SEQUENCE
            </span>
          </div>
          <div className="font-mono text-xs text-zinc-400">
            FRAME {Math.min(100, Math.max(1, Math.round(scrollProgress * 100)))}%
          </div>
        </div>

        {/* Pure Editorial Centered Titles (No cards, pure typography) */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-5 pointer-events-none">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-mono text-xs uppercase tracking-widest">
            <span className="text-motive-red font-bold">{titleData.stage}</span>
            <span className="text-zinc-400">&bull;</span>
            <span className="text-zinc-300">{titleData.label}</span>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-none">
            {titleData.headline}
          </h2>

          <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
            {titleData.sub}
          </p>

        </div>

        {/* Minimalist Bottom Edge Prompt */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-12 pb-8 flex items-center justify-between text-zinc-500 font-mono text-xs pointer-events-none">
          <div className="flex items-center gap-2">
            <ChevronDown className="w-4 h-4 text-motive-red animate-bounce" />
            <span>Scroll down to advance sequence</span>
          </div>
          <span className="text-zinc-400">
            {scrollProgress >= 0.96 ? 'SEQUENCE COMPLETE &darr; FULL SITE BELOW' : 'TRANSFORMATION IN PROGRESS'}
          </span>
        </div>

      </div>
    </section>
  );
};
