'use client'; // <-- This must be at the very top!

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
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  // ✅ ALL HOOKS MUST BE INSIDE THIS FUNCTION
  const pathname = usePathname();
  const { cartCount, toggleCart } = useCart();
  const [currentPromo, setCurrentPromo] = useState(0);

  // If the user is on the root Access Gate page, do not render the Navbar
  if (pathname === '/') {
    return null; 
  }

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

  const handlePrev = () => setCurrentPromo((prev) => (prev === 0 ? promos.length - 1 : prev - 1));
  const handleNext = () => setCurrentPromo((prev) => (prev === promos.length - 1 ? 0 : prev + 1));

  const navLinks = ['Home', 'Shop', 'Lab Results', 'Research', 'FAQ', 'Affiliate', 'Wholesale', 'Contact Us'];

  return (
    <nav className="w-full bg-black text-white flex flex-col z-50 relative">
      
      {/* 1. Top Promotional Bar */}
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
        
        <Link href="/" className="relative w-[180px] h-[50px] flex-shrink-0">
          <Image src="/HeaderLogo.png" alt="Alpha Peptide" fill priority className="object-contain object-left" />
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link} 
              href={`/${link.toLowerCase().replace(' ', '-')}`} 
              className="text-[13px] font-light leading-none text-gray-200 hover:text-[#C4A464] transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5 md:gap-6">
          <button className="hover:text-[#C4A464] transition-colors cursor-pointer">
            <Search size={20} strokeWidth={1.5} />
          </button>
          
          <button className="hover:text-[#C4A464] transition-colors cursor-pointer">
            <User size={20} strokeWidth={1.5} />
          </button>
          
          {/* CART BUTTON CONNECTED HERE */}
          {/* CART BUTTON */}
          <div className="relative z-50">
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("Cart button clicked directly!");
                toggleCart();
              }}
              className="relative flex items-center justify-center p-2 text-white hover:text-[#C4A464] transition-colors cursor-pointer bg-transparent border-none outline-none"
            >
              <ShoppingBag size={20} strokeWidth={1.5} className="pointer-events-none" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#C4A464] text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full pointer-events-none">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}