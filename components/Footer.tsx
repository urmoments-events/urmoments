import Link from "next/link";

interface FooterProps {
  brandName: string;
  email?: string;
  phone?: string;
  address?: {
    line1: string;
    line2?: string;
    line3?: string;
    city: string;
    postcode: string;
    country: string;
  };
  businessDetails?: {
    registrationNumber: string;
    businessType: string;
    tradingSince: string;
    industry: string;
    vatNumber?: string;
  };
}

export default function Footer({ brandName, email, phone, address, businessDetails }: FooterProps) {
  
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Business Information */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">{brandName}</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <p>{address?.line1}</p>
              {address?.line2 && <p>{address.line2}</p>}
              {address?.line3 && <p>{address.line3}</p>}
              <p>{address?.city}, {address?.postcode}</p>
              <p>{address?.country}</p>
              {businessDetails?.registrationNumber && (
                <p>Reg: {businessDetails.registrationNumber}</p>
              )}
              {businessDetails?.vatNumber && (
                <p>VAT: {businessDetails.vatNumber}</p>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
              <p>Service Area: Greater London</p>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Legal</h3>
            <div className="space-y-2 text-sm">
              <Link href="/terms" className="block text-slate-600 hover:text-rose-600 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="block text-slate-600 hover:text-rose-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/about" className="block text-slate-600 hover:text-rose-600 transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} {brandName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
