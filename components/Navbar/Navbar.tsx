'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  User, 
  ShoppingBag, 
  Sparkles, 
  Package, 
  Copy 
} from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname(); // <-- Add this line

  // If the user is on the root Access Gate page, do not render the Navbar
  if (pathname === '/') {
    return null; 
  }
  // State to track which top banner is currently showing
  const [currentPromo, setCurrentPromo] = useState(0);

  // The two promotional messages based on your Figma screenshots
  const promos = [
    {
      id: 0,
      icon: <Sparkles size={14} className="text-[#C4A464]" />,
      content: (
        <div className="flex items-center gap-3">
          <span className="text-[11px] md:text-xs tracking-wider font-medium text-gray-200">
            NEW RESEARCHER OFFER — 10% OFF YOUR FIRST ORDER · CODE
          </span>
          <button className="flex items-center gap-1.5 border border-[#C4A464] text-[#C4A464] px-2.5 py-0.5 rounded-[4px] text-[10px] hover:bg-[#C4A464]/10 transition-colors">
            ALPHA10 <Copy size={12} />
          </button>
        </div>
      )
    },
    {
      id: 1,
      icon: <Package size={14} className="text-[#C4A464]" />,
      content: (
        <span className="text-[11px] md:text-xs tracking-wider font-medium text-gray-200 uppercase">
          Ships from Canada . Free Shipping over $175*
        </span>
      )
    }
  ];

  const handlePrev = () => {
    setCurrentPromo((prev) => (prev === 0 ? promos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPromo((prev) => (prev === promos.length - 1 ? 0 : prev + 1));
  };

  // Main navigation links array
  const navLinks = [
    'Home', 'Shop', 'Lab Results', 'Research', 'FAQ', 'Affiliate', 'Wholesale', 'Contact Us'
  ];

  return (
    <nav className="w-full bg-black text-white flex flex-col">
      
      {/* 1. Top Promotional Bar (Slider) */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black">
        <button onClick={handlePrev} className="p-1 hover:text-[#C4A464] transition-colors">
          <ChevronLeft size={16} />
        </button>
        
        <div className="flex items-center gap-2">
          {promos[currentPromo].icon}
          {promos[currentPromo].content}
        </div>
        
        <button onClick={handleNext} className="p-1 hover:text-[#C4A464] transition-colors">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* 2. Main Navigation Area */}
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        
        {/* Left: Logo */}
        <Link href="/" className="relative w-[230px] h-[60px] flex-shrink-0">
          <Image 
            src="/HeaderLogo.png" 
            alt="Alpha Peptide" 
            fill 
            priority
            className="object-contain object-left" 
          />
        </Link>

        {/* Center: Navigation Links (Hidden on small screens, exactly 18px Manrope on Desktop) */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link} 
              href={`/${link.toLowerCase().replace(' ', '-')}`} 
              className="text-[14px] font-light leading-none text-gray-200 hover:text-[#C4A464] transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-5 md:gap-6">
          <button className="hover:text-[#C4A464] transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          
          <button className="hover:text-[#C4A464] transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>
          
          <button className="relative hover:text-[#C4A464] transition-colors">
            <ShoppingBag size={20} strokeWidth={1.5} />
            {/* Gold Notification Badge */}
            <span className="absolute -top-1 -right-1.5 bg-[#C4A464] text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              1
            </span>
          </button>
        </div>

      </div>
    </nav>
  );
}   