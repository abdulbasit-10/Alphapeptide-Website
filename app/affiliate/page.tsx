'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, Tag, Link2, CreditCard } from 'lucide-react';
import HowItWorks from '../../components/HowItWorks/HowItWorks'; // Adjust path if needed
import Footer from '../../components/Footer/Footer';

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      {/* Main Content Area */}
      <div className="flex-1 max-w-[1440px] w-full mx-auto px-6 md:px-12 py-12 md:py-16">
        
        {/* Top Header & Logo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          
          {/* Left Heading & Description */}
          <div>
            <div className="text-[12px] font-medium mb-4 flex items-center gap-2">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <span className="text-[#B98135]">›</span>
              <span className="text-[#B98135]">Become an Affiliate</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mb-4">
              Become an Affiliate
            </h1>
            
            <p className="text-gray-400 text-sm max-w-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Right Hero Logo (Pinned to top-right corner) */}
          <div className="flex justify-center lg:justify-end items-start w-full">
            <div className="relative w-full max-w-[320px] h-[160px] lg:h-[180px] opacity-90">
              <Image 
                src="/HeroLogo.png" 
                alt="Alpha Peptide Hero Logo" 
                fill 
                className="object-contain object-top lg:object-right-top"
                priority
              />
            </div>
          </div>

        </div>

        {/* Two-Column Form & Perks Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: Affiliate Registration Form */}
          <div className="lg:col-span-7 bg-[#050505] border border-white/10 rounded-xl p-6 md:p-8">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">Username*</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">First Name*</label>
                  <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Last Name*</label>
                  <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Email*</label>
                  <input type="email" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Confirm Email*</label>
                  <input type="email" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" required />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">Password*</label>
                <input type="password" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" required />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">Who referred you?</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">Add your Social Media link</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">Phone Number*</label>
                <input type="tel" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" required />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">Postal Code*</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">City*</label>
                  <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Province*</label>
                  <select className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors">
                    <option value="">Select Province</option>
                    <option value="ON">Ontario</option>
                    <option value="BC">British Columbia</option>
                    <option value="AB">Alberta</option>
                    <option value="QC">Quebec</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">Country*</label>
                <input type="text" defaultValue="Canada" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" required />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input type="checkbox" id="terms" className="accent-[#B98135] w-4 h-4 rounded cursor-pointer border-white/10 bg-black shrink-0" required />
                <label htmlFor="terms" className="text-xs text-gray-300 cursor-pointer">
                  I Accept our <Link href="/terms" className="text-[#B98135] hover:underline">Terms & Conditions</Link>
                </label>
              </div>

              <button type="submit" className="w-full sm:w-auto px-10 py-3.5 bg-gradient-to-r from-[#94590D] to-[#B77D33] hover:opacity-90 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-opacity cursor-pointer">
                Register
              </button>

            </form>
          </div>

          {/* RIGHT COLUMN: Partner in Precision Perks Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#050505] border border-white/10 rounded-xl p-6 md:p-8 space-y-6">
              
              <div>
                <h3 className="text-sm font-semibold tracking-widest text-white uppercase mb-2">Partner in Precision</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Earn 25% commission by sharing premium, lab-verified research compounds with your audience.
                </p>
              </div>

              <div className="space-y-5 border-t border-white/10 pt-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#B98135]/50 bg-black flex items-center justify-center text-[#B98135] shrink-0">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#B98135] uppercase tracking-wide mb-1">Commission</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">Earn on every successful referral.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#B98135]/50 bg-black flex items-center justify-center text-[#B98135] shrink-0">
                    <Tag size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#B98135] uppercase tracking-wide mb-1">Customer Discount</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">Share exclusive savings with your audience.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#B98135]/50 bg-black flex items-center justify-center text-[#B98135] shrink-0">
                    <Link2 size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#B98135] uppercase tracking-wide mb-1">No Commitments</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">No minimums, no monthly targets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#B98135]/50 bg-black flex items-center justify-center text-[#B98135] shrink-0">
                    <CreditCard size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#B98135] uppercase tracking-wide mb-1">On-Time Payouts</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">Reliable payments, every time.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

      {/* How It Works Component */}
      <HowItWorks />

      {/* Global Footer */}
      <Footer />

    </div>
  );
}
