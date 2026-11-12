'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Code, Cpu, Globe, Smartphone, CheckCircle2, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { COMPANY_INFO, PROJECTS, ProjectItem } from '@/data/siteData';

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const categories = ['All', 'AI & Automation', 'Web Applications', 'Mobile Applications', 'Digital Platforms', 'SEO & Growth'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="pt-16 pb-20 bg-motive-offwhite/50 border-b border-motive-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-motive-red" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
                SELECTED PROJECTS &amp; CASE ARCHITECTURES
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-motive-black leading-tight">
              Ideas transformed into{' '}
              <span className="text-motive-red">real solutions.</span>
            </h1>
            <p className="text-base sm:text-lg text-motive-grey leading-relaxed">
              Explore our technical architectures, custom enterprise automations, responsive web products, and organic search foundations. Each system is designed to resolve distinct operational challenges.
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
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-colors ${
                selectedCategory === cat
                  ? 'bg-motive-black text-white font-bold'
                  : 'bg-white text-motive-grey border border-motive-border hover:text-motive-black hover:border-zinc-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              id={project.id}
              className="scroll-mt-24 bg-white border border-motive-border rounded-xl overflow-hidden shadow-subtle hover:shadow-premium transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Visual Architecture Preview Frame (5 cols on lg) */}
                <div className="lg:col-span-5 bg-zinc-950 p-8 sm:p-10 text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-motive-border relative overflow-hidden">
                  <div className="absolute inset-0 grid-bg-dark opacity-30 pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded">
                      {project.category}
                    </span>
                    <span className="text-motive-red font-bold">
                      CASE // #{idx + 1}
                    </span>
                  </div>

                  <div className="relative z-10 my-10 space-y-4">
                    <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-motive-red">
                      {project.category.includes('AI') ? (
                        <Cpu className="w-6 h-6" />
                      ) : project.category.includes('Mobile') ? (
                        <Smartphone className="w-6 h-6" />
                      ) : project.category.includes('SEO') ? (
                        <Globe className="w-6 h-6" />
                      ) : (
                        <Code className="w-6 h-6" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">
                      Domain: {project.clientType}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>STATUS: DEPLOYED</span>
                    <span className="text-zinc-400">VERIFIED ARCHITECTURE</span>
                  </div>
                </div>

                {/* Case Study Details & Engineering Breakdown (7 cols on lg) */}
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-white">
                  
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block mb-1">
                        Executive Summary
                      </span>
                      <p className="text-base text-motive-black font-medium leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 bg-motive-offwhite rounded-lg border border-motive-border">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-motive-red font-bold block mb-1">
                          Operational Challenge
                        </span>
                        <p className="text-xs text-motive-grey leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>

                      <div className="p-4 bg-motive-offwhite rounded-lg border border-motive-border">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-bold block mb-1">
                          Engineered Solution
                        </span>
                        <p className="text-xs text-motive-grey leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Verified Outcomes */}
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-motive-black font-bold block mb-3">
                        Measurable Operational Outcomes
                      </span>
                      <div className="space-y-2">
                        {project.outcomes.map((outcome, oIdx) => (
                          <div key={oIdx} className="flex items-start gap-2.5 text-xs text-motive-black">
                            <CheckCircle2 className="w-4 h-4 text-motive-red shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech stack and deliverables */}
                  <div className="pt-6 border-t border-motive-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block mb-1.5">
                        Technologies Deployed
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 bg-motive-offwhite text-[11px] font-mono text-motive-black rounded border border-motive-border"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0">
                      <Link
                        href={`/contact?project=${project.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-motive-black text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-motive-red transition-colors"
                      >
                        <span>Discuss Similar Project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Clear Placeholder for Custom Client Architectures */}
        <div className="mt-16 p-8 border border-dashed border-zinc-300 rounded-xl bg-motive-offwhite/50 text-center space-y-4">
          <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center mx-auto text-motive-grey">
            <Layers className="w-5 h-5 text-motive-red" />
          </div>
          <h4 className="text-base font-bold text-motive-black">
            Have a custom operational requirement?
          </h4>
          <p className="text-xs text-motive-grey max-w-lg mx-auto leading-relaxed">
            Every architecture is crafted specifically to the operational reality of our client partners. We do not recycle generic SaaS templates or one-size-fits-all codebases.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red"
            >
              <span>Submit Your Technical Scope for Evaluation &rarr;</span>
            </Link>
          </div>
        </div>

      </section>

      {/* Conversion Banner */}
      <section className="bg-motive-dark text-white py-16 border-t border-motive-darkborder">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to architect your solution?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            Consult with our engineering team to review requirements, technical feasibility, and estimated delivery timelines.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-motive-red text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red-hover transition-colors"
            >
              <span>Initiate Technical Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
