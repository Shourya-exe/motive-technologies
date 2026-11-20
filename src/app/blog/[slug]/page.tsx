import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogData';
import { BlogThumbnail } from '@/components/blog/BlogThumbnail';
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Share2, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found | Motive Technologies',
    };
  }

  const url = `${COMPANY_INFO.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${COMPANY_INFO.url}/blog/${post.slug}#breadcrumb`,
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
            name: 'Blog & Insights',
            item: `${COMPANY_INFO.url}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `${COMPANY_INFO.url}/blog/${post.slug}`,
          },
        ],
      },
      {
        '@type': 'BlogPosting',
        '@id': `${COMPANY_INFO.url}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        inLanguage: 'en-US',
        articleSection: post.category,
        image: [`${COMPANY_INFO.url}/og-image.png`],
        author: {
          '@type': 'Person',
          name: post.author.name,
          jobTitle: post.author.role,
        },
        publisher: {
          '@type': 'Organization',
          name: COMPANY_INFO.name,
          url: COMPANY_INFO.url,
          logo: {
            '@type': 'ImageObject',
            url: `${COMPANY_INFO.url}/images/motive-logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${COMPANY_INFO.url}/blog/${post.slug}`,
        },
      },
    ],
  };

  return (
    <article className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Breadcrumbs */}
      <div className="pt-10 pb-6 border-b border-motive-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-motive-red transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all insights</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 font-mono mb-3">
            <span className="px-3 py-1 bg-zinc-900 text-white font-semibold rounded-full text-[11px]">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.publishedAt}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-motive-black tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="pt-4 flex items-center justify-between border-t border-zinc-100 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-900 text-white font-bold flex items-center justify-center text-xs">
                RN
              </div>
              <div>
                <p className="text-sm font-bold text-motive-black">{post.author.name}</p>
                <p className="text-xs text-zinc-500">{post.author.role}</p>
              </div>
            </div>

            <div className="text-xs font-mono text-zinc-400">
              Motive Tech Journal
            </div>
          </div>
        </div>
      </div>

      {/* Hero Visual Thumbnail */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="rounded-2xl overflow-hidden shadow-premium border border-zinc-200">
          <BlogThumbnail
            theme={post.imageTheme}
            category={post.category}
            aspectRatio="featured"
          />
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        
        {/* Executive Summary Box */}
        <div className="p-6 bg-zinc-50 rounded-2xl border-l-4 border-motive-red mb-10 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-motive-red block">
            Executive Summary
          </span>
          <p className="text-base text-zinc-800 font-medium leading-relaxed">
            {post.summary}
          </p>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-10 text-zinc-800 leading-relaxed font-sans text-base sm:text-lg">
          {post.content.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-motive-black tracking-tight">
                {sec.sectionTitle}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-zinc-700 leading-relaxed font-normal">
                  {p}
                </p>
              ))}
              {sec.bulletPoints && (
                <ul className="space-y-2.5 pt-2">
                  {sec.bulletPoints.map((bp, bpIdx) => (
                    <li key={bpIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-800">
                      <CheckCircle2 className="w-5 h-5 text-motive-red shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Action CTA Box */}
        <div className="mt-14 p-8 bg-zinc-950 text-white rounded-2xl border border-zinc-800 shadow-xl space-y-4">
          <span className="text-xs font-mono uppercase text-motive-red font-bold tracking-widest block">
            TECHNICAL ARCHITECTURE &amp; SCOPING
          </span>
          <h3 className="text-2xl font-bold text-white">
            Need Expert Scoping for Your Software Project?
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Motive Technologies designs custom AI automation pipelines, web platforms, and mobile apps with sub-second performance. Receive a formal scope and timeline within 24–48 hours.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-motive-red text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-motive-red-hover transition-colors shadow-md"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      {/* Related Articles Section */}
      <div className="border-t border-motive-border bg-zinc-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-extrabold text-zinc-900 mb-8">
            Related Architectural Insights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.id}
                href={`/blog/${rel.slug}`}
                className="group block bg-white p-3.5 rounded-2xl border border-zinc-200 shadow-subtle hover:shadow-premium transition-all duration-200"
              >
                <div className="overflow-hidden rounded-xl">
                  <BlogThumbnail
                    theme={rel.imageTheme}
                    category={rel.category}
                    badgeOverlay={true}
                    aspectRatio="grid"
                  />
                </div>
                <div className="pt-4 space-y-1">
                  <h4 className="text-sm font-bold text-zinc-900 leading-snug group-hover:text-motive-red transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-zinc-500 font-medium">
                    By {rel.author.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </article>
  );
}
