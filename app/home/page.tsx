import HeroSection from "../../components/HeroSection/HeroSection";
import TrustBanner from "../../components/TrustBanner/TrustBanner";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import TrustSection from "../../components/TrustSection/TrustSection";
import SupportBanner from "../../components/SupportBanner/SupportBanner";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Footer from "../../components/Footer/Footer";
export default function HomePage() {
  return (

    <main className="min-h-screen bg-black text-white flex flex-col">
      <HeroSection />
      
      {/* Trust Banner */}
      <TrustBanner />
      <ProductGrid />
      <TrustSection />
      <SupportBanner />
      <HowItWorks />
      <Footer />
    </main>
  );
}