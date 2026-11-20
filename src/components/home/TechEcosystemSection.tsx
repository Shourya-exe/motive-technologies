'use client';

import React from 'react';
import { TECH_ECOSYSTEM } from '@/data/siteData';

export const TechEcosystemSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 bg-white border-b border-motive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-motive-border">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-motive-red" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
                BUILT WITH MODERN TECHNOLOGY // SYSTEM RUNTIMES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-motive-black leading-tight">
              Modern tools.<br />
              <span className="text-motive-red">Thoughtful engineering.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pl-6">
            <p className="text-sm sm:text-base text-motive-grey leading-relaxed">
              We choose reliable, modern tools known for speed, rock-solid security, and effortless maintenance. We only use technology that makes your business faster and easier to run.
            </p>
          </div>
        </div>

        {/* Clean Architectural Technology Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-motive-border border-b border-motive-border">
          {TECH_ECOSYSTEM.map((cat, idx) => (
            <div
              key={cat.category}
              className={`py-10 ${
                idx % 3 === 0 ? 'md:pr-8' : idx % 3 === 1 ? 'md:px-8' : 'md:pl-8'
              } space-y-4`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-motive-border">
                <span className="font-mono text-xs font-bold text-motive-red">
                  // 0{idx + 1}
                </span>
                <span className="text-[10px] font-mono text-zinc-600 font-semibold uppercase">
                  RUNTIME SPEC
                </span>
              </div>

              <h3 className="text-lg font-bold text-motive-black">
                {cat.category}
              </h3>

              <p className="text-xs text-motive-grey leading-relaxed">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {cat.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-1 bg-motive-offwhite text-[11px] font-mono text-motive-black rounded border border-motive-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
