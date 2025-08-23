import HeroBanner from "@/components/HeroBanner";
import Highlights from "@/components/Highlights";
import GalleryClient from "@/components/GalleryClient";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { loadConfig } from "@/lib/config";
import ContactForm from "@/components/ContactForm";

export default function SiteHome() {
  const { heroImages, testimonials } = loadConfig();
  return (
    <main>
      <HeroBanner />
      <Highlights />
      <GalleryClient images={heroImages ?? []} />
      <Testimonials items={testimonials ?? []} />
      <FAQ />
      <ContactForm action={loadConfig().contactForm?.action} consentText={loadConfig().contactForm?.consentText} placeholders={loadConfig().contactForm?.placeholders} page="home" />
    </main>
  );
}
