'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Crosshair, 
  BarChart2, 
  RefreshCw, 
  ShoppingCart,
  Minus,
  Plus,
  FileText,
  List,
  Plus as PlusIcon
} from 'lucide-react';

// Import your global components

import Footer from '../../../../components/Footer/Footer'; 
import TrustBanner from '../../../../components/TrustBanner/TrustBanner';
import { useCart } from '../../../../context/CartContext';
// Data for the top tabs (reused from ShopHero)
const categories = [
  { id: 'all', label: 'All Products', iconSrc: '/tabi6.png' },
  { id: 'core-metabolic', label: 'Core Metabolic', iconSrc: '/tabi1.png' },
  { id: 'endocrine-growth', label: 'Endocrine & Growth', iconSrc: '/tabi2.png' },
  { id: 'metabolic-immunity', label: 'Metabolic Immunity', iconSrc: '/tabi3.png' },
  { id: 'longevity', label: 'Longevity & Regeneration', iconSrc: '/tabi4.png' },
  { id: 'neuro-cognitive', label: 'Neuro Cognitive', iconSrc: '/tabi5.png' },
  { id: 'stacks', label: 'Stacks', iconSrc: '/tabi6.png' },
  { id: 'accessories', label: 'Accessories', iconSrc: '/tabi7.png' },
];

