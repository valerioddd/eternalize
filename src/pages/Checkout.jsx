import { Check } from 'lucide-react';

export default function Checkout() {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in pb-20 pt-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif text-brand-dark mb-2 font-bold">Select a Memorial variant</h1>
        <p className="text-gray-600">Choose the physical marker that will link to your digital memorial space.</p>
      </div>

      <div className="space-y-4 mb-8">
        {/* Option 1 */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <div className="flex-1 text-center md:text-left w-full">
            <h3 className="text-xl font-serif font-bold text-brand-dark mb-1">Adhesive Sticker</h3>
            <p className="text-brand-green font-bold text-lg mb-2">€29</p>
            <p className="text-gray-500 text-sm mb-4">Weatherproof vinyl with QR code.</p>
            <button className="bg-brand-light text-brand-green font-medium px-6 py-2 rounded-md hover:bg-[#bbf7d0] transition-colors w-full md:w-auto">Select</button>
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 bg-[#F3CDB0] rounded-lg flex items-center justify-center shrink-0">
             <div className="w-16 h-16 bg-white p-1 rounded-sm shadow-sm opacity-90 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-black/80 m-1 rounded-sm"></div>
                <div className="w-[8px] h-[8px] bg-black absolute top-2 left-2"></div>
                <div className="w-[8px] h-[8px] bg-black absolute top-2 right-2"></div>
                <div className="w-[8px] h-[8px] bg-black absolute bottom-2 left-2"></div>
             </div>
          </div>
        </div>

        {/* Option 2 */}
        <div className="bg-white border-2 border-brand-green rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 shadow-md relative">
          <div className="absolute -top-3 right-6 bg-brand-green text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm">Most Popular</div>
          <div className="flex-1 text-center md:text-left w-full">
            <h3 className="text-xl font-serif font-bold text-brand-dark mb-1">Brushed Aluminum</h3>
            <p className="text-brand-green font-bold text-lg mb-2">€79</p>
            <p className="text-gray-500 text-sm mb-4">Durable metal plate with laser etching.</p>
            <button className="bg-brand-green text-white font-medium px-6 py-2 rounded-md hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 w-full md:w-auto">
              <Check size={18} /> Selected
            </button>
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center shrink-0 shadow-inner overflow-hidden relative border border-gray-800">
            <div className="absolute inset-2 md:inset-4 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-sm shadow-md flex items-center justify-center relative">
              <p className="text-[5px] md:text-[6px] text-center text-gray-800 font-serif leading-tight opacity-70 uppercase font-medium">In loving memory of<br/>a beautiful soul</p>
              <div className="absolute top-1 left-1 md:top-2 md:left-2 w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-gray-600 shadow-inner"></div>
              <div className="absolute top-1 right-1 md:top-2 md:right-2 w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-gray-600 shadow-inner"></div>
              <div className="absolute bottom-1 left-1 md:bottom-2 md:left-2 w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-gray-600 shadow-inner"></div>
              <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-gray-600 shadow-inner"></div>
            </div>
          </div>
        </div>

        {/* Option 3 */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <div className="flex-1 text-center md:text-left w-full">
            <h3 className="text-xl font-serif font-bold text-brand-dark mb-1">Italian Porcelain</h3>
            <p className="text-brand-green font-bold text-lg mb-2">€149</p>
            <p className="text-gray-500 text-sm mb-4">Handcrafted ceramic for timeless durability.</p>
            <button className="bg-brand-light text-brand-green font-medium px-6 py-2 rounded-md hover:bg-[#bbf7d0] transition-colors w-full md:w-auto">Select</button>
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 shadow-inner">
             <div className="w-24 h-24 bg-gradient-to-br from-white to-gray-200 rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                <div className="w-20 h-20 rounded-full border border-white opacity-80 shadow-sm flex items-center justify-center">
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Checkout form */}
      <div className="bg-brand-gray border border-gray-200 rounded-xl p-6 shadow-sm">
        <label className="flex items-start gap-3 cursor-pointer mb-8">
          <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300 text-brand-green focus:ring-brand-green focus:ring-offset-0 transition-colors" />
          <span className="text-sm text-gray-600 leading-relaxed">
            I confirm that I am the legal owner or have explicit authorization to install a physical marker at the designated memorial site. I agree to the <a href="#" className="text-brand-green underline decoration-brand-green/30 hover:decoration-brand-green">Digital Memorial Terms of Service</a>.
          </span>
        </label>
        
        <div className="space-y-4">
          <button className="w-full bg-[#635BFF] text-white font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 flex items-center justify-center gap-2 transition-opacity focus:ring-4 focus:ring-[#635BFF]/30">
            Pay with Stripe
          </button>
          <button className="w-full bg-[#FFC439] text-[#003087] py-3 px-4 rounded-lg hover:bg-opacity-90 flex items-center justify-center transition-opacity focus:ring-4 focus:ring-[#FFC439]/30">
            <span className="font-serif italic font-black text-[22px] tracking-tight pr-1">Pay</span><span className="font-serif italic font-black text-[22px] tracking-tight text-[#0079C1]">Pal</span>
          </button>
        </div>
        <p className="text-center text-[10px] text-gray-400 mt-6 tracking-widest uppercase font-medium">Secure Encrypted Checkout</p>
      </div>
    </div>
  );
}
