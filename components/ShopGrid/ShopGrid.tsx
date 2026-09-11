'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { 
  Filter, 
  ChevronDown, 
  LayoutGrid, 
  List as ListIcon, 
  ShoppingCart, 
  Clock,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal
} from 'lucide-react';

// IMPORTANT: Update this import path to point to your actual CartContext file!
import { useCart } from '../../context/CartContext'; 

// Mock data with slight variations to demonstrate sorting
const products = [
  { id: 1, name: 'Retatrutide', subtitle: '20MG | 99% Purity', price: '$95.00', numericPrice: 95.00, image: '/p1.png', badge: 'BEST SELLER', status: 'available', sales: 500, dateAdded: '2023-10-01' },
  { id: 2, name: 'TESAMORELIN', subtitle: '10MG | 99% Purity', price: '$90.00', numericPrice: 90.00, image: '/p2.png', badge: null, status: 'available', sales: 300, dateAdded: '2023-11-15' },
  { id: 3, name: 'SS-31', subtitle: '10MG | 99% Purity', price: '$85.00', numericPrice: 85.00, image: '/p3.png', badge: null, status: 'available', sales: 250, dateAdded: '2023-09-10' },
  { id: 4, name: 'BAC. WATER', subtitle: '3ML', price: '$15.00', numericPrice: 15.00, image: '/p4.png', badge: 'BEST SELLER', status: 'available', sales: 1000, dateAdded: '2023-01-01' },
  { id: 5, name: 'WOLVERINE', subtitle: '20MG | 99% Purity', price: '$110.00', numericPrice: 110.00, image: '/p5.png', badge: null, status: 'available', sales: 150, dateAdded: '2024-01-10' },
  { id: 6, name: 'GHK-Cu', subtitle: '10MG | 99% Purity', price: '$90.00', numericPrice: 90.00, image: '/p6.png', badge: null, status: 'available', sales: 200, dateAdded: '2023-12-05' },
  { id: 7, name: 'TB-500', subtitle: '10MG | 99% Purity', price: '$90.00', numericPrice: 90.00, image: '/p7.png', badge: null, status: 'available', sales: 400, dateAdded: '2023-05-20' },
  { id: 8, name: 'KLOW', subtitle: '80MG | 99% Purity', price: '$90.00', numericPrice: 90.00, image: '/p8.png', badge: null, status: 'available', sales: 100, dateAdded: '2024-02-01' },
  { id: 9, name: 'MOTS-C', subtitle: '10MG | 99% Purity', price: '$90.00', numericPrice: 90.00, image: '/p9.png', badge: null, status: 'available', sales: 220, dateAdded: '2023-08-11' },
  { id: 10, name: 'GLOW', subtitle: '70MG | 99% Purity', price: '$90.00', numericPrice: 90.00, image: '/p10.png', badge: null, status: 'available', sales: 180, dateAdded: '2023-07-22' },
  { id: 11, name: 'BPC-157', subtitle: '10MG | 99% Purity', price: '$90.00', numericPrice: 90.00, image: '/p11.png', badge: null, status: 'available', sales: 450, dateAdded: '2023-04-14' },
  { id: 12, name: 'SELANK', subtitle: '10MG | 99% Purity', price: '$90.00', numericPrice: 90.00, image: '/p12.png', badge: null, status: 'coming_soon', sales: 0, dateAdded: '2024-03-01' },
  { id: 13, name: '5-AMINO-1MQ', subtitle: '10MG | 99% Purity', price: '$90.00', numericPrice: 90.00, image: '/p13.png', badge: null, status: 'coming_soon', sales: 0, dateAdded: '2024-03-02' },
  { id: 14, name: 'TIRZEPATIDE', subtitle: '30MG | 99% Purity', price: '$90.00', numericPrice: 90.00, image: '/p14.png', badge: null, status: 'coming_soon', sales: 0, dateAdded: '2024-03-03' },
  { id: 15, name: 'CJC-1295', subtitle: '10MG | 99% Purity', price: '$90.00', numericPrice: 90.00, image: '/p15.png', badge: null, status: 'coming_soon', sales: 0, dateAdded: '2024-03-04' },
  { id: 16, name: 'SEMAX', subtitle: '10MG | 99% Purity', price: '$90.00', numericPrice: 90.00, image: '/p16.png', badge: null, status: 'coming_soon', sales: 0, dateAdded: '2024-03-05' },
];

const sortOptions = [
  { id: 'featured', label: 'Featured (default)' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'newest', label: 'Newest' },
  { id: 'best-selling', label: 'Best Selling' },
];

