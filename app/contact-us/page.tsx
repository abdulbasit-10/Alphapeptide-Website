'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative">
      
      {/* Main Content Area */}
      <div className="flex-1 max-w-[1440px] w-full mx-auto px-6 md:px-12 py-2 md:py-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
        
        {/* LEFT COLUMN: Text and Form */}
        <div className="space-y-12">
          
          {/* Header Text Section */}
          <div className="flex flex-col justify-between h-full min-h-[220px]">
            <div>
              {/* Breadcrumbs */}
              <div className="text-[12px] font-medium mb-4 flex items-center gap-2">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                <span className="text-[#B98135]">›</span>
                <span className="text-[#B98135]">Contact Us</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mb-5">
                Contact Us
              </h1>
              
              <p className="text-gray-400 text-[13px] leading-relaxed max-w-md mb-6">
                Use the form below for questions about product availability, Certificates of Analysis and batch documentation, order status, shipping within Canada, wholesale enquiries, or general website information. Including your order number and the product name helps us respond faster.
              </p>
            </div>
            
            <p className="text-sm">
              <span className="text-[#B98135] font-medium">Email: </span>
              <a href="mailto:info@alphapeptide.ca" className="text-white hover:text-[#B98135] transition-colors">
                info@alphapeptide.ca
              </a>
            </p>
          </div>

          {/* Form Container */}
          <div className="border border-white/5 rounded-xl p-6 md:p-8 bg-[#030303]">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">
                    Name<span className="text-[#B98135]">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">
                    Email<span className="text-[#B98135]">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" 
                    required 
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">
                  Message<span className="text-[#B98135]">*</span>
                </label>
                <textarea 
                  rows={5} 
                  placeholder="Enter please your message." 
                  className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors resize-none" 
                  required
                ></textarea>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  className="accent-[#B98135] w-4 h-4 rounded cursor-pointer border-white/10 bg-black shrink-0" 
                  required 
                />
                <label htmlFor="privacy" className="text-[11px] text-gray-300 cursor-pointer">
                  I agree to the <Link href="/privacy" className="text-[#B98135] hover:underline">Privacy Policy</Link> of the website.
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="px-8 py-3 bg-[#a3722e] hover:bg-[#B98135] text-white text-sm font-medium rounded transition-colors cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT COLUMN: Hero Logo Image - Pinned to Top Right */}
        <div className="flex justify-center lg:justify-end items-start w-full">
          {/* Constrained height so it matches the text block height, pushing image to the exact top right corner */}
          <div className="relative w-full max-w-[250px] h-[120px] lg:h-[260px] opacity-90">
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

      
      

      {/* Footer */}
      <Footer />
      
    </div>
  );
}