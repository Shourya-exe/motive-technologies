'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Cpu, Layers, TrendingUp, Sparkles, Terminal, ShieldCheck } from 'lucide-react';
import { ArchitecturalCanvas } from './ArchitecturalCanvas';
import { COMPANY_INFO } from '@/data/siteData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-motive-border">
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 grid-bg-subtle opacity-70 pointer-events-none" />

      {/* Subtle ambient lighting */}
      <div
        className="absolute top-10 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Brand Typography */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            
            {/* Eyebrow Label with pulsating status indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded bg-motive-offwhite border border-motive-border shadow-subtle">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-motive-red opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-motive-red" />
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-motive-black">
                MOTIVE TECHNOLOGIES / DIGITAL INNOVATION &amp; ENGINEERING
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-motive-black leading-[1.08]">
              Building Intelligent Systems for a{' '}
              <span className="text-motive-red underline decoration-motive-red/30 decoration-wavy underline-offset-4">
                Smarter Business Future.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-motive-grey max-w-2xl leading-relaxed font-normal">
              {COMPANY_INFO.subheadline}
            </p>

            {/* CTAs with Magnetic Hover Styling */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-motive-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red transition-all duration-200 shadow-md group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-motive-black border border-motive-border text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-offwhite hover:border-zinc-400 transition-all duration-200 shadow-subtle"
              >
                <span>Explore Our Capabilities</span>
              </Link>
            </div>

            {/* Three concise capabilities strip */}
            <div className="pt-8 border-t border-motive-border grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1 p-3 bg-motive-offwhite/50 rounded border border-motive-border">
                <div className="flex items-center gap-1.5 text-motive-black font-mono text-xs font-bold">
                  <Cpu className="w-3.5 h-3.5 text-motive-red" />
                  <span>AI AUTOMATION</span>
                </div>
                <p className="text-[11px] text-motive-grey leading-tight">
                  Autonomous agents &amp; operational logic
                </p>
              </div>

              <div className="space-y-1 p-3 bg-motive-offwhite/50 rounded border border-motive-border">
                <div className="flex items-center gap-1.5 text-motive-black font-mono text-xs font-bold">
                  <Layers className="w-3.5 h-3.5 text-motive-red" />
                  <span>DIGITAL ENGINEERING</span>
                </div>
                <p className="text-[11px] text-motive-grey leading-tight">
                  Web apps, mobile portals &amp; APIs
                </p>
              </div>

              <div className="space-y-1 p-3 bg-motive-offwhite/50 rounded border border-motive-border">
                <div className="flex items-center gap-1.5 text-motive-black font-mono text-xs font-bold">
                  <TrendingUp className="w-3.5 h-3.5 text-motive-red" />
                  <span>ORGANIC GROWTH</span>
                </div>
                <p className="text-[11px] text-motive-grey leading-tight">
                  Technical SEO &amp; semantic ranking
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: High-Frame-Rate Architectural Canvas */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ArchitecturalCanvas />
          </div>

        </div>
      </div>
    </section>
  );
};
