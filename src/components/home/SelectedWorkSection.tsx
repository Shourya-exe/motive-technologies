'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '@/data/siteData';

export const SelectedWorkSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'AI & Automation', 'Web Applications', 'Digital Platforms', 'SEO & Growth'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS.slice(0, 4)
    : PROJECTS.filter(p => p.category === selectedFilter);

  return (
    <section className="py-24 lg:py-36 bg-motive-offwhite/50 border-b border-motive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-motive-border">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-motive-red" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
                PROVEN RESULTS // REAL CLIENT CASE ARCHITECTURES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-motive-black leading-tight">
              Ideas transformed into real business solutions.
            </h2>
            <p className="text-sm sm:text-base text-motive-grey leading-relaxed">
              Explore verified case studies delivered across intelligent automation pipelines, high-performance web systems, and organic search visibility.
            </p>
          </div>

          <div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red transition-colors group"
            >
              <span>View All Client Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-motive-red" />
            </Link>
          </div>
        </div>

        {/* Minimal Category Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 my-10 pb-6 border-b border-motive-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors rounded ${
                selectedFilter === cat
                  ? 'bg-motive-black text-white font-bold'
                  : 'bg-white text-motive-grey border border-motive-border hover:text-motive-black hover:border-zinc-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Case Study List */}
        <div className="divide-y divide-motive-border">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="py-14 sm:py-16 group hover:bg-white transition-colors px-6 -mx-6 rounded-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Meta Column (3 cols on lg) */}
                <div className="lg:col-span-3 space-y-2">
                  <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest block">
                    CASE STUDY // 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                    {project.category}
                  </span>
                  <p className="text-xs text-motive-grey font-mono pt-1">
                    {project.clientType}
                  </p>
                </div>

                {/* Main Content Column (6 cols on lg) */}
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-motive-black group-hover:text-motive-red transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-motive-grey leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Concrete Outcomes */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-motive-black font-bold block mb-1">
                      Verified Client Outcomes:
                    </span>
                    {project.outcomes.map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-2.5 text-xs text-motive-black font-medium leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-motive-offwhite text-[11px] font-mono text-motive-black rounded border border-motive-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Column (3 cols on lg) */}
                <div className="lg:col-span-3 lg:text-right pt-2">
                  <Link
                    href={`/work#${project.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-motive-border hover:border-motive-red text-xs font-mono font-bold uppercase tracking-wider text-motive-black group-hover:text-motive-red transition-all rounded shadow-subtle"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-motive-red" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
