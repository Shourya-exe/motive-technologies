'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, GitMerge, Layers3, Cpu } from 'lucide-react';

export const BrandIntroSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-motive-offwhite/50 border-b border-motive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow & Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-4 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-motive-red" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
                WHO WE ARE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-motive-black leading-tight">
              Technology should move businesses forward.
            </h2>
          </div>

          <div className="lg:col-span-8 lg:pl-8 space-y-6">
            <p className="text-lg sm:text-xl text-motive-black font-medium leading-relaxed">
              At Motive Technologies, we believe technology is most valuable when it solves real problems. We bring together intelligent automation, thoughtful engineering and digital growth strategies to help businesses build stronger, smarter and more scalable operations.
            </p>
            <p className="text-sm sm:text-base text-motive-grey leading-relaxed">
              Too often, modern companies struggle with fragmented software stacks, manual administrative bottlenecks, and static websites that fail to generate pipeline. We construct unified, intelligent architectures that tie your operations directly to customer engagement and revenue velocity.
            </p>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red transition-colors group"
              >
                <span>Discover Motive Technologies</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Sophisticated Systems Thinking Visual Composition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          
          <div className="bg-white border border-motive-border rounded-lg p-6 shadow-subtle hover:border-zinc-400 transition-colors">
            <div className="w-10 h-10 rounded bg-motive-offwhite flex items-center justify-center text-motive-black mb-4">
              <GitMerge className="w-5 h-5 text-motive-red" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block mb-1">
              SYSTEM CONVERGENCE
            </span>
            <h3 className="text-base font-bold text-motive-black mb-2">
              Unified Digital Operations
            </h3>
            <p className="text-xs text-motive-grey leading-relaxed">
              Connecting customer contact points (WhatsApp, web portals, forms) straight into autonomous backend logic and automated task execution.
            </p>
          </div>

          <div className="bg-white border border-motive-border rounded-lg p-6 shadow-subtle hover:border-zinc-400 transition-colors">
            <div className="w-10 h-10 rounded bg-motive-offwhite flex items-center justify-center text-motive-black mb-4">
              <Cpu className="w-5 h-5 text-motive-red" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block mb-1">
              COGNITIVE REASONING
            </span>
            <h3 className="text-base font-bold text-motive-black mb-2">
              Autonomous Intelligence
            </h3>
            <p className="text-xs text-motive-grey leading-relaxed">
              Deploying verified AI agent routines that triage inquiries, extract structured metadata, and perform routine decision-making with strict human oversight.
            </p>
          </div>

          <div className="bg-white border border-motive-border rounded-lg p-6 shadow-subtle hover:border-zinc-400 transition-colors">
            <div className="w-10 h-10 rounded bg-motive-offwhite flex items-center justify-center text-motive-black mb-4">
              <Layers3 className="w-5 h-5 text-motive-red" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block mb-1">
              PERFORMANCE ARCHITECTURE
            </span>
            <h3 className="text-base font-bold text-motive-black mb-2">
              Engineered for Compounding Value
            </h3>
            <p className="text-xs text-motive-grey leading-relaxed">
              Building on rock-solid web infrastructure and clean semantic code that continuously improves search visibility and user retention over the long term.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
