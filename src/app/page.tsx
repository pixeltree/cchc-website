import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TaxCalculator } from "@/components/tax-calculator";
import { PropertyRightsManifesto } from "@/components/property-rights-manifesto";
import { GatekeeperList } from "@/components/gatekeeper-list";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TaxCalculator />
      <PropertyRightsManifesto />
      <GatekeeperList />
      <Footer />
    </div>
  );
}
