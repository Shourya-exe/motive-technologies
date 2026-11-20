import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Bot, Cpu, CheckCircle2, XCircle, ArrowUpRight, Zap, GitFork, RefreshCw, MessageSquare, Terminal, Database, Clock, Sparkles } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/data/siteData';
import { DirectAnswerBlock } from '@/components/common/DirectAnswerBlock';
import { AiChatInteractionDemo } from '@/components/common/AiChatInteractionDemo';

export const metadata: Metadata = {
  title: 'AI Automation & Best AI Agents Development Services',
  description:
    'Engineering production-grade autonomous AI agents, multi-agent business workflows, official WhatsApp Business Cloud API automation, and pgvector RAG vector search systems.',
  keywords: [
    'best ai agents development',
    'best ai agent development company',
    'top ai agent developers',
    'custom ai agent development services',
    'autonomous ai agents development',
    'enterprise ai agent systems',
    'multi-agent ai development',
    'ai workflow automation agency',
    'ai automation company',
    'business process automation',
    'whatsapp business api automation',
    'custom workflow automation',
    'rag vector search ai',
    'motive technologies ai automation',
  ],
  alternates: {
    canonical: `${COMPANY_INFO.url}/services/ai-automation`,
  },
  openGraph: {
    title: 'AI Automation & Best AI Agents Development Services — Motive Technologies',
    description:
      'Eliminate operational friction with deterministic, hallucination-resistant autonomous AI agents, WhatsApp Cloud API integrations, and multi-system business process automation.',
    url: `${COMPANY_INFO.url}/services/ai-automation`,
    type: 'website',
    images: [
      {
        url: '/images/ai-agents-automation.jpg',
        width: 1200,
        height: 630,
        alt: 'Motive Technologies AI Agents Development and Autonomous Workflow Architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation & Best AI Agents Development Services — Motive Technologies',
    description:
      'Autonomous multi-agent workflows, WhatsApp Cloud API integrations, and pgvector RAG vector search with 100% intellectual property ownership.',
    images: ['/images/ai-agents-automation.jpg'],
  },
};

export default function AIAutomationPage() {
  const serviceData = SERVICES.find(s => s.id === 'ai-automation')!;

  const challenges = [
    {
      problem: 'Manual Repetitive Data Entry',
      solution: 'Smart AI assistants automatically read PDFs, emails, and invoices and copy the data directly into your software without mistakes.',
    },
    {
      problem: 'Slow Replies to New Leads (Hours to Days)',
      solution: '24/7 WhatsApp AI agents reply in seconds, answer customer questions, qualify buyers, and book meetings on your calendar.',
    },
    {
      problem: 'Disconnected Business Tools',
      solution: 'Automatic connections that keep your spreadsheets, CRM, accounting, and sales software continuously updated in real time.',
    },
    {
      problem: 'Risk of AI Making Mistakes',
      solution: 'We train AI strictly on your actual company documents and pricing guidelines, with instant alerts sent to your team for tricky cases.',
    },
  ];

  // Structured Data (Service, BreadcrumbList, HowTo, FAQPage) for SEO, AEO & GEO
  const serviceSchemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${COMPANY_INFO.url}/services/ai-automation#breadcrumb`,
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'AI Automation & Best AI Agents Development',
            item: `${COMPANY_INFO.url}/services/ai-automation`,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${COMPANY_INFO.url}/services/ai-automation#service`,
        name: 'AI Automation & Best AI Agents Development',
        serviceType: 'Artificial Intelligence & Business Process Automation',
        provider: {
          '@type': 'Organization',
          '@id': `${COMPANY_INFO.url}/#organization`,
          name: COMPANY_INFO.name,
        },
        description: serviceData.fullDescription,
        url: `${COMPANY_INFO.url}/services/ai-automation`,
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Country', name: 'Australia' },
          { '@type': 'Country', name: 'Singapore' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'AI Automation Capabilities',
          itemListElement: serviceData.capabilities.map((cap) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: cap.title,
              description: cap.description,
            },
          })),
        },
      },
      {
        '@type': 'HowTo',
        '@id': `${COMPANY_INFO.url}/services/ai-automation#howto`,
        name: 'How Motive Technologies Deploys Enterprise Autonomous AI Agents',
        description: 'Our four-phase methodology for engineering and deploying deterministic, hallucination-resistant AI systems.',
        step: serviceData.workflows?.map((wf) => ({
          '@type': 'HowToStep',
          position: parseInt(wf.step, 10),
          name: wf.title,
          text: wf.detail,
        })) || [],
      },
      {
        '@type': 'FAQPage',
        '@id': `${COMPANY_INFO.url}/services/ai-automation#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why choose Motive Technologies for the best AI agents development?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Motive Technologies provides the best AI agents development and enterprise autonomous workflows. We engineer deterministic, hallucination-resistant multi-agent architectures, official Meta WhatsApp Cloud API integrations, and vector semantic search (pgvector RAG). Our AI agents execute multi-step tool calls, synchronize CRM state, and resolve complex inquiries in seconds with 100% precision.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do AI agents prevent hallucinations in business workflows?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We enforce deterministic state machines, typed runtime output schemas (Pydantic/Zod), and retrieval-augmented generation (RAG) strictly bounded to your private internal documents. Every statement is validated against source embeddings, and confidence-threshold escalations automatically route edge cases to human operators.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you automate customer engagement through WhatsApp Business API?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We are experts in official WhatsApp Cloud API integration, creating conversational assistants that qualify leads, display interactive product/service catalogs, collect intake forms, and synchronize data directly into HubSpot, Zoho, or Salesforce in under 15 seconds.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-white">
      {/* Schema.org Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaGraph) }}
      />

      {/* Hero Header */}
      <section className="pt-16 pb-20 bg-motive-dark text-white border-b border-motive-darkborder relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-30 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded">
                <span className="w-2 h-2 rounded-full bg-motive-red animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
                  CAPABILITY // 01 &bull; AI &amp; AUTOMATION
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Best AI Agents Development &amp;{' '}
                <span className="text-motive-red">Intelligent Systems.</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                {serviceData.subheadline}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-motive-red text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red-hover transition-colors"
                >
                  <span>Deploy AI Systems</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#workflows"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-900 border border-zinc-800 text-white text-xs font-mono rounded hover:bg-zinc-800 transition-colors"
                >
                  <span>Inspect Architecture</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <AiChatInteractionDemo />
            </div>

          </div>
        </div>
      </section>

      {/* Core AI Capabilities Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-motive-border">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-motive-grey">
            FULL SPECTRUM CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-motive-black">
            The Best AI Agents Development &amp; Automation Services
          </h2>
          <p className="text-motive-grey text-base">
            From autonomous multi-step agents to WhatsApp conversational engines, we build production-grade automation systems tailored to commercial operational constraints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-white border border-motive-border rounded-lg p-6 shadow-subtle hover:border-zinc-400 hover:shadow-premium transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-motive-red font-bold block mb-3">
                  0{idx + 1} //
                </span>
                <h3 className="text-base font-bold text-motive-black mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs text-motive-grey leading-relaxed">
                  {cap.description}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-motive-border/60 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>ENTERPRISE SPEC</span>
                <span className="text-motive-black font-semibold">TESTED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Answer Block (AEO / GEO Optimization) */}
        <div className="mt-16">
          <DirectAnswerBlock
            question="Why choose Motive Technologies for the best AI agents development?"
            directAnswer="Motive Technologies develops smart, dependable AI agents and automation systems that do real work for your business. We connect official WhatsApp Cloud API, customer databases, and business software so your AI can answer customer inquiries instantly, qualify leads, schedule meetings, and update your records without mistakes or hallucinations."
            keyTakeaways={[
              'Saves 20–40 hours per week by taking over repetitive manual admin',
              'Instant replies to WhatsApp and web inquiries 24 hours a day',
              'Safe and accurate responses grounded in your actual business data',
              '100% intellectual property ownership—you own all code and setups',
            ]}
            ctaUrl="/contact"
            ctaText="Schedule AI Automation Consultation"
          />
        </div>
      </section>

      {/* Before-and-After Process Visualization & Realistic Workflow */}
      <section id="workflows" className="py-20 bg-motive-offwhite/50 border-b border-motive-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-motive-red font-bold">
              PROCESS TRANSFORMATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-motive-black">
              Before vs. After Automation Architecture
            </h2>
            <p className="text-motive-grey text-base">
              See the difference between doing everything by hand and letting smart AI automation do the heavy lifting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* The Before Card (Manual / Fragmented) */}
            <div className="bg-white border border-red-200 rounded-xl p-8 shadow-subtle">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-red-100">
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span className="font-mono text-xs uppercase font-bold text-red-700 tracking-wider">
                    Manual Process (Before)
                  </span>
                </div>
                <span className="text-xs font-mono text-red-600 font-semibold">Slow</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="p-3 bg-red-50/50 rounded border border-red-100 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-zinc-800">Hours-Long Delays to Customer Inquiries:</span>
                    <p className="text-zinc-600 mt-0.5">Leads sit in mailboxes or personal WhatsApp chats overnight, leading to lost sales.</p>
                  </div>
                </div>

                <div className="p-3 bg-red-50/50 rounded border border-red-100 flex items-start gap-3">
                  <Database className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-zinc-800">Endless Copy-Pasting Between Apps:</span>
                    <p className="text-zinc-600 mt-0.5">Team members manually re-type information from emails and forms into spreadsheets and CRMs, causing costly errors.</p>
                  </div>
                </div>

                <div className="p-3 bg-red-50/50 rounded border border-red-100 flex items-start gap-3">
                  <RefreshCw className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-zinc-800">Repeating the Same Answers All Day:</span>
                    <p className="text-zinc-600 mt-0.5">Valuable staff spend hours answering basic pricing, timing, and availability questions instead of closing deals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The After Card (Motive AI Orchestration) */}
            <div className="bg-white border border-emerald-300 rounded-xl p-8 shadow-premium">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-emerald-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="font-mono text-xs uppercase font-bold text-emerald-800 tracking-wider">
                    With Motive AI Automation (After)
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-700 font-semibold">Instant (&lt; 15s)</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="p-3 bg-emerald-50/50 rounded border border-emerald-100 flex items-start gap-3">
                  <Zap className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-zinc-900">Instant Answers to Every Inquiry (&lt; 15s):</span>
                    <p className="text-zinc-700 mt-0.5">Customer questions on WhatsApp or your website are answered accurately 24/7 using your approved business information.</p>
                  </div>
                </div>

                <div className="p-3 bg-emerald-50/50 rounded border border-emerald-100 flex items-start gap-3">
                  <GitFork className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-zinc-900">Automatic Sync Across All Your Tools:</span>
                    <p className="text-zinc-700 mt-0.5">New leads, customer details, and invoice records update automatically across all your tools without lifting a finger.</p>
                  </div>
                </div>

                <div className="p-3 bg-emerald-50/50 rounded border border-emerald-100 flex items-start gap-3">
                  <Bot className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-zinc-900">Instant Alerts for Complex Requests:</span>
                    <p className="text-zinc-700 mt-0.5">Whenever an inquiry needs special attention, the AI summarizes the conversation and sends it directly to your team to step in.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Realistic 4-Stage Architectural Flow Diagram */}
          <div className="mt-12 bg-white border border-motive-border rounded-xl p-8">
            <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block mb-6">
              SYSTEM PIPELINE FLOW
            </span>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {serviceData.workflows?.map((wf, idx) => (
                <div key={wf.step} className="bg-motive-offwhite p-5 rounded-lg border border-motive-border relative">
                  <span className="font-mono text-xs font-bold text-motive-red block mb-1">
                    PHASE {wf.step}
                  </span>
                  <h4 className="text-sm font-bold text-motive-black mb-2">
                    {wf.title}
                  </h4>
                  <p className="text-xs text-motive-grey leading-relaxed">
                    {wf.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Common Business Challenges We Address */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-motive-border">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-motive-grey">
            PROBLEM RESOLUTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-motive-black">
            Common Business Bottlenecks We Eliminate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((c, idx) => (
            <div key={idx} className="bg-motive-offwhite p-6 rounded-lg border border-motive-border space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-motive-red" />
                <h3 className="text-sm font-bold text-motive-black">
                  {c.problem}
                </h3>
              </div>
              <p className="text-xs text-motive-grey leading-relaxed pl-3.5 border-l border-motive-border">
                <strong className="text-motive-black font-semibold">Motive Engineering Solution: </strong>
                {c.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Enquiry CTA Section */}
      <section className="bg-motive-black text-white py-20 border-t border-motive-darkborder">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest">
            OPERATIONAL ACCELERATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Ready to deploy autonomous AI systems?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Let us assess your current workflows, identify repetitive bottlenecks, and engineer a dedicated automation blueprint.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?service=ai-automation"
              className="px-8 py-4 bg-motive-red text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red-hover transition-colors"
            >
              Discuss Your Automation Project
            </Link>
            <a
              href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="text-xs font-mono text-zinc-300 hover:text-white"
            >
              Or call direct: {COMPANY_INFO.primaryPhone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
