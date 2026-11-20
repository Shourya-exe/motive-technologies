import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Privacy Policy | Motive Technologies',
  description: 'Privacy Policy, data protection commitments, and governance standards for Motive Technologies.',
  alternates: {
    canonical: `${COMPANY_INFO.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 sm:py-24 border-b border-motive-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-motive-border pb-8 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-motive-red" />
            <span className="font-mono text-xs uppercase tracking-widest text-motive-grey font-bold">
              LEGAL &amp; COMPLIANCE
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-motive-black tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-motive-grey">
            Effective Date: November 2026 &bull; Motive Technologies ({COMPANY_INFO.domain})
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm text-motive-grey leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">1. Overview &amp; Commitment</h2>
            <p>
              Motive Technologies (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy and the confidential information you entrust with us. This Privacy Policy details our governance standards regarding the collection, handling, and protection of information across our corporate website ({COMPANY_INFO.domain}) and client consultation channels.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">2. Information We Collect</h2>
            <p>
              We collect information provided directly by you when submitting an inquiry, scheduling an architectural consultation, or engaging our engineering team:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-700">
              <li>Full Name and Professional Title</li>
              <li>Company / Organization Name</li>
              <li>Contact Details (Business Email, Phone Number, WhatsApp Contact)</li>
              <li>Project briefs, workflow descriptions, and technical specifications</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">3. How We Use Your Information</h2>
            <p>Your information is used strictly to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-700">
              <li>Evaluate project requirements and deliver transparent technical proposals</li>
              <li>Communicate directly regarding project milestones and deliverables</li>
              <li>Execute mutual Non-Disclosure Agreements (NDAs) and protect custom intellectual property</li>
              <li>Prevent automated spam, maintain website security, and monitor uptime</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">4. Data Sharing &amp; Non-Disclosure</h2>
            <p>
              We never sell, rent, monetize, or distribute your contact details or project documentation to third-party advertisers, data aggregators, or lead brokers. All proprietary information shared with Motive Technologies remains strictly guarded under commercial confidentiality standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">5. Data Retention &amp; Security</h2>
            <p>
              We apply bank-grade SSL/TLS encryption across all communications. Project briefs and client data are securely stored with restricted access control and retained only as long as necessary to fulfill project engagements or comply with legal obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">6. Your Rights</h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections, or request deletion of your contact records at any time by contacting our engineering team.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">7. Contact &amp; Inquiries</h2>
            <p>
              For questions regarding this policy or our privacy safeguards, contact us directly via email at{' '}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-motive-red font-semibold hover:underline">
                {COMPANY_INFO.email}
              </a>{' '}
              or call{' '}
              <a href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`} className="text-motive-black font-semibold hover:underline">
                {COMPANY_INFO.primaryPhone}
              </a>.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-motive-border flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/terms"
            className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 hover:text-motive-black transition-colors"
          >
            Terms of Service &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
}
