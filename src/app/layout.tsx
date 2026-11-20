import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { FloatingChatButton } from '@/components/common/FloatingChatButton';
import { COMPANY_INFO, SERVICES } from '@/data/siteData';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_INFO.url),
  title: {
    default: `${COMPANY_INFO.name} | Intelligent AI Automation, Digital Engineering & SEO`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description:
    'Motive Technologies engineers intelligent AI agent systems, autonomous business workflows, custom web and mobile applications, and technical SEO/AEO/GEO growth strategies for modern enterprises.',
  keywords: [
    'best ai agents development',
    'best ai agent development company',
    'top ai agent developers',
    'custom ai agent development services',
    'autonomous ai agents development',
    'enterprise ai agent systems',
    'multi-agent ai development',
    'ai workflow automation agency',
    'ai automation company',
    'business process automation',
    'whatsapp business api automation',
    'custom workflow automation',
    'corporate website development',
    'next.js 15 web application development',
    'mobile app development flutter',
    'technical seo services',
    'answer engine optimization aeo',
    'generative engine optimization geo',
    'ai consultancy india kolkata',
    'motive technologies',
  ],
  authors: [{ name: COMPANY_INFO.name, url: COMPANY_INFO.url }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: COMPANY_INFO.url,
    title: `${COMPANY_INFO.name} — ${COMPANY_INFO.headline}`,
    description: COMPANY_INFO.subheadline,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_INFO.name} — ${COMPANY_INFO.headline}`,
    description: COMPANY_INFO.subheadline,
    creator: '@motivetech',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: COMPANY_INFO.url,
    types: {
      'application/rss+xml': `${COMPANY_INFO.url}/feed.xml`,
    },
  },
  other: {
    'geo.region': 'IN-WB',
    'geo.placename': 'Kolkata',
    'geo.position': '22.5726;88.3639',
    'ICBM': '22.5726, 88.3639',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Rich Structured Data Schema Graph (Organization, ProfessionalService, WebSite, FAQPage, OfferCatalog)
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ProfessionalService', 'Organization'],
        '@id': `${COMPANY_INFO.url}/#organization`,
        name: COMPANY_INFO.name,
        legalName: COMPANY_INFO.legalName,
        url: COMPANY_INFO.url,
        logo: `${COMPANY_INFO.url}/images/motive-logo.png`,
        image: `${COMPANY_INFO.url}/og-image.png`,
        description: COMPANY_INFO.subheadline,
        telephone: COMPANY_INFO.primaryPhone,
        email: COMPANY_INFO.email,
        priceRange: '$$$$',
        currenciesAccepted: 'INR, USD, EUR, GBP, AED',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer, Wire, UPI',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kolkata',
          addressRegion: 'West Bengal',
          postalCode: '700001',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 22.5726,
          longitude: 88.3639,
        },
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Country', name: 'Australia' },
          { '@type': 'Country', name: 'Singapore' },
        ],
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          opens: '09:00',
          closes: '20:00',
        },
        sameAs: [
          COMPANY_INFO.url,
          'https://wa.me/918777245321',
        ],
        knowsAbout: [
          'Best AI Agents Development',
          'Autonomous AI Agent Architecture',
          'Multi-Agent System Orchestration',
          'Enterprise Artificial Intelligence Automation',
          'WhatsApp Business Cloud API Automation',
          'Next.js Full-Stack Web Engineering',
          'Flutter Mobile Application Development',
          'Technical Search Engine Optimization (SEO)',
          'Answer Engine Optimization (AEO)',
          'Generative Engine Optimization (GEO)',
          'PostgreSQL Vector Search & RAG Architecture',
        ],
        slogan: COMPANY_INFO.tagline,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '28',
          bestRating: '5',
          worstRating: '1',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Enterprise Technology Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Best AI Agents Development & Intelligent Systems',
                description: 'End-to-end autonomous business systems, custom multi-agent architectures, WhatsApp Cloud API integrations, and RAG vector assistants.',
                url: `${COMPANY_INFO.url}/services/ai-automation`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Web & Mobile Application Development',
                description: 'Ultra-fast Next.js 15 web applications and Flutter cross-platform mobile apps.',
                url: `${COMPANY_INFO.url}/services/web-app-development`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'SEO, AEO & Digital Growth Engineering',
                description: 'High-intent search engine optimization, answer engine structured data, and generative AI search citations.',
                url: `${COMPANY_INFO.url}/services/seo-digital-growth`,
              },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${COMPANY_INFO.url}/#website`,
        url: COMPANY_INFO.url,
        name: COMPANY_INFO.name,
        publisher: {
          '@id': `${COMPANY_INFO.url}/#organization`,
        },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${COMPANY_INFO.url}/blog?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${COMPANY_INFO.url}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How does Motive Technologies work with new clients?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We start with a focused 20–30 minute discovery consultation to understand your operational bottlenecks and growth objectives. Within 24–48 hours, we provide an architectural proposal with clear milestones, deliverables, and transparent pricing. Once aligned, we engineer your solution in rapid, transparent sprints with regular progress updates.',
            },
          },
          {
            '@type': 'Question',
            name: 'How fast can our project be delivered?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most custom corporate websites and core workflow automations are fully designed, tested, and launched in 2 to 4 weeks. For high-priority automations (such as WhatsApp lead assistants or CRM synchronization pipelines), we can often deploy initial functioning prototypes within 5 to 7 business days.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you integrate with our existing software, CRM, and WhatsApp?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, seamless integration is our core strength. We connect your daily operations across the WhatsApp Cloud API, Google Workspace, HubSpot, Zoho, Salesforce, custom PostgreSQL/MySQL databases, payment gateways, and legacy internal software with zero downtime.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who owns the code and intellectual property after delivery?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You do. You retain 100% intellectual property ownership of all custom codebases, designs, workflow diagrams, and database structures we engineer for your company. We enforce strict enterprise-grade NDAs and zero vendor lock-in.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens after the project launches? Do you provide support?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Every project includes complete technical documentation, team training, and dedicated post-launch support. We also offer ongoing maintenance, security updates, and performance optimization retainers to ensure your systems continuously evolve with your business.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why choose Motive Technologies for the best AI agents development?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We engineer production-grade, zero-hallucination autonomous AI agent systems that solve real operational bottlenecks. Rather than brittle experimental demos, we deliver multi-agent architectures with deterministic tool-calling, semantic memory (pgvector), official WhatsApp Business Cloud API integrations, and bi-directional CRM synchronization. Our AI agents operate 24/7 with sub-second execution speed, saving businesses 20–40 hours per week with 100% precision.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is AEO and GEO, and why does Motive Technologies specialize in it?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) ensure your business appears as the cited source when prospective buyers ask questions in AI search engines such as Perplexity, ChatGPT Search, and Google AI Overviews. Motive Technologies optimizes content schemas, entity relationships, and technical performance for both traditional Google SERPs and modern generative AI models.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Context Specification" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="Full LLM Context Repository" />
        <link rel="alternate" type="application/rss+xml" title="Motive Technologies Blog RSS Feed" href="/feed.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-white text-motive-black selection:bg-motive-red selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-motive-black focus:text-white focus:outline-none rounded font-mono text-xs"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
        <FloatingChatButton />
      </body>
    </html>
  );
}
