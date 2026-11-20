import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Key, Server, FileText, CheckCircle2, ArrowLeft } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Security & Data Governance | Motive Technologies',
  description: 'Learn how Motive Technologies protects client data, enforces strict AI guardrails, and ensures 100% intellectual property ownership.',
  alternates: {
    canonical: `${COMPANY_INFO.url}/security`,
  },
};

export default function SecurityPage() {
  return (
    <div className="bg-white py-16 sm:py-24 border-b border-motive-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-motive-border pb-8 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-mono text-xs uppercase tracking-widest text-motive-grey font-bold">
              TRUST &amp; DATA GOVERNANCE
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-motive-black tracking-tight">
            Security &amp; Data Governance
          </h1>
          <p className="text-xs font-mono text-motive-grey">
            Motive Technologies Engineering Architecture &bull; {COMPANY_INFO.domain}
          </p>
        </div>

        {/* Introduction */}
        <div className="space-y-4 text-base text-zinc-700 leading-relaxed">
          <p>
            When building mission-critical software and AI automation, trust and security are foundational. At Motive Technologies, we design every system with security-first engineering: your data stays yours, your source code is protected, and confidential business logic is never exposed to public models.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid gap-6 sm:grid-cols-2">
          
          <div className="p-6 border border-motive-border rounded-lg bg-zinc-50 space-y-3">
            <div className="w-9 h-9 rounded-md bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-motive-black">100% Client IP Ownership</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Every line of code, database schema, workflow automation, and custom model we develop belongs completely to your company upon project completion. There are zero hidden royalties or proprietary vendor lock-ins.
            </p>
          </div>

          <div className="p-6 border border-motive-border rounded-lg bg-zinc-50 space-y-3">
            <div className="w-9 h-9 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-motive-black">Private AI &amp; Zero Training Leaks</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              We exclusively use zero-data-retention enterprise API endpoints or self-hosted open-weights models (such as LLaMA, Mistral, and DeepSeek). Your proprietary customer conversations and company files are never used to train public AI models.
            </p>
          </div>

          <div className="p-6 border border-motive-border rounded-lg bg-zinc-50 space-y-3">
            <div className="w-9 h-9 rounded-md bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
              <Key className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-motive-black">Strict Non-Disclosure (NDA)</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              We execute mutual, enforceable Non-Disclosure Agreements prior to evaluating project requirements or accessing internal codebases. Your strategic roadmaps and customer data remain strictly confidential.
            </p>
          </div>

          <div className="p-6 border border-motive-border rounded-lg bg-zinc-50 space-y-3">
            <div className="w-9 h-9 rounded-md bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-motive-black">Deploy In Your Own Cloud</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              We build systems directly in your AWS, GCP, Azure, or Cloudflare infrastructure. You maintain full root access, billing control, and cryptographic key ownership at all times.
            </p>
          </div>

        </div>

        {/* Detailed Sections */}
        <div className="space-y-10 text-sm text-motive-grey leading-relaxed border-t border-motive-border pt-10">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">1. Encryption in Transit and at Rest</h2>
            <p>
              All communication channels and API endpoints are encrypted using modern Transport Layer Security (TLS 1.3). Data at rest in databases, object storage, and vector indices are protected with AES-256 standard encryption.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">2. Access Control &amp; Secret Vaulting</h2>
            <p>
              We follow the principle of least privilege (PoLP):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-700">
              <li>API secrets, database credentials, and cryptographic keys are vaulted in enterprise secrets managers (e.g., AWS Secrets Manager, Doppler, GCP Secret Manager) — never committed to source code repositories.</li>
              <li>Two-factor authentication (2FA/MFA) is strictly enforced across all engineering team accounts and developer environments.</li>
              <li>Development, staging, and production environments are strictly separated to prevent accidental cross-contamination.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">3. Code Quality &amp; Automated Testing</h2>
            <p>
              Before deploying any feature or autonomous agent into production, our pipelines perform:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-700">
              <li>Automated vulnerability scanning and software dependency auditing.</li>
              <li>Input sanitization and SQL/NoSQL injection prevention.</li>
              <li>Agent guardrails preventing prompt injection, unwanted function execution, and hallucinated API triggers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">4. Responsible Vulnerability Disclosure</h2>
            <p>
              If you are a security researcher or client who has identified a potential security issue in any Motive Technologies system, we welcome your disclosure. Please notify our security engineering leads immediately:
            </p>
            <p>
              Email:{' '}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-motive-red font-semibold hover:underline">
                {COMPANY_INFO.email}
              </a>
              <br />
              Emergency Telephony:{' '}
              <a href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`} className="text-motive-black font-semibold hover:underline">
                {COMPANY_INFO.primaryPhone}
              </a>
            </p>
            <p className="text-xs text-zinc-500">
              We investigate all legitimate reports promptly and commit to swift, transparent resolution.
            </p>
          </section>

        </div>

        {/* Navigation Footer */}
        <div className="pt-8 border-t border-motive-border flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono">
            <Link href="/privacy" className="text-motive-grey hover:text-motive-black transition-colors">
              Privacy Policy
            </Link>
            <span className="text-zinc-300">&bull;</span>
            <Link href="/terms" className="text-motive-grey hover:text-motive-black transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-zinc-300">&bull;</span>
            <Link href="/cookies" className="text-motive-grey hover:text-motive-black transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
