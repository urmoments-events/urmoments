import type { MetadataRoute } from 'next';
import { loadConfig } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const { services } = loadConfig();
  
  const serviceUrls = services.map((service) => ({
    url: `${base}/services/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}/`,
    lastModified: new Date(),
  }));
  
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/services/`, lastModified: new Date() },
    { url: `${base}/gallery/`, lastModified: new Date() },
    ...serviceUrls,
  ];
}

export const dynamic = 'force-static';


