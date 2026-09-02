import Image from 'next/image';
import { FlaskConical, ShieldCheck, Truck, MessageSquare, ArrowUpRight, Atom, Activity, Heart, Infinity as InfinityIcon, Brain, Layers, SlidersHorizontal, BarChart3, RefreshCw } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: <FlaskConical size={22} className="text-[#B98135]" strokeWidth={1.5} />,
      title: 'EXPLORE',
      description: 'Browse our research catalogue featuring independently tested compounds, detailed specifications, and batch documentation.',
    },
    {
      num: '02',
      icon: <ShieldCheck size={22} className="text-[#B98135]" strokeWidth={1.5} />,
      title: 'VERIFY BEFORE YOU ORDER',
      description: 'Access COAs and analytical documentation for every batch. Review the data before you buy—transparency comes first.',
    },
    {
      num: '03',
      icon: <Truck size={22} className="text-[#B98135]" strokeWidth={1.5} />,
      title: 'FAST CANADIAN FULFILLMENT',
      description: 'Orders placed before 1PM EST, Monday-Friday, ship the same business day with full tracking across Canada.',
    },
    {
      num: '04',
      icon: <MessageSquare size={22} className="text-[#B98135]" strokeWidth={1.5} />,
      title: 'SUPPORT FROM REAL PEOPLE',
      description: 'Questions before or after ordering? Reach out directly to our Canadian team for clear, honest answers.',
    },
  ];

  const categories = [
    { name: 'Core', icon: <Atom size={18} />, active: true },
    { name: 'Endocrine', icon: <Activity size={18} />, active: false },
    { name: 'Immunity', icon: <Heart size={18} />, active: false },
    { name: 'Longevity', icon: <InfinityIcon size={18} />, active: false },
    { name: 'Neuro', icon: <Brain size={18} />, active: false },
    { name: 'Stacks', icon: <Layers size={18} />, active: false },
  ];

  const highlights = [
    { icon: <SlidersHorizontal size={20} className="text-[#B98135]" strokeWidth={1.5} />, label: 'Appetite Control' },
    { icon: <BarChart3 size={20} className="text-[#B98135]" strokeWidth={1.5} />, label: 'Lean Mass Support' },
    { icon: <RefreshCw size={20} className="text-[#B98135]" strokeWidth={1.5} />, label: 'Metabolic Efficiency' },
  ];

  return (
    <section className="w-full bg-[#030303] py-20 md:py-28 px-4 md:px-12 flex flex-col items-center border-t border-white/5">
      
      {/* ================= 1. HOW IT WORKS PART ================= */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center mb-28">
        
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-medium tracking-wide text-white mb-3 text-center">
          How its <span className="text-[#B98135]">work?</span>
        </h2>
        <p className="text-gray-400 text-xs md:text-sm font-light text-center max-w-lg mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Steps Grid with Connecting Line */}
        <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative z-10">
              
              {/* Step Number & Icon */}
              <div className="flex flex-col items-center mb-6">
                <span className="text-[#B98135] text-[11px] font-semibold tracking-widest mb-2">
                  {step.num}
                </span>
                <div className="w-14 h-14 rounded-full border border-white/10 bg-[#0a0a0a] flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-white text-sm md:text-base font-semibold tracking-wider mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed max-w-[280px]">
                {step.description}
              </p>

            </div>
          ))}

        </div>
      </div>

      {/* ================= 2. CATEGORY & PRODUCT SHOWCASE PART ================= */}
      <div className="w-full max-w-[1440px] mx-auto bg-[#070707] border border-white/10 rounded-2xl p-8 md:p-14 relative overflow-hidden">
        
        {/* Category Navigation Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-8 mb-10 border-b border-white/10 [&::-webkit-scrollbar]:hidden">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-medium tracking-widest uppercase transition-all shrink-0 ${
                cat.active 
                  ? 'bg-[#B98135] text-black font-semibold' 
                  : 'bg-black/40 border border-white/10 text-gray-300 hover:border-[#B98135]'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Main Showcase Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography & CTA */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-[1.15] mb-6">
              METABOLIC.<br />
              PERFORMANCE.<br />
              <span className="text-[#B98135]">REDEFINED.</span>
            </h1>

            <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8 max-w-xl">
              Retatrutide is a multi-agonist peptide designed to regulate appetite, preserve lean mass, and maximize metabolic efficiency.
            </p>

            <button className="px-8 py-4 border border-[#B98135] hover:bg-[#B98135]/10 text-white text-xs md:text-sm font-medium tracking-[0.15em] rounded-[4px] flex items-center gap-2 transition-all duration-300 cursor-pointer">
              EXPLORE ALL CORE PRODUCTS <ArrowUpRight size={16} strokeWidth={2} />
            </button>

          </div>

          {/* Right Column: Product Image Preview */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#B98135]/10 rounded-full blur-3xl"></div>
              
              <Image 
                src="/dummy-vial.png" 
                alt="Retatrutide Product Vial"
                fill
                className="object-contain relative z-10"
              />
            </div>
          </div>

        </div>

        {/* Bottom Highlights Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 mt-12 border-t border-white/10">
          {highlights.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-black/40 border border-white/5 p-4 rounded-lg">
              <div className="w-10 h-10 rounded border border-white/10 bg-black flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <span className="text-white text-xs md:text-sm font-medium tracking-wider uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}