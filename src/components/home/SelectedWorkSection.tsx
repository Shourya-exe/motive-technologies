'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ExternalLink, Zap } from 'lucide-react';
import { PROJECTS } from '@/data/siteData';

const PROJECT_GRAPHICS: Record<string, { imageSrc: string; badge: string; metric: string; metricLabel: string }> = {
  'careerguide-india': {
    imageSrc: '/images/careerguide-india.jpg',
    badge: 'INTERACTIVE STREAM DISCOVERY',
    metric: '98%',
    metricLabel: 'Stream Match Accuracy',
  },
  'neurointent-bci-system': {
    imageSrc: '/images/project-neurointent.jpg',
    badge: 'BRAIN-COMPUTER INTERFACE',
    metric: '< 500ms',
    metricLabel: 'Thought Command Latency',
  },
  'aira-ai-attendance': {
    imageSrc: '/images/project-aira.jpg',
    badge: 'COMPUTER VISION AI',
    metric: '99.4%',
    metricLabel: 'Face Match Accuracy',
  },
  'neuromind-ai-assistant': {
    imageSrc: '/images/project-neuromind.jpg',
    badge: 'MEMORY-INSPIRED AI',
    metric: '100%',
    metricLabel: 'Context Retention',
  },
  'ai-court-legal-reasoning': {
    imageSrc: '/images/project-aicourt.jpg',
    badge: 'MULTI-AGENT REASONING',
    metric: '3 Agents',
    metricLabel: 'Prosecution, Defense & Judge',
  },
  'enterprise-whatsapp-crm-automation': {
    imageSrc: '/images/case-whatsapp-ai-crm.jpg',
    badge: 'AUTONOMOUS CONVERSATIONAL AGENT',
    metric: '< 12s',
    metricLabel: 'First Response Latency',
  },
  'nextjs-fintech-corporate-portal': {
    imageSrc: '/images/case-fintech-platform.jpg',
    badge: 'INSTITUTIONAL NEXT.JS PLATFORM',
    metric: '98/100',
    metricLabel: 'Lighthouse Performance Score',
  },
  'cloud-logistics-dispatch-system': {
    imageSrc: '/images/case-logistics-fleet.jpg',
    badge: 'REAL-TIME FLEET TELEMETRY',
    metric: '-78%',
    metricLabel: 'Routine Inquiries Reduced',
  },
  'b2b-saas-technical-seo-overhaul': {
    imageSrc: '/images/seo-aeo-growth.jpg',
    badge: 'TECHNICAL SEO & ENTITY GRAPH',
    metric: '+142%',
    metricLabel: 'Organic Search Growth',
  },
};

export const SelectedWorkSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'AI & Automation', 'Web Applications', 'Digital Platforms', 'SEO & Growth'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS.filter(p => p.featured).slice(0, 6)
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
              className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-motive-border hover:border-motive-red text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red transition-all rounded-lg shadow-sm group"
            >
              <span>View All Case Studies</span>
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
              aria-label={`Filter projects by ${cat}`}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors rounded-lg ${
                selectedFilter === cat
                  ? 'bg-motive-black text-white font-bold'
                  : 'bg-white text-zinc-700 border border-motive-border hover:text-motive-black hover:border-zinc-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Visual Case Study Grid Cards */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => {
            const visual = PROJECT_GRAPHICS[project.id] || {
              imageSrc: '/images/ai-agents-automation.jpg',
              badge: 'PRODUCTION SYSTEM',
              metric: 'VERIFIED',
              metricLabel: 'Client ROI Architecture',
            };
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-motive-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-8 lg:p-10 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Visual Graphic Column (5 cols) */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-xl overflow-hidden border border-zinc-200 bg-zinc-950 aspect-[16/11] group/img shadow-md">
                      
                      {/* Floating Badge */}
                      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-black/80 backdrop-blur text-emerald-400 border border-white/10">
                          {visual.badge}
                        </span>
                        <div className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-motive-red text-white">
                          {visual.metric}
                        </div>
                      </div>

                      {/* Graphic Image */}
                      <Image
                        src={visual.imageSrc}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-cover object-center group-hover/img:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* Bottom Metric Label Overlay */}
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 pt-8 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                        <span>{project.clientType}</span>
                        <span className="text-zinc-400">{visual.metricLabel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Narrative & Case Info Column (7 cols) */}
                  <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    {/* Meta Tags */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest">
                        CASE STUDY // 0{idx + 1}
                      </span>
                      <span className="text-zinc-300 font-mono">/</span>
                      <span className="text-xs font-mono text-zinc-600 font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-motive-black group-hover:text-motive-red transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                      {project.summary}
                    </p>

                    {/* Concrete Outcomes */}
                    <div className="space-y-2 pt-1 bg-zinc-50 p-4 rounded-xl border border-zinc-200/70">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-motive-black font-bold block mb-1">
                        Verified Business Outcomes:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.outcomes.map((outcome, oIdx) => (
                          <div key={oIdx} className="flex items-start gap-2 text-xs text-zinc-800 font-medium leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges & Link */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 bg-white text-[11px] font-mono text-zinc-700 rounded border border-motive-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/work#${project.id}`}
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red transition-colors group/link"
                      >
                        <span>Read Architecture Review</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform text-motive-red" />
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
