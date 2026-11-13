'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, ArrowRight, HelpCircle, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'How does Motive Technologies work with new clients?',
    answer:
      'We start with a focused 20–30 minute discovery consultation to understand your operational bottlenecks and growth objectives. Within 24–48 hours, we provide an architectural proposal with clear milestones, deliverables, and transparent pricing. Once aligned, we engineer your solution in rapid, transparent sprints with regular progress updates.',
  },
  {
    question: 'How fast can our project be delivered?',
    answer:
      'Most custom corporate websites and core workflow automations are fully designed, tested, and launched in 2 to 4 weeks. For high-priority automations (such as WhatsApp lead assistants or CRM synchronization pipelines), we can often deploy initial functioning prototypes within 5 to 7 business days.',
  },
  {
    question: 'Can you integrate with our existing software, CRM, and WhatsApp?',
    answer:
      'Yes, seamless integration is our core strength. We connect your daily operations across the WhatsApp Cloud API, Google Workspace, HubSpot, Zoho, Salesforce, custom PostgreSQL/MySQL databases, payment gateways, and legacy internal software with zero downtime.',
  },
  {
    question: 'Who owns the code and intellectual property after delivery?',
    answer:
      'You do. You retain 100% intellectual property ownership of all custom codebases, designs, workflow diagrams, and database structures we engineer for your company. We enforce strict enterprise-grade NDAs and zero vendor lock-in.',
  },
  {
    question: 'What happens after the project launches? Do you provide support?',
    answer:
      'Every project includes complete technical documentation, team training, and dedicated post-launch support. We also offer ongoing maintenance, security updates, and performance optimization retainers to ensure your systems continuously evolve with your business.',
  },
];

export const ClientFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 lg:py-36 bg-motive-offwhite/40 border-b border-motive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-16 border-b border-motive-border">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-motive-red" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
                FREQUENTLY ASKED QUESTIONS // CLIENT GUIDE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-motive-black leading-tight">
              Clear answers for confident decisions.
            </h2>
            <p className="text-sm sm:text-base text-motive-grey leading-relaxed">
              Everything you need to know about partnering with Motive Technologies, our delivery process, intellectual property, and timelines.
            </p>

            <div className="pt-4 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-motive-black font-bold block">
                Have a specific question not covered here?
              </span>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-motive-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red transition-colors"
                >
                  <span>Ask Us Directly</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white border border-motive-border text-xs font-mono font-bold text-motive-black rounded hover:border-zinc-400 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-motive-red" />
                  <span>{COMPANY_INFO.primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Accordion List (7 cols on lg) */}
          <div className="lg:col-span-7 divide-y divide-motive-border border-t lg:border-t-0 border-b border-motive-border">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-6 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-motive-black group-hover:text-motive-red transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all shrink-0 ${
                        isOpen
                          ? 'bg-motive-black text-white border-motive-black'
                          : 'bg-white text-motive-grey border-motive-border group-hover:border-zinc-400 group-hover:text-motive-black'
                      }`}
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pr-6 text-sm sm:text-base text-motive-grey leading-relaxed">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
