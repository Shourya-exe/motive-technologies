'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Cpu, Globe, Smartphone, Code, CheckCircle2 } from 'lucide-react';
import { PROJECTS, ProjectItem } from '@/data/siteData';

const categories = [
  'All',
  'AI & Automation',
  'Web Applications',
  'Mobile Applications',
  'Digital Platforms',
  'SEO & Growth',
];

export function WorkClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="pt-16 pb-20 bg-motive-offwhite/50 border-b border-motive-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-motive-red" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
                SELECTED WORK &amp; CASE STUDIES
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-motive-black leading-tight">
              Ideas transformed into{' '}
              <span className="text-motive-red">real solutions.</span>
            </h1>
            <p className="text-base sm:text-lg text-motive-grey leading-relaxed">
              Explore real projects we&apos;ve built: smart AI agents, custom websites, mobile apps, and search strategies designed to grow businesses and save hours of work.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Portfolio Showcase */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-motive-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              aria-label={`Filter projects by ${cat}`}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-motive-black text-white font-bold shadow-sm'
                  : 'bg-white text-zinc-700 border border-motive-border hover:text-motive-black hover:border-zinc-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid of Two (2-Column Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              id={project.id}
              className="scroll-mt-24 bg-white border border-motive-border rounded-2xl overflow-hidden shadow-subtle hover:shadow-premium hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Top Banner (Dark Architectural Header) */}
              <div className="bg-zinc-950 p-6 sm:p-7 text-white relative overflow-hidden">
                <div className="absolute inset-0 grid-bg-dark opacity-30 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-zinc-400 mb-4">
                  <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded text-[11px]">
                    {project.category}
                  </span>
                  <span className="text-motive-red font-bold text-xs">
                    CASE // #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-motive-red shrink-0 mt-0.5">
                      {project.category.includes('AI') ? (
                        <Cpu className="w-5 h-5" />
                      ) : project.category.includes('Mobile') ? (
                        <Smartphone className="w-5 h-5" />
                      ) : project.category.includes('SEO') ? (
                        <Globe className="w-5 h-5" />
                      ) : (
                        <Code className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-[11px] font-mono text-zinc-400 mt-1">
                        Domain: {project.clientType}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-3 mt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className={`${
                    project.status === 'In development'
                      ? 'text-amber-400'
                      : project.status === 'Prototype'
                      ? 'text-cyan-400'
                      : 'text-emerald-400'
                  } font-semibold flex items-center gap-1.5`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      project.status === 'In development'
                        ? 'bg-amber-400'
                        : project.status === 'Prototype'
                        ? 'bg-cyan-400'
                        : 'bg-emerald-400'
                    } animate-pulse`} />
                    STATUS: {project.status ? project.status.toUpperCase() : 'DEPLOYED'}
                  </span>
                  <span>VERIFIED ARCHITECTURE</span>
                </div>
              </div>

              {/* Optional Project Screenshot / Mockup Preview */}
              {project.imageSrc && (
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-950 border-b border-motive-border group">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
              )}

              {/* Card Body Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6 bg-white">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block mb-1">
                      Executive Summary
                    </span>
                    <p className="text-sm text-motive-black font-medium leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Operational Challenge & Solution */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 bg-motive-offwhite rounded-lg border border-motive-border">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-motive-red font-bold block mb-1">
                        Operational Challenge
                      </span>
                      <p className="text-xs text-motive-grey leading-relaxed line-clamp-4">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="p-3.5 bg-motive-offwhite rounded-lg border border-motive-border">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-bold block mb-1">
                        Engineered Solution
                      </span>
                      <p className="text-xs text-motive-grey leading-relaxed line-clamp-4">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Measurable Outcomes */}
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-motive-black font-bold block mb-2">
                      Measurable Operational Outcomes
                    </span>
                    <div className="space-y-1.5">
                      {project.outcomes.map((outcome, oIdx) => (
                        <div key={oIdx} className="flex items-start gap-2 text-xs text-motive-black">
                          <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Tech Stack and CTA */}
                <div className="pt-4 border-t border-motive-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block mb-1">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-motive-offwhite text-[10px] font-mono text-motive-black rounded border border-motive-border"
                        >
                          {t}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0">
                    <Link
                      href={`/contact?project=${project.id}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-motive-black text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-motive-red transition-colors shadow-xs"
                    >
                      <span>Discuss Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Consultation Closing Strip */}
      <section className="py-20 bg-motive-offwhite/50 border-t border-motive-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-motive-red font-bold">
            CUSTOM ENGINEERING ENGAGEMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-motive-black">
            Have a project with similar operational complexity?
          </h2>
          <p className="text-base text-motive-grey max-w-2xl mx-auto">
            Schedule an architectural diagnostic. We will review your workflows, assess technical feasibility, and prepare a milestone-based scope within 24–48 hours.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-motive-black text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-motive-red transition-colors shadow-md"
            >
              <span>Schedule Discovery Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-motive-black border border-motive-border text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-zinc-100 transition-colors"
            >
              <span>Explore Capabilities</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}