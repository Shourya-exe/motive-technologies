'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { ChevronDown, ArrowRight, Menu, X, Bot, Code2, TrendingUp, Sparkles, PhoneCall } from 'lucide-react';
import { COMPANY_INFO, SERVICES, NAV_SERVICES_MENU } from '@/data/siteData';

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

              {/* Sophisticated Multi-Column Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full -left-12 w-[540px] pt-2 transition-all duration-200 z-50">
                  <div className="bg-white border border-motive-border rounded-xl shadow-premium p-6 overflow-hidden">
                    
                    {/* 2-Column Grid Matching Capabilities Spec */}
                    <div className="grid grid-cols-2 gap-8">
                      {/* Column 1: AI & AUTOMATION */}
                      <div>
                        <div className="pb-2 mb-3 border-b border-red-100 flex items-center justify-between">
                          <span className="font-mono text-xs font-bold tracking-wider text-motive-red uppercase">
                            AI &amp; AUTOMATION
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {NAV_SERVICES_MENU[0].items.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="group/item flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-motive-offwhite text-xs font-medium text-zinc-800 hover:text-motive-red transition-colors"
                              >
                                <span>{item.label}</span>
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-motive-red" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2: ENGINEERING */}
                      <div>
                        <div className="pb-2 mb-3 border-b border-red-100 flex items-center justify-between">
                          <span className="font-mono text-xs font-bold tracking-wider text-motive-red uppercase">
                            ENGINEERING
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {NAV_SERVICES_MENU[1].items.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="group/item flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-motive-offwhite text-xs font-medium text-zinc-800 hover:text-motive-red transition-colors"
                              >
                                <span>{item.label}</span>
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-motive-red" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Strip: SEO & All Capabilities */}
                    <div className="mt-5 pt-3 border-t border-motive-border flex items-center justify-between px-3 py-2 bg-motive-offwhite/50 rounded-lg">
                      <Link
                        href="/services/seo-digital-growth"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-xs font-medium text-zinc-700 hover:text-motive-red transition-colors inline-flex items-center gap-1.5"
                      >
                        <TrendingUp className="w-3.5 h-3.5 text-motive-red" />
                        <span>SEO &amp; Digital Growth (AEO &amp; GEO)</span>
                      </Link>
                      <Link
                        href="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-xs font-semibold text-motive-black hover:text-motive-red transition-colors inline-flex items-center gap-1"
                      >
                        <span>All Capabilities Overview</span>
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
                <div className="pl-3 pr-2 py-2 space-y-4 animate-in slide-in-from-top-1 duration-150">
                  {/* AI & Automation */}
                  <div>
                    <div className="pb-1 mb-1.5 border-b border-red-100">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-motive-red">
                        AI &amp; AUTOMATION
                      </span>
                    </div>
                    <div className="space-y-0.5">
                      {NAV_SERVICES_MENU[0].items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 px-2 text-xs text-zinc-700 hover:text-motive-red hover:bg-motive-offwhite/50 rounded transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* ENGINEERING */}
                  <div>
                    <div className="pb-1 mb-1.5 border-b border-red-100">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-motive-red">
                        ENGINEERING
                      </span>
                    </div>
                    <div className="space-y-0.5">
                      {NAV_SERVICES_MENU[1].items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 px-2 text-xs text-zinc-700 hover:text-motive-red hover:bg-motive-offwhite/50 rounded transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* SEO & All Capabilities */}
                  <div className="pt-2 border-t border-motive-border/60 space-y-1">
                    <Link
                      href="/services/seo-digital-growth"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 px-2 text-xs font-medium text-zinc-700 hover:text-motive-red transition-colors"
                    >
                      SEO &amp; Digital Growth (AEO &amp; GEO)
                    </Link>
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 px-2 text-xs font-semibold text-motive-red hover:underline"
                    >
                      All Capabilities Overview &rarr;
                    </Link>
                  </div>
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
