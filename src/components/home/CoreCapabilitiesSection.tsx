'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Bot, Code2, TrendingUp, CheckCircle2, Zap, Shield, Sparkles, MessageSquare, Box, Gauge, Search } from 'lucide-react';
import { SERVICES } from '@/data/siteData';
import { AiChatInteractionDemo } from '@/components/common/AiChatInteractionDemo';
import { WebPerformanceAuditDemo } from '@/components/common/WebPerformanceAuditDemo';
import { SeoAeoCitationDemo } from '@/components/common/SeoAeoCitationDemo';

interface CapabilityMeta {
  id: string;
  icon: React.ElementType;
  imageSrc: string;
  imageAlt: string;
  statusBadge: string;
  statusColor: string;
  metricBadge: string;
  metricDetail: string;
  techTags: string[];
  clientOutcome: string;
  keyCapabilities: string[];
  ctaText: string;
  interactiveLabel: string;
  interactiveIcon: React.ElementType;
  graphicLabel: string;
}

export const CoreCapabilitiesSection: React.FC = () => {
  const [viewModes, setViewModes] = useState<Record<string, 'interactive' | 'graphic'>>({
    'ai-automation': 'interactive',
    'web-app-development': 'interactive',
    'seo-digital-growth': 'interactive',
  });

  const toggleViewMode = (id: string, mode: 'interactive' | 'graphic') => {
    setViewModes((prev) => ({ ...prev, [id]: mode }));
  };

  const capabilitiesData: CapabilityMeta[] = [
    {
      id: 'ai-automation',
      icon: Bot,
      imageSrc: '/images/ai-agents-automation.jpg',
      imageAlt: 'Motive AI Agents and Autonomous Workflow Automation System',
      statusBadge: 'AUTONOMOUS AGENT RUNTIME',
      statusColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40',
      metricBadge: '< 12s Response',
      metricDetail: '24/7 Autonomous Lead Capture',
      techTags: ['Multi-Agent Architecture', 'WhatsApp Cloud API', 'Zero-Error CRM Sync', 'Event Bus'],
      clientOutcome: 'Save 20–40 hours per week by replacing manual repetitive admin with autonomous AI agents and instant WhatsApp lead qualification.',
      keyCapabilities: [
        'Best AI Agents Development & Multi-Agent Reasoning',
        '24/7 WhatsApp Lead Qualification & Booking',
        'Autonomous Workflow Sync (CRM, Invoicing, Forms)',
        'Zero-Error Data Transfer Across Enterprise Tools',
      ],
      ctaText: 'Explore AI Agents & Automation',
      interactiveLabel: 'Live Chat Flow',
      interactiveIcon: MessageSquare,
      graphicLabel: '3D Topology',
    },
    {
      id: 'web-app-development',
      icon: Code2,
      imageSrc: '/images/web-engineering-platform.jpg',
      imageAlt: 'Motive High-Performance Web Engineering and Enterprise Platform Architecture',
      statusBadge: 'ENTERPRISE EDGE RUNTIME',
      statusColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/40',
      metricBadge: '98/100 Lighthouse',
      metricDetail: 'Sub-Second Page Loads',
      techTags: ['Next.js App Router', 'TypeScript & Tailwind', 'Enterprise Portals', 'Cross-Platform Mobile'],
      clientOutcome: 'Sub-second page loads, institutional brand credibility, and frictionless user journeys that maximize client conversion rates.',
      keyCapabilities: [
        'Bespoke Corporate Websites Built with Next.js',
        'Custom Web Applications & Secure Client Portals',
        'Cross-Platform Android & Mobile App Development',
        'WCAG Accessible, High-Converting Swiss UI Design',
      ],
      ctaText: 'Explore Web & Mobile Engineering',
      interactiveLabel: 'Performance Audit',
      interactiveIcon: Gauge,
      graphicLabel: '3D Platform',
    },
    {
      id: 'seo-digital-growth',
      icon: TrendingUp,
      imageSrc: '/images/seo-aeo-growth.jpg',
      imageAlt: 'Motive Technical SEO and AEO Search Engine Growth System',
      statusBadge: 'SEMANTIC KNOWLEDGE GRAPH',
      statusColor: 'text-red-400 border-red-500/30 bg-red-950/40',
      metricBadge: '+142% Organic Lift',
      metricDetail: 'Zero Monthly Ad Dependency',
      techTags: ['Technical SEO Audits', 'AEO / GEO Engine', 'Schema.org JSON-LD', 'Core Web Vitals'],
      clientOutcome: 'Dominate Google search results for commercial high-intent terms and get cited by modern AI Answer Engines (Perplexity, ChatGPT).',
      keyCapabilities: [
        'Full Technical SEO & Core Web Vitals Audits',
        'AEO & GEO Optimization for Perplexity & ChatGPT',
        'High-Intent Keyword & Semantic Entity Strategy',
        'Structured Schema Markup & Crawl Optimization',
      ],
      ctaText: 'Explore SEO, AEO & Growth',
      interactiveLabel: 'AI Citation & SERP',
      interactiveIcon: Search,
      graphicLabel: '3D Graph',
    },
  ];

  const renderInteractiveComponent = (id: string) => {
    switch (id) {
      case 'ai-automation':
        return <AiChatInteractionDemo />;
      case 'web-app-development':
        return <WebPerformanceAuditDemo />;
      case 'seo-digital-growth':
        return <SeoAeoCitationDemo />;
      default:
        return null;
    }
  };

  return (
    <section className="py-24 lg:py-36 bg-white border-b border-motive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-motive-border">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-motive-red" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
                WHAT WE BUILD // THREE INTERCONNECTED CAPABILITIES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-motive-black leading-[1.05]">
              Three core capabilities.<br />
              <span className="text-motive-red">One unified technology partner.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pl-6">
            <p className="text-sm sm:text-base text-motive-grey leading-relaxed">
              We engineer intelligent automation, modern web platforms, and organic visibility as a coordinated technological backbone designed to compound your revenue.
            </p>
          </div>
        </div>

        {/* Capability Rows with High-Impact Simulators & Graphics */}
        <div className="divide-y divide-motive-border">
          {SERVICES.map((service, idx) => {
            const meta = capabilitiesData.find((c) => c.id === service.id) || capabilitiesData[0];
            const Icon = meta.icon;
            const isEven = idx % 2 === 1;
            const currentMode = viewModes[service.id] || 'interactive';
            const InteractiveIcon = meta.interactiveIcon;

            return (
              <div
                key={service.id}
                className="py-16 lg:py-24 group transition-colors duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center`}>
                  
                  {/* Left Column: Narrative & Key Deliverables */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Index & Category */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl font-light text-motive-grey group-hover:text-motive-red transition-colors">
                        0{idx + 1}
                      </span>
                      <span className="text-zinc-300 font-mono">/</span>
                      <span className="font-mono text-xs uppercase tracking-widest text-zinc-600 font-bold">
                        {service.category}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-motive-black tracking-tight leading-snug">
                      {service.title}
                    </h3>
                    
                    {/* Short Description */}
                    <p className="text-base text-zinc-700 font-normal leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* ROI / Client Benefit Pill */}
                    <div className="p-4 bg-motive-offwhite rounded-xl border-l-4 border-motive-red space-y-1">
                      <div className="flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-motive-red" />
                        <span className="font-bold font-mono text-[11px] uppercase tracking-wider text-motive-black">
                          Proven Business Impact
                        </span>
                      </div>
                      <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                        {meta.clientOutcome}
                      </p>
                    </div>

                    {/* Key Capabilities Checklist */}
                    <div className="space-y-2.5 pt-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold block">
                        Deliverables &amp; Specifications:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {meta.keyCapabilities.map((cap, cIdx) => (
                          <div
                            key={cIdx}
                            className="text-xs flex items-start gap-2 text-zinc-800 font-medium leading-relaxed bg-zinc-50 p-2.5 rounded border border-zinc-200/80"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Link */}
                    <div className="pt-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-motive-black text-white hover:bg-motive-red text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-all shadow-sm group/btn"
                      >
                        <span>{meta.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>

                  {/* Right Column: Visual Simulator or 3D Architecture Graphic */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-3">
                      
                      {/* Interactive View Switcher */}
                      <div className="flex items-center justify-between pb-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-motive-red animate-pulse" />
                          <span>INTERACTIVE PREVIEW:</span>
                        </span>

                        <div className="inline-flex items-center gap-1 p-1 bg-zinc-100 rounded-lg border border-zinc-200 text-xs">
                          <button
                            onClick={() => toggleViewMode(service.id, 'interactive')}
                            className={`px-3 py-1 rounded font-mono text-[11px] transition-all flex items-center gap-1.5 cursor-pointer ${
                              currentMode === 'interactive'
                                ? 'bg-motive-black text-white font-bold shadow-xs'
                                : 'text-zinc-600 hover:text-black'
                            }`}
                          >
                            <InteractiveIcon className="w-3 h-3 text-motive-red" />
                            <span>{meta.interactiveLabel}</span>
                          </button>
                          <button
                            onClick={() => toggleViewMode(service.id, 'graphic')}
                            className={`px-3 py-1 rounded font-mono text-[11px] transition-all flex items-center gap-1.5 cursor-pointer ${
                              currentMode === 'graphic'
                                ? 'bg-motive-black text-white font-bold shadow-xs'
                                : 'text-zinc-600 hover:text-black'
                            }`}
                          >
                            <Box className="w-3 h-3 text-motive-red" />
                            <span>{meta.graphicLabel}</span>
                          </button>
                        </div>
                      </div>

                      {/* Content Panel */}
                      {currentMode === 'interactive' ? (
                        renderInteractiveComponent(service.id)
                      ) : (
                        <div className="relative h-[520px] max-h-[520px] w-full rounded-2xl overflow-hidden border border-zinc-300 shadow-xl bg-zinc-950 group/card transition-all duration-300 hover:shadow-2xl flex flex-col justify-between">
                          {/* Top Floating Telemetry Bar */}
                          <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none shrink-0">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-mono font-bold backdrop-blur-md ${meta.statusColor}`}>
                              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                              <span>{meta.statusBadge}</span>
                            </div>

                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white font-medium">
                              <span className="text-motive-red font-bold">{meta.metricBadge}</span>
                            </div>
                          </div>

                          {/* Graphic Image with Zoom Hover Effect */}
                          <div className="relative flex-1 w-full overflow-hidden bg-zinc-900">
                            <Image
                              src={meta.imageSrc}
                              alt={meta.imageAlt}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                              className="object-cover object-center group-hover/card:scale-105 transition-transform duration-700 ease-out"
                              priority={idx === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                          </div>

                          {/* Bottom Micro Specs Overlay Bar */}
                          <div className="p-4 bg-zinc-900/95 backdrop-blur border-t border-white/10 flex flex-wrap items-center justify-between gap-2 shrink-0">
                            <div className="flex flex-wrap items-center gap-2">
                              {meta.techTags.slice(0, 3).map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-zinc-300 border border-white/5"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <span className="text-[10px] font-mono text-zinc-400 font-semibold">
                              {meta.metricDetail}
                            </span>
                          </div>
                        </div>
                      )}

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
