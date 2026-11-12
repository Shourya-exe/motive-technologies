'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ArrowDown, Cpu, Sparkles, ShieldCheck, Zap, Layers } from 'lucide-react';

export const ScrollFrameSequence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(1);

  // Stage details based on scroll progress
  const stages = [
    {
      stage: 1,
      tag: 'STAGE 01 // OPERATIONAL REALITY',
      headline: 'Fragmented Tools & Manual Overhead.',
      sub: 'Disconnected spreadsheets, manual WhatsApp tracking, and hours of administrative delay stifle business velocity.',
      icon: Layers,
    },
    {
      stage: 2,
      tag: 'STAGE 02 // COGNITIVE REASONING',
      headline: 'Autonomous AI Orchestration.',
      sub: 'Goal-driven AI agents parse unstructured requests, check company policy, and trigger actions in milliseconds.',
      icon: Cpu,
    },
    {
      stage: 3,
      tag: 'STAGE 03 // ARCHITECTURAL ASSEMBLY',
      headline: 'Resilient Digital Engineering.',
      sub: 'Precision web frontends, offline-first mobile apps, and robust database layers engineered for zero downtime.',
      icon: Zap,
    },
    {
      stage: 4,
      tag: 'STAGE 04 // CONNECTED VELOCITY',
      headline: 'A Unified, Smarter Enterprise.',
      sub: 'Transforming operational friction into compounding commercial growth.',
      icon: ShieldCheck,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
      
      // Calculate progress from 0 to 1
      const progress = Math.max(0, Math.min(1, -rect.top / containerHeight));
      setScrollProgress(progress);

      if (progress < 0.28) setCurrentStage(1);
      else if (progress < 0.58) setCurrentStage(2);
      else if (progress < 0.85) setCurrentStage(3);
      else setCurrentStage(4);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Canvas Frame Rendering Engine
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

    // Number of 3D-projected procedural nodes
    const totalNodes = 60;
    const initialNodes = Array.from({ length: totalNodes }, (_, i) => {
      const phi = Math.acos(-1 + (2 * i) / totalNodes);
      const theta = Math.sqrt(totalNodes * Math.PI) * phi;
      return {
        // Disordered initial state
        chaosX: (Math.random() - 0.5) * 500,
        chaosY: (Math.random() - 0.5) * 400,
        chaosZ: (Math.random() - 0.5) * 400,
        // Structured sphere / torus state
        targetX: Math.cos(theta) * Math.sin(phi) * 180,
        targetY: Math.sin(theta) * Math.sin(phi) * 180,
        targetZ: Math.cos(phi) * 180,
        // Architectural cube state
        cubeX: ((i % 4) - 1.5) * 90,
        cubeY: (Math.floor((i / 4) % 4) - 1.5) * 90,
        cubeZ: (Math.floor(i / 16) - 1) * 90,
        size: Math.random() < 0.2 ? 3.5 : 2,
        isAccent: i % 7 === 0,
      };
    });

    let animationId: number;

    const render = () => {
      ctx.fillStyle = '#090909';
      ctx.fillRect(0, 0, width, height);

      // Subtle architectural grid in background
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const p = scrollProgress; // 0 to 1
      const cx = width / 2;
      const cy = height / 2;

      // Camera rotation based on progress and time
      const rotY = p * Math.PI * 2.5 + Date.now() * 0.0003;
      const rotX = Math.sin(p * Math.PI) * 0.4 + 0.2;

      // Calculate projected 2D coordinates for all nodes
      const projected: { x: number; y: number; z: number; isAccent: boolean; size: number }[] = [];

      initialNodes.forEach((node) => {
        let x: number, y: number, z: number;

        if (p < 0.35) {
          // Transition from Chaos to Sphere
          const factor = p / 0.35;
          x = node.chaosX + (node.targetX - node.chaosX) * factor;
          y = node.chaosY + (node.targetY - node.chaosY) * factor;
          z = node.chaosZ + (node.targetZ - node.chaosZ) * factor;
        } else if (p < 0.7) {
          // Transition from Sphere to Cube Architecture
          const factor = (p - 0.35) / 0.35;
          x = node.targetX + (node.cubeX - node.targetX) * factor;
          y = node.targetY + (node.cubeY - node.targetY) * factor;
          z = node.targetZ + (node.cubeZ - node.targetZ) * factor;
        } else {
          // Assembled glowing matrix expanding with stability
          const factor = (p - 0.7) / 0.3;
          x = node.cubeX * (1 + factor * 0.2);
          y = node.cubeY * (1 + factor * 0.2);
          z = node.cubeZ * (1 + factor * 0.2);
        }

        // Apply 3D Rotation
        // Rotate Y
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = x * cosY - z * sinY;
        const z1 = z * cosY + x * sinY;

        // Rotate X
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = y * cosX - z1 * sinX;
        const z2 = z1 * cosX + y * sinX;

        // Perspective projection
        const fov = 420;
        const scale = fov / (fov + z2 + 250);
        const projX = cx + x1 * scale;
        const projY = cy + y2 * scale;

        projected.push({
          x: projX,
          y: projY,
          z: z2,
          isAccent: node.isAccent,
          size: node.size * scale,
        });
      });

      // Sort by depth for correct visual layering
      projected.sort((a, b) => b.z - a.z);

      // Draw connecting lines between nodes based on proximity
      const maxConnectDist = 85 + p * 40;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const n1 = projected[i];
          const n2 = projected[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * (0.1 + p * 0.25);
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);

            if (p > 0.4 && (n1.isAccent || n2.isAccent)) {
              ctx.strokeStyle = `rgba(237, 28, 46, ${alpha * 1.5})`;
              ctx.lineWidth = 1.5;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
              ctx.lineWidth = 1;
            }
            ctx.stroke();
          }
        }
      }

      // Draw central energy core in stage 2+
      if (p > 0.25) {
        const coreAlpha = Math.min(1, (p - 0.25) * 2);
        const coreRadius = 24 + Math.sin(Date.now() * 0.005) * 4;

        ctx.beginPath();
        ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(237, 28, 46, ${coreAlpha * 0.15})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx, cy, coreRadius * 1.8, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(237, 28, 46, ${coreAlpha * 0.25})`;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#ED1C2E';
        ctx.shadowColor = '#ED1C2E';
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw projected nodes
      projected.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(1, node.size), 0, Math.PI * 2);
        if (node.isAccent) {
          ctx.fillStyle = '#ED1C2E';
          ctx.shadowColor = '#ED1C2E';
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [scrollProgress]);

  const activeStageData = stages[currentStage - 1];
  const Icon = activeStageData.icon;
  const frameNumber = Math.min(120, Math.max(1, Math.round(scrollProgress * 120)));

  const handleSkip = () => {
    if (!containerRef.current) return;
    const targetY = containerRef.current.offsetTop + containerRef.current.offsetHeight;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="relative h-[320vh] bg-motive-dark select-none">
      {/* Sticky Viewport Frame Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Full-bleed Canvas rendering procedural 3D transformation frames */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

        {/* Cinematic Scrollytelling HUD Overlays */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between py-24 pointer-events-none">
          
          {/* Top Telemetry Strip */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-motive-red animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-300 font-bold">
                MOTIVE SEQUENCE FRAME // {frameNumber.toString().padStart(3, '0')} / 120
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
              <span className="hidden sm:inline">SCROLL PROGRESS: {Math.round(scrollProgress * 100)}%</span>
              <button
                type="button"
                onClick={handleSkip}
                className="pointer-events-auto px-3 py-1 bg-zinc-900 border border-zinc-700 hover:border-motive-red text-white text-[11px] rounded transition-colors flex items-center gap-1.5"
              >
                <span>Skip Intro</span>
                <ArrowDown className="w-3 h-3 text-motive-red" />
              </button>
            </div>
          </div>

          {/* Center Editorial Narrative Box */}
          <div className="max-w-2xl bg-black/60 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-zinc-800/90 space-y-4 pointer-events-auto shadow-darkcard">
            <div className="flex items-center gap-2">
              <Icon className="w-5 h-5 text-motive-red" />
              <span className="font-mono text-xs uppercase tracking-widest text-motive-red font-bold">
                {activeStageData.tag}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {activeStageData.headline}
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              {activeStageData.sub}
            </p>

            {/* Stage Step Progress Indicator */}
            <div className="grid grid-cols-4 gap-2 pt-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentStage === step
                      ? 'bg-motive-red shadow-[0_0_8px_#ED1C2E]'
                      : currentStage > step
                      ? 'bg-zinc-600'
                      : 'bg-zinc-800'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Prompt Strip */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pt-4 border-t border-zinc-800/80">
            <div className="flex items-center gap-2">
              <span className="text-motive-red">&darr;</span>
              <span>Scroll down to advance sequence</span>
            </div>
            <span className="text-zinc-400">
              {scrollProgress >= 0.98 ? 'SYSTEM READY — FULL PLATFORM BELOW' : 'TRANSFORMATION IN PROGRESS'}
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
