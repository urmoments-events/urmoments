"use client";

import { useState } from "react";
import { isFeatureEnabled } from "@/lib/features";

type Step = "details" | "addons" | "contact";

interface FormData {
  fullName: string;
  email: string;
  postcode: string;
  eventType: string;
  eventDate: string;
  budget: string;
  description: string;
  addOns: string[];
  phone: string;
}

export default function MultiStepContactForm({ 
  contactForm, 
  addOns 
}: { 
  contactForm?: { action?: string; consentText?: string }; 
  addOns?: { label: string; icon?: string }[] 
}) {
  const [currentStep, setCurrentStep] = useState<Step>("details");
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    postcode: "",
    eventType: "",
    eventDate: "",
    budget: "",
    description: "",
    addOns: [],
    phone: "",
  });
  const [status, setStatus] = useState<string>("");

  const eventTypes = [
    "Birthday Party",
    "Gender Reveal",
    "Baby Shower",
    "Surprise Party",
    "Anniversary",
    "Other",
  ];

  const budgetRanges = [
    "Under £100",
    "£100 - £200",
    "£200 - £300",
    "£300 - £500",
    "£500+",
    "Contact for quote",
  ];

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleAddOn = (addOn: string) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOn)
        ? prev.addOns.filter(item => item !== addOn)
        : [...prev.addOns, addOn]
    }));
  };

  const nextStep = () => {
    if (currentStep === "details") setCurrentStep("addons");
    else if (currentStep === "addons") setCurrentStep("contact");
  };

  const prevStep = () => {
    if (currentStep === "addons") setCurrentStep("details");
    else if (currentStep === "contact") setCurrentStep("addons");
  };

  const isDetailsValid = () => {
    return formData.fullName && formData.email && formData.postcode && formData.eventType;
  };

  const isAddOnsValid = () => {
    return true; // Add-ons are optional
  };

  const isContactValid = () => {
    return formData.phone && formData.description;
  };

  const canProceed = () => {
    if (currentStep === "details") return isDetailsValid();
    if (currentStep === "addons") return isAddOnsValid();
    return false;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isContactValid()) return;

    setStatus("Sending…");
    const effectiveAction = (process.env.NEXT_PUBLIC_FORMSPREE_ACTION_URL as string | undefined) || contactForm?.action || "";

    if (!/^https?:\/\//.test(effectiveAction) || /TODO/i.test(effectiveAction)) {
      setStatus("Form is in demo mode. Add your Formspree endpoint to enable submissions.");
      return;
    }

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          formDataToSend.append(key, value.join(", "));
        } else {
          formDataToSend.append(key, value);
        }
      });
      formDataToSend.append("page", "multi-step-form");

      const res = await fetch(effectiveAction, { 
        method: "POST", 
        body: formDataToSend, 
        headers: { Accept: "application/json" } 
      });
      
             if (res.ok) {
         setStatus("Thanks! Your enquiry has been sent.");
         // Track form completion
         if (typeof window !== 'undefined' && isFeatureEnabled('ANALYTICS')) {
           const plausible = (window as Window & { plausible?: (event: string, options?: { props?: Record<string, string> }) => void }).plausible;
           if (plausible) {
             plausible('Form Completed', { props: { form: 'multi-step' } });
           }
         }
       } else {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setStatus((data && data.error) || "Something went wrong. Please try again later.");
      }
    } catch {
      setStatus("Network error. Please try again.");
    }
  };

  const trackStep = (step: Step) => {
    if (typeof window !== 'undefined' && isFeatureEnabled('ANALYTICS')) {
      const plausible = (window as Window & { plausible?: (event: string, options?: { props?: Record<string, string> }) => void }).plausible;
      if (plausible) {
        plausible('Form Step', { props: { step } });
      }
    }
  };

  return (
    <section id="contact" className="bg-white scroll-mt-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Get a Quote</h2>
        <p className="mt-1 text-slate-600 text-center">Tell us about your event in 3 simple steps</p>

        {/* Progress Bar */}
        <div className="mt-8 mb-8">
          <div className="flex items-center justify-between">
            {(["details", "addons", "contact"] as Step[]).map((step, index) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  currentStep === step 
                    ? "bg-rose-600 text-white" 
                    : index < (["details", "addons", "contact"] as Step[]).indexOf(currentStep)
                    ? "bg-rose-100 text-rose-600"
                    : "bg-slate-200 text-slate-600"
                }`}>
                  {index + 1}
                </div>
                {index < 2 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    index < (["details", "addons", "contact"] as Step[]).indexOf(currentStep)
                      ? "bg-rose-600"
                      : "bg-slate-200"
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-slate-500 mt-2">
            <span>Details</span>
            <span>Add-ons</span>
            <span>Contact</span>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Step 1: Details */}
          {currentStep === "details" && (
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => updateFormData("fullName", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="postcode" className="block text-sm font-medium text-slate-700 mb-1">
                  Postcode *
                </label>
                <input
                  id="postcode"
                  type="text"
                  required
                  value={formData.postcode}
                  onChange={(e) => updateFormData("postcode", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="SW1A 1AA"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-slate-700 mb-1">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  required
                  value={formData.eventType}
                  onChange={(e) => updateFormData("eventType", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="">Select event type</option>
                  {eventTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-slate-700 mb-1">
                  Event Date
                </label>
                <input
                  id="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => updateFormData("eventDate", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1">
                  Budget Range
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => updateFormData("budget", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Step 2: Add-ons */}
          {currentStep === "addons" && (
            <div className="space-y-4">
              <p className="text-slate-600">Select any additional services you&apos;re interested in:</p>
              <div className="grid grid-cols-1 gap-3">
                {(addOns || []).map((addOn) => (
                  <label key={addOn.label} className="flex items-center p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={formData.addOns.includes(addOn.label)}
                      onChange={() => toggleAddOn(addOn.label)}
                      className="h-5 w-5 text-rose-600 rounded border-slate-300 focus:ring-rose-500"
                    />
                    <span className="ml-3 text-slate-700">
                      {addOn.icon && <span className="mr-2">{addOn.icon}</span>}
                      {addOn.label}
                    </span>
                  </label>
                ))}
              </div>
              {(!addOns || addOns.length === 0) && (
                <p className="text-slate-500 text-center py-8">No add-ons available at the moment</p>
              )}
            </div>
          )}

          {/* Step 3: Contact */}
          {currentStep === "contact" && (
            <div className="space-y-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="07123 456789"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
                  Event Details *
                </label>
                <textarea
                  id="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => updateFormData("description", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Tell us about your event, theme, colors, special requirements..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-rose-600 focus:ring-rose-500"
                />
                <label htmlFor="consent" className="text-sm text-slate-700">
                  {contactForm?.consentText || "I agree to be contacted about my enquiry."}
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 pt-6">
            {currentStep !== "details" && (
              <button
                type="button"
                onClick={() => {
                  prevStep();
                  trackStep(currentStep === "contact" ? "addons" : "details");
                }}
                className="flex-1 px-6 py-3 text-slate-700 font-medium border border-slate-300 rounded-lg hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                Back
              </button>
            )}
            
            {currentStep !== "contact" ? (
              <button
                type="button"
                onClick={() => {
                  nextStep();
                  trackStep(currentStep === "details" ? "addons" : "contact");
                }}
                disabled={!canProceed()}
                className="flex-1 px-6 py-3 bg-rose-600 text-white font-medium rounded-lg hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={!isContactValid()}
                className="flex-1 px-6 py-3 bg-rose-600 text-white font-medium rounded-lg hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Quote Request
              </button>
            )}
          </div>

          <div className="text-sm text-slate-600 text-center">
            We&apos;ll never share your information. You can opt out at any time.
          </div>

          <div className="text-sm text-center" aria-live="polite">{status}</div>
        </form>
      </div>
    </section>
  );
}
