import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FileText, ArrowUpRight } from 'lucide-react';
import { articleData } from '@/data/articleData'; 
import { notFound } from 'next/navigation';
// IMPORTANT: Import your global Footer component here.
import Footer from '@/components/Footer/Footer'; 

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = articleData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white pt-4">
      
      {/* Main Card Container */}
      <div className="max-w-[1440px] mx-auto px-1 mb-16">
        <div className="rounded-xl overflow-hidden border border-white/10 flex flex-col">
          
          {/* TOP SECTION: Hero Image & Text */}
          <div className="relative w-full py-16 md:py-24 px-8 md:px-14 flex flex-col justify-center min-h-[400px]">
            
            {/* Background Image - Clear and unzoomed */}
            <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
              {data.bgImage && (
                <Image 
                  src={data.bgImage} 
                  alt={data.title} 
                  fill 
                  className="object-cover object-center" 
                  priority
                />
              )}
              {/* Gradient applied ONLY to the left side */}
              <div className="absolute inset-y-0 left-0 w-3/4 md:w-1/2 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent" />
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between w-full">
              
              {/* Left Column */}
              <div className="flex flex-col items-start max-w-2xl">
                {/* Badge */}
                <div className="border border-[#B98135] text-[#B98135] px-4 py-2 rounded-sm text-xs font-bold tracking-widest uppercase mb-8 bg-black/50">
                  {data.badge}
                </div>

                {/* Title */}
                <h1 className="text-6xl md:text-[80px] font-bold tracking-tight mb-3">
                  {data.title}
                </h1>
                
                {/* Gold Underline specifically under the main heading */}
                <div className="w-[140px] h-[3px] bg-[#B98135] mb-8" />

                {/* Subtitle */}
                {data.subtitle && (
                  <div className="mb-6">
                    <p className="text-lg md:text-xl font-light tracking-wide whitespace-pre-line mb-4">
                      {data.subtitle}
                    </p>
                  </div>
                )}

                {/* Left Tags */}
                {data.leftTags && (
                  <div className="flex flex-col gap-1.5 mt-2">
                    {data.leftTags.map((tag: string, i: number) => (
                      <span key={i} className="text-[15px] md:text-base font-light tracking-[0.1em] uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Left Hex Icons (For Wolverine Layout) */}
                {data.leftIcons && (
                  <div className="flex gap-6 mt-8">
                    {data.leftIcons.map((item: any, i: number) => (
                      <div key={i} className="flex flex-col items-center text-center gap-3">
                        <div className="w-16 h-16 relative flex items-center justify-center border border-[#B98135] rounded-tl-lg rounded-br-lg rotate-45">
                          <Image src={item.icon} alt={item.label} width={28} height={28} className="-rotate-45" />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest font-semibold max-w-[80px]">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            {/* Right Column: Composite Hex Image + Text Stack */}
              <div className="flex flex-col justify-center mt-12 md:mt-0 md:pl-12">
                {data.rightHexImage && (
                  <div className="flex items-center gap-6">
                    {/* The Single 3-Hexagon Image */}
                    <div className="relative w-[194px] h-[610px] shrink-0">
                      <Image 
                        src={data.rightHexImage} 
                        alt={`${data.title} hexagon details`} 
                        fill 
                        className="object-contain" 
                        priority
                      />
                    </div>

                    {/* Text Column Aligned to the Hexagons */}
                    <div className="flex flex-col justify-between h-[580px] py-4 max-w-[220px]">
                      {data.rightHexText?.map((item: any, i: number) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-xs font-bold tracking-widest uppercase mb-1 text-white">
                            {item.title}
                          </span>
                          <div className="w-6 h-[1px] bg-[#B98135] mb-2" />
                          <p className="text-[11px] text-gray-300 leading-relaxed font-light">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Variation 2: Right Aligned Text */}
                {data.rightText && (
                  <div className="flex flex-col items-end text-right mt-auto mb-12 md:mb-0">
                    <div className="text-sm md:text-lg tracking-widest leading-relaxed font-medium uppercase">
                      {data.rightText}
                    </div>
                    <div className="w-24 h-[2px] bg-[#B98135] mt-4" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION: Action Bar */}
          <div className="w-full bg-[#070707] border-t border-white/10 p-8 md:p-10 flex flex-col z-20">
            
            {/* Top Row: Title & Description */}
            <div className="max-w-4xl mb-10 md:mb-12">
              <h3 className="text-xl md:text-[22px] font-bold tracking-wide mb-3">
                {data.footerTitle}
              </h3>
              <p className="text-[10px] md:text-[12px] text-gray-400 font-light leading-relaxed">
                {data.footerDesc}
              </p>
            </div>

            {/* Bottom Row: Metadata & Button Aligned Perfectly */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 w-full ">
              
              {/* Metadata with enlarged icon and Educational Resource text */}
              <div className="flex items-center flex-wrap gap-5 text-[11px] md:text-xs font-medium tracking-[0.15em] text-gray-300">
                <div className="flex items-center gap-4">
                  <FileText size={32} strokeWidth={1.5} className="text-white" />
                  <span>{data.publisher}</span>
                </div>
                <div className="w-[1px] h-4 bg-white/20 hidden md:block" />
                <span>{data.resourceType || 'Educational Resource'}</span>
                <div className="w-[1px] h-4 bg-white/20 hidden md:block" />
                <span>{data.year}</span>
              </div>

              {/* Updated Button styling to match Figma */}
              <Link 
                href="#" 
                className="shrink-0 flex items-center gap-4 border border-[#B98135] bg-transparent hover:bg-white/5 transition-all px-8 py-4 rounded-sm text-[11px] md:text-[13px] font-semibold tracking-widest uppercase text-white group"
              >
                READ RESEARCH OVERVIEW 
                <ArrowUpRight size={18} className="text-white opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}