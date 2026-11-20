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
              At Motive Technologies, we build smart automations, fast modern websites, and search engine visibility so your team spends less time on repetitive busywork, answers customers faster, and wins more business.
            </p>
            
            {/* Quick Metrics Bar replacing text wall */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-white rounded-lg border border-motive-border text-center">
                <span className="block font-mono text-base sm:text-lg font-bold text-motive-red">&lt; 12s</span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Customer Reply Time</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-motive-border text-center">
                <span className="block font-mono text-base sm:text-lg font-bold text-motive-black">20–40h</span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Saved Each Week</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-motive-border text-center">
                <span className="block font-mono text-base sm:text-lg font-bold text-motive-black">98/100</span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Website Speed Score</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red transition-colors group"
              >
                <span>Learn More About How We Work</span>
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
                01 // AI &amp; AUTOMATION
              </span>
              <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-motive-red group-hover:scale-105 transition-transform">
                <Cpu className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-motive-black">
              Smart AI Assistants &amp; Automation
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Say goodbye to messy spreadsheets, manual follow-ups, and copy-pasting. Custom AI assistants connect your tools, WhatsApp, and CRM to handle routine tasks smoothly 24/7.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-zinc-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0" />
                <span>Instant 24/7 WhatsApp customer replies</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0" />
                <span>Automatic billing, lead capture &amp; CRM updates</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-7 rounded-2xl border border-motive-border shadow-sm hover:shadow-md transition-all space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest">
                02 // WEB &amp; APPS
              </span>
              <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 group-hover:scale-105 transition-transform">
                <Layout className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-motive-black">
              Fast, Modern Websites &amp; Mobile Apps
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Give your business a clean, professional website, customer portal, or mobile app that loads in under a second and makes a great impression on potential clients.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-zinc-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0" />
                <span>Loads in less than a second on any phone</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0" />
                <span>Custom customer portals &amp; mobile apps</span>
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
              Get Found on Google &amp; AI Search
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Stop burning your budget on expensive paid ads. We optimize your website so buyers find you directly on Google search and AI tools like ChatGPT and Perplexity.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-zinc-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0" />
                <span>Rank high for keywords buyers actually search for</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0" />
                <span>Steady stream of inbound inquiries without ad spend</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
