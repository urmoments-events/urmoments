import type { MetadataRoute } from 'next';
import { loadConfig } from '@/lib/config';
import { isFeatureEnabled } from '@/lib/features';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const { services } = loadConfig();
  
  const serviceUrls = isFeatureEnabled('SERVICE_DETAIL_PAGES') 
    ? services.map((service) => ({
        url: `${base}/services/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}/`,
        lastModified: new Date(),
      }))
    : [];
  
                const urls = [
                { url: `${base}/`, lastModified: new Date() },
                { url: `${base}/services/`, lastModified: new Date() },
                { url: `${base}/gallery/`, lastModified: new Date() },
                { url: `${base}/about/`, lastModified: new Date() },
                { url: `${base}/terms/`, lastModified: new Date() },
                { url: `${base}/privacy/`, lastModified: new Date() },
              ];
  
  // Only include quote page if multi-step form is enabled
  if (isFeatureEnabled('MULTI_STEP_FORM')) {
    urls.push({ url: `${base}/quote/`, lastModified: new Date() });
  }
  
  return [...urls, ...serviceUrls];
}

export const dynamic = 'force-static';


