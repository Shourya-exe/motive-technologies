import React from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { ArrowUpRight, Phone, Globe, Shield, Terminal, MessageCircle, Mail } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-motive-dark text-white border-t border-motive-darkborder">
      {/* Upper Architectural Footer Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Identity (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <BrandLogo variant="light" size="lg" />
            
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed font-normal">
              Motive Technologies delivers intelligent technology and digital growth solutions. We engineer autonomous AI systems, resilient web platforms, and data-driven organic search architectures.
            </p>

            <div className="space-y-2 pt-2 border-l-2 border-motive-red pl-4">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-semibold">
                {COMPANY_INFO.tagline}
              </p>
              <p className="text-xs text-zinc-400">
                {COMPANY_INFO.statement}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Engineering Operational & Deployment Status: Active</span>
            </div>
          </div>

          {/* Column 2: Navigation & Company (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-bold">
              Company
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Blog &amp; Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  All Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-bold">
              Services
            </p>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1 group font-medium"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover:text-motive-red transition-colors opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <span className="font-mono text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                  AI &amp; AUTOMATION
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed pl-2 border-l border-zinc-800">
                  AI Agents &bull; AI Automation &bull; Data &amp; Analytics &bull; Data Science
                </p>
              </li>
              <li className="pt-1">
                <span className="font-mono text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                  ENGINEERING
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed pl-2 border-l border-zinc-800">
                  SaaS Products &bull; Custom Web Apps &bull; Mobile Apps &bull; CRM &bull; ERP &bull; Cloud &amp; DevOps
                </p>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Channels & Telephony (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-bold">
              Direct Channels
            </p>
            
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-[11px] font-mono uppercase text-emerald-400 block font-semibold">
                  WhatsApp
                </span>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 transition-colors font-mono font-medium inline-flex items-center gap-1.5 mt-0.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{COMPANY_INFO.whatsappNumber}</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-zinc-400 block">
                  Primary Phone
                </span>
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="text-white hover:text-motive-red transition-colors font-mono font-medium inline-flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-motive-red" />
                  <span>{COMPANY_INFO.primaryPhone}</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-zinc-400 block">
                  Secondary Line
                </span>
                <a
                  href={`tel:${COMPANY_INFO.secondaryPhone.replace(/\s+/g, '')}`}
                  className="text-white hover:text-motive-red transition-colors font-mono font-medium inline-flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-motive-red" />
                  <span>{COMPANY_INFO.secondaryPhone}</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-zinc-400 block">
                  Official Email
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-white hover:text-motive-red transition-colors font-mono text-xs inline-flex items-center gap-1.5 mt-0.5 break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-motive-red shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-zinc-400 block">
                  Official Portal
                </span>
                <a
                  href={COMPANY_INFO.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white transition-colors font-mono text-xs inline-flex items-center gap-1 mt-0.5"
                >
                  <Globe className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{COMPANY_INFO.domain}</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[11px] font-mono text-zinc-400 mb-2">
                <span>Location: Kolkata, WB, India (22.57° N, 88.36° E) &bull; Serving Pan-India &amp; Global</span>
              </div>
              <Link
                href="/contact"
                className="inline-block w-full text-center px-3 py-2 bg-zinc-900 border border-zinc-700 text-xs font-semibold text-white rounded hover:border-motive-red hover:bg-motive-red transition-colors"
              >
                Inquire Directly &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Utility Strip (Privacy | Terms | Cookies | Security | Accessibility | Sitemap) */}
      <div className="bg-black text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2 text-zinc-400">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="hover:text-white transition-colors"
            >
              Cookies
            </Link>
            <Link
              href="/security"
              className="hover:text-white transition-colors"
            >
              Security
            </Link>
            <Link
              href="/accessibility"
              className="hover:text-white transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>

          <div className="flex items-center gap-2 text-zinc-500 font-mono text-[11px]">
            <span>&copy; 2026 Motive Technologies. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
