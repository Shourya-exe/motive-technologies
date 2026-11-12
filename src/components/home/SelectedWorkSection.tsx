'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Code, Cpu, ExternalLink, Globe, Layers, ShieldCheck } from 'lucide-react';
import { PROJECTS } from '@/data/siteData';
import { SpotlightCard } from '@/components/common/SpotlightCard';

export const SelectedWorkSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'AI & Automation', 'Web Applications', 'Digital Platforms', 'SEO & Growth'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS.slice(0, 4)
    : PROJECTS.filter(p => p.category === selectedFilter);

  return (
    <section className="py-20 lg:py-28 bg-motive-offwhite/50 border-b border-motive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-motive-red" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
                SELECTED PROJECTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-motive-black leading-tight">
              Ideas transformed into real solutions.
            </h2>
            <p className="text-sm sm:text-base text-motive-grey leading-relaxed">
              Explore verified technical architectures and engineered solutions delivered across automated workflows, high-performance web systems, and organic visibility.
            </p>
          </div>

          <div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red transition-colors group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-motive-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-colors ${
                selectedFilter === cat
                  ? 'bg-motive-black text-white font-bold'
                  : 'bg-white text-motive-grey border border-motive-border hover:text-motive-black hover:border-zinc-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Project Grid (Asymmetrical high-impact 2-column layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <SpotlightCard
              key={project.id}
              className="overflow-hidden shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Architectural Visual Preview Frame */}
              <div className="relative bg-zinc-950 p-6 sm:p-8 aspect-[16/9] flex flex-col justify-between border-b border-motive-border overflow-hidden">
                {/* Background grid */}
                <div className="absolute inset-0 grid-bg-dark opacity-40" />

                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">
                    {project.category}
                  </span>
                  <span className="text-motive-red font-semibold">
                    SYSTEM #{idx + 1}
                  </span>
                </div>

                <div className="relative z-10 my-auto text-center py-4">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-motive-red group-hover:border-motive-red transition-colors mb-3">
                    {project.category.includes('AI') ? (
                      <Cpu className="w-6 h-6" />
                    ) : project.category.includes('SEO') ? (
                      <Globe className="w-6 h-6" />
                    ) : (
                      <Code className="w-6 h-6" />
                    )}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white max-w-sm mx-auto leading-snug">
                    {project.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono mt-1">
                    {project.clientType}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-zinc-900">
                  <span>ARCHITECTURE: VERIFIED</span>
                  <span className="text-zinc-400">NEXT // MOTIVE</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-motive-black group-hover:text-motive-red transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-motive-grey leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Highlights/Outcomes */}
                  <div className="space-y-1.5 mb-6">
                    {project.outcomes.slice(0, 2).map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-2 text-xs text-motive-black">
                        <span className="text-motive-red font-bold">&rarr;</span>
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-motive-border mb-4">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-motive-offwhite text-[10px] font-mono text-motive-grey rounded border border-motive-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/work#${project.id}`}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-motive-black group-hover:text-motive-red transition-colors"
                  >
                    <span>Inspect System Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};
