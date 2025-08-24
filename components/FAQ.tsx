"use client";

import { useState, useMemo } from "react";

type FAQItem = { q: string; a: string };

export default function FAQ({ faq }: { faq: FAQItem[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredFAQ = useMemo(() => {
    if (!faq || faq.length === 0) return [];
    if (!searchTerm.trim()) return faq;
    const term = searchTerm.toLowerCase();
    return faq.filter(({ q, a }) => 
      q.toLowerCase().includes(term) || a.toLowerCase().includes(term)
    );
  }, [faq, searchTerm]);
  
  if (!faq || faq.length === 0) return null;
  
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQs</h2>
        
        {/* Search Input */}
        <div className="mt-6 relative">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-10 rounded-lg border border-slate-300 bg-white shadow-sm focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        {/* Results Count */}
        {searchTerm && (
          <p className="mt-2 text-sm text-slate-600">
            {filteredFAQ.length} of {faq.length} FAQs found
          </p>
        )}
        
        {/* FAQ List */}
        <div className="mt-6 divide-y divide-slate-200 rounded-xl bg-white ring-1 ring-slate-200">
          {filteredFAQ.length > 0 ? (
            filteredFAQ.map(({ q, a }, idx) => (
              <details key={q + idx} className="group" {...(idx === 0 && !searchTerm ? { open: true } : {})}>
                <summary className="cursor-pointer select-none px-4 py-3 text-slate-900 font-medium outline-none focus-visible:ring-2 focus-visible:ring-rose-500 hover:bg-slate-50">
                  {q}
                </summary>
                <div className="px-4 pb-4 text-slate-700">{a}</div>
              </details>
            ))
          ) : (
            <div className="px-4 py-8 text-center text-slate-500">
              <p>No FAQs found matching &quot;{searchTerm}&quot;</p>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-2 text-rose-600 hover:text-rose-500 text-sm"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}



