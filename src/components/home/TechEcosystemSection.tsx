'use client';

import React, { useState } from 'react';
import { TECH_ECOSYSTEM } from '@/data/siteData';
import { Cpu, Terminal, Layout, Smartphone, Cloud, Search, CheckCircle } from 'lucide-react';

export const TechEcosystemSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categoryIcons = [Cpu, Layout, Terminal, Smartphone, Cloud, Search];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-motive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-motive-red" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
              BUILT WITH MODERN TECHNOLOGY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-motive-black leading-tight">
            Modern tools. Thoughtful engineering.
          </h2>
          <p className="text-base sm:text-lg text-motive-grey leading-relaxed">
            We curate battle-tested frameworks, typed architectures, and modern cloud primitives. We choose tools based on system performance, reliability, and long-term maintainability—not ephemeral hype.
          </p>
        </div>

        {/* Tabbed / Categorized Technology Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Category Selector */}
          <div className="lg:col-span-5 space-y-2">
            {TECH_ECOSYSTEM.map((cat, idx) => {
              const Icon = categoryIcons[idx] || Terminal;
              const isActive = activeCategory === idx;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(idx)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200 border flex items-center justify-between ${
                    isActive
                      ? 'bg-motive-black text-white border-motive-black shadow-sm'
                      : 'bg-motive-offwhite text-motive-black border-motive-border hover:bg-zinc-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded flex items-center justify-center shrink-0 ${
                        isActive
                          ? 'bg-zinc-800 text-motive-red'
                          : 'bg-white text-zinc-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold tracking-tight">
                        {cat.category}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`font-mono text-xs ${
                      isActive ? 'text-motive-red font-bold' : 'text-motive-grey'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Tech Stack Display */}
          <div className="lg:col-span-7 bg-motive-offwhite border border-motive-border rounded-xl p-8 lg:p-10">
            <div className="space-y-6">
              
              <div className="border-b border-motive-border pb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block mb-1">
                  CATEGORY STACK // 0{activeCategory + 1}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-motive-black">
                  {TECH_ECOSYSTEM[activeCategory].category}
                </h3>
                <p className="text-xs sm:text-sm text-motive-grey mt-1">
                  {TECH_ECOSYSTEM[activeCategory].description}
                </p>
              </div>

              {/* Technologies Pills / Cards */}
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-motive-black font-semibold mb-3">
                  Core Frameworks &amp; Runtimes
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TECH_ECOSYSTEM[activeCategory].technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-motive-border rounded p-3 flex items-center justify-between text-xs font-mono font-medium text-motive-black shadow-subtle hover:border-zinc-400 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-motive-red" />
                        <span>{tech}</span>
                      </div>
                      <span className="text-[10px] text-zinc-400">DEPLOYED</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Standard Note */}
              <div className="p-4 bg-white border border-motive-border rounded-lg text-xs text-motive-grey leading-relaxed">
                <p className="font-mono text-[10px] uppercase tracking-wider text-motive-black font-bold mb-1">
                  Engineering Philosophy
                </p>
                Every project is architected according to specific performance, latency, and budget requirements. We never enforce an oversized stack where lightweight, elegant solutions excel.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
