import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TaxCalculator } from "@/components/tax-calculator";
import { ExpertSection } from "@/components/expert-section";
import { PropertyRightsManifesto } from "@/components/property-rights-manifesto";
import { GatekeeperList } from "@/components/gatekeeper-list";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TaxCalculator />
      <ExpertSection />
      <PropertyRightsManifesto />
      <GatekeeperList />
      <Footer />
    </div>
  );
}
