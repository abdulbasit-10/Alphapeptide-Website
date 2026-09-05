'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ChevronDown, ShieldCheck, FileText, ExternalLink, FlaskConical, Biohazard } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'; // Added Footer import

// Static Data for the COA Table
const initialLots = [
  { lot: 'VP-183D5F7410', compound: 'BPC-157 / TB-500 Blend', dose: '—', purity: '99.84% HPLC', mw: '—', status: 'IN STOCK', pdf: '/sample-coa.pdf' },
  { lot: 'VP-3Q5S7UFA6', compound: 'CJC / Ipamorelin', dose: '—', purity: '99.22% HPLC', mw: '—', status: 'IN STOCK', pdf: '/sample-coa.pdf' },
  { lot: 'VP-8K3M7N2P4', compound: 'GLP-1 SM', dose: 'Dose Strength: 10mg', purity: '98.05% HPLC', mw: '—', status: 'IN STOCK', pdf: '/sample-coa.pdf' },
  { lot: 'VP-5R7T3W6X6', compound: 'GLP-3 RT', dose: 'Dose Strength: 10mg', purity: '99.65% HPLC', mw: '—', status: 'IN STOCK', pdf: '/sample-coa.pdf' },
  { lot: 'VP-5B7D5FSH1', compound: 'Melanotan-II 10mg', dose: '10mg', purity: '99.38% HPLC', mw: '—', status: 'IN STOCK', pdf: '/sample-coa.pdf' },
  { lot: 'VP-3AAC6E2G8', compound: 'GLP-2 TZ', dose: '—', purity: '99.77% HPLC', mw: '—', status: 'IN STOCK', pdf: '/sample-coa.pdf' },
  { lot: 'VP-1U5V6X8Z2', compound: 'MOTS-C', dose: '—', purity: '99.86% HPLC', mw: '—', status: 'IN STOCK', pdf: '/sample-coa.pdf' },
  { lot: 'VP-7W9Y2AACS', compound: 'Semax 10mg', dose: '10mg', purity: '99.76% HPLC', mw: '—', status: 'IN STOCK', pdf: '/sample-coa.pdf' },
  { lot: 'VP-2JN6N8OD', compound: 'SS-31', dose: 'Dosage: 50mg', purity: '99.33% HPLC', mw: '—', status: 'IN STOCK', pdf: '/sample-coa.pdf' },
  { lot: 'VP-9N2P5R7T0', compound: 'Tesamorelin 10mg', dose: '10mg', purity: '99.29% HPLC', mw: '—', status: 'IN STOCK', pdf: '/sample-coa.pdf' },
];

