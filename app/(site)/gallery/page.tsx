import { Metadata } from "next";
import Link from "next/link";
import { loadConfig } from "@/lib/config";
import { isFeatureEnabled } from "@/lib/features";
import GalleryClient from "@/components/GalleryClient";
import FloatingCta from "@/components/FloatingCta";

export const metadata: Metadata = {
  title: "Gallery - urmoments | Event Decorations in London",
  description: "Browse our gallery of birthday decorations, gender reveals, and surprise party setups across London. See our latest work and get inspired for your event.",
  openGraph: {
    title: "Gallery - urmoments | Event Decorations in London",
    description: "Browse our gallery of birthday decorations, gender reveals, and surprise party setups across London.",
    type: "website",
  },
};

// Define categories for gallery filtering
const categories = [
  { id: "all", label: "All Events", icon: "🎉" },
  { id: "birthday", label: "Birthdays", icon: "🎂" },
  { id: "gender-reveal", label: "Gender Reveals", icon: "🎀" },
  { id: "surprise", label: "Surprise Parties", icon: "🎊" },
  { id: "baby-shower", label: "Baby Showers", icon: "👶" },
];

export default function GalleryPage() {
  const { heroImages, phone, socialLinks } = loadConfig();
  
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Our Gallery
            </h1>
            <p className="mt-4 text-rose-100 text-lg md:text-xl">
              Browse our latest work and get inspired for your special event
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      {isFeatureEnabled('GALLERY_FILTERS') && (
        <section className="bg-white border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  data-category={category.id}
                  className="category-filter inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors bg-slate-50 text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 active:scale-[0.98]"
                >
                  <span aria-hidden>{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <GalleryClient images={heroImages ?? []} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Ready to create your perfect event?
          </h2>
                      <p className="mt-2 text-slate-600">
              Get in touch and we&apos;ll help bring your vision to life
            </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 px-6 py-3 text-white font-medium shadow hover:from-rose-500 hover:to-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-slate-700 font-medium shadow ring-1 ring-slate-200 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {isFeatureEnabled('FLOATING_CTA') && <FloatingCta phone={phone} instagram={socialLinks?.instagram} />}
    </main>
  );
}
