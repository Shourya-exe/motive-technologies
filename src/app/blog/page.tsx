import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogData';
import { BlogThumbnail } from '@/components/blog/BlogThumbnail';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Blog & Engineering Insights | Motive Technologies',
  description:
    'Authoritative guides, cost breakdowns, and technical blueprints on Enterprise AI development, Next.js engineering, DevOps, and MVP architecture by Motive Technologies.',
  alternates: {
    canonical: `${COMPANY_INFO.url}/blog`,
  },
  openGraph: {
    title: 'Blog & Engineering Insights — Motive Technologies',
    description: 'Practical guides and architectural roadmaps for building scalable AI software and high-performance digital platforms.',
    url: `${COMPANY_INFO.url}/blog`,
  },
};

export default function BlogIndexPage() {
  const heroMainPost = BLOG_POSTS.find((p) => p.isHeroMain) || BLOG_POSTS[0];
  const heroSidebarPosts = BLOG_POSTS.filter((p) => p.isHeroSidebar);
  const featuredGridPosts = BLOG_POSTS.filter((p) => p.isFeaturedGrid);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Top Header Breadcrumb & Heading */}
      <section className="pt-10 pb-6 border-b border-motive-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-motive-red" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
                  MOTIVE INSIGHTS &bull; TECHNICAL JOURNAL
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-motive-black">
                Engineering &amp; AI Software Insights
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-motive-offwhite border border-motive-border text-xs font-mono text-zinc-600 font-semibold">
                Updated for 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Hero Section (Matching User Reference Image) */}
      <section className="py-10 sm:py-14 border-b border-motive-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Big Featured Hero Card (~60% width) */}
            <div className="lg:col-span-7">
              <Link 
                href={`/blog/${heroMainPost.slug}`} 
                className="group block cursor-pointer"
              >
                {/* Large Featured Visual Banner */}
                <div className="overflow-hidden rounded-2xl shadow-subtle group-hover:shadow-premium transition-all duration-300">
                  <BlogThumbnail 
                    theme={heroMainPost.imageTheme} 
                    category={heroMainPost.category}
                    aspectRatio="featured"
                    className="transform transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </div>

                {/* Meta details below banner */}
                <div className="pt-4 space-y-2">
                  <span className="inline-block px-3 py-1 bg-zinc-900 text-white text-xs font-semibold rounded-full tracking-wide">
                    {heroMainPost.category}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 leading-snug group-hover:text-motive-red transition-colors duration-200">
                    {heroMainPost.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-zinc-500 font-medium">
                    By {heroMainPost.author.name}
                  </p>
                </div>
              </Link>
            </div>

            {/* Right Column: 4 Compact Horizontal Cards (~40% width) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-5">
              {heroSidebarPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group flex items-center gap-3.5 sm:gap-4 p-2 sm:p-2.5 rounded-xl hover:bg-zinc-50 border border-transparent hover:border-zinc-200 transition-all duration-200 cursor-pointer"
                >
                  {/* Left Thumbnail */}
                  <BlogThumbnail 
                    theme={post.imageTheme} 
                    category={post.category}
                    aspectRatio="sidebar"
                    className="shrink-0 rounded-xl shadow-xs"
                  />

                  {/* Right Text Content */}
                  <div className="space-y-1 min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-zinc-900 leading-snug group-hover:text-motive-red transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-medium">
                      By {post.author.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Featured Articles Section (Matching User Reference Image Grid) */}
      <section className="py-14 sm:py-20 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Featured Articles
            </h2>
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-zinc-500">
              <BookOpen className="w-3.5 h-3.5 text-motive-red" />
              <span>Architectural Series &bull; 2026</span>
            </div>
          </div>

          {/* 3-Column Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGridPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block bg-white p-3.5 rounded-2xl border border-zinc-200 shadow-subtle hover:shadow-premium hover:border-zinc-300 transition-all duration-200 cursor-pointer"
              >
                {/* Image Container with Top-Left Badge Overlay */}
                <div className="overflow-hidden rounded-xl">
                  <BlogThumbnail
                    theme={post.imageTheme}
                    category={post.category}
                    badgeOverlay={true}
                    aspectRatio="grid"
                    className="transform transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Title & Author */}
                <div className="pt-4 pb-2 space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug group-hover:text-motive-red transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-medium">
                    By {post.author.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Conversion Banner at Bottom */}
      <section className="py-16 bg-white border-t border-motive-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-motive-red font-bold">
            PARTNER WITH MOTIVE TECHNOLOGIES
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-motive-black">
            Ready to Build Your AI &amp; Software Architecture?
          </h2>
          <p className="text-sm sm:text-base text-motive-grey max-w-2xl mx-auto">
            Discuss your technical roadmap with our principal architects. We deliver scoped proposals within 24–48 hours with guaranteed IP ownership.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-motive-black text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-motive-red transition-colors shadow-md"
            >
              <span>Schedule a Technical Scoping Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
