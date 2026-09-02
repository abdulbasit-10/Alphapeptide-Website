// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useCart } from '../../context/CartContext';
// import { Lock, CreditCard, Wallet, ArrowRight } from 'lucide-react';

// export default function CheckoutPage() {
//   const { cartItems, subtotal } = useCart();
//   const [shippingMethod, setShippingMethod] = useState<'free' | 'flat'>('free');
//   const shippingCost = shippingMethod === 'flat' ? 20.00 : 0.00;
//   const estimatedTotal = subtotal + shippingCost;

//   return (
//     <div className="min-h-screen bg-[#030303] text-white flex flex-col">
      
//       {/* Breadcrumb & Header Banner */}
//       <div className="relative w-full py-16 px-6 md:px-12 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#030303]">
//         <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700/20 via-transparent to-transparent"></div>
//         <div className="max-w-[1440px] mx-auto relative z-10">
//           <div className="text-xs text-gray-400 mb-2 flex items-center gap-2">
//             <Link href="/" className="hover:text-[#B98135]">Home</Link>
//             <span>/</span>
//             <span className="text-[#B98135]">Checkout</span>
//           </div>
//           <h1 className="text-3xl md:text-5xl font-semibold tracking-wide mb-3">Secure Checkout</h1>
//           <p className="text-gray-400 text-sm md:text-base max-w-xl">
//             Complete your order securely and review your details before proceeding with payment.
//           </p>
//         </div>
//       </div>

//       {/* Main Content: Two Columns */}
//       <div className="flex-1 max-w-[1440px] w-full mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
//         {/* LEFT COLUMN: Billing Details Form */}
//         <div className="lg:col-span-7 space-y-8">
//           <div className="bg-[#070707] border border-white/10 rounded-xl p-6 md:p-8">
//             <h2 className="text-lg font-medium text-[#B98135] tracking-widest uppercase mb-6">
//               Billing Details
//             </h2>

//             <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 <div>
//                   <label className="block text-xs font-medium text-gray-300 mb-2">First Name*</label>
//                   <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" required />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-medium text-gray-300 mb-2">Last Name*</label>
//                   <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" required />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs font-medium text-gray-300 mb-2">Username*</label>
//                 <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" required />
//               </div>

//               <div>
//                 <label className="block text-xs font-medium text-gray-300 mb-2">Email Address*</label>
//                 <input type="email" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" required />
//               </div>

//               <div>
//                 <label className="block text-xs font-medium text-gray-300 mb-2">Country / Region*</label>
//                 <select className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors">
//                   <option value="Canada">Canada</option>
//                   <option value="United States">United States</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-xs font-medium text-gray-300 mb-2">Street Address*</label>
//                 <input type="text" placeholder="House number and street name" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" required />
//               </div>

//               <div>
//                 <label className="block text-xs font-medium text-gray-300 mb-2">Town / City*</label>
//                 <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" required />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 <div>
//                   <label className="block text-xs font-medium text-gray-300 mb-2">Province*</label>
//                   <select className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors">
//                     <option value="">Select Province</option>
//                     <option value="ON">Ontario</option>
//                     <option value="BC">British Columbia</option>
//                     <option value="AB">Alberta</option>
//                     <option value="QC">Quebec</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-xs font-medium text-gray-300 mb-2">Postal Code*</label>
//                   <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" required />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs font-medium text-gray-300 mb-2">Phone (optional)</label>
//                 <input type="tel" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none transition-colors" />
//               </div>

//               <div className="flex items-center gap-2 pt-2">
//                 <input type="checkbox" id="diff-address" className="accent-[#B98135] w-4 h-4 rounded cursor-pointer" />
//                 <label htmlFor="diff-address" className="text-sm text-gray-300 cursor-pointer">Ship to a different address?</label>
//               </div>

//               {/* Coupon Box */}
//               <div className="pt-4 flex gap-3">
//                 <input type="text" placeholder="Coupon code" className="flex-1 bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#B98135] focus:outline-none" />
//                 <button type="button" className="px-6 py-3 bg-gradient-to-r from-[#94590D] to-[#B77D33] text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:opacity-90 transition-opacity">
//                   Apply Coupon
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: Order Summary & Shipment */}
//         <div className="lg:col-span-5 space-y-6">
//           <div className="bg-[#070707] border border-white/10 rounded-xl p-6 md:p-8 space-y-6">
//             <h2 className="text-lg font-medium tracking-wide border-b border-white/10 pb-4">Your Order</h2>

