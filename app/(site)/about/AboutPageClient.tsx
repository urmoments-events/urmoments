"use client";
import { useState, useEffect } from "react";
import type { SiteConfig } from "@/lib/config";

interface AboutPageClientProps {
  config: SiteConfig;
}

export default function AboutPageClient({ config }: AboutPageClientProps) {
  const { brandName, tagline } = config;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: "🎂",
      title: "Birthday Celebrations",
      description: "From first birthdays to milestone celebrations"
    },
    {
      icon: "👶",
      title: "Baby Showers",
      description: "Elegant and meaningful baby shower setups"
    },
    {
      icon: "🎊",
      title: "Gender Reveals",
      description: "Exciting and memorable reveal moments"
    },
    {
      icon: "🎉",
      title: "Cultural Festivals",
      description: "Traditional celebrations with modern touches"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your vision, theme, and requirements"
    },
    {
      step: "02", 
      title: "Design",
      description: "Our creative team designs your perfect setup"
    },
    {
      step: "03",
      title: "Setup",
      description: "Professional installation on your special day"
    },
    {
      step: "04",
      title: "Enjoy",
      description: "You relax and enjoy your celebration"
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-rose-50 via-white to-rose-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About {brandName}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {tagline || "Creating magical moments through beautiful event decorations and unforgettable celebrations"}
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 text-center">Our Story</h2>
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
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
              <p className="text-center text-xl font-semibold text-slate-900">
                At UrMoments, your moments are our pride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Specialize In</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From elegant balloon arches to vibrant cultural themes, we design experiences that reflect your story and values.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-slate-100">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Work</h2>
            <p className="text-lg text-slate-600">
              Our simple 4-step process ensures your event is perfect from start to finish
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-rose-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-rose-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-slate-600">
              We know the small details matter, and we make sure everything feels just right
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-rose-600 text-xl">•</span>
                <div>
                  <h3 className="font-semibold text-slate-900">Personal touch</h3>
                  <p className="text-slate-600 text-sm">We treat your event like our own.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-rose-600 text-xl">•</span>
                <div>
                  <h3 className="font-semibold text-slate-900">Creative designs</h3>
                  <p className="text-slate-600 text-sm">That balance tradition and modern trends.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-rose-600 text-xl">•</span>
                <div>
                  <h3 className="font-semibold text-slate-900">Stress-free service</h3>
                  <p className="text-slate-600 text-sm">We handle the details so you can enjoy the day.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-rose-600 text-xl">•</span>
                <div>
                  <h3 className="font-semibold text-slate-900">Affordable packages</h3>
                  <p className="text-slate-600 text-sm">With a premium look and feel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Create Your Perfect Event?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Let&apos;s make your celebration unforgettable together
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-3 bg-rose-600 text-white font-semibold rounded-lg hover:bg-rose-500 transition-colors duration-300"
          >
            Get Your Quote
          </a>
        </div>
      </section>
    </main>
  );
}
