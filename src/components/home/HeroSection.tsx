'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Code2,
  TrendingUp,
  ShieldCheck,
  Clock,
  Zap,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import { HeroConsultationForm } from './HeroConsultationForm';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-16 lg:pt-20 lg:pb-28 border-b border-motive-border">
      {/* Clean, high-performance executive background grid (Subtle, zero lag, no overlapping text) */}
      <div className="absolute inset-0 grid-bg-subtle opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Two-Column Hero Grid: Left Text, Right Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE: Value Proposition, Headline, and Conversion CTAs */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-7">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-mono font-medium text-zinc-800 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-motive-red" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-900">
                Smart AI Assistants &amp; Modern Software
              </span>
            </div>

            {/* Big Editorial Headline - Left-aligned & High-Contrast */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-motive-black leading-[1.08]">
              Building Intelligent Systems for a{' '}
              <span className="text-motive-red relative inline-block">
                Smarter Business Future.
                <span className="hidden sm:block absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-red-500/0 via-red-500/40 to-red-500/0 rounded-full" />
              </span>
            </h1>

            {/* Supporting Paragraph - Clear, Client-Focused */}
            <p className="text-base sm:text-lg text-motive-grey max-w-2xl leading-relaxed font-normal">
              We build custom AI assistants, automate everyday repetitive tasks, create fast modern websites, and help you get found on Google and AI search engines—so your business can run smoother, save time, and win more clients.
            </p>

            {/* Architectural Highlights / Tangible Conversion Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs font-mono text-zinc-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-motive-red flex-shrink-0" />
                <span>&lt; 10s WhatsApp &amp; Website Replies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-motive-red flex-shrink-0" />
                <span>Syncs WhatsApp, CRM &amp; Billing Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-motive-red flex-shrink-0" />
                <span>Saves 20–40 Hours of Busywork Weekly</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-motive-red flex-shrink-0" />
                <span>You Own 100% of All Code &amp; Designs</span>
              </div>
            </div>

            {/* High-Converting CTAs (Left-aligned) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-motive-black text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-motive-red transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <span>Schedule a Discovery Call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-motive-black border border-motive-border text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-motive-offwhite hover:border-zinc-400 transition-all duration-200 shadow-subtle hover:-translate-y-0.5"
              >
                <span>Explore Capabilities</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              </Link>
            </div>

            {/* Client Trust & Assurance Badges */}
            <div className="pt-3 pb-1 flex flex-wrap items-center gap-x-5 sm:gap-x-7 gap-y-2 text-[11px] font-mono text-zinc-700 font-medium">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-motive-red flex-shrink-0" />
                <span>Fast Scoping in 24–48 Hours</span>
              </span>
              <span className="hidden sm:inline text-zinc-300">&bull;</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-motive-red flex-shrink-0" />
                <span>Strict NDA &amp; 100% IP Ownership</span>
              </span>
              <span className="hidden sm:inline text-zinc-300">&bull;</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-motive-red flex-shrink-0" />
                <span>Direct Founder Collaboration</span>
              </span>
            </div>

          </div>

          {/* RIGHT SIDE: Free Consultation Lead Capture Form */}
          <div className="lg:col-span-5 w-full">
            <HeroConsultationForm />
          </div>

        </div>

        {/* Accessible Section Landmark */}
        <h2 className="sr-only">Core Capabilities Overview</h2>

        {/* Three Client-First Capabilities Cards (Retained below hero split for high conversion) */}
        <div className="pt-12 sm:pt-16 mt-12 sm:mt-16 border-t border-motive-border grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          
          {/* Card 1: Best AI Agents & Automation */}
          <Link
            href="/services/ai-automation"
            className="p-6 bg-white rounded-xl border border-motive-border space-y-3 shadow-subtle hover:bg-zinc-50 hover:border-zinc-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-motive-black group-hover:text-black transition-colors duration-150">
                <div className="w-7 h-7 rounded bg-red-50 border border-red-100 flex items-center justify-center text-motive-red">
                  <Bot className="w-4 h-4" />
                </div>
                <span>BEST AI AGENTS &amp; AUTOMATION</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-motive-red group-hover:translate-x-1 transition-all duration-150" />
            </div>
            <p className="text-xs text-motive-grey group-hover:text-zinc-800 leading-relaxed transition-colors duration-150">
              Deploy the best AI agents development solutions: automate repetitive workflows, connect WhatsApp &amp; CRM, and launch 24/7 autonomous task assistants.
            </p>
            <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono">
              <span className="text-motive-red font-semibold">Save 20–40 hrs/week</span>
              <span className="text-zinc-600 font-medium">0% error rate</span>
            </div>
          </Link>

          {/* Card 2: Digital Engineering */}
          <Link
            href="/services/web-app-development"
            className="p-6 bg-white rounded-xl border border-motive-border space-y-3 shadow-subtle hover:bg-zinc-50 hover:border-zinc-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-motive-black group-hover:text-black transition-colors duration-150">
                <div className="w-7 h-7 rounded bg-red-50 border border-red-100 flex items-center justify-center text-motive-red">
                  <Code2 className="w-4 h-4" />
                </div>
                <span>WEB &amp; APP DEV</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-motive-red group-hover:translate-x-1 transition-all duration-150" />
            </div>
            <p className="text-xs text-motive-grey group-hover:text-zinc-800 leading-relaxed transition-colors duration-150">
              Ultra-fast corporate platforms, secure client portals &amp; cross-platform mobile apps engineered to convert.
            </p>
            <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono">
              <span className="text-motive-red font-semibold">Sub-second load times</span>
              <span className="text-zinc-600 font-medium">Lighthouse 100</span>
            </div>
          </Link>

          {/* Card 3: Organic Growth & AEO/GEO */}
          <Link
            href="/services/seo-digital-growth"
            className="p-6 bg-white rounded-xl border border-motive-border space-y-3 shadow-subtle hover:bg-zinc-50 hover:border-zinc-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-motive-black group-hover:text-black transition-colors duration-150">
                <div className="w-7 h-7 rounded bg-red-50 border border-red-100 flex items-center justify-center text-motive-red">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span>SEO, AEO &amp; GEO</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-motive-red group-hover:translate-x-1 transition-all duration-150" />
            </div>
            <p className="text-xs text-motive-grey group-hover:text-zinc-800 leading-relaxed transition-colors duration-150">
              Dominate Google search results and get cited across modern AI answer engines (Perplexity &amp; ChatGPT Search).
            </p>
            <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono">
              <span className="text-motive-red font-semibold">Continuous inbound leads</span>
              <span className="text-zinc-600 font-medium">Zero ad spend</span>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
};
