import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { User, FileText, Upload, Image as ImageIcon, ChevronRight, ChevronLeft, Check } from 'lucide-react';

export default function Wizard() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { memorialDraft, setMemorialDraft } = useStore();

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));
  const handleFinish = () => {
    navigate('/checkout');
  };

  return (
    <div className="max-w-2xl mx-auto animate-fade-in pb-20 pt-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-serif text-brand-dark mb-2 font-bold">Create a Memorial</h1>
        <p className="text-gray-600">Step {step} of 3</p>
        
        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-2 mt-6 max-w-xs mx-auto">
          <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-brand-green' : 'bg-gray-200'}`}></div>
          <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-brand-green' : 'bg-gray-200'}`}></div>
          <div className={`h-2 flex-1 rounded-full ${step >= 3 ? 'bg-brand-green' : 'bg-gray-200'}`}></div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8">
        {step === 1 && (
          <div className="animate-fade-in flex flex-col min-h-[300px]">
            <h2 className="flex items-center gap-2 text-xl font-bold font-serif text-brand-dark mb-6 border-b border-gray-100 pb-2">
              <User size={20} className="text-brand-green" /> Basic Information
            </h2>
            <div className="space-y-5 flex-1">
              <div>
                <label className="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  value={memorialDraft.fullName}
                  onChange={(e) => setMemorialDraft({ fullName: e.target.value })}
                  placeholder="e.g. Alessandro Verdi"
                  className="w-full border border-gray-200 rounded-md p-3 text-brand-dark focus:ring-1 focus:ring-brand-green focus:border-brand-green outline-none" 
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Birth Date</label>
                  <input 
                    type="date"
                    value={memorialDraft.birthDate}
                    onChange={(e) => setMemorialDraft({ birthDate: e.target.value })} 
                    className="w-full border border-gray-200 rounded-md p-3 text-gray-700 focus:ring-1 focus:ring-brand-green focus:border-brand-green outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Death Date</label>
                  <input 
                    type="date" 
                    value={memorialDraft.deathDate}
                    onChange={(e) => setMemorialDraft({ deathDate: e.target.value })}
                    className="w-full border border-gray-200 rounded-md p-3 text-gray-700 focus:ring-1 focus:ring-brand-green focus:border-brand-green outline-none" 
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in flex flex-col min-h-[300px]">
            <h2 className="flex items-center gap-2 text-xl font-bold font-serif text-brand-dark mb-6 border-b border-gray-100 pb-2">
              <FileText size={20} className="text-brand-green" /> Life Story
            </h2>
            <div className="flex-1">
               <label className="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Biography or Obituary</label>
               <textarea 
                 value={memorialDraft.biography}
                 onChange={(e) => setMemorialDraft({ biography: e.target.value })}
                 placeholder="Share their remarkable journey..."
                 className="w-full border border-gray-200 rounded-md p-4 h-48 outline-none text-gray-700 resize-none text-[15px] leading-relaxed focus:ring-1 focus:ring-brand-green focus:border-brand-green"
               ></textarea>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in flex flex-col min-h-[300px]">
            <h2 className="flex items-center gap-2 text-xl font-bold font-serif text-brand-dark mb-6 border-b border-gray-100 pb-2">
              <ImageIcon size={20} className="text-brand-green" /> Photos & Confirmation
            </h2>
            
            <div className="mb-8 flex-1">
              <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wider">Memory Gallery</label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="bg-gray-100 p-3 rounded-full mb-3">
                  <Upload size={24} className="text-gray-400" />
                </div>
                <p className="font-bold text-brand-dark cursor-pointer text-sm">Drag & drop multiple photos</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-wide mt-1">PNG, JPG up to 10MB</p>
              </div>
            </div>

            <div className="bg-brand-gray border border-gray-200 rounded-xl p-5 shadow-sm">
              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={memorialDraft.agreedToTerms}
                  onChange={(e) => setMemorialDraft({ agreedToTerms: e.target.checked })}
                  className="mt-1 w-5 h-5 rounded border-gray-300 text-brand-green focus:ring-brand-green focus:ring-offset-0 transition-colors" 
                />
                <span className="text-sm text-gray-600 leading-relaxed font-medium">
                  I confirm that I am the legal owner or have explicit authorization to install a digital memorial.
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
          <button 
            onClick={handleBack}
            className={`flex items-center gap-1 font-bold px-4 py-2.5 rounded-md transition-colors ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <ChevronLeft size={18} /> Back
          </button>
          
          {step < 3 ? (
             <button 
               onClick={handleNext}
               className="flex items-center gap-1 bg-brand-green text-white font-bold px-6 py-2.5 rounded-md hover:bg-emerald-600 transition-colors shadow-sm"
             >
               Next Step <ChevronRight size={18} />
             </button>
          ) : (
             <button 
               onClick={handleFinish}
               disabled={!memorialDraft.agreedToTerms}
               className={`flex items-center gap-1 font-bold px-6 py-2.5 rounded-md transition-all shadow-sm ${memorialDraft.agreedToTerms ? 'bg-brand-green text-white hover:bg-emerald-600' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
             >
               <Check size={18} /> Proceed
             </button>
          )}
        </div>
      </div>
    </div>
  );
}