export default function ShopGrid() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [activeSort, setActiveSort] = useState(sortOptions[0]);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Bring in the addToCart function from your context
  const { addToCart } = useCart();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sort logic applied to the products array
  const sortedProducts = [...products].sort((a, b) => {
    switch (activeSort.id) {
      case 'price-asc':
        return a.numericPrice - b.numericPrice;
      case 'price-desc':
        return b.numericPrice - a.numericPrice;
      case 'newest':
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      case 'best-selling':
        return b.sales - a.sales;
      case 'featured':
      default:
        return a.id - b.id; // Default order
    }
  });

  return (
    <section className="w-full bg-[#030303] min-h-screen py-10 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* --- HEADER CONTROLS --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          
          {/* Title Area */}
          <div className="flex items-baseline gap-3">
            <h2 className="text-2xl md:text-[28px] text-white font-medium tracking-wide">
              All Products
            </h2>
            <span className="text-gray-500 text-xs font-medium tracking-wide">
              {products.length} Compounds
            </span>
          </div>

          {/* Filters & Toggles */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 relative">
            
            {/* Filter Button */}
            <button 
              onClick={() => alert("Filter menu coming soon!")}
              className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-md bg-transparent hover:bg-white/5 transition-colors text-gray-300 text-[11px] font-medium tracking-widest uppercase"
            >
              <Filter size={14} /> FILTER
            </button>

            {/* Custom Sort Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-3 px-4 py-2 border border-white/10 rounded-md bg-[#0a0a0a] hover:bg-white/5 transition-colors text-gray-300 text-[11px] font-medium tracking-widest uppercase"
              >
                SORT BY: {activeSort.label.replace(' (default)', '')} <ChevronDown size={14} className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isSortOpen && (
                <div className="absolute top-full mt-2 right-0 w-48 bg-[#111] border border-white/10 rounded-md shadow-xl z-50 overflow-hidden">
                  {sortOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setActiveSort(option);
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs transition-colors ${
                        activeSort.id === option.id 
                          ? 'bg-[#B98135] text-black font-semibold' 
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* View Toggles */}
            <div className="flex items-center gap-2 ml-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 border rounded-md transition-colors ${viewMode === 'grid' ? 'border-gray-500 text-white bg-white/5' : 'border-white/10 text-gray-500 hover:text-gray-300 hover:border-white/30'}`}
              >
                <LayoutGrid size={18} strokeWidth={1.5} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 border rounded-md transition-colors ${viewMode === 'list' ? 'border-gray-500 text-white bg-white/5' : 'border-white/10 text-gray-500 hover:text-gray-300 hover:border-white/30'}`}
              >
                <ListIcon size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* --- PRODUCT GRID/LIST --- */}
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" 
          : "flex flex-col gap-4"
        }>
          {sortedProducts.map((product) => (
            <div 
              key={product.id} 
              className={`group relative flex bg-[#05070a] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 ${viewMode === 'grid' ? 'flex-col' : 'flex-row items-center h-48'}`}
            >
              
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-20 px-2 py-1 border border-white/20 rounded bg-black/60 backdrop-blur-md">
                  <span className="text-[9px] text-gray-300 font-medium tracking-widest uppercase">{product.badge}</span>
                </div>
              )}

              {/* Image Area */}
              <div className={`relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent flex items-center justify-center p-8 ${viewMode === 'grid' ? 'w-full h-[280px]' : 'w-48 h-full border-r border-white/5'}`}>
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Area */}
              <div className={`flex flex-col flex-grow border-white/5 ${viewMode === 'grid' ? 'p-5 border-t' : 'p-6 h-full justify-center'}`}>
                <h3 className="text-white font-semibold text-lg tracking-wide uppercase mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest font-medium mb-4">
                  {product.subtitle}
                </p>
                <p className={`text-white text-sm font-bold tracking-wide ${viewMode === 'grid' ? 'mt-auto mb-5' : 'mb-4'}`}>
                  {product.price}
                </p>

                <div className={viewMode === 'grid' ? 'w-full' : 'w-48'}>
                  {product.status === 'available' ? (
                    <button 
                      onClick={() => addToCart({ name: product.name, price: product.numericPrice, image: product.image })}
                      className="w-full flex items-center justify-center gap-2 py-3 border border-white/10 rounded bg-[#030303] hover:border-[#B98135] hover:text-[#B98135] transition-colors text-gray-300 text-[11px] font-semibold tracking-widest uppercase"
                    >
                      <ShoppingCart size={14} /> ADD TO CART
                    </button>
                  ) : (
                    <button disabled className="w-full flex items-center justify-center gap-2 py-3 border border-white/5 rounded bg-[#030303]/50 text-gray-600 text-[11px] font-semibold tracking-widest uppercase cursor-not-allowed">
                      <Clock size={14} /> Coming Soon
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* --- PAGINATION --- */}
        <div className="flex items-center justify-center mt-16 pb-10">
          <div className="flex items-center gap-2">
            
            <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-colors">
              <ChevronLeft size={16} />
            </button>
            
            <button 
              onClick={() => setCurrentPage(1)}
              className={`w-8 h-8 flex items-center justify-center rounded text-[11px] font-bold transition-colors ${currentPage === 1 ? 'bg-[#B98135] text-black border border-[#B98135]' : 'border border-white/10 text-gray-400 hover:text-white hover:border-white/30'}`}
            >
              1
            </button>
            
            <button 
              onClick={() => setCurrentPage(2)}
              className={`w-8 h-8 flex items-center justify-center rounded text-[11px] font-bold transition-colors ${currentPage === 2 ? 'bg-[#B98135] text-black border border-[#B98135]' : 'border border-white/10 text-gray-400 hover:text-white hover:border-white/30'}`}
            >
              2
            </button>
            
            <div className="w-8 h-8 flex items-center justify-center text-gray-500">
              <MoreHorizontal size={14} />
            </div>
            
            <button 
              onClick={() => setCurrentPage(10)}
              className={`w-8 h-8 flex items-center justify-center rounded text-[11px] font-bold transition-colors ${currentPage === 10 ? 'bg-[#B98135] text-black border border-[#B98135]' : 'border border-white/10 text-gray-400 hover:text-white hover:border-white/30'}`}
            >
              10
            </button>
            
            <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-colors">
              <ChevronRight size={16} />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}