import { loadConfig } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - urmoments",
  description: "Terms and conditions for urmoments event decoration services.",
};

export default function TermsPage() {
  const { brandName, email, phone, address, businessDetails } = loadConfig();
  
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Terms & Conditions</h1>
        <p className="mt-2 text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">1. Business Information</h2>
          <div className="mt-4 space-y-2 text-slate-700">
            <p><strong>{brandName}</strong> is a {businessDetails?.businessType || "Sole Trader"} registered in {address?.country || "United Kingdom"}.</p>
            <p><strong>Registered Address:</strong> {address?.line1}{address?.line2 && `, ${address.line2}`}{address?.line3 && `, ${address.line3}`}, {address?.city}, {address?.postcode}, {address?.country}</p>
            {businessDetails?.registrationNumber && (
              <p><strong>Registration Number:</strong> {businessDetails.registrationNumber}</p>
            )}
            {businessDetails?.vatNumber && (
              <p><strong>VAT Number:</strong> {businessDetails.vatNumber}</p>
            )}
            <p><strong>Trading Since:</strong> {businessDetails?.tradingSince || "2025"}</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">2. Services</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p>We provide professional event decoration and party setup services including:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Birthday party decorations</li>
              <li>Gender reveal party setups</li>
              <li>Surprise party decorations</li>
              <li>Baby shower styling</li>
              <li>Theme-based event styling</li>
              <li>Balloon garlands and backdrops</li>
              <li>Personalised signage and props</li>
            </ul>
            <p>All services include set-up and clean-up unless otherwise specified.</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">3. Booking & Payment</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p><strong>Booking Process:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Bookings are confirmed upon receipt of a 50% deposit</li>
              <li>Remaining balance is due 24 hours before the event</li>
              <li>We accept bank transfers and card payments</li>
              <li>All prices are quoted in British Pounds (GBP)</li>
            </ul>
            <p><strong>Payment Terms:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Deposit: 50% of total cost to secure booking</li>
              <li>Final Payment: 24 hours before event date</li>
              <li>Late payments may result in service cancellation</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">4. Cancellation Policy</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p><strong>Cancellation Notice:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>More than 7 days: Full refund minus £50 administration fee</li>
              <li>3-7 days: 50% refund of total cost</li>
              <li>Less than 24 hours: No refund</li>
              <li>Same day cancellations: No refund</li>
            </ul>
            <p><strong>Force Majeure:</strong> We reserve the right to cancel services due to circumstances beyond our control (weather, venue issues, etc.) with full refund.</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">5. Service Delivery</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p><strong>Set-up Times:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Standard set-up: 60-120 minutes before event</li>
              <li>Complex setups may require additional time</li>
              <li>We will coordinate with venue staff for access</li>
            </ul>
            <p><strong>Venue Requirements:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Client must ensure venue access is arranged</li>
              <li>Venue must be clean and ready for decoration</li>
              <li>We require adequate parking/loading access</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">6. Liability & Insurance</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p><strong>Our Liability:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>We are insured for public liability up to £2,000,000</li>
              <li>We take reasonable care of venue property</li>
              <li>We are not liable for venue restrictions or access issues</li>
            </ul>
            <p><strong>Client Responsibility:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Ensure venue permissions are obtained</li>
              <li>Provide accurate event details and requirements</li>
              <li>Notify us of any venue restrictions in advance</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">7. Privacy & Data Protection</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p>We collect and process personal data in accordance with our Privacy Policy and GDPR requirements. By using our services, you consent to our data processing practices.</p>
            <p>For data protection queries, contact us at {email}.</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">8. Complaints & Disputes</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p>We aim to resolve any issues promptly and professionally. If you have a complaint:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Contact us immediately at {email} or {phone}</li>
              <li>We will respond within 24 hours</li>
              <li>We will work to resolve the issue to your satisfaction</li>
            </ol>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">9. Contact Information</h2>
          <div className="mt-4 space-y-2 text-slate-700">
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Address:</strong> {address?.line1}{address?.line2 && `, ${address.line2}`}{address?.line3 && `, ${address.line3}`}, {address?.city}, {address?.postcode}, {address?.country}</p>
            <p><strong>Business Hours:</strong> Monday - Sunday, 9:00 AM - 8:00 PM</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">10. Changes to Terms</h2>
          <div className="mt-4 text-slate-700">
            <p>We reserve the right to update these terms and conditions. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of updated terms.</p>
          </div>
        </section>

        <div className="mt-12 p-6 bg-slate-50 rounded-lg">
          <p className="text-sm text-slate-600">
            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
          </p>
        </div>
      </div>
    </main>
  );
}
