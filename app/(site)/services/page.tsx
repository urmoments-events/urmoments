import { loadConfig } from "@/lib/config";
import { isFeatureEnabled } from "@/lib/features";
import ServicesGrid from "@/components/ServicesGrid";
import AddOnsChips from "@/components/AddOnsChips";
import ContactForm from "@/components/ContactForm";
import FloatingCta from "@/components/FloatingCta";

export default function SiteServices() {
  const { addOns, contactForm, phone, socialLinks } = loadConfig();
  return (
    <main>
      <ServicesGrid />
      {isFeatureEnabled('ADD_ONS') && (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl md:text-3xl font-semibold">Add-ons</h2>
            <AddOnsChips addOns={addOns ?? []} />
            <p className="mt-2 text-xs text-slate-500">Tip: Selected add-ons will be included in your message.</p>
          </div>
        </section>
      )}
      <ContactForm action={contactForm?.action} consentText={contactForm?.consentText} placeholders={contactForm?.placeholders} page="services" />
      {isFeatureEnabled('FLOATING_CTA') && <FloatingCta phone={phone} instagram={socialLinks?.instagram} />}
    </main>
  );
}
