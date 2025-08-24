import type { Metadata } from "next";
import Script from "next/script";
import { loadConfig } from "@/lib/config";
import { isFeatureEnabled } from "@/lib/features";
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
        
        {/* JSON-LD FAQPage */}
        {(() => {
          const cfg = loadConfig();
          if (!cfg.faq || cfg.faq.length === 0) return null;
          
          const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: cfg.faq.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: {
                "@type": "Answer",
                text: a,
              },
            })),
          };
          return (
            <Script id="jsonld-faqpage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
          );
        })()}
        
        {/* Plausible Analytics */}
        {isFeatureEnabled('ANALYTICS') && (
          <Script
            defer
            data-domain="urmomentsevents.co.uk"
            src="https://plausible.io/js/script.js"
          />
        )}
        
        {/* PWA Meta Tags */}
        {isFeatureEnabled('PWA') && (
          <>
            <meta name="application-name" content="UrMoments" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="UrMoments" />
            <meta name="description" content="Professional event decorations and party setup services across London" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-config" content="/icons/browserconfig.xml" />
            <meta name="msapplication-TileColor" content="#e11d48" />
            <meta name="msapplication-tap-highlight" content="no" />
            <meta name="theme-color" content="#e11d48" />
            
            <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#e11d48" />
            <link rel="shortcut icon" href="/favicon.ico" />
          </>
        )}
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta name="twitter:title" content="UrMoments - Event Decorations" />
        <meta name="twitter:description" content="Professional event decorations and party setup services across London" />
        <meta name="twitter:image" content="/icons/icon-192x192.png" />
        <meta name="twitter:creator" content="@urmoments" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="UrMoments - Event Decorations" />
        <meta property="og:description" content="Professional event decorations and party setup services across London" />
        <meta property="og:site_name" content="UrMoments" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta property="og:image" content="/icons/icon-192x192.png" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
