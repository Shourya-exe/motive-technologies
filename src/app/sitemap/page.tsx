import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Compass, Shield, Code, Sparkles, FolderGit2, BookOpen, Layers } from 'lucide-react';
import { COMPANY_INFO, SERVICES, PROJECTS, NAV_SERVICES_MENU } from '@/data/siteData';
import { BLOG_POSTS } from '@/data/blogData';

export const metadata: Metadata = {
  title: 'Website Directory & HTML Sitemap | Motive Technologies',
  description: 'A complete directory of all services, case studies, technical articles, and legal documents across Motive Technologies.',
  alternates: {
    canonical: `${COMPANY_INFO.url}/sitemap`,
  },
};

export default function HtmlSitemapPage() {
  return (
    <div className="bg-white py-16 sm:py-24 border-b border-motive-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-motive-border pb-8 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="font-mono text-xs uppercase tracking-widest text-motive-grey font-bold">
              SITE DIRECTORY &bull; INDEX
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-motive-black tracking-tight">
            Website Sitemap
          </h1>
          <p className="text-sm text-zinc-600 max-w-2xl leading-relaxed">
            Find every page, engineering capability, client case study, technical guide, and legal policy on Motive Technologies in one convenient directory.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Main Company Pages */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-motive-border">
              <Compass className="w-4 h-4 text-blue-600" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-motive-black">
                Main Pages
              </h2>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-zinc-700 hover:text-motive-red font-medium transition-colors flex items-center justify-between group">
                  <span>Home (Overview)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-motive-red transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-700 hover:text-motive-red font-medium transition-colors flex items-center justify-between group">
                  <span>All Capabilities &amp; Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-motive-red transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-zinc-700 hover:text-motive-red font-medium transition-colors flex items-center justify-between group">
                  <span>Selected Work &amp; Case Studies</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-motive-red transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-700 hover:text-motive-red font-medium transition-colors flex items-center justify-between group">
                  <span>Technical Insights &amp; Blog</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-motive-red transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-700 hover:text-motive-red font-medium transition-colors flex items-center justify-between group">
                  <span>About Motive Technologies</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-motive-red transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-700 hover:text-motive-red font-medium transition-colors flex items-center justify-between group">
                  <span>Contact &amp; Book Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-motive-red transition-colors" />
                </Link>
              </li>
            </ul>
          </div>

          {/* AI & Automation Services */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-motive-border">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-motive-black">
                AI &amp; Automation
              </h2>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/ai-automation" className="text-motive-black font-semibold hover:text-motive-red transition-colors flex items-center justify-between group">
                  <span>AI Automation &amp; Best AI Agents</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-motive-red transition-colors" />
                </Link>
              </li>
              {NAV_SERVICES_MENU[0]?.items.map((subItem) => (
                <li key={subItem.label} className="pl-3 border-l-2 border-zinc-200">
                  <Link href={subItem.href} className="text-xs text-zinc-600 hover:text-motive-black transition-colors block">
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Services */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-motive-border">
              <Code className="w-4 h-4 text-emerald-600" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-motive-black">
                Engineering Services
              </h2>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/web-app-development" className="text-motive-black font-semibold hover:text-motive-red transition-colors flex items-center justify-between group">
                  <span>Web &amp; Application Engineering</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-motive-red transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/services/seo-digital-growth" className="text-motive-black font-semibold hover:text-motive-red transition-colors flex items-center justify-between group">
                  <span>SEO &amp; Digital Growth (AEO/GEO)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-motive-red transition-colors" />
                </Link>
              </li>
              {NAV_SERVICES_MENU[1]?.items.map((subItem) => (
                <li key={subItem.label} className="pl-3 border-l-2 border-zinc-200">
                  <Link href={subItem.href} className="text-xs text-zinc-600 hover:text-motive-black transition-colors block">
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Case Studies */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 pb-2 border-b border-motive-border">
              <FolderGit2 className="w-4 h-4 text-amber-600" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-motive-black">
                Selected Case Studies
              </h2>
            </div>
            <ul className="space-y-2 text-sm">
              {PROJECTS.map((project) => (
                <li key={project.id}>
                  <Link href="/work" className="text-zinc-700 hover:text-motive-red transition-colors flex items-center justify-between group">
                    <span className="truncate pr-2">{project.title}</span>
                    <span className="text-[10px] font-mono text-zinc-600 shrink-0 uppercase">{project.category}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Articles */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 pb-2 border-b border-motive-border">
              <BookOpen className="w-4 h-4 text-rose-600" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-motive-black">
                Technical Articles
              </h2>
            </div>
            <ul className="space-y-2 text-sm max-h-80 overflow-y-auto pr-1">
              {BLOG_POSTS.slice(0, 8).map((post) => (
                <li key={post.id}>
                  <Link href={`/blog/${post.slug}`} className="text-xs text-zinc-700 hover:text-motive-red transition-colors block line-clamp-1">
                    {post.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-xs font-mono font-bold text-motive-red hover:underline block pt-1">
                  View all articles &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance, Legal & Technical Feeds */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 pb-2 border-b border-motive-border">
              <Shield className="w-4 h-4 text-zinc-700" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-motive-black">
                Legal &amp; Architecture
              </h2>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-zinc-700 hover:text-motive-red transition-colors flex items-center justify-between group">
                  <span>Privacy Policy</span>
                  <span className="text-xs font-mono text-zinc-600">/privacy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-700 hover:text-motive-red transition-colors flex items-center justify-between group">
                  <span>Terms &amp; Conditions</span>
                  <span className="text-xs font-mono text-zinc-600">/terms</span>
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-zinc-700 hover:text-motive-red transition-colors flex items-center justify-between group">
                  <span>Cookie Policy</span>
                  <span className="text-xs font-mono text-zinc-600">/cookies</span>
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-zinc-700 hover:text-motive-red transition-colors flex items-center justify-between group">
                  <span>Security &amp; Data Governance</span>
                  <span className="text-xs font-mono text-zinc-600">/security</span>
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-zinc-700 hover:text-motive-red transition-colors flex items-center justify-between group">
                  <span>Accessibility Statement</span>
                  <span className="text-xs font-mono text-zinc-600">/accessibility</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Back Link */}
        <div className="pt-8 border-t border-motive-border">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
