"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed left-4 bottom-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg ring-1 ring-black/5 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 md:left-6 md:bottom-6"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
        <path d="M12 4l7 7-1.4 1.4L13 8.83V20h-2V8.83L6.4 12.4 5 11l7-7z" />
      </svg>
    </button>
  );
}


