"use client";

import { useMemo } from "react";
import { isFeatureEnabled } from "@/lib/features";

export default function FloatingCta({ phone, instagram }: { phone?: string; instagram?: string }) {
  const numeric = useMemo(() => (phone ?? "").replace(/\D/g, ""), [phone]);
  if (!numeric && !instagram) return null;
  const waHref = numeric ? `https://wa.me/${numeric}?text=${encodeURIComponent("Hi! I'd like a quote for decorations.")}` : undefined;
  
  const trackCTA = (type: string) => {
    if (typeof window !== 'undefined' && isFeatureEnabled('ANALYTICS')) {
      const plausible = (window as Window & { plausible?: (event: string, options?: { props?: Record<string, string> }) => void }).plausible;
      if (plausible) {
        plausible('CTA Click', { props: { type } });
      }
    }
  };
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 md:right-6 md:bottom-6">
      {waHref ? (
        <a
          href={waHref}
          aria-label="Chat on WhatsApp"
          onClick={() => trackCTA('whatsapp')}
          className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-green-500 text-white shadow-lg ring-1 ring-black/5 hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
            <path d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0C5.4 0 .05 5.34.05 11.95c0 2.11.56 4.16 1.62 5.97L0 24l6.23-1.63a11.95 11.95 0 0 0 5.78 1.47h.01c6.61 0 11.96-5.35 11.96-11.96a11.9 11.9 0 0 0-3.46-8.4ZM12.02 21.5h-.01a9.53 9.53 0 0 1-4.86-1.33l-.35-.2-3.7.97.99-3.61-.23-.37a9.46 9.46 0 0 1-1.45-5.06C2.41 6.67 6.7 2.4 12.02 2.4c2.53 0 4.91.98 6.7 2.77s2.77 4.17 2.77 6.7c0 5.32-4.28 9.63-9.47 9.63Zm5.5-7.14c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08a7.67 7.67 0 0 1-2.26-1.4 8.22 8.22 0 0 1-1.52-1.88c-.16-.27 0-.42.12-.57.12-.15.27-.35.4-.52.13-.17.17-.3.26-.5.08-.2.04-.37-.02-.52-.06-.15-.67-1.62-.92-2.24-.24-.58-.48-.5-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.06 2.89 1.2 3.09.15.2 2.1 3.2 5.07 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.31.17-1.43-.08-.12-.29-.2-.59-.35Z"/>
          </svg>
        </a>
      ) : null}
      {instagram ? (
        <a
          href={instagram}
          aria-label="View our Instagram"
          target="_blank" rel="noopener noreferrer"
          onClick={() => trackCTA('instagram')}
          className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 text-white shadow-lg ring-1 ring-black/5 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM18 6.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"/>
          </svg>
        </a>
      ) : null}
    </div>
  );
}


