'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Zap, Layout, TrendingUp, Cpu, ShieldCheck, Clock } from 'lucide-react';

export const BrandIntroSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 bg-motive-offwhite/40 border-b border-motive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow & Major Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20 pb-16 border-b border-motive-border">
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

          <div className="lg:col-span-7 lg:pl-8 space-y-6">
            <p className="text-lg sm:text-xl text-motive-black font-medium leading-relaxed">
              At Motive Technologies, we believe technology is most valuable when it solves concrete business problems. We unite intelligent automation, thoughtful engineering, and organic search growth so your company operates smoother, closes deals faster, and scales predictably.
            </p>
            <p className="text-sm sm:text-base text-motive-grey leading-relaxed">
              Too many growing businesses struggle with disconnected software tools, hours wasted on repetitive administrative tasks, and static websites that fail to attract real paying clients. We engineer unified digital solutions that automate your daily workload and turn your online presence into a dependable growth engine.
            </p>
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
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-motive-border border-b border-motive-border pb-12">
          
          {/* Pillar 1 */}
          <div className="pb-8 md:pb-0 md:pr-8 space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest">
                01 // BEST AI AGENTS &amp; AUTOMATION
              </span>
              <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-motive-red group-hover:scale-110 transition-transform">
                <Cpu className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-motive-black">
              Best AI Agents &amp; Everyday Automation
            </h3>
            <p className="text-sm text-motive-grey leading-relaxed">
              Eliminate tedious spreadsheets, manual email follow-ups, and repetitive data entry. We engineer the best AI agents and autonomous workflows connecting your tools, WhatsApp, and CRM so your business operates smoothly 24/7 without delays or human error.
            </p>
            <ul className="space-y-1.5 pt-2 text-xs text-zinc-600 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0" />
                <span>Instant 24/7 WhatsApp customer replies</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0" />
                <span>Automated invoicing, leads &amp; CRM sync</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="py-8 md:py-0 md:px-8 space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest">
                02 // BESPOKE DIGITAL PRESENCE
              </span>
              <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-motive-red group-hover:scale-110 transition-transform">
                <Layout className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-motive-black">
              High-Converting Web &amp; Mobile
            </h3>
            <p className="text-sm text-motive-grey leading-relaxed">
              Elevate your company with custom-designed, lightning-fast corporate websites, mobile apps, and client portals that build immediate institutional trust and turn visitors into high-value clients.
            </p>
            <ul className="space-y-1.5 pt-2 text-xs text-zinc-600 font-medium">
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
          <div className="pt-8 md:pt-0 md:pl-8 space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest">
                03 // SUSTAINABLE ACQUISITION
              </span>
              <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-motive-red group-hover:scale-110 transition-transform">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-motive-black">
              Predictable Inbound Growth
            </h3>
            <p className="text-sm text-motive-grey leading-relaxed">
              Stop relying solely on expensive paid ads. Our technical SEO, AEO, and GEO architectures put your brand at the very top of Google and AI answer engines when high-intent buyers search for your services.
            </p>
            <ul className="space-y-1.5 pt-2 text-xs text-zinc-600 font-medium">
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
