import { loadConfig } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - urmoments",
  description: "Learn more about urmoments, our mission, and our commitment to creating beautiful event decorations.",
};

export default function AboutPage() {
  const { brandName } = loadConfig();
  
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900">About {brandName}</h1>
        
        <section className="mt-8">
          <div className="mt-4 space-y-6 text-slate-700">
            <p>
              At UrMoments Events, we believe that every celebration deserves to feel personal, meaningful, and stress-free. 
              We are a UK-based event decoration and planning service specialising in birthdays, baby showers, gender reveals, 
              cultural festivals, and family celebrations.
            </p>
            
            <p>
              Our mission is simple: to treat your moments as if they were our own. Whether it is your child&apos;s first birthday, 
              your sister&apos;s baby shower, or a family festival far from home, we bring the warmth of tradition and the excitement 
              of creativity to every setup.
            </p>
            
            <p>
              From elegant balloon arches to vibrant cultural themes, from intimate house parties to larger community events, 
              we design experiences that reflect your story and values. We know the small details matter, and we make sure 
              everything feels just right, so you can focus on enjoying the moment with your loved ones.
            </p>
            
            <p className="text-lg font-semibold text-slate-900">
              At UrMoments, your moments are our pride.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Why Choose Us</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-rose-600 font-semibold">•</span>
              <div>
                <strong>Personal touch</strong> → we treat your event like our own.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-rose-600 font-semibold">•</span>
              <div>
                <strong>Creative designs</strong> that balance tradition and modern trends.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-rose-600 font-semibold">•</span>
              <div>
                <strong>Stress-free service</strong> → we handle the details so you can enjoy the day.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-rose-600 font-semibold">•</span>
              <div>
                <strong>Affordable packages</strong> with a premium look and feel.
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 p-6 bg-slate-50 rounded-lg">
          <p className="text-sm text-slate-600">
            Ready to make your event special? We&apos;d love to hear from you and help bring your vision to life.
          </p>
        </div>
      </div>
    </main>
  );
}
