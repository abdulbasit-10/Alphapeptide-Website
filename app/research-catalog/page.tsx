'use client';
import ShopHero from '../../components/ShopHero/ShopHero';
import ShopGrid from '../../components/ShopGrid/ShopGrid';
import SupportInfoBar from '../../components/SupportInfoBar/SupportInfoBar';
import Footer from '../../components/Footer/Footer';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col pb-12">
      <ShopHero />
      {/* ProductGrid goes here next, using the selected category */}
      <ShopGrid />
      <div className='px-12 pb-10'>
        <SupportInfoBar />
      </div>
      <Footer />
    </div>
  );
}
