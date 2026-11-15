'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Zap, Layout, TrendingUp, Cpu, ShieldCheck, Clock, Sparkles } from 'lucide-react';

export const BrandIntroSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 bg-motive-offwhite/40 border-b border-motive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow & Major Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-16 border-b border-motive-border">
          <div className="lg:col-span-5 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-motive-red" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
                WHO WE ARE // OPERATING PHILOSOPHY
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-motive-black leading-[1.08]">
              Technology should move your business forward.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pl-8 space-y-5">
            <p className="text-lg sm:text-xl text-motive-black font-medium leading-relaxed">
              At Motive Technologies, we engineer intelligent automation, bespoke web architecture, and organic search visibility to eliminate administrative bottlenecks, close deals faster, and scale predictably.
            </p>
            
            {/* Quick Metrics Bar replacing text wall */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-white rounded-lg border border-motive-border text-center">
                <span className="block font-mono text-base sm:text-lg font-bold text-motive-red">&lt; 12s</span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">AI Response Time</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-motive-border text-center">
                <span className="block font-mono text-base sm:text-lg font-bold text-motive-black">20–40h</span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Saved / Week</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-motive-border text-center">
                <span className="block font-mono text-base sm:text-lg font-bold text-motive-black">98/100</span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Lighthouse Speed</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red transition-colors group"
              >
                <span>Learn More About Our Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-motive-red" />
              </Link>
            </div>
          </div>
        </div>

        {/* Architectural 3-Column Systems Architecture - Executive & Understandable */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <div className="bg-white p-7 rounded-2xl border border-motive-border shadow-sm hover:shadow-md transition-all space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest">
                01 // AI AUTOMATION
              </span>
              <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-motive-red group-hover:scale-105 transition-transform">
                <Cpu className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-motive-black">
              Best AI Agents &amp; Everyday Automation
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Eliminate tedious spreadsheets, manual email follow-ups, and copy-pasting. Autonomous AI agents connect your tools, WhatsApp, and CRM to operate smoothly 24/7.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-zinc-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0" />
                <span>Instant 24/7 WhatsApp lead qualification</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0" />
                <span>Automated invoicing, leads &amp; CRM sync</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-7 rounded-2xl border border-motive-border shadow-sm hover:shadow-md transition-all space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest">
                02 // WEB PLATFORMS
              </span>
              <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 group-hover:scale-105 transition-transform">
                <Layout className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-motive-black">
              High-Converting Web &amp; Mobile
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Elevate your business with custom Next.js corporate platforms, client portals, and mobile apps that establish immediate institutional trust and accelerate conversions.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-zinc-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0" />
                <span>Sub-second page loads with modern Next.js</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0" />
                <span>Bespoke client portals &amp; mobile apps</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-7 rounded-2xl border border-motive-border shadow-sm hover:shadow-md transition-all space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest">
                03 // SEARCH GROWTH
              </span>
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-motive-black">
              Predictable Inbound Growth
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Stop relying solely on expensive paid ads. Technical SEO and AEO architectures place your brand at the top of Google and AI answer engines for high-intent searchers.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-zinc-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0" />
                <span>Top Google rankings for buying-intent keywords</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0" />
                <span>Compounding inbound traffic without monthly ad spend</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
