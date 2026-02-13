import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Countdown } from "@/components/countdown";
import { TaxCalculator } from "@/components/tax-calculator";
import { ExpertSection } from "@/components/expert-section";
import { AlbertaBillOfRights } from "@/components/alberta-bill-of-rights";
import { PropertyRightsManifesto } from "@/components/property-rights-manifesto";
import { GatekeeperList } from "@/components/gatekeeper-list";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Countdown />
      <TaxCalculator />
      <ExpertSection />
      <AlbertaBillOfRights />
      <PropertyRightsManifesto />
      <GatekeeperList />
      <Footer />
    </div>
  );
}
