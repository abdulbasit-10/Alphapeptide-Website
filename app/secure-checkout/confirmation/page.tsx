'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar/Navbar'; 
import Footer from '../../../components/Footer/Footer'; 
import CheckoutHero from '@/components/Checkout/CheckoutHero';
import { useCart } from '../../../context/CartContext';

export default function OrderConfirmationPage() {
  const { subtotal } = useCart();
  
  const shippingCost = subtotal >= 350 ? 0 : 19.95;
  const totalAmount = subtotal > 0 ? (subtotal + shippingCost).toFixed(2) : "115.00";

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans flex flex-col">
      

      {/* Reusable Checkout Hero (Set to Step 4: Confirmation) */}
      <CheckoutHero currentStep={4} />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1240px] mx-auto px-4 md:px-12 py-12 flex flex-col items-center justify-center">
        
        {/* Custom Hero Subheading */}
        <div className="text-center mb-10 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white uppercase mb-2">
            ORDER RECEIVED
          </h2>
          <h3 className="text-xl md:text-3xl font-bold tracking-tight text-[#B98135] uppercase mb-4">
            AWAITING PAYMENT
          </h3>
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-lg mx-auto">
            Thank you for your order. We're currently waiting to receive your Interac e-Transfer payment.
          </p>
        </div>

        {/* Order Details Table Box */}
        <div className="w-full max-w-[680px] bg-[#070707] border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl mb-6">
          <div className="space-y-4 text-xs md:text-sm">
            
            {/* Order Number */}
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <span className="text-gray-400 font-medium">Order Number</span>
              <span className="text-white font-semibold tracking-wider">AAP1008</span>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <span className="text-gray-400 font-medium">Total</span>
              <span className="text-white font-semibold">${totalAmount} CAD</span>
            </div>

            {/* Payment Method */}
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <span className="text-gray-400 font-medium">Payment Method</span>
              <span className="text-white font-semibold">Interac e-Transfer</span>
            </div>

            {/* Status */}
            <div className="flex justify-between items-center pt-1">
              <span className="text-gray-400 font-medium">Status</span>
              <span className="text-[#B98135] font-bold">On Hold - Awaiting Payment</span>
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
              Once payment is received, your order will be processed automatically and you'll receive an email confirmation.
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