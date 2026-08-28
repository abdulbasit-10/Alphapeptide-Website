import HeroSection from "../../components/HeroSection/HeroSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <HeroSection />
      {/* 
        This is where we will stack the upcoming components!
        <ProductGrid />
        <TrustFeatures />
        etc...
      */}
    </main>
  );
}