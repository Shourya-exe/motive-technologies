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
      'We start with a quick 20–30 minute chat to understand what slows your business down and what you want to achieve. Within 1–2 days, we send you a straightforward plan with clear milestones and transparent pricing. Once approved, we build your solution quickly, giving you regular updates every step of the way.',
  },
  {
    question: 'How fast can our project be delivered?',
    answer:
      'Most custom business websites and core workflow automations are completely built, tested, and live within 2 to 4 weeks. For urgent automations—like a WhatsApp lead assistant or automatic CRM sync—we can often have a working version running for you in just 5 to 7 days.',
  },
  {
    question: 'Can you connect with our existing tools, CRM, and WhatsApp?',
    answer:
      'Yes! Connecting your daily tools is what we do best. We link your WhatsApp, Google Workspace, HubSpot, Zoho, Salesforce, billing systems, and spreadsheets so your information flows automatically without any manual copy-pasting.',
  },
  {
    question: 'Who owns the code and intellectual property after delivery?',
    answer:
      'You own everything 100%. All custom code, designs, and data belong entirely to your company. We sign strict non-disclosure agreements (NDAs) and never lock you into proprietary platforms or surprise fees.',
  },
  {
    question: 'What happens after the project launches? Do you provide support?',
    answer:
      'Yes, we stand behind our work. Every project includes clear guides, team walkthroughs, and hands-on launch support. We also provide ongoing monthly care and updates so your tech continues running smoothly as your business grows.',
  },
  {
    question: 'Why choose Motive Technologies for the best AI agents development?',
    answer:
      'We build dependable AI agents that actually do real work for your business without making mistakes. Instead of simple chatbot toys, our AI agents can answer customer inquiries on WhatsApp 24/7, qualify leads, book appointments, and update your CRM automatically. They work around the clock with lightning speed, saving your team 20 to 40 hours of manual repetitive work every week.',
  },
  {
    question: 'What is AEO and GEO, and why does Motive Technologies specialize in it?',
    answer:
      'People don’t just search on Google anymore—millions now ask questions directly to AI tools like ChatGPT, Perplexity, and Google AI Overviews. AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) make sure these AI engines mention and recommend your business by name when potential customers ask for recommendations in your industry.',
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
                    aria-label={`Toggle answer for: ${faq.question}`}
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
