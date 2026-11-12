'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Cpu, Network, Zap, Shield, Sparkles, Activity } from 'lucide-react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  highlight: boolean;
  label: string;
}

interface Pulse {
  sourceIndex: number;
  targetIndex: number;
  progress: number;
  speed: number;
}

export const ArchitecturalCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activePreset, setActivePreset] = useState<'agents' | 'cloud' | 'search'>('agents');
  const [telemetry, setTelemetry] = useState({
    fps: 60,
    latency: '11.8ms',
    activeNodes: 18,
    status: 'OPTIMAL',
    packetsSec: '1,420/s',
  });

  const mouseRef = useRef({ x: -1000, y: -1000, isHovered: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 550);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 420);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Node definitions based on active preset
    const presetLabels = {
      agents: ['LLM Core', 'Planner', 'Tool Router', 'RAG Store', 'WhatsApp API', 'CRM Webhook', 'Evaluator', 'Guardrail'],
      cloud: ['Edge CDN', 'Next.js App', 'PostgreSQL', 'Redis Cache', 'Auth Worker', 'Job Queue', 'Blob Storage', 'API Gateway'],
      search: ['Crawl Bot', 'JSON-LD', 'Core Vitals', 'Sitemap Hub', 'Semantic Cluster', 'Entity Graph', 'Canonical Graph', 'SERP Index'],
    }[activePreset];

    const nodeCount = 18;
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * (width - 60) + 30,
        y: Math.random() * (height - 60) + 30,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        baseRadius: i < presetLabels.length ? 3.5 : 2,
        highlight: i === 0 || i === 3,
        label: i < presetLabels.length ? presetLabels[i] : '',
      });
    }

    const pulses: Pulse[] = [];
    const maxPulses = 5;

    let lastTime = performance.now();
    let frameCount = 0;

    const render = (now: number) => {
      // Calculate FPS
      frameCount++;
      if (now - lastTime >= 1000) {
        setTelemetry((prev) => ({
          ...prev,
          fps: Math.round((frameCount * 1000) / (now - lastTime)),
          latency: `${(10.5 + Math.random() * 2.5).toFixed(1)}ms`,
        }));
        frameCount = 0;
        lastTime = now;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw subtle background architectural coordinate grid
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
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

      // Update and connect nodes
      const maxDistance = 120;
      const mouse = mouseRef.current;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Mouse repulsion
        if (mouse.isHovered) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90 && dist > 0) {
            const force = (90 - dist) / 90;
            node.x -= (dx / dist) * force * 1.5;
            node.y -= (dy / dist) * force * 1.5;
          }
        }

        // Velocity motion
        node.x += node.vx;
        node.y += node.vy;

        // Wall bounce with padding
        if (node.x <= 20 || node.x >= width - 20) node.vx *= -1;
        if (node.y <= 20 || node.y >= height - 20) node.vy *= -1;

        // Connect to neighbors
        for (let j = i + 1; j < nodes.length; j++) {
          const target = nodes[j];
          const dx = target.x - node.x;
          const dy = target.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = 1 - dist / maxDistance;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = `rgba(17, 17, 17, ${alpha * 0.15})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Randomly spawn pulses between connected nodes
            if (pulses.length < maxPulses && Math.random() < 0.004) {
              pulses.push({
                sourceIndex: i,
                targetIndex: j,
                progress: 0,
                speed: 0.015 + Math.random() * 0.02,
              });
            }
          }
        }
      }

      // Update and draw signal pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const source = nodes[pulse.sourceIndex];
        const target = nodes[pulse.targetIndex];
        if (!source || !target) continue;

        const curX = source.x + (target.x - source.x) * pulse.progress;
        const curY = source.y + (target.y - source.y) * pulse.progress;

        // Draw glowing red signal packet
        ctx.beginPath();
        ctx.arc(curX, curY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ED1C2E';
        ctx.shadowColor = '#ED1C2E';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Draw nodes and labels
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.baseRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.highlight ? '#ED1C2E' : '#111111';
        ctx.fill();

        // Outer ring on highlight nodes
        if (node.highlight) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.baseRadius + 4, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(237, 28, 46, 0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw monospaced label
        if (node.label) {
          ctx.font = '9px "JetBrains Mono", monospace';
          ctx.fillStyle = node.highlight ? '#ED1C2E' : '#555555';
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isHovered: true,
      };
    };

    const onMouseLeave = () => {
      mouseRef.current.isHovered = false;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activePreset]);

  return (
    <div className="relative w-full max-w-xl mx-auto bg-white border border-motive-border rounded-xl shadow-premium overflow-hidden">
      {/* Upper Architectural Status Header */}
      <div className="px-5 py-3.5 border-b border-motive-border bg-motive-offwhite/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-motive-red animate-ping" />
          <span className="w-2 h-2 rounded-full bg-motive-red -ml-4" />
          <span className="font-mono text-xs font-bold text-motive-black uppercase tracking-wider">
            SYSTEM ARCHITECTURE TELEMETRY
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono text-motive-grey">
          <span className="hidden sm:inline">PING: {telemetry.latency}</span>
          <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 font-semibold rounded border border-emerald-200">
            {telemetry.status}
          </span>
        </div>
      </div>

      {/* Preset Mode Switcher Pills */}
      <div className="px-5 py-2.5 bg-white border-b border-motive-border flex items-center justify-between gap-2 overflow-x-auto text-xs font-mono">
        <span className="text-[10px] text-motive-grey uppercase tracking-widest hidden sm:inline">
          LIVE TOPOLOGY:
        </span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setActivePreset('agents')}
            className={`px-3 py-1 rounded transition-colors text-[11px] font-semibold flex items-center gap-1.5 ${
              activePreset === 'agents'
                ? 'bg-motive-black text-white'
                : 'text-motive-grey hover:text-motive-black bg-motive-offwhite'
            }`}
          >
            <Cpu className="w-3 h-3 text-motive-red" />
            <span>AI Reasoning</span>
          </button>

          <button
            type="button"
            onClick={() => setActivePreset('cloud')}
            className={`px-3 py-1 rounded transition-colors text-[11px] font-semibold flex items-center gap-1.5 ${
              activePreset === 'cloud'
                ? 'bg-motive-black text-white'
                : 'text-motive-grey hover:text-motive-black bg-motive-offwhite'
            }`}
          >
            <Network className="w-3 h-3 text-motive-red" />
            <span>Web Platform</span>
          </button>

          <button
            type="button"
            onClick={() => setActivePreset('search')}
            className={`px-3 py-1 rounded transition-colors text-[11px] font-semibold flex items-center gap-1.5 ${
              activePreset === 'search'
                ? 'bg-motive-black text-white'
                : 'text-motive-grey hover:text-motive-black bg-motive-offwhite'
            }`}
          >
            <Zap className="w-3 h-3 text-motive-red" />
            <span>Organic Graph</span>
          </button>
        </div>
      </div>

      {/* Canvas Viewport */}
      <div className="relative h-64 sm:h-72 w-full bg-white cursor-crosshair">
        <canvas ref={canvasRef} className="w-full h-full block" />
        
        {/* Floating crosshairs */}
        <span className="absolute top-2 left-3 font-mono text-[9px] text-motive-lightgrey pointer-events-none">
          + LAT_X40
        </span>
        <span className="absolute bottom-2 right-3 font-mono text-[9px] text-motive-lightgrey pointer-events-none">
          SYS_PHYSICS: 60FPS +
        </span>
      </div>

      {/* Real-Time Operational Footprint Readout */}
      <div className="px-5 py-3 border-t border-motive-border bg-motive-offwhite/40 flex items-center justify-between text-[11px] font-mono text-motive-grey">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-motive-red" />
          <span>Interactive Node Mesh: Hover / Drag over canvas</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-motive-black font-semibold">FPS: {telemetry.fps}</span>
          <span className="text-zinc-400">|</span>
          <span className="text-motive-red font-semibold">{telemetry.packetsSec}</span>
        </div>
      </div>
    </div>
  );
};
