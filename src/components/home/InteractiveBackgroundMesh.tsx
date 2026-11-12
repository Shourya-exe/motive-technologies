'use client';

import React, { useRef, useEffect } from 'react';

export const InteractiveBackgroundMesh: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate balanced, subtle architectural nodes
    const nodeCount = Math.min(Math.floor((width * height) / 16000), 45);
    const nodes: {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      radius: number;
      isAccent: boolean;
    }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() < 0.15 ? 2.5 : 1.5,
        isAccent: Math.random() < 0.12, // occasional signature red dot
      });
    }

    const maxDistance = 140;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerping
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Draw subtle background grid dots
      const gridSpacing = 48;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      for (let x = 24; x < width; x += gridSpacing) {
        for (let y = 24; y < height; y += gridSpacing) {
          ctx.fillRect(x, y, 1, 1);
        }
      }

      // Draw interactive mouse proximity ripple
      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          200
        );
        gradient.addColorStop(0, 'rgba(237, 28, 46, 0.05)');
        gradient.addColorStop(0.5, 'rgba(237, 28, 46, 0.015)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update nodes and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce
        if (node.x <= 10 || node.x >= width - 10) node.vx *= -1;
        if (node.y <= 10 || node.y >= height - 10) node.vy *= -1;

        // Mouse repulsion
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120;
          node.x -= (dx / dist) * force * 1.8;
          node.y -= (dy / dist) * force * 1.8;
        }

        // Draw connections to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const target = nodes[j];
          const cdx = target.x - node.x;
          const cdy = target.y - node.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < maxDistance) {
            const alpha = (1 - cdist / maxDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle =
              node.isAccent || target.isAccent
                ? `rgba(237, 28, 46, ${alpha * 1.5})`
                : `rgba(17, 17, 17, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isAccent ? '#ED1C2E' : '#222222';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 block"
    />
  );
};
