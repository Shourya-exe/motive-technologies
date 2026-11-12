import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Privacy Policy | Motive Technologies',
  description: 'Privacy Policy and data governance principles for Motive Technologies.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16 sm:py-20 border-b border-motive-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-motive-border pb-6 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-motive-red font-bold">
            LEGAL &amp; COMPLIANCE
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-motive-black">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-motive-grey">
            Last Updated: November 2026 &bull; Motive Technologies ({COMPANY_INFO.domain})
          </p>
        </div>

        <div className="space-y-8 text-sm text-motive-grey leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">1. Overview</h2>
            <p>
              Motive Technologies (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the confidential information you share with us through our corporate website ({COMPANY_INFO.domain}) and associated digital services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">2. Information We Collect</h2>
            <p>
              We collect information provided directly by you when submitting a project enquiry, contacting our team, or requesting an architectural consultation:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name and Job Title</li>
              <li>Business or Organization Name</li>
              <li>Contact Details (Email Address, Telephone Number)</li>
              <li>Technical project requirements, specifications, and budget ranges</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">3. Purpose and Use of Data</h2>
            <p>
              The information we collect is strictly utilized to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Evaluate technical project feasibility and deliver project proposals</li>
              <li>Establish direct communications regarding your business enquiry</li>
              <li>Comply with mutual Non-Disclosure Agreements and intellectual property safeguards</li>
              <li>Optimize website performance and prevent automated spam submissions</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">4. Data Sharing &amp; Non-Disclosure</h2>
            <p>
              We do not sell, rent, trade, or distribute your business information to third-party advertisers or lead-generation brokers. All architectural specifications and business documents shared with Motive Technologies remain strictly protected under strict confidentiality protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">5. Contact Information</h2>
            <p>
              For questions regarding this policy or our data protection measures, contact us directly via telephone at {COMPANY_INFO.primaryPhone} or visit {COMPANY_INFO.domain}.
            </p>
          </section>
        </div>

        <div className="pt-8 border-t border-motive-border">
          <Link
            href="/"
            className="text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red"
          >
            &larr; Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
