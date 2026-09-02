import { Headphones, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function SupportBanner() {
  return (
    <section className="w-full bg-[#030303] py-12 px-4 md:px-12 flex justify-center border-t border-b border-white/5">
      
      {/* Main Container Box with Rounded Borders */}
      <div className="w-full max-w-[1440px] mx-auto bg-[#0a0a0a] border border-white/10 rounded-lg p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Icon and Title */}
        <div className="flex items-center gap-5 w-full lg:w-auto">
          <div className="w-14 h-14 rounded-lg border border-white/10 bg-black flex items-center justify-center shrink-0">
            <Headphones size={28} className="text-[#B98135]" strokeWidth={1.5} />
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-[#B98135] text-lg md:text-xl font-semibold tracking-wider uppercase">
              Responsive Support
            </h3>
          </div>
        </div>

        {/* Divider line for desktop */}
        <div className="hidden lg:block w-[1px] h-12 bg-white/10"></div>

        {/* Middle: Details */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
          <span className="text-gray-400 text-xs md:text-sm font-light tracking-wide mb-1">
            Questions answered by real people
          </span>
          <a 
            href="tel:3657378344" 
            className="text-[#B98135] text-sm md:text-base font-medium tracking-widest hover:underline"
          >
            365-PEPTIDE [365-737-8344]
          </a>
        </div>

        {/* Right Side: View Lab Results Button */}
        <div className="w-full lg:w-auto flex justify-center">
          <Link 
            href="/lab-results"
            className="w-full sm:w-auto px-8 py-4 border border-[#B98135] hover:bg-[#B98135]/10 text-white text-xs md:text-sm font-medium tracking-[0.15em] rounded-[4px] flex items-center justify-center gap-2 transition-all duration-300"
          >
            VIEW LAB RESULTS <ArrowUpRight size={16} strokeWidth={2} />
          </Link>
        </div>

      </div>
    </section>
  );
}