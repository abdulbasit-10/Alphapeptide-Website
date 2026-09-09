'use client';

import { Truck, ShieldCheck, FileText, Package, Star } from 'lucide-react';
import Image from 'next/image';

export default function TrustBanner() {
  const items = [
    { icon: <Truck size={20} className="text-[#B98135]" strokeWidth={1.5} />, text: 'FREE SHIPPING OVER $175' },
    { icon: <ShieldCheck size={20} className="text-[#B98135]" strokeWidth={1.5} />, text: 'THIRD-PARTY LAB TESTED' },
    { 
      icon: <Image src="/redleaf.png" alt="Leaf Icon" width={20} height={20} className="object-contain" />, 
      text: 'TRUSTED CANADIAN SELLER' 
    },
    { icon: <FileText size={20} className="text-[#B98135]" strokeWidth={1.5} />, text: 'COA ON EVERY ORDER' },
    { icon: <Package size={20} className="text-[#B98135]" strokeWidth={1.5} />, text: 'DISCREET PACKAGING' },
  ];

  return (
    <section className="w-full bg-black border-b border-white/5 py-5 overflow-hidden flex items-center relative">
      
      {/* Inline styles for the infinite looping animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker-loop {
          display: flex;
          width: max-content;
          /* Adjust the '40s' below to make it scroll faster or slower */
          animation: ticker-slide 40s linear infinite; 
        }
        .animate-ticker-loop:hover {
          /* Pauses the animation when the user hovers over it */
          animation-play-state: paused;
        }
      `}} />

      <div className="animate-ticker-loop">
        {/* We duplicate the items array 4 times to ensure it perfectly fills large screens and loops without breaking */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-6 shrink-0 px-3">
            
            {/* Feature Item */}
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="text-gray-100 text-[11px] md:text-xs font-medium tracking-[0.1em] uppercase">
                {item.text}
              </span>
            </div>
            
            {/* Separator Star - Shown after every item to connect the loop seamlessly */}
            <Star size={10} className="text-gray-700 fill-gray-700" />
            
          </div>
        ))}
      </div>
      
    </section>
  );
}