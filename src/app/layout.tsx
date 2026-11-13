import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { NavigationProgressBar } from '@/components/common/NavigationProgressBar';
import { COMPANY_INFO } from '@/data/siteData';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
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
    'Motive Technologies engineers intelligent AI agent systems, business automation pipelines, custom web and mobile applications, and technical SEO growth strategies for modern enterprises.',
  keywords: [
    'AI Automation Company',
    'AI Agent Development',
    'Business Process Automation',
    'Custom Workflow Automation',
    'WhatsApp Automation',
    'Website Development',
    'Web Application Development',
    'Android Mobile App Development',
    'SEO Services',
    'Technical SEO Audits',
    'Motive Technologies',
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: COMPANY_INFO.name,
    image: `${COMPANY_INFO.url}/og-image.png`,
    '@id': COMPANY_INFO.url,
    url: COMPANY_INFO.url,
    telephone: COMPANY_INFO.primaryPhone,
    email: COMPANY_INFO.email,
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.5726,
      longitude: 88.3639,
    },
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
    ],
    knowsAbout: [
      'Artificial Intelligence Automation',
      'AI Agent Architecture',
      'WhatsApp Business Automation',
      'Full-Stack Web Engineering',
      'Mobile Application Engineering',
      'Technical Search Engine Optimization',
    ],
    slogan: COMPANY_INFO.tagline,
  };

  return (
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-white text-motive-black selection:bg-motive-red selection:text-white">
        <NavigationProgressBar />
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
      </body>
    </html>
  );
}
