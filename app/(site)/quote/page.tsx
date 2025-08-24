import { Metadata } from "next";
import { loadConfig } from "@/lib/config";
import MultiStepContactForm from "@/components/MultiStepContactForm";
import FloatingCta from "@/components/FloatingCta";

export const metadata: Metadata = {
  title: "Get a Quote - UrMoments | Event Decorations in London",
  description: "Get a personalized quote for your event decorations in London. Tell us about your event in 3 simple steps and we'll get back to you within 24 hours.",
  openGraph: {
    title: "Get a Quote - UrMoments | Event Decorations in London",
    description: "Get a personalized quote for your event decorations in London.",
    type: "website",
  },
};

export default function QuotePage() {
  const { phone, socialLinks, contactForm, addOns } = loadConfig();
  
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Get Your Quote
            </h1>
            <p className="mt-4 text-rose-100 text-lg md:text-xl">
              Tell us about your event and we&apos;ll create a personalized quote just for you
            </p>
          </div>
        </div>
      </section>

      {/* Multi-Step Form */}
      <MultiStepContactForm contactForm={contactForm} addOns={addOns} />
      
      <FloatingCta phone={phone} instagram={socialLinks?.instagram} />
    </main>
  );
}
