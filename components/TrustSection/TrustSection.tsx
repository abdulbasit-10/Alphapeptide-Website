import Image from 'next/image';
import { FlaskConical, FileText, Leaf, ShieldCheck, Truck } from 'lucide-react';

export default function TrustSection() {
  const trustCards = [
    {
      icon: <FlaskConical size={24} className="text-[#B98135]" strokeWidth={1.5} />,
      title: 'INDEPENDENT LAB TESTED',
      description: 'Every batch independently verified by HPLC-UV at an accredited Canadian laboratory.',
    },
    {
      icon: <FileText size={24} className="text-[#B98135]" strokeWidth={1.5} />,
      title: 'COA ON EVERY ORDER',
      description: 'Certificate of Analysis included with every product and every batch we ship.',
    },
    {
      icon: <Leaf size={24} className="text-[#B98135]" strokeWidth={1.5} />,
      title: 'CANADIAN SUPPLIER',
      description: 'Proudly Canadian. Ships next business day with full tracking to every province.',
    },
    {
      icon: <ShieldCheck size={24} className="text-[#B98135]" strokeWidth={1.5} />,
      title: 'BATCH TRACEABILITY',
      description: 'Batch specific labels with QR code for complete transparency and traceability.',
    },
    {
      icon: <Truck size={24} className="text-[#B98135]" strokeWidth={1.5} />,
      title: 'SAME-DAY SHIPPING',
      description: 'Mon - Fri: Orders placed before 1pm EST ship the same business day.',
    },
  ];

  return (
    <section className="w-full bg-[#030303] py-20 md:py-28 px-4 md:px-12 flex flex-col items-center border-t border-white/5">
      
      {/* 1. Top Banner / Header Content */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 mb-16 md:mb-24">
        
        {/* Left Side: Typography */}
        <div className="flex flex-col max-w-[650px] w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#B98135]"></div>
            <span className="text-[#B98135] text-xs font-medium tracking-widest uppercase">
              Why Alpha Peptide
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-wide text-white mb-6 leading-[1.15]">
            BUILT ON TRUST.<br />
            DELIVERED WITH PRECISION.
          </h2>

          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-4">
            Premium compounds are only part of the equation.
          </p>
          <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
            Fast fulfillment, responsive support, and transparent quality standards are delivered into every order.
          </p>
        </div>

        {/* Right Side: Laboratory / Vials Image */}
        <div className="relative w-full lg:w-[600px] h-[300px] md:h-[350px] rounded-lg overflow-hidden border border-white/10">
          <Image 
            src="/dummy-vial.png" // Replace with your lab/vials image later
            alt="Lab Vials and Equipment"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent"></div>
        </div>

      </div>

      {/* 2. Bottom 5-Column Grid */}
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {trustCards.map((card, index) => (
          <div 
            key={index} 
            className="flex flex-col p-6 rounded-lg border border-white/10 bg-[#0a0a0a] hover:border-[#B98135] transition-all duration-300 group"
          >
            {/* Icon Box */}
            <div className="w-12 h-12 rounded-[4px] border border-white/10 bg-black flex items-center justify-center mb-6 group-hover:border-[#B98135] transition-colors">
              {card.icon}
            </div>

            {/* Title */}
            <h3 className="text-white text-sm font-semibold tracking-wider mb-3">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-xs font-light leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
