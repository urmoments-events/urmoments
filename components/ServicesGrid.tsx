import { loadConfig } from "@/lib/config";
import { isFeatureEnabled } from "@/lib/features";
import { toPublicSrc } from "@/lib/util";
import Image from "next/image";
import Link from "next/link";

export default function ServicesGrid() {
  const { services } = loadConfig();
  
  const getServiceSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  };
  
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Services & Packages</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc) => (
            <article key={svc.title} className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200 flex flex-col">
              {isFeatureEnabled('SERVICE_DETAIL_PAGES') ? (
                <Link href={`/services/${getServiceSlug(svc.title)}`} className="group">
                  <div className="relative w-full aspect-[4/3]">
                    <Image src={toPublicSrc(svc.image)} alt={svc.title} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" className="rounded-lg object-cover ring-1 ring-slate-200 group-hover:opacity-95 transition" />
                  </div>
                  <div className="mt-4 flex items-center">
                    <h3 className="text-lg font-semibold group-hover:text-rose-600 transition">{svc.title}</h3>
                    {svc.popular ? (
                      <span className="ml-2 inline-flex items-center rounded-full bg-rose-50 px-2 py-0.5 text-xs font-medium text-rose-700 ring-1 ring-rose-100">Most popular</span>
                    ) : null}
                  </div>
                  {svc.price ? <p className="mt-1 text-sm text-slate-600">{svc.price}</p> : null}
                  <p className="mt-2 text-sm text-slate-700">{svc.description}</p>
                  {Array.isArray(svc.features) && (
                    <ul className="mt-3 list-disc list-inside text-sm text-slate-700 space-y-1">
                      {svc.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  )}
                  {Array.isArray(svc.tags) && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {svc.tags.map((t) => (
                        <span key={t} className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-xs text-slate-600 ring-1 ring-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ) : (
                <div className="group">
                  <div className="relative w-full aspect-[4/3]">
                    <Image src={toPublicSrc(svc.image)} alt={svc.title} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" className="rounded-lg object-cover ring-1 ring-slate-200" />
                  </div>
                  <div className="mt-4 flex items-center">
                    <h3 className="text-lg font-semibold">{svc.title}</h3>
                    {svc.popular ? (
                      <span className="ml-2 inline-flex items-center rounded-full bg-rose-50 px-2 py-0.5 text-xs font-medium text-rose-700 ring-1 ring-rose-100">Most popular</span>
                    ) : null}
                  </div>
                  {svc.price ? <p className="mt-1 text-sm text-slate-600">{svc.price}</p> : null}
                  <p className="mt-2 text-sm text-slate-700">{svc.description}</p>
                  {Array.isArray(svc.features) && (
                    <ul className="mt-3 list-disc list-inside text-sm text-slate-700 space-y-1">
                      {svc.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  )}
                  {Array.isArray(svc.tags) && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {svc.tags.map((t) => (
                        <span key={t} className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-xs text-slate-600 ring-1 ring-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
              <div className="mt-6">
                {isFeatureEnabled('SERVICE_DETAIL_PAGES') ? (
                  <Link
                    href={`/services/${getServiceSlug(svc.title)}`}
                    className="inline-flex items-center justify-center rounded-md bg-rose-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                  >
                    View Details
                  </Link>
                ) : (
                  <button
                    className="inline-flex items-center justify-center rounded-md bg-rose-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Enquire
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
