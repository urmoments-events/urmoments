"use client";
import { useState } from "react";
import Link from "next/link";
import { isFeatureEnabled } from "@/lib/features";

type Placeholders = Partial<Record<"fullName"|"email"|"postcode"|"description", string>>;

export default function ContactForm({
  action,
  consentText = "I agree to be contacted about my enquiry.",
  placeholders = {},
  page = "home",
}: {
  action?: string;
  consentText?: string;
  placeholders?: Placeholders;
  page?: "home" | "services" | "service-detail";
}) {
  const [status, setStatus] = useState<string>("");
  const effectiveAction = (process.env.NEXT_PUBLIC_FORMSPREE_ACTION_URL as string | undefined) || action || "";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (!form.checkValidity()) return;
    e.preventDefault();
    setStatus("Sending…");
    if (!/^https?:\/\//.test(effectiveAction) || /TODO/i.test(effectiveAction)) {
      setStatus("Form is in demo mode. Add your Formspree endpoint to enable submissions.");
      return;
    }
    try {
      const formData = new FormData(form);
      const res = await fetch(effectiveAction, { method: "POST", body: formData, headers: { Accept: "application/json" } });
      if (res.ok) {
        setStatus("Thanks! Your enquiry has been sent.");
        form.reset();
      } else {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setStatus((data && data.error) || "Something went wrong. Please try again later.");
      }
    } catch {
      setStatus("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-white scroll-mt-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Get a fast quote</h2>
        <p className="mt-1 text-slate-600">Tell us a few details and we’ll get back within 24 hours.</p>
        <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4" noValidate>
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">Full Name</label>
            <input id="fullName" name="fullName" type="text" required placeholder={placeholders.fullName}
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required placeholder={placeholders.email}
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          </div>
          <div>
            <label htmlFor="postcode" className="block text-sm font-medium text-slate-700">Postcode</label>
            <input id="postcode" name="postcode" type="text" autoComplete="postal-code" required placeholder={placeholders.postcode}
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-slate-700">Budget</label>
            <input id="budget" name="budget" type="number" inputMode="numeric" pattern="[0-9]*" min={0} step={50} placeholder="Approx budget (£)"
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-700">Type of Event / Description</label>
            <textarea id="description" name="description" rows={5} required placeholder={placeholders.description}
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          </div>
          <div className="flex items-start gap-3">
            <input id="consent" name="consent" type="checkbox" required className="mt-1 h-5 w-5 rounded border-slate-300 text-rose-600 focus:ring-rose-500" />
            <label htmlFor="consent" className="text-sm text-slate-700">{consentText}</label>
          </div>
          <div className="hidden" aria-hidden="true">
            <label>Leave this field empty<input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
          </div>
          <input type="hidden" name="page" value={page} />
          <div className="flex items-center gap-3">
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 px-5 py-3 text-white font-medium shadow hover:from-rose-500 hover:to-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">Submit</button>
            <a href="tel:+447000000000" className="text-slate-700 hover:text-rose-600 text-sm">Or call us</a>
          </div>
          <p className="mt-2 text-sm text-slate-600">We’ll never share your information. You can opt out at any time.</p>
          <div className="mt-2 text-sm" aria-live="polite">{status}</div>
        </form>
                 {isFeatureEnabled('MULTI_STEP_FORM') && (
           <div className="mt-4 text-center">
             <Link href="/quote" className="text-rose-600 hover:text-rose-500 text-sm">
               Prefer a step-by-step form? Try our detailed quote form →
             </Link>
           </div>
         )}
      </div>
    </section>
  );
}


