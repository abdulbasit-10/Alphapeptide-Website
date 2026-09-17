'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
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
  ShieldCheck,
  FileSpreadsheet,
  Plus as PlusIcon
} from 'lucide-react';

import Footer from '../../../../components/Footer/Footer'; 
import { useCart } from '../../../../context/CartContext';

// Categories matching ShopHero design
export const categories = [
  { id: 'all', label: 'All Products', iconSrc: '/tabi6.png' },
  { id: 'core-metabolic', label: 'Core Metabolic', iconSrc: '/tabi1.png' },
  { id: 'endocrine-growth', label: 'Endocrine & Growth', iconSrc: '/tabi2.png' },
  { id: 'metabolic-immunity', label: 'Metabolic Immunity', iconSrc: '/tabi3.png' },
  { id: 'longevity-regeneration', label: 'Longevity & Regeneration', iconSrc: '/tabi4.png' },
  { id: 'neuro-cognitive', label: 'Neuro Cognitive', iconSrc: '/tabi5.png' },
  { id: 'stacks', label: 'Stacks', iconSrc: '/tabi6.png' },
  { id: 'accessories', label: 'Accessories', iconSrc: '/tabi7.png' },
];

// Product database dictionary for your compounds
const productsData: Record<string, any> = {
  'retatrutide': {
    name: 'RETATRUTIDE',
    tagline: 'TRIPLE AGONIST',
    categoryLabel: 'CORE METABOLIC RESEARCH',
    categorySlug: 'core-metabolic',
    description: 'Retatrutide is a next-generation, investigational triple agonist targeting GLP-1, GIP, and glucagon receptors, supporting appetite regulation, lean mass preservation, and metabolic efficiency.',
    image: '/detailed1.png',
    strength: '20MG',
    purity: '20MG | 99% Purity',
    packSizes: [
      { label: '1 VIAL', price: '$90.00', numericPrice: 90.00 },
      { label: '3 PACK', subtitle: 'Per Vial', price: '$256.50', numericPrice: 256.50 },
      { label: '5 PACK', subtitle: 'Per Vial', price: '$382.50', numericPrice: 382.50 },
      { label: '10 PACK', subtitle: 'Per Vial', price: '$720.00', numericPrice: 720.00 },
    ],
    isComingSoon: false,
    related: [
      { name: '5-AMINO-1MQ', slug: '5-amino-1mq', categorySlug: 'core-metabolic', subtitle: '10MG | 99% Purity', image: '/p13.png' },
      { name: 'TIRZEPATIDE', slug: 'tirzepatide', categorySlug: 'core-metabolic', subtitle: '30MG | 99% Purity', image: '/p14.png' }
    ]
  },
  '5-amino-1mq': {
    name: '5-AMINO-1MQ',
    tagline: 'NNMT PRECURSOR',
    categoryLabel: 'CORE METABOLIC RESEARCH',
    categorySlug: 'core-metabolic',
    description: '5-Amino-1MQ is a novel NNMT precursor research compound studied for its potential to support cellular energy, mitochondrial function, and metabolic health.',
    image: '/detailed2.png',
    strength: '10MG',
    purity: '10MG | 99% Purity',
    packSizes: [
      { label: '1 VIAL', subtitle: 'COMING SOON', price: '$0.00', numericPrice: 0.00 },
      { label: '3 PACK', subtitle: 'COMING SOON', price: '$0.00', numericPrice: 0.00 },
    ],
    isComingSoon: true,
    related: [
      { name: 'RETATRUTIDE', slug: 'retatrutide', categorySlug: 'core-metabolic', subtitle: '20MG | 99% Purity', image: '/detailed1.png' },
      { name: 'TIRZEPATIDE', slug: 'tirzepatide', categorySlug: 'core-metabolic', subtitle: '30MG | 99% Purity', image: '/p14.png' }
    ]
  },
  'tirzepatide': {
    name: 'TIRZEPATIDE',
    tagline: 'DUAL GIP/GLP-1 AGONIST',
    categoryLabel: 'CORE METABOLIC RESEARCH',
    categorySlug: 'core-metabolic',
    description: 'Tirzepatide is a next-generation, investigational dual GIP/GLP-1 receptor agonist, studied for its potential to support glycemic control, appetite regulation, and metabolic health.',
    image: '/detailed3.png',
    strength: '30MG',
    purity: '30MG | 99% Purity',
    packSizes: [
      { label: '1 VIAL', subtitle: 'COMING SOON', price: '$0.00', numericPrice: 0.00 },
      { label: '3 PACK', subtitle: 'COMING SOON', price: '$0.00', numericPrice: 0.00 },
      { label: '5 PACK', subtitle: 'COMING SOON', price: '$0.00', numericPrice: 0.00 },
      { label: '10 PACK', subtitle: 'COMING SOON', price: '$0.00', numericPrice: 0.00 },
    ],
    isComingSoon: true,
    related: [
      { name: 'Retatrutide', slug: 'retatrutide', categorySlug: 'core-metabolic', subtitle: 'CORE METABOLIC RESEARCH\n20MG | 99% Purity', image: '/detailed1.png' },
      { name: '5-AMINO-1MQ', slug: '5-amino-1mq', categorySlug: 'core-metabolic', subtitle: 'CORE METABOLIC RESEARCH\n10MG | 99% Purity', image: '/p13.png' }
    ]
  },
  'tesamorelin': {
    name: 'TESAMORELIN',
    tagline: 'GROWTH HORMONE SECRETAGOGUE',
    categoryLabel: 'ENDOCRINE & GROWTH RESEARCH',
    categorySlug: 'endocrine-growth',
    description: 'Tesamorelin is a GHRH analog that stimulates the body\'s natural release of growth hormone to support visceral fat reduction, lean body composition, metabolic health, and overall vitality.',
    image: '/p2.png',
    strength: '10MG',
    purity: '10MG | 99% Purity',
    packSizes: [
      { label: '1 VIAL', price: '$90.00', numericPrice: 90.00 },
      { label: '3 PACK', subtitle: 'Per Vial', price: '$200.00', numericPrice: 200.00 },
      { label: '5 PACK', subtitle: 'Per Vial', price: '$300.00', numericPrice: 300.00 },
      { label: '10 PACK', subtitle: 'Per Vial', price: '$580.00', numericPrice: 580.00 },
    ],
    isComingSoon: false,
    related: [
      { name: 'CJC-1295 w/DAC', slug: 'cjc-1295-w-dac', categorySlug: 'endocrine-growth', subtitle: '5MG | 99% Purity', image: '/p15.png' },
      { name: 'RETATRUTIDE', slug: 'retatrutide', categorySlug: 'core-metabolic', subtitle: '20MG | 99% Purity', image: '/detailed1.png' }
    ]
  },
  'cjc-1295-w-dac': {
    name: 'CJC-1295 w/DAC',
    tagline: 'GROWTH HORMONE SECRETAGOGUE',
    categoryLabel: 'ENDOCRINE & GROWTH RESEARCH',
    categorySlug: 'endocrine-growth',
    description: 'CJC-1295 with DAC is a long-acting growth hormone releasing hormone (GHRH)-analog designed to stimulate the body\'s natural release of growth hormone, supporting lean body composition, recovery, and overall vitality.',
    image: '/p15.png',
    strength: '5MG',
    purity: '5MG | 99% Purity',
    packSizes: [
      { label: '1 VIAL', subtitle: 'COMING SOON', price: '$0.00', numericPrice: 0.00 },
      { label: '3 PACK', subtitle: 'COMING SOON', price: '$0.00', numericPrice: 0.00 },
      { label: '5 PACK', subtitle: 'COMING SOON', price: '$0.00', numericPrice: 0.00 },
      { label: '10 PACK', subtitle: 'COMING SOON', price: '$0.00', numericPrice: 0.00 },
    ],
    isComingSoon: true,
    related: [
      { name: 'TESAMORELIN', slug: 'tesamorelin', categorySlug: 'endocrine-growth', subtitle: '10MG | 99% Purity', image: '/p2.png' },
      { name: '5-AMINO-1MQ', slug: '5-amino-1mq', categorySlug: 'core-metabolic', subtitle: '10MG | 99% Purity', image: '/p13.png' }
    ]
  }
};
export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  
  // Dynamically grab which product slug is in the URL (e.g., retatrutide, 5-amino-1mq, tirzepatide)
  const productSlug = (params?.product as string) || 'retatrutide';
  const product = productsData[productSlug] || productsData['retatrutide'];

  const [activeCategory, setActiveCategory] = useState(product.categorySlug);
  const [quantity, setQuantity] = useState(1);
  const [selectedPack, setSelectedPack] = useState(product.packSizes[0].label);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const { addToCart } = useCart();
  const activePack = product.packSizes.find((p: any) => p.label === selectedPack) || product.packSizes[0];

  const handleCategorySelect = (id: string) => {
    setActiveCategory(id);
    if (id === 'all') {
      router.push('/shop');
    } else {
      router.push(`/shop/${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] flex flex-col font-sans">
      <main className="flex-grow">
        
        {/* --- TOP SECTION & HERO BACKGROUND --- */}
        <div className="relative w-full pb-20">
          <div className="absolute inset-0 z-0 h-full">
            <Image
  // If the category is endocrine-growth, use the new background. Otherwise, keep the DNA background.
               src={product.categorySlug === 'endocrine-growth' ? '/endocronicbg.png' : '/shopdetailed.jpeg'}
              alt="Category Background"
              fill
              priority
              className="object-cover object-center opacity-85"
              />
            
          </div>

          <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 pt-10">
            
            {/* Breadcrumbs */}
            <div className="text-[11px] text-gray-400 flex items-center gap-2 mb-6 uppercase tracking-widest font-medium">
              <Link href="/" className="hover:text-[#B98135] transition-colors cursor-pointer">Home</Link>
              <span className="text-gray-600">›</span>
              <Link href="/shop" className="hover:text-[#B98135] transition-colors cursor-pointer">Shop</Link>
              <span className="text-gray-600">›</span>
              <Link href={`/shop/${product.categorySlug}`} className="hover:text-[#B98135] transition-colors cursor-pointer">Core Metabolic</Link>
              <span className="text-gray-600">›</span>
              <span className="text-[#B98135]">{product.name}</span>
            </div>

            {/* Title & Description */}
            <div className="max-w-xl mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold tracking-tight text-white mb-2">SHOP</h1>
              <p className="text-gray-300 text-xs md:text-[14px] leading-relaxed">
                Premium research compounds. Lab verified. Batch traceable.
              </p>
            </div>

            {/* Sub-Compounds Tabs */}
            <div className="mb-12">
              <h3 className="text-[#B98135] text-[10px] uppercase tracking-widest font-bold mb-3">CORE METABOLIC COMPOUNDS</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/shop/core-metabolic/retatrutide" className={`px-6 py-2.5 border text-[10px] font-bold tracking-widest uppercase rounded cursor-pointer transition-colors ${productSlug === 'retatrutide' ? 'border-[#B98135] text-[#B98135] bg-[#B98135]/10' : 'border-white/10 text-gray-400 hover:bg-white/5'}`}>
                  RETATRUTIDE
                </Link>
                <Link href="/shop/core-metabolic/5-amino-1mq" className={`flex flex-col items-center justify-center px-6 py-1.5 border text-[10px] font-bold tracking-widest uppercase rounded cursor-pointer transition-colors ${productSlug === '5-amino-1mq' ? 'border-[#B98135] text-[#B98135] bg-[#B98135]/10' : 'border-white/10 text-gray-400 hover:bg-white/5'}`}>
                  <span>5-AMINO-1MQ</span>
                  <span className="text-[7px] text-gray-500">COMING SOON</span>
                </Link>
                <Link href="/shop/core-metabolic/tirzepatide" className={`flex flex-col items-center justify-center px-6 py-1.5 border text-[10px] font-bold tracking-widest uppercase rounded cursor-pointer transition-colors ${productSlug === 'tirzepatide' ? 'border-[#B98135] text-[#B98135] bg-[#B98135]/10' : 'border-white/10 text-gray-400 hover:bg-white/5'}`}>
                  <span>TIRZEPATIDE</span>
                  <span className="text-[7px] text-gray-500">COMING SOON</span>
                </Link>
              </div>
            </div>

            {/* Product Hero Info & Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-[#B98135] text-[10px] uppercase tracking-widest font-bold mb-2">{product.categoryLabel}</h4>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-3 uppercase">{product.name}</h1>
                <p className="text-[#B98135] text-[11px] uppercase tracking-widest font-bold mb-6">{product.tagline}</p>
                
                <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed max-w-lg mb-10">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex items-start gap-8 md:gap-12 mb-10">
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

                <button className="flex items-center gap-3 px-6 py-3 border border-white/20 rounded text-gray-300 text-[10px] font-bold tracking-widest uppercase hover:bg-white/5 transition-colors cursor-pointer">
                  CERTIFICATE OF ANALYSIS <ArrowUpRight size={14} />
                </button>
              </div>

              {/* Right Image */}
              <div className="relative w-full h-[280px] md:h-[420px] flex items-center justify-center pb-12">
                <Image 
                  src={product.image} 
                  alt={product.name}
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
            
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              {/* Strength */}
              <div className="flex flex-col gap-3">
                <span className="text-white text-xs font-medium">Strength</span>
                <button className="px-6 py-2.5 bg-[#94590D] text-white text-[11px] font-bold tracking-widest rounded shadow-[0_0_15px_rgba(185,129,53,0.3)] cursor-pointer">
                  {product.strength}
                </button>
              </div>

              <div className="hidden md:block w-px h-12 bg-white/10"></div>

              {/* Pack Size */}
              <div className="flex flex-col gap-3">
                <span className="text-white text-xs font-medium">Pack Size</span>
                <div className="flex flex-wrap gap-2">
                  {product.packSizes.map((pack: any) => (
                    <button 
                      key={pack.label}
                      onClick={() => !product.isComingSoon && setSelectedPack(pack.label)}
                      className={`flex flex-col items-center justify-center px-4 py-2 min-w-[90px] rounded transition-all border ${
                        selectedPack === pack.label 
                          ? 'bg-[#94590D] border-[#B98135] text-white' 
                          : 'bg-transparent border-white/10 text-white hover:border-white/30'
                      }`}
                    >
                      <span className="text-[10px] font-bold tracking-widest">{pack.label}</span>
                      <span className="text-[8px] text-gray-400">{pack.subtitle}</span>
                      <span className="text-[11px] font-bold mt-0.5">{pack.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Actions (Quantity & Cart / Coming Soon) */}
            <div className="flex flex-wrap items-center gap-4 w-full xl:w-auto">
              {!product.isComingSoon ? (
                <>
                  <div className="flex items-center border border-white/10 rounded h-12">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center text-white text-sm font-bold">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="px-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => addToCart({ name: `${product.name} ${product.strength}`, price: activePack.numericPrice, image: product.image })}
                    className="flex-grow xl:flex-grow-0 flex items-center justify-center gap-3 px-10 h-12 bg-[#B98135] text-black text-[11px] font-bold tracking-widest uppercase rounded shadow-[0_0_20px_rgba(185,129,53,0.2)] hover:bg-[#c99145] transition-colors cursor-pointer"
                  >
                    <ShoppingCart size={16} /> ADD TO CART
                  </button>
                </>
              ) : (
                <button disabled className="w-full xl:w-auto px-12 h-12 bg-white/5 border border-white/10 text-gray-500 text-[11px] font-bold tracking-widest uppercase rounded cursor-not-allowed">
                  Coming Soon
                </button>
              )}
            </div>

          </div>
        </div>

        {/* --- RELATED & ACCORDIONS --- */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Related Mini Cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              {product.related.map((rel: any) => (
                <Link key={rel.slug} href={`/shop/${rel.categorySlug}/${rel.slug}`} className="flex-1 flex items-center gap-4 bg-[#0a0a0a] border border-white/5 rounded-lg p-4 hover:border-white/20 transition-colors cursor-pointer">
                  <div className="relative w-16 h-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent flex-shrink-0">
                    <Image src={rel.image} alt={rel.name} fill className="object-contain p-2" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold tracking-wide mb-1">{rel.name}</h4>
                    <p className="text-[#B98135] text-[8px] uppercase tracking-widest font-bold mb-1">CORE METABOLIC RESEARCH</p>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">{rel.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Accordions */}
            <div className="flex flex-col gap-2">
              <div className="border border-white/10 bg-[#0a0a0a] rounded overflow-hidden">
                <button 
                  onClick={() => setOpenAccordion(openAccordion === 'research' ? null : 'research')}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-white/5 cursor-pointer"
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

              <div className="border border-white/10 bg-[#0a0a0a] rounded overflow-hidden">
                <button 
                  onClick={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-white/5 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <List size={18} className="text-[#B98135]" />
                    <div>
                      <h4 className="text-white text-[11px] font-bold tracking-widest uppercase mb-1">DESCRIPTION</h4>
                      <p className="text-gray-500 text-[10px] line-clamp-1 max-w-sm">{product.description}</p>
                    </div>
                  </div>
                  <PlusIcon size={16} className={`text-gray-400 transition-transform ${openAccordion === 'description' ? 'rotate-45' : ''}`} />
                </button>
                {openAccordion === 'description' && (
                  <div className="p-5 pt-0 text-sm text-gray-400 border-t border-white/5 leading-relaxed">
                    {product.description}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* --- TRUST BANNER WITH DIAGONAL EDGES --- */}
      <div className="w-full pb-20 px-10">
        <div className="relative w-full p-[1px] bg-white/15" style={{ clipPath: 'polygon(2% 0, 100% 0, 98% 100%, 0% 100%)' }}>
          <div 
            className="w-full bg-[#0a0a0a] py-6 px-8 flex flex-col md:flex-row items-center justify-around gap-6 shadow-2xl"
            style={{ clipPath: 'polygon(2% 0, 100% 0, 98% 100%, 0% 100%)' }}
          >
            <div className="flex items-center gap-4 text-white">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Image src="/glass.png" alt="3rd Party Labs" width={22} height={22} className="object-contain" />
              </div>
              <span className="text-xs md:text-sm font-semibold tracking-wide uppercase">3rd Party Labs</span>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/15"></div>

            <div className="flex items-center gap-4 text-white">
              <div className="w-10 h-10 flex items-center justify-center text-white">
                <ShieldCheck size={22} strokeWidth={1.5} />
              </div>
              <span className="text-xs md:text-sm font-semibold tracking-wide uppercase">99%+ Purity (HPLC)</span>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/15"></div>

            <div className="flex items-center gap-4 text-white">
              <div className="w-10 h-10 flex items-center justify-center text-white">
                <FileSpreadsheet size={22} strokeWidth={1.5} />
              </div>
              <span className="text-xs md:text-sm font-semibold tracking-wide uppercase">Research Grade Peptides</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}