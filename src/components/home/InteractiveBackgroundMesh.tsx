'use client';

import React, { useRef, useEffect } from 'react';

export const InteractiveBackgroundMesh: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = container.clientWidth || window.innerWidth);
    let height = (canvas.height = container.clientHeight || 650);

    const handleResize = () => {
      if (!container) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Lightweight nodes (20 max) to keep O(N^2) checks under 190 comparisons
    const nodeCount = Math.min(Math.floor((width * height) / 35000), 22);
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      isAccent: boolean;
    }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() < 0.2 ? 2.5 : 1.5,
        isAccent: Math.random() < 0.15,
      });
    }

    const maxDistance = 120;
    let lastFrameTime = 0;
    const targetInterval = 1000 / 30; // 30 FPS cap to minimize main-thread execution time

    const render = (currentTime: number) => {
      if (!isVisible) return;

      animationFrameId = requestAnimationFrame(render);

      // Frame rate throttling for CPU efficiency
      const delta = currentTime - lastFrameTime;
      if (delta < targetInterval) return;
      lastFrameTime = currentTime - (delta % targetInterval);

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerping
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      // Update nodes and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x <= 5 || node.x >= width - 5) node.vx *= -1;
        if (node.y <= 5 || node.y >= height - 5) node.vy *= -1;

        // Mouse repulsion
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < 10000 && distSq > 0) {
          const dist = Math.sqrt(distSq);
          const force = (100 - dist) / 100;
          node.x -= (dx / dist) * force * 1.5;
          node.y -= (dy / dist) * force * 1.5;
        }

        // Draw connections to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const target = nodes[j];
          const cdx = target.x - node.x;
          const cdy = target.y - node.y;
          const cdistSq = cdx * cdx + cdy * cdy;

          if (cdistSq < maxDistance * maxDistance) {
            const cdist = Math.sqrt(cdistSq);
            const alpha = (1 - cdist / maxDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle =
              node.isAccent || target.isAccent
                ? `rgba(220, 38, 38, ${alpha * 1.5})`
                : `rgba(17, 17, 17, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw node points
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isAccent ? '#DC2626' : '#222222';
        ctx.fill();
      }
    };

    // Pause animation when hero is not visible on screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            lastFrameTime = performance.now();
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(render);
          } else {
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Defer initial loop slightly so it does not block first contentful paint (FCP)
    const startupTimer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(render);
    }, 150);

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave, { passive: true });

    return () => {
      clearTimeout(startupTimer);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Zero-cost hardware-accelerated subtle CSS architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #000000 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none block"
        aria-hidden="true"
      />
    </div>
  );
};
