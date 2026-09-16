import HeroSection from "../../components/HeroSection/HeroSection";
import TrustBanner from "../../components/TrustBanner/TrustBanner";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import TrustSection from "../../components/TrustSection/TrustSection";
import Footer from "../../components/Footer/Footer";
import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <HeroSection />
      
      {/* Trust Banner */}
      <TrustBanner />
      <ProductGrid />
      <TrustSection />
      
      {/* --- HOW IT WORKS SECTION --- */}
      <section className="w-full bg-[#030303] py-24 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-normal text-white tracking-wide mb-4">
              How its <span className="text-[#B98135]">work?</span>
            </h2>
            <p className="text-white-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Steps Container */}
          <div className="relative">
            
            {/* Connecting Horizontal Line (Visible on Desktop) */}
            {/* Exactly positioned to cut through the center of the circles */}
            <div className="hidden md:block absolute top-[46px] left-[12.5%] right-[12.5%] h-px bg-[#B98135]/30 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
              
              {/* Step 01 */}
              <div className="flex flex-col items-center text-center">
                <span className="block text-[#B98135] text-[10px] font-medium tracking-widest mb-3 leading-none">01</span>
                
                <div className="w-12 h-12 rounded-full border border-[#B98135] bg-[#030303] flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(185,129,53,0.15)] relative z-10">
                  {/* Right Golden Dot */}
                  <div className="hidden md:block absolute -right-[3px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#B98135] rounded-full shadow-[0_0_5px_#B98135]"></div>
                  
                  {/* PLACE YOUR CUSTOM ICON HERE */}
                  <Image 
                src="/explore.png" 
                alt="Step Icon" 
                width={20} 
                height={20} 
                 className="object-contain"
                      />
                </div>

                <h3 className="text-white text-[11px] font-bold uppercase tracking-widest mb-2">
                  EXPLORE
                </h3>
                <p className="text-white-100 text-[10px] leading-relaxed max-w-[220px]">
                  Browse our research catalogue featuring 99% independently tested compounds, detailed specifications, and batch documentation.
                </p>
              </div>

              {/* Step 02 */}
              <div className="flex flex-col items-center text-center">
                <span className="block text-[#B98135] text-[10px] font-medium tracking-widest mb-3 leading-none">02</span>
                
                <div className="w-12 h-12 rounded-full border border-[#B98135] bg-[#030303] flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(185,129,53,0.15)] relative z-10">
                  {/* Left & Right Golden Dots */}
                  <div className="hidden md:block absolute -left-[3px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#B98135] rounded-full shadow-[0_0_5px_#B98135]"></div>
                  <div className="hidden md:block absolute -right-[3px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#B98135] rounded-full shadow-[0_0_5px_#B98135]"></div>
                  
                  {/* PLACE YOUR CUSTOM ICON HERE */}
                   <Image 
                src="/secure.png" 
                alt="Step Icon" 
                width={20} 
                height={20} 
                 className="object-contain"
                      />
                </div>

                <h3 className="text-white text-[11px] font-bold uppercase tracking-widest mb-2">
                  VERIFY BEFORE YOU<br />ORDER
                </h3>
                <p className="text-white-100 text-[10px] leading-relaxed max-w-[220px]">
                  Access COAs and analytical documentation for every batch. Review the data before you buy—transparency comes first.
                </p>
              </div>

              {/* Step 03 */}
              <div className="flex flex-col items-center text-center">
                <span className="block text-[#B98135] text-[10px] font-medium tracking-widest mb-3 leading-none">03</span>
                
                <div className="w-12 h-12 rounded-full border border-[#B98135] bg-[#030303] flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(185,129,53,0.15)] relative z-10">
                  {/* Left & Right Golden Dots */}
                  <div className="hidden md:block absolute -left-[3px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#B98135] rounded-full shadow-[0_0_5px_#B98135]"></div>
                  <div className="hidden md:block absolute -right-[3px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#B98135] rounded-full shadow-[0_0_5px_#B98135]"></div>
                  
                  {/* PLACE YOUR CUSTOM ICON HERE */}
                   <Image 
                src="/shipping.png" 
                alt="Step Icon" 
                width={20} 
                height={20} 
                 className="object-contain"
                      />
                </div>

                <h3 className="text-white text-[11px] font-bold uppercase tracking-widest mb-2">
                  FAST CANADIAN<br />FULFILLMENT
                </h3>
                <p className="text-white-100 text-[10px] leading-relaxed max-w-[220px]">
                  Orders placed before 1PM EST, Monday–Friday ship the same business day with full tracking across Canada.
                </p>
              </div>

              {/* Step 04 */}
              <div className="flex flex-col items-center text-center">
                <span className="block text-[#B98135] text-[10px] font-medium tracking-widest mb-3 leading-none">04</span>
                
                <div className="w-12 h-12 rounded-full border border-[#B98135] bg-[#030303] flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(185,129,53,0.15)] relative z-10">
                  {/* Left Golden Dot */}
                  <div className="hidden md:block absolute -left-[3px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#B98135] rounded-full shadow-[0_0_5px_#B98135]"></div>
                  
                  {/* PLACE YOUR CUSTOM ICON HERE */}
                   <Image 
                src="/file.png" 
                alt="Step Icon" 
                width={20} 
                height={20} 
                 className="object-contain"
                      />
                </div>

                <h3 className="text-white text-[11px] font-bold uppercase tracking-widest mb-2">
                  SUPPORT FROM<br />REAL PEOPLE
                </h3>
                <p className="text-white-100 text-[10px] leading-relaxed max-w-[220px]">
                  Questions before or after ordering? Reach out directly to our Canadian team for clear, honest answers.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <CategoryTabs />
      <Footer />
    </main>
  );
}