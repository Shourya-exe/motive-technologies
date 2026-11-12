'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Cpu, Layers, TrendingUp, Sparkles, ChevronDown } from 'lucide-react';
import { InteractiveBackgroundMesh } from './InteractiveBackgroundMesh';
import { COMPANY_INFO } from '@/data/siteData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-20 lg:pt-20 lg:pb-28 border-b border-motive-border min-h-[85vh] flex flex-col justify-center">
      {/* Full-bleed interactive mouse-reactive background canvas (NO clunky boxes) */}
      <InteractiveBackgroundMesh />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Eyebrow Label with subtle red indicator */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-motive-offwhite border border-motive-border shadow-subtle">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-motive-red opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-motive-red" />
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-motive-black">
            MOTIVE TECHNOLOGIES / DIGITAL INNOVATION &amp; ENGINEERING
          </span>
        </div>

        {/* Big Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-motive-black leading-[1.06] max-w-4xl mx-auto">
          Building Intelligent Systems for a{' '}
          <span className="text-motive-red underline decoration-motive-red/30 decoration-wavy underline-offset-8">
            Smarter Business Future.
          </span>
        </h1>

        {/* Supporting Paragraph */}
        <p className="text-base sm:text-xl text-motive-grey max-w-2xl mx-auto leading-relaxed font-normal">
          {COMPANY_INFO.subheadline}
        </p>

        {/* Clean CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-motive-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red transition-all duration-200 shadow-md group"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-motive-black border border-motive-border text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-offwhite hover:border-zinc-400 transition-all duration-200 shadow-subtle"
          >
            <span>Explore Our Capabilities</span>
          </Link>
        </div>

        {/* Three concise capabilities strip */}
        <div className="pt-12 border-t border-motive-border max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-motive-border space-y-1 shadow-subtle">
            <div className="flex items-center gap-1.5 text-motive-black font-mono text-xs font-bold">
              <Cpu className="w-4 h-4 text-motive-red" />
              <span>AI AUTOMATION</span>
            </div>
            <p className="text-[11px] text-motive-grey">
              Autonomous agents &amp; operational logic
            </p>
          </div>

          <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-motive-border space-y-1 shadow-subtle">
            <div className="flex items-center gap-1.5 text-motive-black font-mono text-xs font-bold">
              <Layers className="w-4 h-4 text-motive-red" />
              <span>DIGITAL ENGINEERING</span>
            </div>
            <p className="text-[11px] text-motive-grey">
              Web apps, mobile portals &amp; APIs
            </p>
          </div>

          <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-motive-border space-y-1 shadow-subtle">
            <div className="flex items-center gap-1.5 text-motive-black font-mono text-xs font-bold">
              <TrendingUp className="w-4 h-4 text-motive-red" />
              <span>ORGANIC GROWTH</span>
            </div>
            <p className="text-[11px] text-motive-grey">
              Technical SEO &amp; semantic ranking
            </p>
          </div>
        </div>

        {/* Scroll Indicator Prompt */}
        <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono text-motive-grey">
          <span>Scroll to explore video frame transformation</span>
          <ChevronDown className="w-3.5 h-3.5 text-motive-red animate-bounce" />
        </div>

      </div>
    </section>
  );
};
