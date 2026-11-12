'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/data/siteData';

export const CoreCapabilitiesSection: React.FC = () => {
  const [activeCapability, setActiveCapability] = useState<number>(0);

  return (
    <section className="py-24 lg:py-36 bg-white border-b border-motive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Swiss Architectural Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-motive-border">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-motive-red" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
                WHAT WE DO // THREE INTERCONNECTED CAPABILITIES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-motive-black leading-[1.05]">
              Three capabilities.<br />
              <span className="text-motive-red">One unified technology partner.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pl-6">
            <p className="text-sm sm:text-base text-motive-grey leading-relaxed">
              We do not treat automation, web engineering, and search visibility as isolated projects. We engineer them as a single, coordinated technological backbone designed to compound commercial value.
            </p>
          </div>
        </div>

        {/* Architectural Capability Rows (No clunky cards, pure editorial luxury) */}
        <div className="divide-y divide-motive-border">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="py-16 lg:py-20 group transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Column 1: Index Number & Eyebrow (3 cols on lg) */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-3xl sm:text-4xl font-light text-motive-grey group-hover:text-motive-red transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                      // {service.category}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-motive-grey pt-1">
                    ENTERPRISE SPECIFICATION
                  </p>
                </div>

                {/* Column 2: Title & Core Narrative (5 cols on lg) */}
                <div className="lg:col-span-5 space-y-4">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-motive-black tracking-tight leading-snug group-hover:text-motive-black transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-base text-motive-grey leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                    {service.fullDescription}
                  </p>

                  <div className="pt-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red transition-colors group/link"
                    >
                      <span>Explore Dedicated {service.category} Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform text-motive-red" />
                    </Link>
                  </div>
                </div>

                {/* Column 3: Tabular Capabilities Spec (4 cols on lg) */}
                <div className="lg:col-span-4 bg-motive-offwhite/60 p-6 lg:p-8 rounded border border-motive-border">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-motive-black font-bold block pb-3 mb-4 border-b border-motive-border">
                    Deliverables &amp; Core Architecture
                  </span>

                  <ul className="space-y-3">
                    {service.capabilities.slice(0, 5).map((cap, cIdx) => (
                      <li
                        key={cIdx}
                        className="text-xs flex items-start gap-2.5 text-motive-black font-medium leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-motive-red shrink-0 mt-1.5" />
                        <div>
                          <span className="font-bold">{cap.title}</span>
                          <span className="text-zinc-500 block text-[11px] font-normal leading-normal">
                            {cap.description.split('.')[0]}.
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-motive-border flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span>STANDARD: TYPE-SAFE &bull; AUDITED</span>
                    <span className="text-motive-black font-semibold">VERIFIED</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
