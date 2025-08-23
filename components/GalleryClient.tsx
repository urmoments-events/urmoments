"use client";
import { useState, useEffect } from "react";
import { toPublicSrc } from "@/lib/util";
import Image from "next/image";

export default function GalleryClient({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string>("");
  const [alt, setAlt] = useState<string>("Gallery image");
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <section className="bg-white" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 id="gallery-heading" className="text-2xl md:text-3xl font-semibold text-slate-900">Featured Gallery</h2>
        <ul className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4" role="list">
          {images.slice(0, 12).map((img, i) => (
            <li key={img + i}>
              <button
                className="group block w-full"
                onClick={() => { setSrc(toPublicSrc(img)); setAlt(`Decor sample ${i+1}`); setOpen(true); }}
                aria-expanded={open}
              >
                <span className="relative block w-full aspect-[4/3]">
                  <Image src={toPublicSrc(img)} alt={`Decor sample ${i+1}`} fill unoptimized sizes="(max-width: 768px) 50vw, 33vw" className="rounded-lg object-cover shadow-sm ring-1 ring-slate-200 group-hover:opacity-95" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/80" onClick={() => setOpen(false)} />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <figure className="relative w-full max-w-4xl">
              <span className="relative block w-full max-h-[80vh]" style={{ aspectRatio: "4/3" }}>
                <Image src={src} alt={alt} fill unoptimized sizes="100vw" className="object-contain rounded-lg shadow-2xl" />
              </span>
              <button type="button" className="absolute top-2 right-2 rounded-full bg-white/90 p-2 text-slate-800 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500" onClick={() => setOpen(false)} aria-label="Close image">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </figure>
          </div>
        </div>
      )}
    </section>
  );
}


