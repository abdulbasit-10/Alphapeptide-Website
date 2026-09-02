import { Truck, ShieldCheck, Leaf, FileText, Package, Star } from 'lucide-react';
import Image from 'next/image'

export default function TrustBanner() {
  const items = [
    { icon: <Truck size={20} className="text-[#B98135]" strokeWidth={1.5} />, text: 'FREE SHIPPING OVER $175' },
    { icon: <ShieldCheck size={20} className="text-[#B98135]" strokeWidth={1.5} />, text: 'THIRD-PARTY LAB TESTED' },
    { 
  icon: <Image src="/leaf.png" alt="Leaf Icon" width={20} height={20} className="object-contain" />, 
  text: 'TRUSTED CANADIAN SELLER' 
},
    { icon: <FileText size={20} className="text-[#B98135]" strokeWidth={1.5} />, text: 'COA ON EVERY ORDER' },
    { icon: <Package size={20} className="text-[#B98135]" strokeWidth={1.5} />, text: 'DISCREET PACKAGING' },
  ];

  return (
    <section className="w-full bg-black border-b border-white/5 py-5 overflow-hidden">
      
      {/* 
        Scrollable flex container. 
        The strange classes at the end are standard CSS tricks to hide the scrollbar across all browsers.
      */}
      <div className="w-full max-w-[1600px] mx-auto px-4 flex items-center justify-start xl:justify-center gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-6 shrink-0">
            
            {/* Feature Item */}
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="text-gray-100 text-[11px] md:text-xs font-medium tracking-[0.1em] uppercase">
                {item.text}
              </span>
            </div>
            
            {/* Separator Star (We hide this after the very last item) */}
            {index !== items.length - 1 && (
              <Star size={10} className="text-gray-700 fill-gray-700" />
            )}
            
          </div>
        ))}
        
      </div>
    </section>
  );
}