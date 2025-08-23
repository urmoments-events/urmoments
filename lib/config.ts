import fs from "node:fs";
import path from "node:path";

export type SocialLinks = { instagram?: string; facebook?: string; whatsapp?: string };
export type Service = { title: string; description: string; image: string; price?: string; popular?: boolean; features?: string[]; tags?: string[] };
export type Testimonial = { name: string; area?: string; text: string };
export type FAQ = { q: string; a: string };

export type HeroBanner = { image: string; headline: string; subhead?: string; points?: string[] };

export type SiteConfig = {
  brandName: string;
  tagline?: string;
  email?: string;
  phone?: string;
  address?: string;
  socialLinks?: SocialLinks;
  heroBanner?: HeroBanner;
  heroImages?: string[];
  services: Service[];
  addOns?: { label: string; icon?: string }[];
  testimonials?: Testimonial[];
  faq?: FAQ[];
  contactForm?: {
    action?: string;
    consentText?: string;
    placeholders?: Record<string, string>;
    budgetOptions?: string[];
  };
  seo?: { title?: string; description?: string; keywords?: string; image?: string; url?: string };
};

export function loadConfig(): SiteConfig {
  const candidates = [
    path.resolve(process.cwd(), "config.json"),
    path.resolve(process.cwd(), "..", "config.json"),
  ];
  const found = candidates.find((p) => fs.existsSync(p));
  if (!found) {
    throw new Error(`config.json not found. Looked at: ${candidates.join(", ")}`);
  }
  const raw = fs.readFileSync(found, "utf8");
  const json = JSON.parse(raw);
  return json as SiteConfig;
}

