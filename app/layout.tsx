import type { Metadata } from "next";
import Script from "next/script";
import { loadConfig } from "@/lib/config";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export function generateMetadata(): Metadata {
  const cfg = loadConfig();
  const seo = cfg.seo || {};
  const title = seo.title || "UrMoments - Birthday Decorations in London | Your moments, our promise.";
  const description = seo.description || "UrMoments creates stylish, stress-free birthday decorations in London.";
  const image = seo.image || "/assets/og-cover.svg";
  const url = (seo.url || process.env.NEXT_PUBLIC_SITE_URL) as string | undefined;
  return {
    title,
    description,
    metadataBase: url ? new URL(url) : undefined,
    openGraph: {
      title,
      description,
      url,
      images: image ? [{ url: image }] : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD LocalBusiness */}
        {(() => {
          const cfg = loadConfig();
          const schema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: cfg.brandName,
            image: cfg.seo?.image || "/assets/og-cover.svg",
            email: cfg.email,
            telephone: cfg.phone,
            areaServed: "London",
            url: cfg.seo?.url || process.env.NEXT_PUBLIC_SITE_URL || undefined,
            sameAs: cfg.socialLinks?.instagram ? [cfg.socialLinks.instagram] : undefined,
          } as Record<string, unknown>;
          return (
            <Script id="jsonld-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
          );
        })()}
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