export default function LabResultsPage() {
  const [lots] = useState(initialLots);
  const [visibleCount, setVisibleCount] = useState(10);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col">
      
      

      {/* Hero Section */}
      <div className="relative w-full bg-[#030303] border-b border-white/5 py-12 md:py-16 overflow-hidden">
        
        {/* Background Image: heroimage222.png */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[85%] z-0 pointer-events-none">
          <Image 
            src="/heroimg222.png" 
            alt="COA Archive Background" 
            fill 
            priority
            className="object-cover object-center opacity-80 mix-blend-lighten" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent z-10"></div>
        </div>

        {/* Content Container */}
        <div className="max-w-[1440px] mx-auto relative z-20 w-full px-6 md:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* LEFT COLUMN: Headings and Search Filters */}
            <div className="w-full">
              <h1 className="text-[36px] md:text-[44px] lg:text-[48px] font-bold tracking-wide mb-3 leading-tight">
                <span className="text-white">COA</span> <span className="text-[#B98135]">ARCHIVE.</span>
              </h1>
              
              <h2 className="text-[13px] md:text-[14px] font-medium tracking-widest mb-5 uppercase">
                <span className="text-[#B98135]">EVERY LOT.</span> <span className="text-white">EVERY TIME.</span>
              </h2>
              
              <p className="text-gray-400 text-[12px] md:text-[13px] max-w-[420px] leading-relaxed mb-8">
                Find published lab results searchable by lot number or compound name. Verified lots remain available after they sell out.
              </p>

              {/* Filter Bar */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                <div className="relative w-full sm:w-[300px]">
                  <input 
                    type="text" 
                    placeholder="Search lot number or compound name..." 
                    className="w-full bg-transparent border border-white/10 rounded-md pl-4 pr-10 py-2.5 text-[11px] text-white placeholder:text-gray-600 focus:border-[#B98135] focus:outline-none transition-colors"
                  />
                  <Search size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>

                <div className="relative w-full sm:w-[130px]">
                  <select className="w-full bg-transparent border border-white/10 rounded-md pl-4 pr-10 py-2.5 text-[11px] text-white focus:border-[#B98135] focus:outline-none transition-colors appearance-none cursor-pointer">
                    <option value="all" className="bg-[#030303]">All statuses</option>
                    <option value="available" className="bg-[#030303]">Available</option>
                    <option value="sold_out" className="bg-[#030303]">Sold Out</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>

                <button className="text-[#B98135] text-[10px] font-semibold tracking-wider hover:text-white transition-colors uppercase whitespace-nowrap px-1">
                  CLEAR FILTERS
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: 3rd Party Tested Badge */}
            <div className="flex items-center lg:justify-start lg:pl-12 h-full">
              <div className="border-l border-white/10 pl-5 py-2">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 text-[#B98135] pt-0.5">
                    <ShieldCheck size={18} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-[11px] font-semibold text-white tracking-widest uppercase">
                      INDEPENDENTLY THIRD-PARTY TESTED
                    </h3>
                    <p className="text-[11px] text-gray-400 leading-relaxed">
                      Verified through independent Canadian laboratories
                    </p>
                    <p className="text-[9px] font-medium text-[#B98135] tracking-widest uppercase pt-0.5">
                      TESTIDES.COM <span className="text-white/40">+</span> PEPTIDETESTCANADA.CA
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Info Status Bar */}
          <div className="mt-12 pt-5 border-t border-white/5 flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] font-medium tracking-widest text-white uppercase">
            <div className="flex items-center gap-1.5">
              <span className="text-[#B98135] text-xs font-semibold">22</span>
              <span className="text-gray-300">PUBLISHED LOTS</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#B98135]"></div>
              <span className="text-gray-300">INDEPENDENTLY TESTED</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#B98135]"></div>
              <span className="text-gray-300">BATCH TRACEABLE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#B98135]"></div>
              <span className="text-gray-300">CERTIFICATES PERMANENTLY ARCHIVED</span>
            </div>
          </div>

        </div>
      </div>

      {/* COA Table Section */}
      <div className="flex-1 max-w-[1440px] w-full mx-auto px-6 md:px-12 py-12">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
                <th className="py-4 px-4">LOT</th>
                <th className="py-4 px-4">COMPOUND</th>
                <th className="py-4 px-4">DOSE</th>
                <th className="py-4 px-4">PURITY HPLC</th>
                <th className="py-4 px-4">MW</th>
                <th className="py-4 px-4">STATUS</th>
                <th className="py-4 px-4 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs">
              {lots.slice(0, visibleCount).map((item, index) => (
                <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 font-mono text-gray-300">{item.lot}</td>
                  <td className="py-4 px-4 font-medium text-white">{item.compound}</td>
                  <td className="py-4 px-4 text-gray-400">{item.dose}</td>
                  <td className="py-4 px-4 text-[#B98135] font-medium">
                    {item.purity.replace('HPLC', '')} <br className="hidden md:block" /> 
                    <span className="text-[10px] text-[#B98135]">HPLC</span>
                  </td>
                  <td className="py-4 px-4 text-gray-500">{item.mw}</td>
                  <td className="py-4 px-4">
                    {/* Fixed Status: Green dot, white text */}
                    <span className="inline-flex items-center gap-1.5 font-medium text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      {/* View COA Button opening PDF in browser */}
                      <a 
                        href={item.pdf} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/10 bg-black text-[11px] text-gray-300 hover:text-white hover:border-[#B98135] transition-colors"
                      >
                        <ExternalLink size={12} className="text-[#B98135]" />
                        VIEW COA
                      </a>
                      
                      {/* Shop Button */}
                      <Link 
                        href="/shop" 
                        className="px-3 py-1.5 rounded border border-white/10 bg-black text-[11px] text-[#B98135] hover:text-white hover:border-[#B98135] transition-colors"
                      >
                        SHOP →
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* View More Lots Button */}
        {visibleCount < lots.length && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={handleViewMore}
              className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B98135] hover:text-white transition-colors uppercase"
            >
              VIEW MORE LOTS <ChevronDown size={14} />
            </button>
          </div>
        )}
      </div>

      {/* Bottom Feature Footer Banner matching new design */}
      <div className="w-full border-y border-white/10 bg-[#030303] py-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <div className="flex items-start gap-5 py-6 md:py-0 md:pr-8">
            <FlaskConical size={36} className="text-white shrink-0" strokeWidth={1.5} />
            <div className="space-y-2">
              <h4 className="text-[12px] font-semibold uppercase tracking-wider text-white">INDEPENDENT CANADIAN LABS</h4>
              <p className="text-[11px] font-medium text-[#B98135] tracking-widest">TESTIDES.COM • PEPTIDETESTCANADA.CA</p>
              <p className="text-[12px] text-gray-400 leading-relaxed">Third-party verification you can trust.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-5 py-6 md:py-0 md:px-8">
            <ShieldCheck size={36} className="text-white shrink-0" strokeWidth={1.5} />
            <div className="space-y-2">
              <h4 className="text-[12px] font-semibold uppercase tracking-wider text-white">99%+ HPLC PURITY</h4>
              <p className="text-[12px] text-gray-400 leading-relaxed">High performance liquid chromatography testing.</p>
            </div>
          </div>

          <div className="flex items-start gap-5 py-6 md:py-0 md:px-8">
            <Biohazard size={36} className="text-white shrink-0" strokeWidth={1.5} />
            <div className="space-y-2">
              <h4 className="text-[12px] font-semibold uppercase tracking-wider text-white">BATCH TRACEABLE</h4>
              <p className="text-[12px] text-gray-400 leading-relaxed">Every lot is recorded, verified, and traceable.</p>
            </div>
          </div>

          <div className="flex items-start gap-5 py-6 md:py-0 md:pl-8">
            <FileText size={36} className="text-white shrink-0" strokeWidth={1.5} />
            <div className="space-y-2">
              <h4 className="text-[12px] font-semibold uppercase tracking-wider text-white">CERTIFICATES ARCHIVED</h4>
              <p className="text-[12px] text-gray-400 leading-relaxed">Published certificates remain available after sell out.</p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Global Footer */}
      <Footer />

    </div>
  );
}