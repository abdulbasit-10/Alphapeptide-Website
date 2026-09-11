// components/SupportInfoBar/SupportInfoBar.tsx
import { Truck, Headphones, FileText } from 'lucide-react';

export default function SupportInfoBar() {
  return (
    <div className="relative w-full">
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1000 200"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="cardBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#151a22" />
            <stop offset="100%" stopColor="#0a0d12" />
          </linearGradient>
        </defs>
        <polygon
          points="35,0 1000,0 965,200 0,200"
          fill="url(#cardBg)"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 p-8">
        <div className="flex items-center gap-4 pt-4 md:pt-0 first:pt-0 px-5">
          <Truck size={32} strokeWidth={1.5} className="text-white shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-white mb-0.5">Same-day Shipping Mon - Fri</h4>
            <p className="text-[11px] text-gray-500">(Before 1pm EST)</p>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-6 md:pt-0 md:pl-8">
          <Headphones size={32} strokeWidth={1.5} className="text-white shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-white mb-0.5">Responsive Support</h4>
            <p className="text-[11px] text-gray-500">(Questions answered by real people)</p>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-6 md:pt-0 md:pl-8">
          <FileText size={32} strokeWidth={1.5} className="text-white shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-white mb-0.5">View Lab Results</h4>
            <p className="text-[11px] text-gray-500">(Tested. Verified. Transparent.)</p>
          </div>
        </div>
      </div>
    </div>
  );
}