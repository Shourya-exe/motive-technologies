import React from 'react';
import { WHY_MOTIVE_PRINCIPLES } from '@/data/siteData';

export const WhyMotiveSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-motive-offwhite/40 border-b border-motive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-motive-red" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
              THE MOTIVE DIFFERENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-motive-black leading-tight">
            Built around outcomes, not just deliverables.
          </h2>
          <p className="text-base sm:text-lg text-motive-grey leading-relaxed">
            Our operating philosophy is grounded in architectural discipline, business clarity, and verifiable execution. We do not build technology for vanity—we build systems that perform.
          </p>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_MOTIVE_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="bg-white border border-motive-border rounded-lg p-8 relative flex flex-col justify-between hover:border-zinc-400 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-motive-border">
                  <span className="font-mono text-xs font-bold text-motive-red px-2 py-0.5 bg-red-50 rounded">
                    PRINCIPLE // {principle.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-zinc-200 group-hover:bg-motive-red transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-motive-black mb-3">
                  {principle.title}
                </h3>

                <p className="text-sm text-motive-grey leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-motive-border/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>FOUNDATIONAL PILLAR</span>
                <span className="text-motive-black font-semibold">VERIFIED</span>
              </div>
            </div>
          ))}

          {/* Sixth Architectural Statement Card to complete the clean 3x2 grid */}
          <div className="bg-motive-black text-white border border-motive-darkborder rounded-lg p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-800">
                <span className="font-mono text-xs font-bold text-motive-red px-2 py-0.5 bg-red-950/40 rounded">
                  COMMITMENT // 06
                </span>
                <span className="w-2 h-2 rounded-full bg-motive-red animate-pulse" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Uncompromising Quality
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                Clean source code, rigorous type safety, modular design systems, and transparent architectural handovers designed to withstand enterprise audits.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>DELIVERY STANDARD</span>
              <span className="text-white font-semibold">100% AUDITABLE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
