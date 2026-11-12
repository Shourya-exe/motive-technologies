'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, Code2, TrendingUp, CheckCircle, ArrowUpRight, Terminal, Smartphone, Search, Database, Layers, Play } from 'lucide-react';
import { SERVICES } from '@/data/siteData';
import { InteractiveTerminal } from './InteractiveTerminal';
import { WorkflowSandbox } from './WorkflowSandbox';
import { SpotlightCard } from '@/components/common/SpotlightCard';

export const CoreCapabilitiesSection: React.FC = () => {
  const [aiPreviewMode, setAiPreviewMode] = useState<'terminal' | 'code'>('terminal');

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-motive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-motive-red" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-motive-black leading-tight">
            Three capabilities. One intelligent direction.
          </h2>
          <p className="text-base sm:text-lg text-motive-grey leading-relaxed">
            We operate at the intersection of operational automation, robust digital engineering, and organic search mechanics. Rather than piecemeal fixes, we deliver coordinated technology systems.
          </p>
        </div>

        {/* 3 Visually Distinct Editorial Capabilities */}
        <div className="space-y-16">
          
          {/* 01 — AI Automation & Intelligent Systems (Dark Architectural Theme) */}
          <div className="bg-motive-dark text-white rounded-xl border border-motive-darkborder p-8 lg:p-12 shadow-darkcard">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-motive-red font-bold px-2.5 py-1 bg-red-950/40 rounded border border-motive-red/30">
                    CAPABILITY // 01
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    INTELLIGENT SYSTEMS
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  AI Automation &amp; Intelligent Systems
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
                  Transform repetitive processes into intelligent workflows. We design AI-powered systems and automation solutions that help businesses operate more efficiently.
                </p>

                {/* Sub-capabilities list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'AI Agent Development',
                    'Business Process Automation',
                    'Custom Workflow Automation',
                    'WhatsApp Automation',
                    'AI-Powered Business Solutions',
                    'API & Third-Party Integrations',
                    'Intelligent Customer Support',
                    'Custom AI Integrations',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-motive-red shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href="/services/ai-automation"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-motive-red text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red-hover transition-all duration-200 group"
                  >
                    <span>Explore AI Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact?service=ai-automation"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-900 border border-zinc-800 text-white text-xs font-mono rounded hover:bg-zinc-800 transition-colors"
                  >
                    <span>Inquire Architecture</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Interactive Terminal Simulator */}
              <div className="lg:col-span-6">
                <div className="flex items-center justify-between pb-2 mb-2 text-xs font-mono text-zinc-400">
                  <span>LIVE REASONING CONSOLE</span>
                  <span className="text-[10px] text-motive-red font-semibold">INTERACTIVE</span>
                </div>
                <InteractiveTerminal />
              </div>

            </div>
          </div>

          {/* Interactive Multi-Node Sandbox Between Sections */}
          <WorkflowSandbox />

          {/* 02 — Website & Application Development (Clean Architectural White & Grid Theme) */}
          <div className="bg-motive-offwhite rounded-xl border border-motive-border p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-motive-black font-bold px-2.5 py-1 bg-white rounded border border-motive-border">
                    CAPABILITY // 02
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-motive-grey">
                    FULL-STACK ENGINEERING
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-motive-black">
                  Website &amp; Application Development
                </h3>

                <p className="text-sm sm:text-base text-motive-grey leading-relaxed max-w-xl">
                  From business websites to custom digital platforms, we create functional, scalable and carefully engineered digital experiences.
                </p>

                {/* Sub-capabilities list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'Custom Website Development',
                    'Corporate & Business Websites',
                    'Web Application Development',
                    'Android & Mobile App Development',
                    'UI/UX Design Systems',
                    'Backend & API Development',
                    'Database Architecture',
                    'Custom Digital Platforms',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-motive-black font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-motive-red shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/services/web-app-development"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-motive-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red transition-all duration-200 group"
                  >
                    <span>Explore Development</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Visual Preview / Architectural Device Wireframe */}
              <div className="lg:col-span-5">
                <SpotlightCard className="p-6 shadow-premium">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-motive-border">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                    </div>
                    <span className="text-[10px] font-mono text-motive-grey">
                      FRAMEWORK // NEXT.JS 15 + REACT
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="h-6 w-full bg-zinc-100 rounded flex items-center justify-between px-3 text-[10px] font-mono text-motive-grey">
                      <span>HTTP/3 TLS 1.3 200 OK</span>
                      <span className="text-emerald-700 font-bold">0.24s LCP</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-3 bg-motive-offwhite rounded border border-motive-border text-center">
                        <span className="text-[10px] font-mono text-motive-grey block">PERF</span>
                        <span className="text-base font-bold text-emerald-600 font-mono">99</span>
                      </div>
                      <div className="p-3 bg-motive-offwhite rounded border border-motive-border text-center">
                        <span className="text-[10px] font-mono text-motive-grey block">A11Y</span>
                        <span className="text-base font-bold text-emerald-600 font-mono">100</span>
                      </div>
                      <div className="p-3 bg-motive-offwhite rounded border border-motive-border text-center">
                        <span className="text-[10px] font-mono text-motive-grey block">SEO</span>
                        <span className="text-base font-bold text-emerald-600 font-mono">100</span>
                      </div>
                    </div>
                    <div className="p-3 bg-motive-offwhite rounded border border-motive-border flex items-center justify-between text-xs">
                      <div>
                        <span className="font-semibold text-motive-black block">Cross-Platform Mobile</span>
                        <span className="text-[10px] font-mono text-motive-grey">Flutter &bull; Offline SQLite Persisted</span>
                      </div>
                      <Smartphone className="w-5 h-5 text-motive-red" />
                    </div>
                  </div>
                </SpotlightCard>
              </div>

            </div>
          </div>

          {/* 03 — SEO & Digital Growth (Analytical Clean Slate Theme) */}
          <div className="bg-white rounded-xl border border-motive-border p-8 lg:p-12 shadow-subtle">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-motive-red font-bold px-2.5 py-1 bg-red-50 rounded border border-red-200">
                    CAPABILITY // 03
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-motive-grey">
                    SEARCH &amp; VISIBILITY
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-motive-black">
                  SEO &amp; Digital Growth
                </h3>

                <p className="text-sm sm:text-base text-motive-grey leading-relaxed max-w-xl">
                  Build stronger search visibility and establish a sustainable organic presence through strategic and technically sound SEO.
                </p>

                {/* Sub-capabilities list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'Technical SEO & Core Vitals',
                    'On-Page & Semantic Architecture',
                    'Off-Page & Domain Authority',
                    'Keyword & Intent Research',
                    'Comprehensive Website Audits',
                    'Search Engine Visibility',
                    'Content Optimization Clusters',
                    'Organic Growth Strategy',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-motive-black font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-motive-red shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/services/seo-digital-growth"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-motive-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red transition-all duration-200 group"
                  >
                    <span>Explore SEO</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Visual Preview / Search Analytics Mockup */}
              <div className="lg:col-span-5">
                <SpotlightCard className="p-6 bg-motive-offwhite">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-motive-border">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-motive-black font-bold flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5 text-motive-red" />
                      ORGANIC TRACTION METRICS
                    </span>
                    <span className="text-[10px] font-mono text-motive-grey">
                      VERIFIABLE DATA
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border border-motive-border flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-motive-grey block">
                          Crawl Efficiency
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-motive-black font-mono">
                          Zero Orphan Traps
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-mono font-semibold rounded">
                        100% INDEXED
                      </span>
                    </div>

                    <div className="bg-white p-3 rounded border border-motive-border flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-motive-grey block">
                          Entity Graph
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-motive-black font-mono">
                          JSON-LD Schema
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-zinc-100 text-motive-black text-[10px] font-mono font-semibold rounded">
                        ACTIVE ENTITIES
                      </span>
                    </div>

                    <div className="bg-white p-3 rounded border border-motive-border flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-motive-grey block">
                          Core Web Vitals
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-motive-black font-mono">
                          INP &lt; 50ms | LCP &lt; 0.9s
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-mono font-semibold rounded">
                        PASSING
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
