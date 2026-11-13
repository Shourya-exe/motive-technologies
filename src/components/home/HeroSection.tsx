'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, Code2, TrendingUp, ShieldCheck, Clock, Zap } from 'lucide-react';
import { InteractiveBackgroundMesh } from './InteractiveBackgroundMesh';
import { COMPANY_INFO } from '@/data/siteData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32 border-b border-motive-border flex flex-col justify-center">
      {/* Full-bleed interactive mouse-reactive background canvas */}
      <InteractiveBackgroundMesh />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Eyebrow Label with subtle red indicator */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-motive-offwhite border border-motive-border shadow-subtle">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-motive-red opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-motive-red" />
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-motive-black">
            MOTIVE TECHNOLOGIES &bull; DIGITAL INNOVATION &amp; BUSINESS AUTOMATION
          </span>
        </div>

        {/* Big Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-motive-black leading-[1.06] max-w-4xl mx-auto">
          Building Intelligent Systems for a{' '}
          <span className="text-motive-red">
            Smarter Business Future.
          </span>
        </h1>

        {/* Supporting Paragraph - Clear, Client-Focused */}
        <p className="text-base sm:text-xl text-motive-grey max-w-2xl mx-auto leading-relaxed font-normal">
          We combine custom AI automation, high-performance web development, and strategic SEO to help businesses eliminate manual bottlenecks, attract qualified clients, and scale with confidence.
        </p>

        {/* Clean CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-motive-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red transition-all duration-200 shadow-md group"
          >
            <span>Schedule a Discovery Call</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-motive-black border border-motive-border text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-offwhite hover:border-zinc-400 transition-all duration-200 shadow-subtle"
          >
            <span>Explore Our Capabilities</span>
          </Link>
        </div>

        {/* Three Client-First Capabilities Cards */}
        <div className="pt-12 border-t border-motive-border max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          
          {/* Card 1: AI Automation */}
          <Link
            href="/services/ai-automation"
            className="p-5 bg-white/90 backdrop-blur-sm rounded-xl border border-motive-border space-y-2 shadow-subtle hover:bg-zinc-100 hover:border-zinc-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-motive-black group-hover:text-black transition-colors duration-150">
                <Bot className="w-4 h-4 text-motive-red" />
                <span>AI AUTOMATION</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-motive-red group-hover:translate-x-1 transition-all duration-150" />
            </div>
            <p className="text-xs text-motive-grey group-hover:text-zinc-700 leading-relaxed transition-colors duration-150">
              Automate repetitive tasks, connect WhatsApp &amp; CRM, and deploy 24/7 AI assistants.
            </p>
            <span className="text-[10px] font-mono text-motive-red font-semibold block pt-1">
              Save 20–40 hrs/week &rarr;
            </span>
          </Link>

          {/* Card 2: Digital Engineering */}
          <Link
            href="/services/web-app-development"
            className="p-5 bg-white/90 backdrop-blur-sm rounded-xl border border-motive-border space-y-2 shadow-subtle hover:bg-zinc-100 hover:border-zinc-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-motive-black group-hover:text-black transition-colors duration-150">
                <Code2 className="w-4 h-4 text-motive-red" />
                <span>WEB &amp; APP DEV</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-motive-red group-hover:translate-x-1 transition-all duration-150" />
            </div>
            <p className="text-xs text-motive-grey group-hover:text-zinc-700 leading-relaxed transition-colors duration-150">
              Ultra-fast corporate websites, client portals &amp; mobile apps engineered to convert.
            </p>
            <span className="text-[10px] font-mono text-motive-red font-semibold block pt-1">
              Sub-second load times &rarr;
            </span>
          </Link>

          {/* Card 3: Organic Growth */}
          <Link
            href="/services/seo-digital-growth"
            className="p-5 bg-white/90 backdrop-blur-sm rounded-xl border border-motive-border space-y-2 shadow-subtle hover:bg-zinc-100 hover:border-zinc-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-motive-black group-hover:text-black transition-colors duration-150">
                <TrendingUp className="w-4 h-4 text-motive-red" />
                <span>SEO &amp; GROWTH</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-motive-red group-hover:translate-x-1 transition-all duration-150" />
            </div>
            <p className="text-xs text-motive-grey group-hover:text-zinc-700 leading-relaxed transition-colors duration-150">
              Dominate Google search results with technical SEO and high-intent keyword strategies.
            </p>
            <span className="text-[10px] font-mono text-motive-red font-semibold block pt-1">
              Continuous inbound leads &rarr;
            </span>
          </Link>

        </div>

        {/* Client Trust & Assurance Badges */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] font-mono text-zinc-500">
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-motive-red" />
            <span>Fast Scoping in 24–48 Hours</span>
          </span>
          <span className="hidden sm:inline text-zinc-300">&bull;</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-motive-red" />
            <span>Enterprise Security &amp; NDA Standard</span>
          </span>
          <span className="hidden sm:inline text-zinc-300">&bull;</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-motive-red" />
            <span>Dedicated Direct Communication</span>
          </span>
        </div>

      </div>
    </section>
  );
};
