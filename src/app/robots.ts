import { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/data/siteData';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${COMPANY_INFO.url}/sitemap.xml`,
  };
}
