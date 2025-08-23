import { loadConfig } from "@/lib/config";
import { toPublicSrc } from "@/lib/util";
import Image from "next/image";

export default function HeroBanner() {
  const { heroBanner, brandName } = loadConfig();
  const image = toPublicSrc(heroBanner?.image ?? "/assets/home/image1.jpg");
  const headline = heroBanner?.headline ?? `${brandName} — birthday decorations made easy.`;
  const subhead = heroBanner?.subhead ?? "Across London";
  const points = heroBanner?.points ?? ["Theme styling", "Set-up & clean-up", "On-time guarantee"];
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Image src={image} alt="Hero banner" fill priority unoptimized sizes="100vw" className="object-cover opacity-60" />
      </div>
      <div className="relative min-h-[36vh] sm:min-h-[40vh] md:min-h-[56vh] flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">{headline}</h1>
            <p className="mt-2 text-rose-100">{subhead}</p>
            <ul className="mt-4 flex flex-wrap gap-3 text-rose-50 text-sm">
              {points.map((p) => (
                <li key={p} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur">{p}</li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 px-6 py-3 text-white font-medium shadow hover:from-rose-500 hover:to-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


