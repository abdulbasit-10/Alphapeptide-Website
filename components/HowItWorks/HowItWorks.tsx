'use client';

import React from 'react';
import { FileText, ShieldCheck, Link2, Coins } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Apply',
      icon: <FileText size={20} className="text-white stroke-[1.5]" />,
    },
    {
      num: '02',
      title: 'Get Approved',
      icon: <ShieldCheck size={20} className="text-white stroke-[1.5]" />,
    },
    {
      num: '03',
      title: 'Share Your Link',
      icon: <Link2 size={20} className="text-white stroke-[1.5]" />,
    },
    {
      num: '04',
      title: 'Earn Commission',
      icon: <Coins size={20} className="text-white stroke-[1.5]" />,
    },
  ];

  return (
    <section className="w-full bg-black py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-24 space-y-3">
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-wide">
            How its <span className="text-[#C58B33]">work?</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative px-8 md:px-16">
          
          {/* Adjusted top position to line up with the center of the circle and dots */}
          <div className="hidden md:block absolute top-[62px] left-[18%] w-[64%] h-[1px] bg-[#C58B33]/40 z-0"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                
                {/* Step Number Top */}
                <span className="text-[#C58B33] text-xs font-mono mb-4 tracking-widest">
                  {step.num}
                </span>
                
                {/* Circle Container with Glowing Edge Nodes */}
                <div className="relative w-16 h-16 rounded-full border border-[#C58B33] bg-black flex items-center justify-center mb-5">
                  
                  {/* Left Glowing Node Dot */}
                  {index > 0 && (
                    <div className="hidden md:block absolute -left-[4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#C58B33] shadow-[0_0_8px_#C58B33]"></div>
                  )}
                  
                  {/* Right Glowing Node Dot */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-[4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#C58B33] shadow-[0_0_8px_#C58B33]"></div>
                  )}
                  
                  {step.icon}
                </div>
                
                {/* Label Title */}
                <h3 className="text-white text-sm md:text-base font-normal tracking-wide">
                  {step.title}
                </h3>
                
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}