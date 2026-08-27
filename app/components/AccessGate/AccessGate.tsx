'use client';

import { useRouter } from 'next/navigation';
import { ShieldCheck, FileText, Flower2 } from 'lucide-react';

export default function AccessGate() {
  const router = useRouter();

  const handleEnterSite = () => {
    router.push('/home');
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center text-white px-4 bg-black overflow-hidden">
      {/* Background video — swap src with your real animation later */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        poster="/earth-bg.jpg"
      >
        <source src="https://youtube.com/shorts/uZtyTv6DLnM?si=cbti6iB4s7Gi1rj2" type="video/mp4" />
      </video>

      {/* Dark overlay so text stays readable over the video */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto py-5">

        {/* Logo mark */}
        <div className="mb-5 flex flex-col items-center">
          <svg width="56" height="56" viewBox="0 0 100 100" className="mb-4">
            <defs>
              <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e5e7eb" />
                <stop offset="50%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#4b5563" />
              </linearGradient>
            </defs>
            <polygon points="50,5 80,22 80,55 50,72 20,55 20,22" fill="url(#hexGradient)" opacity="0.95" />
            <polygon points="25,45 55,62 55,95 25,78 25,45" fill="url(#hexGradient)" opacity="0.85" />
            <polygon points="75,45 45,62 45,95 75,78 75,45" fill="url(#hexGradient)" opacity="0.75" />
          </svg>
          <div className="text-3xl md:text-3xl font-bold tracking-[0.25em]">ALPHA</div>
          <div className="text-lg md:text-xl font-light tracking-[0.4em] text-gray-300 mt-1">
            PEPTIDE
          </div>
        </div>

        <p className="text-xs text-gray-400 tracking-[0.2em] uppercase mb-7">
          Research Use Only • 19+
        </p>

        {/* Heading */}
        <h1 className="text-3xl md:text-6xl font-semibold tracking-wide mb-5">
          CONFIRM YOUR ACCESS
        </h1>

        {/* Disclaimer Text */}
        <div className="text-sm md:text-base text-gray-300 space-y-1 mb-8 font-light leading-relaxed">
          <p>
            You must be of legal age in your province and a qualified research professional.<br />
            All products are for in vitro laboratory research only — not for human or animal consumption.
          </p>
          <p>
            By entering you confirm you are 19+ and accessing this site in a qualified research capacity.<br />
            Products are not intended for personal, therapeutic, or clinical use.
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={handleEnterSite}
          className="px-12 py-3 bg-black/60 border border-[#a08a5c] rounded-md text-sm tracking-widest hover:bg-[#a08a5c]/10 hover:border-[#c4ac7a] transition-all duration-300 mb-16 uppercase font-medium"
        >
          I Agree &amp; Enter Site
        </button>

        {/* Footer Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-16 text-xs tracking-widest text-gray-400 uppercase">
          <div className="flex items-center gap-2">
            <Flower2 className="w-5 h-5" />
            <span>Canadian</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            <span>Third-Party Tested</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            <span>COA Available</span>
          </div>
        </div>

      </div>
    </div>
  );
}