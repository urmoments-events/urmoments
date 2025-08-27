import { loadConfig } from "@/lib/config";
import { isFeatureEnabled } from "@/lib/features";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const { brandName, email, phone, address, businessDetails } = loadConfig();
  
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <ClientLayout>
        <div id="main">{children}</div>
        <Footer 
          brandName={brandName}
          email={email}
          phone={phone}
          address={address}
          businessDetails={businessDetails}
        />
      </ClientLayout>
      {isFeatureEnabled('BACK_TO_TOP') && <BackToTop />}
    </div>
  );
}
