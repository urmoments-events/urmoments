"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import BackToTop from "@/components/BackToTop";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 z-50 bg-white text-slate-900 px-3 py-2 rounded shadow">Skip to content</a>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold">UrMoments</Link>
          <nav className="hidden md:flex items-center gap-2" aria-label="Primary">
            <Link href="/" className="px-3 py-2 rounded-md text-slate-700 hover:text-rose-600 hover:bg-rose-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">Home</Link>
            <Link href="/services" className="px-3 py-2 rounded-md text-slate-700 hover:text-rose-600 hover:bg-rose-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">Services</Link>
            <Link href="/#contact" className="px-3 py-2 rounded-md text-slate-700 hover:text-rose-600 hover:bg-rose-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">Contact</Link>
          </nav>
          <button aria-controls="mnav" aria-expanded={open} onClick={() => setOpen(true)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">
            <span className="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        {/* Mobile menu */}
        <div id="mnav" className={`md:hidden fixed inset-0 z-50 ${open ? "" : "hidden"}`} role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className={`absolute inset-0 h-full w-full bg-white p-6 pt-16 transform transition-transform duration-200 will-change-transform ${open ? "translate-y-0" : "-translate-y-full"} shadow-2xl`}>
            <button className="absolute top-4 right-4 inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500" onClick={() => setOpen(false)} aria-label="Close menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <nav className="mt-2" aria-label="Mobile Primary">
              <div className="overflow-hidden rounded-xl ring-1 ring-slate-200 bg-white divide-y divide-slate-200">
                <Link href="/" className="block px-4 py-5 text-slate-900 text-lg font-medium hover:bg-slate-50" onClick={() => setOpen(false)}>Home</Link>
                <Link href="/services" className="block px-4 py-5 text-slate-900 text-lg font-medium hover:bg-slate-50" onClick={() => setOpen(false)}>Services</Link>
                <Link href="/#contact" className="block px-4 py-5 text-slate-900 text-lg font-medium hover:bg-slate-50" onClick={() => setOpen(false)}>Contact</Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div id="main">{children}</div>
      <footer className="mt-10 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600">
          © {new Date().getFullYear()} UrMoments. All rights reserved.
        </div>
      </footer>
      <BackToTop />
    </div>
  );
}
