import { Metadata } from "next";
import { notFound } from "next/navigation";
import { loadConfig } from "@/lib/config";
import { toPublicSrc } from "@/lib/util";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import FloatingCta from "@/components/FloatingCta";

// Generate static params for all services
export async function generateStaticParams() {
  const { services } = loadConfig();
  return services.map((service) => ({
    slug: service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  }));
}

// Generate metadata for each service
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { services, brandName } = loadConfig();
  const { slug } = await params;
  const service = services.find(
    (s) => s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") === slug
  );
  
  if (!service) return { title: "Service Not Found" };
  
  const title = `${service.title} - ${brandName} | London Event Decorations`;
  const description = `${service.description} ${service.features?.slice(0, 2).join(", ")}. Get a quote for ${service.title.toLowerCase()} in London.`;
  const image = toPublicSrc(service.image);
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { services, contactForm, phone, socialLinks } = loadConfig();
  const { slug } = await params;
  const service = services.find(
    (s) => s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") === slug
  );
  
  if (!service) notFound();
  
  const image = toPublicSrc(service.image);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image src={image} alt={service.title} fill priority unoptimized sizes="100vw" className="object-cover opacity-60" />
        </div>
        <div className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24">
            <div className="max-w-2xl">
              <nav className="mb-4">
                <Link href="/services" className="text-rose-100 hover:text-white text-sm">
                  ← Back to Services
                </Link>
              </nav>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                {service.title}
              </h1>
              <p className="mt-4 text-rose-100 text-lg md:text-xl">{service.description}</p>
              {service.popular && (
                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-sm font-medium text-rose-700 ring-1 ring-rose-100">
                    Most Popular
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-slate-200">
              <Image src={image} alt={service.title} fill unoptimized sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">What&apos;s Included</h2>
                {service.features && (
                  <ul className="mt-4 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              {service.tags && (
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-3">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-sm text-slate-700 ring-1 ring-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{service.price}</p>
                    <p className="text-sm text-slate-600">Set-up & clean-up included</p>
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 px-6 py-3 text-white font-medium shadow hover:from-rose-500 hover:to-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm 
        action={contactForm?.action} 
        consentText={contactForm?.consentText} 
        placeholders={contactForm?.placeholders} 
        page="service-detail"
      />
      
      <FloatingCta phone={phone} instagram={socialLinks?.instagram} />
      
      {/* Schema.org Product markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: service.title,
            description: service.description,
            image: image,
            offers: {
              "@type": "Offer",
              price: service.price === "Contact Us" ? undefined : service.price,
              priceCurrency: "GBP",
              availability: "https://schema.org/InStock",
            },
            category: "Event Decorations",
            brand: {
              "@type": "Brand",
              name: "UrMoments",
            },
          }),
        }}
      />
    </main>
  );
}