//             {/* Optional Order Note */}
//             <div>
//               <label className="block text-xs font-medium text-gray-400 mb-2">Add Order Note (Optional)</label>
//               <textarea rows={3} placeholder="Notes about your order, e.g. special notes for delivery." className="w-full bg-black border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#B98135] focus:outline-none"></textarea>
//             </div>

//             {/* Subtotal breakdown */}
//             <div className="space-y-3 text-sm border-b border-white/10 pb-4">
//               <div className="flex justify-between text-gray-400 text-xs">
//                 <span>Product</span>
//                 <span>Subtotal</span>
//               </div>
//               {cartItems.map((item) => (
//                 <div key={item.id} className="flex justify-between items-center">
//                   <span className="text-gray-300 text-xs">{item.name} × {item.quantity}</span>
//                   <span className="font-medium text-white">${(item.price * item.quantity).toFixed(2)}</span>
//                 </div>
//               ))}
//               <div className="flex justify-between pt-2">
//                 <span className="text-gray-400">Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)} items)</span>
//                 <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
//               </div>
//             </div>

//             {/* Shipment Options */}
//             <div className="space-y-3 border-b border-white/10 pb-6">
//               <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Shipment</span>
              
//               <label className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${shippingMethod === 'free' ? 'border-[#B98135] bg-[#0a0a0a]' : 'border-white/10 bg-black'}`}>
//                 <input 
//                   type="radio" 
//                   name="shipping" 
//                   checked={shippingMethod === 'free'} 
//                   onChange={() => setShippingMethod('free')} 
//                   className="mt-1 accent-[#B98135]" 
//                 />
//                 <div className="flex-1 text-xs">
//                   <div className="font-medium text-white mb-0.5">Free Shipping</div>
//                   <div className="text-gray-400">Shipped out next business day</div>
//                 </div>
//               </label>

//               <label className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${shippingMethod === 'flat' ? 'border-[#B98135] bg-[#0a0a0a]' : 'border-white/10 bg-black'}`}>
//                 <input 
//                   type="radio" 
//                   name="shipping" 
//                   checked={shippingMethod === 'flat'} 
//                   onChange={() => setShippingMethod('flat')} 
//                   className="mt-1 accent-[#B98135]" 
//                 />
//                 <div className="flex-1 text-xs">
//                   <div className="font-medium text-white mb-0.5">Flat rate ($20.00)</div>
//                   <div className="text-gray-400">Shipped out next business day: $20.00</div>
//                 </div>
//               </label>
//             </div>

//             {/* Estimated Total */}
//             <div className="flex justify-between items-center text-base font-semibold pt-1">
//               <span className="text-gray-300">Estimated Total</span>
//               <span className="text-xl text-[#B98135]">${estimatedTotal.toFixed(2)}</span>
//             </div>

//             {/* Secure Payment Box */}
//             <div className="bg-black border border-white/10 rounded-lg p-4 space-y-3">
//               <div className="flex items-center gap-2 text-xs font-medium text-gray-300">
//                 <Lock size={14} className="text-[#B98135]" />
//                 <span>Secure Payment</span>
//               </div>
//               <p className="text-[11px] text-gray-400 leading-relaxed">
//                 Your payment information is safe and encrypted.
//               </p>
//               <div className="flex items-center gap-3 pt-1">
//                 <div className="h-8 px-3 bg-neutral-900 border border-white/10 rounded flex items-center justify-center">
//                   <CreditCard size={18} className="text-gray-300" />
//                 </div>
//                 <div className="h-8 px-3 bg-neutral-900 border border-white/10 rounded flex items-center justify-center text-[10px] font-bold text-amber-500">
//                   ₿ BTC
//                 </div>
//                 <div className="h-8 px-3 bg-neutral-900 border border-white/10 rounded flex items-center justify-center text-[10px] font-medium text-gray-300">
//                   e-Transfer
//                 </div>
//               </div>
//             </div>

//             {/* Proceed Button */}
//             <button className="w-full py-4 bg-gradient-to-r from-[#94590D] to-[#B77D33] hover:opacity-90 text-white text-xs font-semibold tracking-[0.2em] rounded-lg uppercase flex items-center justify-center gap-2 transition-all cursor-pointer">
//               <Lock size={14} /> Proceed To Secure Checkout
//             </button>

//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }