import HeroBanner from "@/components/HeroBanner";
import Highlights from "@/components/Highlights";
import GalleryClient from "@/components/GalleryClient";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { loadConfig } from "@/lib/config";
import { isFeatureEnabled } from "@/lib/features";
import ContactForm from "@/components/ContactForm";
import FloatingCta from "@/components/FloatingCta";

export default function SiteHome() {
  const { heroImages, testimonials, phone, socialLinks, faq, contactForm } = loadConfig();
  return (
    <main>
      <HeroBanner />
      <Highlights />
      <GalleryClient images={heroImages ?? []} />
      <Testimonials items={testimonials ?? []} />
      {isFeatureEnabled('FAQ_SEARCH') && <FAQ faq={faq ?? []} />}
      <ContactForm action={contactForm?.action} consentText={contactForm?.consentText} placeholders={contactForm?.placeholders} page="home" />
      {isFeatureEnabled('FLOATING_CTA') && <FloatingCta phone={phone} instagram={socialLinks?.instagram} />}
    </main>
  );
}
