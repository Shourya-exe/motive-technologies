'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
                WHO WE ARE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-motive-black leading-[1.08]">
              Technology should move businesses forward.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pl-8 space-y-6">
            <p className="text-lg sm:text-xl text-motive-black font-medium leading-relaxed">
              At Motive Technologies, we believe technology is most valuable when it solves real problems. We bring together intelligent automation, thoughtful engineering and digital growth strategies to help businesses build stronger, smarter and more scalable operations.
            </p>
            <p className="text-sm sm:text-base text-motive-grey leading-relaxed">
              Too often, modern companies struggle with fragmented software stacks, manual administrative bottlenecks, and static websites that fail to generate commercial pipeline. We construct unified, intelligent architectures that tie your daily operations directly to customer engagement and revenue velocity.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red transition-colors group"
              >
                <span>Discover Motive Technologies</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-motive-red" />
              </Link>
            </div>
          </div>
        </div>

        {/* Architectural 3-Column Systems Architecture (No Cards, Pure Editorial Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-motive-border border-b border-motive-border">
          
          <div className="pb-8 md:pb-0 md:pr-8 space-y-4">
            <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest block">
              // 01 &bull; SYSTEM CONVERGENCE
            </span>
            <h3 className="text-xl font-bold text-motive-black">
              Unified Digital Operations
            </h3>
            <p className="text-sm text-motive-grey leading-relaxed">
              Connecting customer contact points—such as WhatsApp Business API, corporate portals, and transactional webhooks—directly into autonomous backend logic and automated task execution.
            </p>
          </div>

          <div className="py-8 md:py-0 md:px-8 space-y-4">
            <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest block">
              // 02 &bull; COGNITIVE REASONING
            </span>
            <h3 className="text-xl font-bold text-motive-black">
              Autonomous Intelligence
            </h3>
            <p className="text-sm text-motive-grey leading-relaxed">
              Deploying verified AI agent routines that triage customer inquiries, extract structured metadata, and perform routine decision-making with deterministic guardrails and strict human oversight.
            </p>
          </div>

          <div className="pt-8 md:pt-0 md:pl-8 space-y-4">
            <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest block">
              // 03 &bull; PERFORMANCE ARCHITECTURE
            </span>
            <h3 className="text-xl font-bold text-motive-black">
              Engineered for Compounding Value
            </h3>
            <p className="text-sm text-motive-grey leading-relaxed">
              Building on rock-solid web infrastructure, type-safe Next.js codebases, and clean semantic structures that continuously improve organic search visibility and user retention over years of operation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
