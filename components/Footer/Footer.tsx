'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] text-white pt-16 pb-12 px-6 md:px-12">
      
      {/* Main Grid Container */}
      <div className="w-full max-w-[1300px] mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-white/10">
          
          {/* Column 1: Brand (Spans 5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start pr-4">
            
            {/* Logo Image */}
            <div className="relative w-[160px] h-[130px] mb-5">
              <Image 
                src="/HeaderLogo.png" /* Make sure this points to your stacked logo version */
                alt="Alpha Peptide"
                fill
                className="object-contain object-left"
              />
            </div>
            
            <p className="text-gray-100 text-[14px] leading-relaxed mb-6 max-w-[280px]">
              Canada's most transparent source for premium research compounds.
            </p>
            
            {/* Canadian Badge (No border, matching image) */}
            <div className="flex items-center gap-2.5">
              {/* Custom Maple Leaf SVG */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#C99441" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1.5L14 7H18L15 10L16 15L12 12.5L8 15L9 10L6 7H10L12 1.5Z" stroke="#C99441" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M12 12.5V22" stroke="#C99441" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-[#C99441] text-[17px] font-medium tracking-wide">
                CANADIAN
              </span>
            </div>
          </div>

          {/* Column 2: EXPLORE (Spans 2 cols) */}
          <div className="md:col-span-2 flex flex-col pt-2">
            <h3 className="text-[#C99441] text-[16px] font-medium mb-5 tracking-wide">EXPLORE</h3>
            <ul className="flex flex-col gap-4">
              {['Shop', 'Lab Results', 'Research', 'Wholesale'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-200 hover:text-white text-[14px] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: SUPPORT (Spans 2 cols) */}
          <div className="md:col-span-2 flex flex-col pt-2">
            <h3 className="text-[#C99441] text-[16px] font-medium mb-5 tracking-wide">SUPPORT</h3>
            <ul className="flex flex-col gap-4">
              {['FAQ', 'Contact Us', 'Shipping', 'Returns'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-200 hover:text-white text-[14px] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: STAY INFORMED (Spans 3 cols) */}
          <div className="md:col-span-3 flex flex-col pt-2">
            <h3 className="text-[#C99441] text-[16px] font-medium mb-4 tracking-wide">STAY INFORMED</h3>
            <p className="text-gray-200 text-[14px] mb-5 leading-relaxed max-w-[280px]">
              Subscribe to get regular updates and new releases.
            </p>
            
            {/* Form matching pixel-perfect gaps and borders */}
            <form className="flex items-center gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="email adress" 
                className="flex-1 max-w-[220px] bg-black border border-white/10 rounded-[4px] px-4 py-2.5 text-[13px] text-white placeholder-gray-700 focus:outline-none focus:border-[#C99441]"
              />
              <button 
                type="submit"
                className="bg-[#C99441] hover:bg-[#B58235] text-white px-5 py-2.5 rounded-[4px] text-[14px] font-medium transition-colors"
              >
                Enter
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col gap-6">
          
          {/* Copyright & Links Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-gray-500 text-[12px]">
              © 2026 Alpha Peptide. All rights reserved.
            </p>
            
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {['Privacy Policy', 'Terms & Conditions', 'Research Standards', 'Disclaimer'].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  className="text-gray-500 hover:text-gray-300 text-[12px] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Disclaimer Text */}
          <div className="flex items-start gap-2.5">
            <span className="text-[#C99441] text-[10px] mt-[3px]">●</span>
            <p className="text-gray-500 text-[12px] leading-relaxed max-w-[1000px]">
              All products are supplied strictly for qualified in vitro laboratory research and are not for human or veterinary use. They are not drugs, foods, supplements, or cosmetics, and are not intended as medicines, medications, treatments, or performance-enhancing products. No claims are made regarding clinical outcomes, safety, or efficacy.
            </p>
          </div>
          
        </div>

      </div>
    </footer>
  );
}