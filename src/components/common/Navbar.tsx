'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { ChevronDown, ArrowRight, Menu, X, Bot, Code2, TrendingUp, Sparkles, PhoneCall } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/data/siteData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled((prev) => {
            const next = window.scrollY > 20;
            return prev !== next ? next : prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Our Work', href: '/work' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const serviceIcons = {
    'ai-automation': Bot,
    'web-app-development': Code2,
    'seo-digital-growth': TrendingUp,
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-motive-border shadow-subtle py-3.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <BrandLogo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded transition-colors duration-150 ${
                pathname === '/'
                  ? 'text-motive-black font-semibold'
                  : 'text-motive-grey hover:text-motive-black'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded transition-colors duration-150 focus:outline-none ${
                  pathname.startsWith('/services')
                    ? 'text-motive-black font-semibold'
                    : 'text-motive-grey hover:text-motive-black'
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                aria-label="Capabilities and services menu"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-motive-red' : ''
                  }`}
                />
              </button>

              {/* Sophisticated Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 transition-all duration-200">
                  <div className="bg-white border border-motive-border rounded-lg shadow-premium p-2 overflow-hidden">
                    <div className="px-3 py-2 border-b border-motive-border mb-1">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-motive-grey">
                        Core Capabilities
                      </p>
                    </div>

                    <div className="space-y-1">
                      {SERVICES.map((service) => {
                        const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Sparkles;
                        const isActive = pathname === `/services/${service.slug}`;
                        return (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className={`group flex items-start gap-3 p-2.5 rounded transition-colors ${
                              isActive
                                ? 'bg-motive-offwhite text-motive-black'
                                : 'hover:bg-motive-offwhite text-motive-black'
                            }`}
                          >
                            <div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:text-motive-red group-hover:bg-red-50 transition-colors shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-semibold group-hover:text-motive-red transition-colors flex items-center justify-between">
                                <span>{service.title}</span>
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-motive-red" />
                              </div>
                              <p className="text-[11px] text-motive-grey line-clamp-1 mt-0.5">
                                {service.id === 'ai-automation'
                                  ? 'AI agents, WhatsApp & workflow pipelines'
                                  : service.id === 'web-app-development'
                                  ? 'Custom websites, platforms & mobile apps'
                                  : 'Technical SEO & top Google rankings'}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-2 pt-2 border-t border-motive-border px-3 py-1.5 bg-motive-offwhite/50 rounded flex items-center justify-between">
                      <Link
                        href="/services"
                        className="text-[11px] font-semibold text-motive-black hover:text-motive-red transition-colors inline-flex items-center gap-1"
                      >
                        <span>View All Capabilities</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/work"
              className={`px-3 py-1.5 rounded transition-colors duration-150 ${
                pathname === '/work'
                  ? 'text-motive-black font-semibold'
                  : 'text-motive-grey hover:text-motive-black'
              }`}
            >
              Our Work
            </Link>

            <Link
              href="/blog"
              className={`px-3 py-1.5 rounded transition-colors duration-150 ${
                pathname.startsWith('/blog')
                  ? 'text-motive-black font-semibold'
                  : 'text-motive-grey hover:text-motive-black'
              }`}
            >
              Blog
            </Link>

            <Link
              href="/about"
              className={`px-3 py-1.5 rounded transition-colors duration-150 ${
                pathname === '/about'
                  ? 'text-motive-black font-semibold'
                  : 'text-motive-grey hover:text-motive-black'
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-1.5 rounded transition-colors duration-150 ${
                pathname === '/contact'
                  ? 'text-motive-black font-semibold'
                  : 'text-motive-grey hover:text-motive-black'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="text-xs font-mono text-motive-grey hover:text-motive-black transition-colors hidden lg:flex items-center gap-1.5 px-2 py-1"
            >
              <PhoneCall className="w-3.5 h-3.5 text-motive-red" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-motive-black text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-motive-red transition-colors duration-200 shadow-sm group"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 bg-motive-black text-white text-[11px] font-semibold uppercase tracking-wider rounded"
            >
              Talk
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-motive-black hover:bg-motive-offwhite rounded"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-motive-border px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded ${
                pathname === '/' ? 'bg-motive-offwhite text-motive-black font-bold' : 'text-motive-grey hover:text-motive-black'
              }`}
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded transition-colors ${
                  pathname.startsWith('/services')
                    ? 'bg-motive-offwhite text-motive-black font-bold'
                    : 'text-motive-grey hover:text-motive-black'
                }`}
                aria-expanded={mobileServicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileServicesOpen ? 'rotate-180 text-motive-red' : 'text-motive-grey'
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 pr-2 py-1 space-y-0.5 animate-in slide-in-from-top-1 duration-150">
                  {SERVICES.map((service) => {
                    const isActive = pathname === `/services/${service.slug}`;
                    return (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 px-3 text-xs rounded transition-colors ${
                          isActive
                            ? 'text-motive-red font-semibold bg-motive-offwhite'
                            : 'text-zinc-700 hover:text-motive-black hover:bg-motive-offwhite/50'
                        }`}
                      >
                        {service.title}
                      </Link>
                    );
                  })}
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-3 text-xs font-semibold text-motive-red hover:underline"
                  >
                    All Capabilities &rarr;
                  </Link>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-sm font-medium rounded ${
                  pathname === link.href ? 'bg-motive-offwhite text-motive-black font-bold' : 'text-motive-grey'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-motive-border space-y-2">
            <p className="text-xs text-motive-grey font-mono">
              Direct Contact: {COMPANY_INFO.primaryPhone}
            </p>
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-motive-black text-white text-xs font-semibold uppercase tracking-wider rounded"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
