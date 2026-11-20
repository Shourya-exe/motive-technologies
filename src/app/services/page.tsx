import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Bot, Code2, TrendingUp, CheckCircle2, Cpu, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Our Capabilities & Services',
  description:
    'Explore our three interconnected technology capabilities: Best AI Agents Development & Autonomous Systems, Custom Web & Mobile Application Development, and Technical SEO/AEO/GEO Digital Growth.',
  keywords: [
    'best ai agents development',
    'enterprise ai automation services',
    'custom web application engineering',
    'flutter mobile app development',
    'technical seo agency',
    'answer engine optimization aeo',
    'generative engine optimization geo',
    'motive technologies services',
  ],
  alternates: {
    canonical: `${COMPANY_INFO.url}/services`,
  },
  openGraph: {
    title: 'Our Capabilities & Services — Motive Technologies',
    description:
      'Three interconnected capabilities. One technology partner: Best AI Agents Development, Custom Web & Mobile Engineering, and Technical SEO & Digital Growth.',
    url: `${COMPANY_INFO.url}/services`,
    type: 'website',
  },
};

export default function ServicesPage() {
  const serviceIcons = {
    'ai-automation': Bot,
    'web-app-development': Code2,
    'seo-digital-growth': TrendingUp,
  };

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${COMPANY_INFO.url}/services#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: COMPANY_INFO.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Capabilities & Services',
            item: `${COMPANY_INFO.url}/services`,
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${COMPANY_INFO.url}/services#catalog`,
        name: 'Motive Technologies Core Technology Capabilities',
        description: 'Comprehensive engineering capabilities spanning autonomous AI systems, full-stack digital products, and technical search visibility.',
        itemListElement: SERVICES.map((service, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: service.title,
          description: service.shortDescription,
          url: `${COMPANY_INFO.url}/services/${service.slug}`,
        })),
      },
    ],
  };

  return (
    <div className="bg-white">
      {/* Schema.org Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* Page Header */}
      <section className="pt-16 pb-20 bg-motive-offwhite/50 border-b border-motive-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-motive-red" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
                ENGINEERING CAPABILITIES
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-motive-black leading-tight">
              Three interconnected capabilities.{' '}
              <span className="text-motive-red">One technology partner.</span>
            </h1>
            <p className="text-base sm:text-lg text-motive-grey leading-relaxed">
              We don&apos;t treat AI automation, web development, and search rankings as separate things. We connect them together into a complete system that saves your team time, brings in new customers, and helps your business grow smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid & Deep Dives */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {SERVICES.map((service, idx) => {
          const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Cpu;
          return (
            <div
              key={service.id}
              id={service.slug}
              className="scroll-mt-24 border border-motive-border rounded-xl p-8 lg:p-12 bg-white shadow-subtle hover:shadow-premium transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Column 1: Overview & Meta */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded bg-motive-offwhite flex items-center justify-center text-motive-red border border-motive-border">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block">
                        CAPABILITY 0{idx + 1} // {service.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-motive-black tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-base text-motive-grey leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-motive-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red transition-colors group"
                    >
                      <span>Explore Dedicated {service.category} Page</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Column 2: Specific Offerings Grid */}
                <div className="lg:col-span-7 bg-motive-offwhite border border-motive-border rounded-lg p-6 lg:p-8">
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-motive-border">
                    <span className="text-xs font-mono uppercase tracking-widest text-motive-black font-bold">
                      Specialized Offerings &amp; Deliverables
                    </span>
                    <span className="text-xs font-mono text-motive-red font-semibold">
                      {service.capabilities.length} Core Areas
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.capabilities.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="bg-white p-4 rounded border border-motive-border shadow-subtle hover:border-zinc-400 transition-colors"
                      >
                        <h3 className="text-sm font-bold text-motive-black mb-1.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-motive-red shrink-0" />
                          <span>{cap.title}</span>
                        </h3>
                        <p className="text-xs text-motive-grey leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Workflow preview strip */}
                  {service.workflows && (
                    <div className="mt-6 pt-6 border-t border-motive-border">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block mb-3">
                        Execution Workflow
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {service.workflows.map((wf) => (
                          <div key={wf.step} className="bg-white p-2.5 rounded border border-motive-border text-center">
                            <span className="font-mono text-[10px] text-motive-red font-bold block">
                              STEP {wf.step}
                            </span>
                            <span className="text-[11px] font-semibold text-motive-black line-clamp-1">
                              {wf.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Conversion Banner */}
      <section className="bg-motive-dark text-white py-16 border-t border-motive-darkborder">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Need an integrated combination of services?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            Most modern businesses require simultaneous automation, web modernization, and search optimization. We tailor multi-disciplinary teams to your roadmap.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-motive-red text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red-hover transition-colors"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
