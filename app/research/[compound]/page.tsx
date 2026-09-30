'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, FileText } from 'lucide-react';
import Footer from '../../../components/Footer/Footer'; 
import { researchData } from '../../../data/researchData'; 

// Centralized Data Object for the Dynamic Template
const compoundData = {
  id: 'AP-RC-002',
  title: 'BPC-157',
  type: 'RESEARCH COMPOUND',
  bgImage: '/2312342.png',
  leftHexImage: '/verticlehero.png', 
  tags: ['TISSUE REPAIR', 'GUT HEALTH', 'INFLAMMATION MODULATION', 'RECOVERY'],
  benefits: [
    'SUPPORTS HEALING',
    'PROMOTES MOBILITY',
    'ENHANCED RECOVERY',
    'GREATER RESILIENCE'
  ],
  
  // Custom Icon section data
  researchFocus: [
    { title: 'TISSUE REPAIR &\nREGENERATION', icon: '/knee.png' },
    { title: 'GUT HEALTH &\nDIGESTIVE SUPPORT', icon: '/intenstine.png' },
    { title: 'INFLAMMATION\nMODULATION', icon: '/shield.png' },
    { title: 'RECOVERY &\nPERFORMANCE', icon: '/running.png' }
  ],

  leftSectionTitle: 'WHOLESALE PARTNERSHIP',
  paragraphs: [
    <><span className="text-[#B98135] font-bold">BPC-157</span> (Body Protection Compound 157) is a synthetic pentadecapeptide derived from a protein found in gastric juice, known for its potential cytoprotective, regenerative, and anti-inflammatory properties.</>,
    <><span className="text-[#B98135] font-bold">BPC-157</span> has been studied for its ability to support tissue repair, promote angiogenesis, enhance gut barrier integrity, modulate inflammation, and accelerate healing in muscular, tendinous, ligamentous, and gastrointestinal tissues.</>,
    <>Research suggests <span className="text-[#B98135] font-bold">BPC-157</span> may help improve recovery from injury, protect against tissue damage, and support overall musculoskeletal and digestive health, making it a compound of interest in regenerative and performance research.</>,
    <>Due to its favourable safety profile in studies, <span className="text-[#B98135] font-bold">BPC-157</span> continues to be of interest in research settings focused on tissue repair, gut health, inflammation modulation, and enhanced recovery.</>
  ],

  rightTopTitle: 'WHOLESALE PARTNERSHIP',
  bullets: [
    'Tissue repair and regeneration',
    'Gut health and gastrointestinal support',
    'Inflammation modulation',
    'Angiogenesis (blood vessel formation)',
    'Musculoskeletal recovery',
    'Joint, tendon and ligament health',
    'Cellular protection and cytoprotection',
    'Enhanced recovery and resilience'
  ],

  rightBottomTitle: 'RESEARCH RATIONALE',
  rationaleText: <><span className="text-[#B98135] font-bold">BPC-157</span> is being investigated for its potential to support tissue repair, reduce inflammation, enhance gut barrier function, and promote recovery in a variety of research models. Its unique mechanisms of action make it a compelling peptide for research into regenerative health, gastrointestinal integrity, and musculoskeletal performance.</>
};

