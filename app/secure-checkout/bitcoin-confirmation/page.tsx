'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Navbar from '../../../components/Navbar/Navbar'; 
import Footer from '../../../components/Footer/Footer'; 
import CheckoutHero from '@/components/Checkout/CheckoutHero';

export default function BitcoinConfirmationPage() {
  const [copied, setCopied] = useState(false);

  const transactionId = 'a3f2...9d7e';
  const fullTxId = 'a3f28912c9041289104820d9d7e';

  const handleCopyTx = () => {
    navigator.clipboard.writeText(fullTxId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans flex flex-col">
     

      {/* Reusable Checkout Hero Component (Set to Step 4: Confirmation) */}
      <CheckoutHero currentStep={4} />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1240px] mx-auto px-4 md:px-12 py-12 flex flex-col items-center justify-center">
        
        {/* Custom Hero Heading */}
        <div className="text-center mb-10 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white uppercase mb-2">
            Payment <span className="text-[#B98135]">Detected</span>
          </h2>
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-lg mx-auto">
            Your Bitcoin payment has been received and is now being confirmed on the blockchain.
          </p>
        </div>

        {/* Order Details Table Box */}
        <div className="w-full max-w-[680px] bg-[#070707] border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl mb-6">
          <div className="space-y-4 text-xs md:text-sm">
            
            {/* Order Number */}
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <span className="text-gray-400 font-medium">Order Number</span>
              <span className="text-white font-semibold tracking-wider">#1042</span>
            </div>

            {/* Amount */}
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <span className="text-gray-400 font-medium">Amount</span>
              <span className="text-white font-semibold">0.00296452 BTC</span>
            </div>

            {/* Transaction ID */}
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <span className="text-gray-400 font-medium">Transaction ID</span>
              <div className="flex items-center gap-2">
                <span className="text-white font-mono">{transactionId}</span>
                <button 
                  onClick={handleCopyTx}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Transaction ID"
                >
                  {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Status */}
            <div className="flex justify-between items-center pt-1">
              <span className="text-gray-400 font-medium">Status</span>
              <span className="text-[#B98135] font-bold">Confirming Payment</span>
            </div>

          </div>
        </div>

        {/* Note Box */}
        <div className="w-full max-w-[680px] bg-[#070707] border border-[#B98135]/40 rounded-xl p-6 shadow-lg text-left">
          <h4 className="text-xs md:text-sm font-bold text-[#B98135] uppercase tracking-wider mb-3">
            Note:
          </h4>
          <ul className="space-y-2 text-[11px] md:text-xs text-gray-300 leading-relaxed list-disc list-inside">
            <li>
              Bitcoin payments are typically confirmed within a few minutes. We'll automatically update your order once the payment is confirmed and send you an email with your order details and confirmation.
            </li>
            <li>
              If you have any questions, or would like to make changes before your order has been shipped, please email{' '}
              <a href="mailto:orders@alphapeptide.ca" className="text-[#B98135] font-semibold underline hover:text-white transition-colors">
                orders@alphapeptide.ca
              </a>
            </li>
          </ul>
        </div>

      </main>

      <Footer />
    </div>
  );
}