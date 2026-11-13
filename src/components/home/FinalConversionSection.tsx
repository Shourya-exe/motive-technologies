'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, PhoneCall, ShieldCheck, MessageCircle, Clock, Zap } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export const FinalConversionSection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-motive-dark text-white border-b border-motive-darkborder overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 grid-bg-dark opacity-40 pointer-events-none" />

      {/* Subtle signature red ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-motive-red/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded">
          <span className="w-2 h-2 rounded-full bg-motive-red animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-300 font-semibold">
            START YOUR TRANSFORMATION
          </span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-tight max-w-3xl mx-auto">
          Ready to scale your business with{' '}
          <span className="text-motive-red">intelligent technology?</span>
        </h2>

        {/* Supporting Copy - Welcoming & Clear */}
        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Whether you want to automate tedious workflows, launch a high-performing corporate website, or rank higher on Google, our team is ready to engineer your solution.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-motive-red text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red-hover transition-all duration-200 shadow-lg group"
          >
            <span>SCHEDULE A FREE CONSULTATION</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-zinc-900 border border-emerald-600/40 text-emerald-400 text-xs font-mono font-medium rounded hover:bg-zinc-800 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp: {COMPANY_INFO.whatsappNumber}</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-zinc-900 border border-zinc-700 text-white text-xs font-mono font-medium rounded hover:bg-zinc-800 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-motive-red" />
            <span>Direct Call</span>
          </a>
        </div>

        {/* Trust & Guarantee Markers */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-zinc-500">
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-motive-red" />
            <span>Free Discovery &amp; Initial Architecture Scoping</span>
          </span>
          <span className="hidden sm:inline">&bull;</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-motive-red" />
            <span>100% IP Ownership &amp; Strict NDA Standard</span>
          </span>
          <span className="hidden sm:inline">&bull;</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-motive-red" />
            <span>Rapid 2 to 4 Week Delivery</span>
          </span>
        </div>

      </div>
    </section>
  );
};
