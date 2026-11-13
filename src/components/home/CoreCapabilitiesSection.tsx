'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, Code2, TrendingUp, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '@/data/siteData';

export const CoreCapabilitiesSection: React.FC = () => {
  const serviceHighlights = [
    {
      id: 'ai-automation',
      icon: Bot,
      clientOutcome: 'Save 20–40 hours/week by automating repetitive tasks, WhatsApp customer service, and CRM updates.',
      keyCapabilities: [
        'Autonomous AI Agents & Task Execution',
        '24/7 WhatsApp Business API & Lead Qualification',
        'Custom Workflow Automation (CRM, Invoicing, Forms)',
        'Zero-Error Data Synchronization Across Apps',
      ],
      ctaText: 'Explore AI Automation Services',
    },
    {
      id: 'web-app-development',
      icon: Code2,
      clientOutcome: 'Instant sub-second page loads, institutional credibility, and high-converting modern digital platforms.',
      keyCapabilities: [
        'Bespoke Corporate Websites Built with Next.js',
        'Custom Web Applications & Secure Client Portals',
        'Cross-Platform Android & Mobile App Development',
        'Mobile-First, WCAG Accessible & Swiss UI Design',
      ],
      ctaText: 'Explore Web & Mobile Engineering',
    },
    {
      id: 'seo-digital-growth',
      icon: TrendingUp,
      clientOutcome: 'Dominate Google search results on high-intent commercial queries to generate steady inbound leads.',
      keyCapabilities: [
        'Full Technical SEO & Core Web Vitals Audits',
        'High-Intent Keyword & Semantic Entity Strategy',
        'Structured Schema Markup & Crawl Optimization',
        'Sustainable Inbound Leads Without Monthly Ad Spend',
      ],
      ctaText: 'Explore SEO & Digital Growth',
    },
  ];

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
              We do not treat automation, web engineering, and search visibility as isolated tasks. We engineer them as a single, coordinated technological backbone designed to compound commercial value.
            </p>
          </div>
        </div>

        {/* Capability Rows */}
        <div className="divide-y divide-motive-border">
          {SERVICES.map((service, idx) => {
            const highlight = serviceHighlights.find((h) => h.id === service.id) || serviceHighlights[0];
            const Icon = highlight.icon;

            return (
              <div
                key={service.id}
                className="py-16 lg:py-20 group transition-colors duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Column 1: Index Number & Category (3 cols on lg) */}
                  <div className="lg:col-span-3 space-y-3">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-3xl sm:text-4xl font-light text-motive-grey group-hover:text-motive-red transition-colors">
                        0{idx + 1}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                        // {service.category}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded bg-motive-offwhite flex items-center justify-center text-motive-red border border-motive-border">
                      <Icon className="w-5 h-5" />
                    </div>

                    <p className="text-xs font-mono text-zinc-400 pt-1">
                      ENTERPRISE SPECIFICATION
                    </p>
                  </div>

                  {/* Column 2: Title & Narrative (5 cols on lg) */}
                  <div className="lg:col-span-5 space-y-4">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-motive-black tracking-tight leading-snug">
                      {service.title}
                    </h3>
                    
                    <p className="text-base text-motive-black font-medium leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <p className="text-sm text-motive-grey leading-relaxed font-normal">
                      {service.fullDescription}
                    </p>

                    {/* Client Outcome Box */}
                    <div className="p-4 bg-motive-offwhite rounded border-l-2 border-motive-red text-xs text-motive-black">
                      <span className="font-bold block mb-1 font-mono uppercase tracking-wider text-motive-red">
                        Client Benefit
                      </span>
                      <p className="leading-relaxed">
                        {highlight.clientOutcome}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red transition-colors group/link"
                      >
                        <span>{highlight.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform text-motive-red" />
                      </Link>
                    </div>
                  </div>

                  {/* Column 3: Tabular Capabilities Spec (4 cols on lg) */}
                  <div className="lg:col-span-4 bg-motive-offwhite/60 p-6 lg:p-8 rounded-lg border border-motive-border">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-motive-black font-bold block pb-3 mb-4 border-b border-motive-border">
                      What We Build &amp; Deliver
                    </span>

                    <ul className="space-y-3.5">
                      {highlight.keyCapabilities.map((cap, cIdx) => (
                        <li
                          key={cIdx}
                          className="text-xs flex items-start gap-2.5 text-motive-black font-medium leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-motive-red shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-motive-border flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>TYPE-SAFE &bull; AUDITED</span>
                      <span>PRODUCTION-GRADE</span>
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
