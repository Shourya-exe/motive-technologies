'use client';

import React from 'react';
import { WHY_MOTIVE_PRINCIPLES } from '@/data/siteData';

export const WhyMotiveSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 bg-white border-b border-motive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-motive-border">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-motive-red" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
                THE MOTIVE DIFFERENCE // CORE OPERATING PRINCIPLES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-motive-black leading-tight">
              Built around outcomes,<br />
              <span className="text-motive-red">not just deliverables.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pl-6">
            <p className="text-sm sm:text-base text-motive-grey leading-relaxed">
              Our operating philosophy is grounded in architectural discipline, business clarity, and verifiable execution. We do not build technology for vanity—we build systems that perform.
            </p>
          </div>
        </div>

        {/* Editorial Index Rows (No generic cards, pure luxury typography & grid) */}
        <div className="divide-y divide-motive-border">
          {WHY_MOTIVE_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="py-10 sm:py-12 group hover:bg-motive-offwhite/50 transition-colors px-4 sm:px-6 -mx-4 sm:-mx-6 rounded"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                
                {/* Index Number */}
                <div className="lg:col-span-2 flex items-baseline gap-2 font-mono">
                  <span className="text-2xl font-light text-motive-grey group-hover:text-motive-red transition-colors">
                    {principle.number}
                  </span>
                  <span className="text-xs text-zinc-600 font-medium">/ 05</span>
                </div>

                {/* Principle Title */}
                <div className="lg:col-span-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-motive-black group-hover:text-motive-red transition-colors">
                    {principle.title}
                  </h3>
                </div>

                {/* Principle Description */}
                <div className="lg:col-span-6">
                  <p className="text-sm sm:text-base text-motive-grey leading-relaxed">
                    {principle.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
