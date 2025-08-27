import { loadConfig } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - urmoments",
  description: "Privacy policy and data protection information for urmoments.",
};

export default function PrivacyPage() {
  const { brandName, email, phone, address, businessDetails } = loadConfig();
  
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-2 text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">1. Data Controller</h2>
          <div className="mt-4 space-y-2 text-slate-700">
            <p><strong>{brandName}</strong> is the data controller for your personal information.</p>
            <p><strong>Contact Details:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Email: {email}</li>
              <li>Phone: {phone}</li>
              <li>Address: {address?.line1}{address?.line2 && `, ${address.line2}`}{address?.line3 && `, ${address.line3}`}, {address?.city}, {address?.postcode}, {address?.country}</li>
            </ul>
            <p><strong>Business Registration:</strong> {businessDetails?.registrationNumber || "Sole Trader"}</p>
            <p><strong>Data Protection Officer:</strong> For data protection queries, please contact us at {email}</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">2. Information We Collect</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p><strong>Personal Information:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Postcode/address</li>
              <li>Event details and requirements</li>
              <li>Budget information</li>
            </ul>
            <p><strong>How We Collect Information:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Contact forms on our website</li>
              <li>Direct email communications</li>
              <li>Phone conversations</li>
              <li>Social media interactions</li>
              <li>Event consultations</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">3. How We Use Your Information</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p>We use your personal information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Service Provision:</strong> To provide event decoration services and fulfill contractual obligations</li>
              <li><strong>Communication:</strong> To respond to enquiries, provide quotes, and maintain customer relationships</li>
              <li><strong>Booking Management:</strong> To process bookings, payments, and manage event schedules</li>
              <li><strong>Service Delivery:</strong> To coordinate event setup, logistics, and venue arrangements</li>
              <li><strong>Customer Support:</strong> To provide ongoing support, handle complaints, and ensure service quality</li>
              <li><strong>Legal Compliance:</strong> To meet legal and regulatory requirements including tax obligations</li>
              <li><strong>Website Analytics:</strong> To understand website usage and improve user experience (with consent)</li>
              <li><strong>Marketing:</strong> To send relevant offers and updates (only with explicit consent)</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">4. Legal Basis for Processing</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p>We process your personal data based on the following legal grounds:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Contract:</strong> To fulfill our service obligations and provide event decoration services</li>
              <li><strong>Legitimate Interest:</strong> To provide customer service, respond to enquiries, and improve our services</li>
              <li><strong>Consent:</strong> For marketing communications, cookies, and analytics (where applicable)</li>
              <li><strong>Legal Obligation:</strong> To comply with legal and regulatory requirements (tax, accounting, etc.)</li>
            </ul>
            <p><strong>Legitimate Interest Assessment:</strong> We have conducted a legitimate interest assessment for processing activities based on legitimate interest, ensuring our interests do not override your fundamental rights and freedoms.</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">5. Data Sharing</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p>We may share your information with:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Service Providers:</strong> Venues, suppliers, and contractors (only with your consent)</li>
              <li><strong>Payment Processors:</strong> To process payments securely</li>
              <li><strong>Legal Authorities:</strong> When required by law</li>
              <li><strong>Professional Advisors:</strong> Accountants, lawyers (as necessary)</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">6. Data Security</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p>We implement appropriate security measures to protect your personal information:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Secure website with SSL encryption</li>
              <li>Limited access to personal data</li>
              <li>Regular security assessments</li>
              <li>Secure data storage practices</li>
              <li>Employee training on data protection</li>
            </ul>
            <p><strong>Data Breach Notification:</strong> In the unlikely event of a data breach that poses a risk to your rights and freedoms, we will notify the Information Commissioner&apos;s Office (ICO) within 72 hours and inform you without undue delay.</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">7. Data Retention</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p>We retain your personal information for the following periods:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Active Customers:</strong> Duration of our business relationship</li>
              <li><strong>Inactive Customers:</strong> 7 years (for tax and legal purposes)</li>
              <li><strong>Enquiries:</strong> 2 years (unless you become a customer)</li>
              <li><strong>Marketing Data:</strong> Until you withdraw consent</li>
            </ul>
            <p>We will securely delete or anonymize your data when no longer needed.</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">8. Your Rights</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p>Under GDPR, you have the following rights:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Request transfer of your data</li>
              <li><strong>Restriction:</strong> Request limitation of data processing</li>
              <li><strong>Objection:</strong> Object to data processing</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing</li>
            </ul>
            <p>To exercise these rights, contact us at {email}.</p>
            <p><strong>Right to Withdraw Consent:</strong> You have the right to withdraw your consent at any time. If you wish to withdraw consent for marketing communications or data processing, please contact us immediately. Withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal.</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">9. Cookies & Website Analytics</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p><strong>Cookies:</strong> Our website uses essential cookies for functionality. We do not use tracking cookies without your consent.</p>
            <p><strong>Analytics:</strong> We use Plausible Analytics (privacy-friendly) to understand website usage. This data is anonymized and does not identify individual users.</p>
            <p><strong>Third-party Services:</strong> We may use services like Google Fonts and Formspree, which have their own privacy policies.</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">10. International Transfers</h2>
          <div className="mt-4 text-slate-700">
            <p>Your personal data is processed within the UK and European Economic Area (EEA). If we need to transfer data outside the EEA, we ensure adequate protection measures are in place.</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">11. Children&apos;s Privacy</h2>
          <div className="mt-4 text-slate-700">
            <p>Our services are not intended for children under 16. We do not knowingly collect personal information from children under 16. If you believe we have collected such information, please contact us immediately.</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">12. Changes to This Policy</h2>
          <div className="mt-4 text-slate-700">
            <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">13. Contact Us</h2>
          <div className="mt-4 space-y-2 text-slate-700">
            <p>If you have any questions about this privacy policy or our data practices:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Email: {email}</li>
              <li>Phone: {phone}</li>
              <li>Address: {address?.line1}{address?.line2 && `, ${address.line2}`}{address?.line3 && `, ${address.line3}`}, {address?.city}, {address?.postcode}, {address?.country}</li>
            </ul>
            <p>You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) if you believe we have not handled your data appropriately.</p>
          </div>
        </section>

        <div className="mt-12 p-6 bg-slate-50 rounded-lg">
          <p className="text-sm text-slate-600">
            By using our services, you acknowledge that you have read and understood this Privacy Policy and consent to our data processing practices as described herein.
          </p>
        </div>
      </div>
    </main>
  );
}