export default function CompoundDetailPage({ params }: { params: Promise<{ compound: string }> }) {
  
  // 1. Unwrap the params Promise using React.use()
  const resolvedParams = React.use(params);
  

  const compoundData = researchData[resolvedParams.compound.toLowerCase()]; 


  if (!compoundData) {
    return <div className="min-h-screen bg-[#030303] text-white p-24 text-center flex items-center justify-center">Compound not found.</div>;
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans flex flex-col">
       {/* ... the rest of your section code remains exactly the same ... */}
      
    {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-[650px] md:min-h-[800px] lg:min-h-[950px] bg-[#030303] flex flex-col justify-start border-b border-white/5 overflow-hidden">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image 
            src={compoundData.bgImage} 
            alt={compoundData.title} 
            fill 
            priority
            className="object-cover object-center" 
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between pt-8 md:pt-12 px-4 md:px-12 pb-12 md:pb-16 flex-1">
          
          {/* Top Banner */}
          <div className="w-full border border-white/30  backdrop-blur-sm bg-[#030303]/40">
            
            {/* Row 1: Label & ID with Vertical Divider */}
            <div className="flex items-stretch border-b border-white/30  text-[12px] md:text-[11px] text-gray-200 font-medium tracking-[0.2em] uppercase">
              <div className="flex-1 py-2.5 px-4 md:px-6 flex items-center">
                {compoundData.type}
              </div>
              <div className="py-2.5 px-4 md:px-6 border-l border-white/30 flex items-center">
                {compoundData.id}
              </div>
            </div>

            {/* Row 2: Main Compound Title */}
            <div className="border-b border-[#B77D33] py-3 md:py-4 px-4 md:px-6">
              <h1 className="text-3xl md:text-4xl lg:text-[70px] font-bold text-white tracking-tight leading-none">
                {compoundData.title}
              </h1>
            </div>

            {/* Row 3: Focus Tags */}
            <div className="flex flex-wrap items-center gap-12.5 py-3 px-4 md:px-6">
              {compoundData.tags.map((tag: string, index: number) => (
                <React.Fragment key={index}>
                  <span className="text-[10px] md:text-[12px] text-white font-bold tracking-[0.15em] uppercase">
                    {tag}
                  </span>
                  {/* Vertical separator between tags */}
                  {index < compoundData.tags.length - 1 && (
                    <div className="h-3 w-px bg-white/30 mx-3 md:mx-5"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            
          </div>

          {/* Bottom Area: Left Hex Image & Right Floating Benefits */}
          <div className="mt-auto flex justify-between items-end  w-full">
            
            {/* LEFT: Vertical Hex Image */}
            <div className="relative w-[120px] md:w-[180px] lg:w-[240px] h-[250px] md:h-[350px] lg:h-[450px] mb-58">
              <Image 
                src={compoundData.leftHexImage} 
                alt="Hex Graphics" 
                fill 
                className="object-contain object-left-bottom"
              />
            </div>

            {/* RIGHT: Benefits Text */}
            <div className="flex flex-col gap-1 text-right pb-3 border-b-2 border-[#B98135]">
              {compoundData.benefits.map((benefit: string, index: number) => (
                <span 
                  key={index} 
                  className="text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase drop-shadow-md leading-relaxed"
                >
                  {benefit}
                </span>
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* MAIN CONTENT CONTAINER */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16">
        
        {/* Research Focus Icons Section */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-white mb-8">
            RESEARCH FOCUS
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-b border-white/10 pb-12">
           {compoundData.researchFocus.map((item: { title: string; icon: string }, index: number) => (
              <div key={index} className="flex flex-col items-center justify-center text-center px-4">
                {/* Custom User Icon Placeholder */}
                <div className="w-12 h-12 mb-5 flex items-center justify-center">
                  <img 
                    src={item.icon} 
                    alt={item.title.replace('\n', ' ')} 
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>
                <h3 className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-white uppercase whitespace-pre-line leading-relaxed">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Information Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          
          {/* Left Column (Spans 3/5 or 60% of the space) */}
          <div className="lg:col-span-3 border border-white/10 rounded-xl p-8 md:p-10 bg-[#050505] h-full flex flex-col">
            <h2 className="text-sm md:text-base font-semibold tracking-widest text-[#B98135] uppercase mb-2 border-b border-white/10 pb-4">
              {compoundData.leftSectionTitle}
            </h2>
            <div className="space-y-9 text-sm md:text-[15px] text-gray-300 leading-relaxed font-light">
             {compoundData.paragraphs.map((paragraph: React.ReactNode, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column (Spans 2/5 or 40% of the space) */}
          <div className="lg:col-span-2 flex flex-col gap-3 h-full">
            
            {/* Right Top Box (Bullets) */}
            <div className="border border-white/10 rounded-xl p-4 lg:p-5 bg-[#050505] flex-1">
              <h2 className="text-xs md:text-sm font-semibold tracking-widest text-[#B98135] uppercase mb-1 border-b border-white/10 ">
                {compoundData.rightTopTitle}
              </h2>
              <ul className="space-y-4">
                {compoundData.paragraphs.map((bullet:string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#B98135] shrink-0 mt-0.5 fill-[#B98135]/10" size={16} />
                    <span className="text-xs md:text-sm text-gray-300 font-light leading-snug">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Bottom Box (Rationale) */}
            <div className="border border-white/10 rounded-xl p-2 lg:p-4 bg-[#050505]">
              <h2 className="text-xs md:text-sm font-semibold tracking-widest text-[#B98135] uppercase mb-2 border-b border-white/10 pb-4">
                {compoundData.rightBottomTitle}
              </h2>
              <div className="flex gap-4 items-start">
                <FileText className="text-[#B98135] shrink-0 mt-1" size={20} />
                <p className="text-xs md:text-[13px] text-gray-300 font-light leading-relaxed">
                  {compoundData.rationaleText}
                </p>
              </div>
            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}