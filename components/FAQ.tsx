import { loadConfig } from "@/lib/config";

export default function FAQ() {
  const { faq } = loadConfig();
  if (!faq || faq.length === 0) return null;
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQs</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-xl bg-white ring-1 ring-slate-200">
          {faq.map(({ q, a }, idx) => (
            <details key={q + idx} className="group" {...(idx === 0 ? { open: true } : {})}>
              <summary className="cursor-pointer select-none px-4 py-3 text-slate-900 font-medium outline-none focus-visible:ring-2 focus-visible:ring-rose-500">{q}</summary>
              <div className="px-4 pb-4 text-slate-700">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}