export default function ProductDetail() {
  // Page State
  const [activeCategory] = useState('core-metabolic');
  const [activeCompound] = useState('retatrutide');
  const [quantity, setQuantity] = useState(1);
  const [selectedPack, setSelectedPack] = useState('1 VIAL');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const { addToCart } = useCart();

  const packSizes = [
    { label: '1 VIAL', price: '$90.00', numericPrice: 90.00 },
    { label: '3 PACK', subtitle: 'Per Vial', price: '$256.50', numericPrice: 256.50 },
    { label: '5 PACK', subtitle: 'Per Vial', price: '$382.50', numericPrice: 382.50 },
    { label: '10 PACK', subtitle: 'Per Vial', price: '$720.00', numericPrice: 720.00 },
  ];

  return (
    <div className="min-h-screen bg-[#030303] flex flex-col font-sans">
      

      <main className="flex-grow">
        
        {/* --- TOP SECTION & HERO BACKGROUND --- */}
        <div className="relative w-full pb-20">
          
          {/* Detailed Background Image */}
          <div className="absolute inset-0 z-0 h-full">
            <Image
              src="/shopdetailed.jpeg"
              alt="DNA Background"
              fill
              priority
              className="object-cover object-center opacity-60"
            />
            {/* Gradients to fade into the black background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]"></div>
          </div>

          <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 pt-12">
            
            {/* Breadcrumbs */}
            <div className="text-[11px] text-gray-400 flex items-center gap-2 mb-8 uppercase tracking-widest font-medium">
              <Link href="/" className="hover:text-[#B98135] transition-colors">Home</Link>
              <span className="text-gray-600">›</span>
              <Link href="/shop" className="hover:text-[#B98135] transition-colors">Shop</Link>
              <span className="text-gray-600">›</span>
              <Link href="/shop/core-metabolic" className="hover:text-[#B98135] transition-colors">Core Metabolic</Link>
              <span className="text-gray-600">›</span>
              <span className="text-[#B98135]">RETATRUTIDE</span>
            </div>

            {/* Title */}
            <div className="max-w-xl mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">SHOP</h1>
              <p className="text-gray-300 text-[13px] leading-relaxed">
                Premium research compounds. Lab verified. Batch traceable.
              </p>
            </div>

            {/* Category Tabs (Matches ShopHero) */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-2 mb-16">
              {categories.map((cat) => (
                <Link key={cat.id} href={`/shop/${cat.id}`} className="group relative h-28 md:h-32 w-full text-left focus:outline-none transition-transform hover:-translate-y-1 duration-300">
                  <div className={`absolute inset-0 p-[1px] transition-colors duration-300 ${activeCategory === cat.id ? 'bg-white/30' : 'bg-white/10 group-hover:bg-white/20'}`} style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
                    <div className="h-full w-full flex flex-col items-center justify-center gap-3 p-2 bg-[#0a0e17]" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
                      <div className={`relative w-10 h-10 transition-opacity duration-300 ${activeCategory === cat.id ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                        <Image src={cat.iconSrc} alt={cat.label} fill className="object-contain" />
                      </div>
                      <span className={`text-[9px] text-center tracking-wide ${activeCategory === cat.id ? 'text-white font-semibold' : 'text-gray-400 group-hover:text-gray-200'}`}>
                        {cat.label.split(' ').map((word, i) => (<React.Fragment key={i}>{word}<br /></React.Fragment>))}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Sub-Compounds Tabs */}
            <div className="mb-16">
              <h3 className="text-[#B98135] text-[10px] uppercase tracking-widest font-bold mb-4">CORE METABOLIC COMPOUNDS</h3>
              <div className="flex flex-wrap items-center gap-3">
                <button className="px-6 py-2.5 border border-[#B98135] text-[#B98135] text-[10px] font-bold tracking-widest uppercase bg-[#B98135]/10">
                  RETATRUTIDE
                </button>
                <button className="flex flex-col items-center justify-center px-6 py-1.5 border border-white/10 text-gray-400 text-[10px] font-bold tracking-widest uppercase bg-transparent hover:bg-white/5 transition-colors">
                  <span>5-AMINO-1MQ</span>
                  <span className="text-[7px] text-gray-600">COMING SOON</span>
                </button>
                <button className="flex flex-col items-center justify-center px-6 py-1.5 border border-white/10 text-gray-400 text-[10px] font-bold tracking-widest uppercase bg-transparent hover:bg-white/5 transition-colors">
                  <span>TIRZEPATIDE</span>
                  <span className="text-[7px] text-gray-600">COMING SOON</span>
                </button>
              </div>
            </div>

            {/* Product Hero Info & Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div>
                <h4 className="text-[#B98135] text-[10px] uppercase tracking-widest font-bold mb-2">CORE METABOLIC RESEARCH</h4>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-3 uppercase">RETATRUTIDE</h1>
                <p className="text-[#B98135] text-[11px] uppercase tracking-widest font-bold mb-6">TRIPLE AGONIST</p>
                
                <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed max-w-lg mb-10">
                  Retatrutide is a next-generation, investigational triple agonist targeting GLP-1, GIP, and glucagon receptors, supporting appetite regulation, lean mass preservation, and metabolic efficiency.
                </p>

                {/* Features */}
                <div className="flex items-start gap-8 md:gap-12 mb-12">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full border border-[#B98135]/40 flex items-center justify-center bg-[#B98135]/5">
                      <Crosshair size={18} className="text-[#B98135]" />
                    </div>
                    <span className="text-[10px] text-gray-300 tracking-wider">Appetite Control</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full border border-[#B98135]/40 flex items-center justify-center bg-[#B98135]/5">
                      <BarChart2 size={18} className="text-[#B98135]" />
                    </div>
                    <span className="text-[10px] text-gray-300 tracking-wider">Lean Mass Support</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full border border-[#B98135]/40 flex items-center justify-center bg-[#B98135]/5">
                      <RefreshCw size={18} className="text-[#B98135]" />
                    </div>
                    <span className="text-[10px] text-gray-300 tracking-wider">Metabolic Efficiency</span>
                  </div>
                </div>

                <button className="flex items-center gap-3 px-6 py-3 border border-white/20 rounded text-gray-300 text-[10px] font-bold tracking-widest uppercase hover:bg-white/5 transition-colors">
                  CERTIFICATE OF ANALYSIS <ArrowUpRight size={14} />
                </button>
              </div>

              {/* Right Image (Bottle) */}
              <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center">
                <Image 
                  src="/p1.png" // Replace with your high-res bottle path
                  alt="Retatrutide"
                  fill
                  className="object-contain drop-shadow-2xl z-10"
                />
              </div>

            </div>
          </div>
        </div>

        {/* --- PURCHASE ACTION BAR --- */}
        <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 -mt-10 mb-12">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8 shadow-2xl">
            
            {/* Left Options */}
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              {/* Strength */}
              <div className="flex flex-col gap-3">
                <span className="text-white text-xs font-medium">Strength</span>
                <button className="px-6 py-2.5 bg-[#B98135] text-black text-[11px] font-bold tracking-widest rounded shadow-[0_0_15px_rgba(185,129,53,0.3)]">
                  20MG
                </button>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block w-px h-12 bg-white/10"></div>

              {/* Pack Size */}
              <div className="flex flex-col gap-3">
                <span className="text-white text-xs font-medium">Pack Size</span>
                <div className="flex flex-wrap gap-2">
                  {packSizes.map((pack) => (
                    <button 
                      key={pack.label}
                      onClick={() => setSelectedPack(pack.label)}
                      className={`flex flex-col items-center justify-center px-4 py-2 min-w-[90px] rounded transition-all border ${
                        selectedPack === pack.label 
                          ? 'bg-[#B98135] border-[#B98135] text-black' 
                          : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      <span className="text-[10px] font-bold tracking-widest">{pack.label}</span>
                      {pack.subtitle && <span className={`text-[8px] ${selectedPack === pack.label ? 'text-black/70' : 'text-gray-500'}`}>{pack.subtitle}</span>}
                      <span className={`text-[11px] font-bold mt-0.5 ${selectedPack === pack.label ? 'text-black' : 'text-white'}`}>{pack.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Actions (Quantity & Cart) */}
            <div className="flex flex-wrap items-center gap-4 w-full xl:w-auto">
              <div className="flex items-center border border-white/10 rounded h-12">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 text-gray-400 hover:text-white transition-colors">
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center text-white text-sm font-bold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 text-gray-400 hover:text-white transition-colors">
                  <Plus size={16} />
                </button>
              </div>
              
              <button 
                onClick={() => addToCart({ name: 'Retatrutide 20MG', price: packSizes.find(p => p.label === selectedPack)?.numericPrice || 90, image: '/p1.png' })}
                className="flex-grow xl:flex-grow-0 flex items-center justify-center gap-3 px-10 h-12 bg-[#B98135] text-black text-[11px] font-bold tracking-widest uppercase rounded shadow-[0_0_20px_rgba(185,129,53,0.2)] hover:bg-[#c99145] transition-colors"
              >
                <ShoppingCart size={16} /> ADD TO CART
              </button>
            </div>

          </div>
        </div>

        {/* --- RELATED & ACCORDIONS --- */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left: Related Mini Cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop/core-metabolic/5-amino-1mq" className="flex-1 flex items-center gap-4 bg-[#0a0a0a] border border-white/5 rounded-lg p-4 hover:border-white/20 transition-colors">
                <div className="relative w-16 h-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent flex-shrink-0">
                  <Image src="/p13.png" alt="5-Amino" fill className="object-contain p-2" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold tracking-wide mb-1">5-AMINO-1MQ</h4>
                  <p className="text-[#B98135] text-[8px] uppercase tracking-widest font-bold mb-1">CORE METABOLIC RESEARCH</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest">10MG | 99% Purity</p>
                </div>
              </Link>
              
              <Link href="/shop/core-metabolic/tirzepatide" className="flex-1 flex items-center gap-4 bg-[#0a0a0a] border border-white/5 rounded-lg p-4 hover:border-white/20 transition-colors">
                <div className="relative w-16 h-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent flex-shrink-0">
                  <Image src="/p14.png" alt="Tirzepatide" fill className="object-contain p-2" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold tracking-wide mb-1">TIRZEPATIDE</h4>
                  <p className="text-[#B98135] text-[8px] uppercase tracking-widest font-bold mb-1">CORE METABOLIC RESEARCH</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest">30MG | 99% Purity</p>
                </div>
              </Link>
            </div>

            {/* Right: Accordions */}
            <div className="flex flex-col gap-2">
              
              {/* Accordion 1 */}
              <div className="border border-white/10 bg-[#0a0a0a] rounded overflow-hidden">
                <button 
                  onClick={() => setOpenAccordion(openAccordion === 'research' ? null : 'research')}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-white/5"
                >
                  <div className="flex items-center gap-4">
                    <FileText size={18} className="text-[#B98135]" />
                    <div>
                      <h4 className="text-white text-[11px] font-bold tracking-widest uppercase mb-1">RESEARCH USE ONLY</h4>
                      <p className="text-gray-500 text-[10px]">Not for human or veterinary use.</p>
                    </div>
                  </div>
                  <PlusIcon size={16} className={`text-gray-400 transition-transform ${openAccordion === 'research' ? 'rotate-45' : ''}`} />
                </button>
                {openAccordion === 'research' && (
                  <div className="p-5 pt-0 text-sm text-gray-400 border-t border-white/5">
                    This product is strictly intended for laboratory research and development purposes.
                  </div>
                )}
              </div>

              {/* Accordion 2 */}
              <div className="border border-white/10 bg-[#0a0a0a] rounded overflow-hidden">
                <button 
                  onClick={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-white/5"
                >
                  <div className="flex items-center gap-4">
                    <List size={18} className="text-[#B98135]" />
                    <div>
                      <h4 className="text-white text-[11px] font-bold tracking-widest uppercase mb-1">DESCRIPTION</h4>
                      <p className="text-gray-500 text-[10px] line-clamp-1 max-w-sm">Retatrutide is a next-generation, investigational triple agonist...</p>
                    </div>
                  </div>
                  <PlusIcon size={16} className={`text-gray-400 transition-transform ${openAccordion === 'description' ? 'rotate-45' : ''}`} />
                </button>
                {openAccordion === 'description' && (
                  <div className="p-5 pt-0 text-sm text-gray-400 border-t border-white/5 leading-relaxed">
                    Retatrutide is a next-generation, investigational triple agonist targeting GLP-1, GIP, and glucagon receptors, supporting appetite regulation, lean mass preservation, and metabolic efficiency.
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

      </main>

      {/* Trust Badges placed before Footer as requested */}
      <TrustBanner />
      
      <Footer />
    </div>
  );
}