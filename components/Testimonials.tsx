"use client";
import { useRef, useEffect } from "react";

type Testimonial = { name: string; area?: string; text: string };

export default function Testimonials({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const track = trackRef.current; const dots = dotsRef.current; if (!track || !dots) return;
    const update = () => {
      const total = items.length || 1;
      const idx = Math.round((track.scrollLeft / track.scrollWidth) * total);
      Array.from(dots.children).forEach((d, i) => d.setAttribute('aria-selected', String(i === idx)));
    };
    track.addEventListener('scroll', update, { passive: true });
    update();
    return () => track.removeEventListener('scroll', update);
  }, [items]);
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">What families say</h2>
        <div className="mt-6 relative">
          <div ref={trackRef} className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth" aria-label="Testimonials">
            {items.map((t, i) => (
              <article key={t.name + i} className="snap-center min-w-[85%] sm:min-w-[45%] md:min-w-[32%] rounded-xl bg-gradient-to-b from-rose-50 to-white p-6 shadow-sm ring-1 ring-rose-100 border border-slate-200">
                <p className="text-slate-700">“{t.text}”</p>
                <div className="mt-4 text-sm text-slate-600">— {t.name}{t.area ? `, ${t.area}` : ''}</div>
              </article>
            ))}
          </div>
          <div ref={dotsRef} className="mt-4 flex justify-center gap-2 md:hidden">
            {items.map((_, i) => (
              <button key={i} type="button" className="h-2.5 w-2.5 rounded-full bg-slate-300 aria-selected:bg-rose-500" aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
          <div className="mt-4 hidden md:flex items-center justify-center gap-3">
            <button type="button" aria-label="Previous testimonials" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/90 ring-1 ring-slate-200 shadow hover:bg-white" onClick={() => {
              const track = trackRef.current; if (!track) return; const pos = Math.max(0, track.scrollLeft - track.clientWidth); track.scrollTo({ left: pos, behavior: 'smooth' });
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-slate-700"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button type="button" aria-label="Next testimonials" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/90 ring-1 ring-slate-200 shadow hover:bg-white" onClick={() => {
              const track = trackRef.current; if (!track) return; const max = track.scrollWidth - track.clientWidth; const pos = Math.min(max, track.scrollLeft + track.clientWidth); track.scrollTo({ left: pos, behavior: 'smooth' });
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-slate-700"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



