import { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/data/siteData';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${COMPANY_INFO.name} — Intelligent AI Automation & Digital Engineering`,
    short_name: COMPANY_INFO.name,
    description: COMPANY_INFO.subheadline,
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#FFFFFF',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
