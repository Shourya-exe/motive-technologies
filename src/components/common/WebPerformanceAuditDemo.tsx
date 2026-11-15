'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Gauge, ShieldCheck, Zap, Globe, CheckCircle2, RotateCcw, Smartphone, Laptop, Sparkles } from 'lucide-react';

interface MetricItem {
  label: string;
  value: string;
  target: string;
  status: 'passed' | 'optimal';
}

export const WebPerformanceAuditDemo: React.FC = () => {
  const [auditStep, setAuditStep] = useState(0); // 0 = idle, 1 = routing, 2 = hydration, 3 = audit run, 4 = complete
  const [scores, setScores] = useState({ perf: 0, a11y: 0, bp: 0, seo: 0 });
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isInView, setIsInView] = useState(false);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const resetAudit = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setAuditStep(0);
    setScores({ perf: 0, a11y: 0, bp: 0, seo: 0 });
  };

  useEffect(() => {
    if (!isInView) return;

    if (auditStep === 0) {
      // Step 1: Start edge routing
      timerRef.current = setTimeout(() => {
        setAuditStep(1);
      }, 500);
    } else if (auditStep === 1) {
      // Step 2: Edge routing resolved, start hydration
      timerRef.current = setTimeout(() => {
        setAuditStep(2);
      }, 900);
    } else if (auditStep === 2) {
      // Step 3: Hydration complete, trigger Lighthouse audit sweep
      timerRef.current = setTimeout(() => {
        setAuditStep(3);
        // Animate scores to 100
        let p = 50;
        const interval = setInterval(() => {
          p += 5;
          if (p >= 100) {
            clearInterval(interval);
            setScores({ perf: 98, a11y: 100, bp: 100, seo: 100 });
            setAuditStep(4);
          } else {
            setScores({ perf: p, a11y: p, bp: p, seo: p });
          }
        }, 30);
      }, 1000);
    } else if (auditStep === 4) {
      // Completed, hold for 6 seconds then replay
      timerRef.current = setTimeout(() => {
        resetAudit();
      }, 6000);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [auditStep]);

  return (
    <div
      ref={rootRef}
      className="w-full h-[520px] max-h-[520px] bg-[#0d0f12] text-white rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden flex flex-col font-sans"
    >
      
      {/* Top Browser Bar / Address Bar */}
      <div className="px-5 py-3 bg-[#13161c] border-b border-zinc-800 flex items-center justify-between text-xs shrink-0">
        <div className="flex items-center gap-2">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-black/60 rounded-md border border-zinc-800 font-mono text-[11px] text-zinc-300">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>https://client-portal.motive.build</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-md p-0.5">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`p-1 rounded ${deviceMode === 'desktop' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              title="Desktop Viewport"
            >
              <Laptop className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`p-1 rounded ${deviceMode === 'mobile' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              title="Mobile Viewport"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => resetAudit()}
            className="flex items-center gap-1 text-[10px] font-mono text-zinc-400 hover:text-white px-2 py-1 rounded bg-zinc-900 border border-zinc-800 transition-colors"
          >
            <RotateCcw className="w-2.5 h-2.5 text-motive-red" />
            <span>RE-AUDIT</span>
          </button>
        </div>
      </div>

      {/* Main Performance Display Container */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between overflow-hidden">
        
        {/* Monospace Header */}
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-zinc-400 border-b border-zinc-800/60 pb-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-semibold text-white">LIGHTHOUSE 100 // PERFORMANCE TELEMETRY</span>
          </div>
          <span className="text-zinc-500">EDGE RUNTIME AUDIT</span>
        </div>

        {/* 4 Circular Lighthouse Score Rings */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
          {[
            { label: 'Performance', score: scores.perf, color: 'text-emerald-400', border: 'border-emerald-500/40' },
            { label: 'Accessibility', score: scores.a11y, color: 'text-emerald-400', border: 'border-emerald-500/40' },
            { label: 'Best Practices', score: scores.bp, color: 'text-emerald-400', border: 'border-emerald-500/40' },
            { label: 'SEO', score: scores.seo, color: 'text-emerald-400', border: 'border-emerald-500/40' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#151921] border border-zinc-800 rounded-xl p-3.5 text-center flex flex-col items-center justify-center space-y-1.5 shadow-sm"
            >
              <div className={`w-12 h-12 rounded-full border-2 ${item.border} flex items-center justify-center font-mono font-bold text-base ${item.color} shadow-xs`}>
                {item.score > 0 ? item.score : '--'}
              </div>
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Real-time Execution Steps */}
        <div className="space-y-2 font-mono text-xs">
          
          {/* Step 1 */}
          <div className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-between ${
            auditStep >= 1 ? 'bg-[#181d26] border-zinc-700/80 text-zinc-200' : 'bg-transparent border-zinc-900 text-zinc-600'
          }`}>
            <div className="flex items-center gap-2.5">
              <span className={`w-2 h-2 rounded-full ${auditStep >= 1 ? 'bg-cyan-400 animate-pulse' : 'bg-zinc-700'}`} />
              <span>01. Edge SSR DNS &amp; Routing Handshake</span>
            </div>
            <span className="font-bold text-cyan-400 text-[11px]">
              {auditStep >= 1 ? '8ms TTFB' : 'Queued'}
            </span>
          </div>

          {/* Step 2 */}
          <div className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-between ${
            auditStep >= 2 ? 'bg-[#181d26] border-zinc-700/80 text-zinc-200' : 'bg-transparent border-zinc-900 text-zinc-600'
          }`}>
            <div className="flex items-center gap-2.5">
              <span className={`w-2 h-2 rounded-full ${auditStep >= 2 ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-700'}`} />
              <span>02. Streaming Client Hydration (Next.js 15)</span>
            </div>
            <span className="font-bold text-emerald-400 text-[11px]">
              {auditStep >= 2 ? '0.24s FCP' : 'Queued'}
            </span>
          </div>

          {/* Step 3 & 4 */}
          <div className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-between ${
            auditStep >= 3 ? 'bg-white text-black border-white shadow-xl scale-[1.01]' : 'bg-transparent border-zinc-900 text-zinc-600'
          }`}>
            <div className="flex items-center gap-2.5">
              <span className={`w-2 h-2 rounded-full ${auditStep >= 3 ? 'bg-emerald-600 animate-ping' : 'bg-zinc-700'}`} />
              <span className="font-bold">03. Core Web Vitals Status</span>
            </div>
            <span className={`font-mono text-[11px] font-bold ${auditStep >= 3 ? 'text-emerald-700' : 'text-zinc-600'}`}>
              {auditStep >= 4 ? 'LCP: 0.58s • CLS: 0.00' : auditStep === 3 ? 'Evaluating...' : 'Queued'}
            </span>
          </div>

        </div>

        {/* Bottom Telemetry Bar */}
        <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-zinc-400 shrink-0">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>WCAG 2.1 AAA Compliant</span>
            </span>
            <span className="text-zinc-600">&bull;</span>
            <span className="text-zinc-300">0% Layout Shift (CLS)</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-500">SPEED INDEX:</span>
            <span className="text-white font-semibold">Sub-Second Global TTFB</span>
          </div>
        </div>

      </div>

    </div>
  );
};
